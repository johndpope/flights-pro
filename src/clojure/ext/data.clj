(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]
  [cesium.core :as cz]
  [calc.geo :as geo]
  [async.proc :as asp]
  [geo.names :as gn]
  [fr24.client :as fr24]))

(def TIO {:carrier 1000
 :camera 2222
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data 15000
 :ext-data-popup 60000})
(def WEATHER2-API "http://www.myweather2.com/developer/forecast.ashx?uac=Pyih5WakI3&output=json&query=")
(def CONTINENT {"AF" "Africa"
  "AN" "Antarctica"
  "AS" "Asia"
  "EU" "Europe"
  "NA" "North America"
  "OC" "Oceania"
  "SA" "South America"})
(defmacro with-timeout [msec & body]
  `(let [f# (future (do ~@body))
         v# (gensym)
         result# (deref f# ~msec v#)]
    (if (= v# result#)
      (do
        (println :FUTURE-CANCELLING)
        (future-cancel f#)
        (println :FUTURE-CANCELLED)
        nil)
      result#)))

(defn placemark-instruct [parmap]
  (let [{:keys [instance airport feature]} parmap]
  {:instruct :create-placemark
    :iname (or (some-> instance .getName) (some-> airport (get "iata")))
    :tip (or (some-> instance (sv "title")) (some-> airport (get "name")))
    :lat (or (some-> instance (sv "lat")) (some-> airport (get "lat")))
    :lon (or (some-> instance (sv "lng")) (some-> airport (get "lon")))
    :feature (or (some-> instance (sv "feature")) (some-> feature))}))

(defn placemark-popup-instruct [dati]
  (let [head (str "<h3>" (sv dati "title") "</h3>")
       itag (str "<img src=\"" (sv dati "thumbnailImg") "\">")
       summ (sv dati "summary")
       addr (sv dati "wikipediaUrl")
       wiki (str "<a href=\"" addr "\">" addr "</a>")
       html (str head itag "<br>" summ "<br>" wiki)]
  {:instruct :popup
    :lat (sv dati "lat")
    :lon (sv dati "lng")
    :html html
    :time (:ext-data-popup TIO)}))

(defn our-center
  ([edata]
  (apply our-center (:visible @edata)))
([n s w e]
  [(/ (+ n s) 2) (/ (+ w e) 2)]))

(defn our-radius [n s w e]
  (/ (* (- n s) 60) 2))

(defn point-out-place [edata parmap]
  (let [[n s w e] (:visible edata)
       {:keys [instance airport]} parmap
       lat (or (some-> instance (sv "lat")) (some-> airport (get "lat")))
       lon (or (some-> instance (sv "lng")) (some-> airport (get "lon")))
       nam (or (some-> instance (sv "title")) (some-> airport (get "name")))
       iata (some-> airport (get "iata"))
       txt (if airport (str nam " (" iata ")") nam)
       dis (geo/distance-nm (our-center n s w e) [lat lon])]
  (cz/point-out txt [lat lon] dis (our-radius n s w e))))

(defn gn-weather-html [lat lon n s w e]
  (let [rsp (gn/call-geonames-weather lat lon)]
  (if (and rsp (not (empty? rsp)))
    (let [lat2 	(read-string (rsp "lat"))
            lon2 	(read-string (rsp "lng"))
            [lat3 lon3 loc] (if (and (> n lat2 s) (< w lon2 e))
		[lat2 lon2 (format "%.4f %.4f" lat2 lon2)]
		[lat lon
		 (str (geo/rough-distance [lat lon] [lat2 lon2])
		       " miles to " 
		       (gn/direction (gn/bearing lat lon lat2 lon2))
		       " from here")])
            name 	(rsp "stationName")
            wcd 	(rsp "weatherCondition")
            hym 	(rsp "hymidity")
            tmp 	(rsp "temperature")
            wind 	(rsp "windDirection")
            bwnd 	(if (some? wind)
	  (let [b (+ (read-string wind) 180)] (if (> b 360) (- b 360) b)))
            win 	(if (some? bwnd)
	  (gn/direction bwnd)
	  "n/a")
            wins 	(rsp "windSpeed")
            tim 	(rsp "observationTime")
            mess	(str name " Weather Station<br>"
	  "location: " loc "<br>"
	  "observation time: " tim "<br>"
	  "weather conditions: " wcd "<br>"
	  "temperature: " tmp " Celsius<br>"
	  "hymidity: " hym "<br>"
	  "wind: " win ", " wins " Knots")]
         (str "<h3>Weather by GeoNames</h3>" mess))))
nil)

(defn w2-weather-html [lat lon n s w e]
  (letfn [(wind [w]
	(let [e (first (w "wind"))]
	  (str "Wind: " (e "dir") ", " (e "speed") " " (e "wind_unit") "<br>")))
           (weather [w]
	(str "Weather: " (w "weather_text") "<br>" (wind w)))
           (day [w] (str "Date: " (w "date") "<br>" 
	         (weather (first (w "day")))
	         "Day max temp: " (w "day_max_temp") " " (w "temp_unit") "<br>"
	         "Night min temp: " (w "night_min_temp") " " (w "temp_unit") "<br>"))]
  (let [w2 (fr24/json-web-data (str ext.data/WEATHER2-API lat "," lon))]
    (if (and w2 (not (empty? w2)))
      (let [w (first ((w2 "weather") "curren_weather"))
              f ((w2 "weather") "forecast")
              d1 (first f)
              d2 (second f)]
         (str "<h3>Weather by WEATHER2</h3>"
                "<a href='http://www.myweather2.com'>www.myweather2.com</a><br><br>"
                "<h4>Current weather</h4>"
                "Temperature: " (w "temp") " " (w "temp_unit") "<br>"
                "Pressure: " (w "pressure") "<br>"
                "Humidity: " (w "humidity") "<br>"
                (weather w) "<br>"
                "<h4>Forcast</h4>"
                (day d1) "<br>"
                (day d2)))))))

(defn pump-wiki [chn edata]
  (let [[n s w e] (:visible @edata)
       [lat lon] (our-center n s w e)
       [n0 s0 w0 e0] (:wiki-bbx @edata)]
  (if (or (> s0 lat)
           (< n0 lat)
           (< e0 lon)
           (> w0 lon))
     (invoke-later
       (let [bbi (foc "BBX" "title" "Current")
              rqi (fainst (cls-instances "BBXWiki") "Current BBXWiki Request")]
         (if (and bbi rqi)
           (do
             (ssvs bbi "wsen" (vec (map float [w s e n])))
             (ssv rqi "bbx" bbi)
             (ssvs rqi "responses" [])
             (with-timeout (:ext-data TIO)
	(wig/submit-bbx (itm rqi 0) rqi))
             (let [rr (svs rqi "responses")]
               (when (seq rr)
	(asp/pump-in chn {:instruct :clear-placemarks})
	(doseq [r rr]
	  (point-out-place @edata {:instance r})
	  (asp/pump-in chn (placemark-instruct {:instance r})))
	(vswap! edata assoc :wiki-bbx [n s w e]))))
           (println "Instance of \"Current BBXWiki Request\" not found!")))))))

(defn pump-weather [chn edata fun]
  (let [[n s w e] (:visible @edata)
        [lat lon] (our-center n s w e)
        html (or (fun lat lon n s w e)
	"Weather information unavailable!")]
    (asp/pump-in chn 
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :time (:ext-data-popup TIO)})))

(defn pump-nearest-airports [chn edata k]
  (let [ocr (our-center edata)
        nas (fr24/nearest-airports k ocr)
        dis (map #(geo/distance-nm ocr [(% "lat")(% "lon")]) nas)
        bea (map #(geo/bear-deg ocr [(% "lat")(% "lon")]) nas)
        html (str "<h3>Nearest Airports</h3>"
	(apply str (for [i (range k)]
	  (str (inc i) ". " (get (nth nas i) "name") ", "
		(get (nth nas i) "country") " ("
		(get (nth nas i) "iata") "), "
		(format "distance: %.1f" (nth dis i)) " NM, "
		"direction: " (int (nth bea i)) "<br>"))))] 
  (asp/pump-in chn 
	{:instruct :popup
	 :lat (first ocr)
	 :lon (second ocr)
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)})
  (asp/pump-in chn {:instruct :clear-placemarks})
  (doseq [apt (take k nas)]
    (point-out-place @edata {:airport apt})
    (asp/pump-in chn (placemark-instruct {:airport apt :feature "airport"})))))

(defn pump-where-we-are [chn edata]
  (let [[lat lon] (our-center edata)
        ocn (gn/call-geonames-ocean lat lon)
        pro "<html><head><meta charset=\"UTF-8\"/></meta></head>"
        hdr "<h3>Where we are?</h3>"
        html (if (= ocn "Land")
	(let [nby (gn/call-geonames-nearby lat lon)
_ (println :NBY nby)
	       gid (nby "geonameId")
	       hir (gn/call-geonames-hierarchy gid)
	       nam (nby "name")
	       cty (nby "countryName")
	       adm (nby "adminName1")
	       cnt (nby "continentCode")
	       lat1 (read-string (nby "lat"))
	       lon1 (read-string (nby "lng"))
                             dis (read-string (nby "distance"))
	       dir (gn/direction (gn/bearing lat1 lon1 lat lon))]
    (println :GID gid :HIR hir)
	   (str pro hdr "We are in " (format "%.0f" dis)
		" miles to " dir
		" from the " nam ",<br>"
		cty " (" adm "),<br>"  
		(CONTINENT cnt)))
                      (str pro hdr "We are above the " ocn))]
    (println edata)
    (println lat lon)
    (asp/pump-in chn 
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :width 600
	 :height 800
	 :time (:ext-data-popup TIO)})))
