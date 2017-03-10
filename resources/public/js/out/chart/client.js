// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('ask.master');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__60352 = response;
var map__60352__$1 = ((((!((map__60352 == null)))?((((map__60352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60352):map__60352);
var status = cljs.core.get.call(null,map__60352__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__60352__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_60360 = cljs.core.deref.call(null,vmp);
var mrk_60361 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_60360);
var vec__60357_60362 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_60360);
var lat_60363 = cljs.core.nth.call(null,vec__60357_60362,(0),null);
var lon_60364 = cljs.core.nth.call(null,vec__60357_60362,(1),null);
var pos_60365 = (new L.LatLng(lat_60363,lon_60364));
mrk_60361.setLatLng(pos_60365);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__60370_60374 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__60371_60375 = null;
var count__60372_60376 = (0);
var i__60373_60377 = (0);
while(true){
if((i__60373_60377 < count__60372_60376)){
var veh_60378 = cljs.core._nth.call(null,chunk__60371_60375,i__60373_60377);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_60378)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_60378)));

var G__60379 = seq__60370_60374;
var G__60380 = chunk__60371_60375;
var G__60381 = count__60372_60376;
var G__60382 = (i__60373_60377 + (1));
seq__60370_60374 = G__60379;
chunk__60371_60375 = G__60380;
count__60372_60376 = G__60381;
i__60373_60377 = G__60382;
continue;
} else {
var temp__4657__auto___60383 = cljs.core.seq.call(null,seq__60370_60374);
if(temp__4657__auto___60383){
var seq__60370_60384__$1 = temp__4657__auto___60383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60370_60384__$1)){
var c__47945__auto___60385 = cljs.core.chunk_first.call(null,seq__60370_60384__$1);
var G__60386 = cljs.core.chunk_rest.call(null,seq__60370_60384__$1);
var G__60387 = c__47945__auto___60385;
var G__60388 = cljs.core.count.call(null,c__47945__auto___60385);
var G__60389 = (0);
seq__60370_60374 = G__60386;
chunk__60371_60375 = G__60387;
count__60372_60376 = G__60388;
i__60373_60377 = G__60389;
continue;
} else {
var veh_60390 = cljs.core.first.call(null,seq__60370_60384__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_60390)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_60390)));

var G__60391 = cljs.core.next.call(null,seq__60370_60384__$1);
var G__60392 = null;
var G__60393 = (0);
var G__60394 = (0);
seq__60370_60374 = G__60391;
chunk__60371_60375 = G__60392;
count__60372_60376 = G__60393;
i__60373_60377 = G__60394;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__60399 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__60399,(0),null);
var lon = cljs.core.nth.call(null,vec__60399,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__60399,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__60399,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__60395_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__60395_SHARP_))),e.target);
});})(vec__60399,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__60399,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO) / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO)));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__47131__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__60406_60410 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__60407_60411 = null;
var count__60408_60412 = (0);
var i__60409_60413 = (0);
while(true){
if((i__60409_60413 < count__60408_60412)){
var mrk_60414 = cljs.core._nth.call(null,chunk__60407_60411,i__60409_60413);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_60414);

var G__60415 = seq__60406_60410;
var G__60416 = chunk__60407_60411;
var G__60417 = count__60408_60412;
var G__60418 = (i__60409_60413 + (1));
seq__60406_60410 = G__60415;
chunk__60407_60411 = G__60416;
count__60408_60412 = G__60417;
i__60409_60413 = G__60418;
continue;
} else {
var temp__4657__auto___60419 = cljs.core.seq.call(null,seq__60406_60410);
if(temp__4657__auto___60419){
var seq__60406_60420__$1 = temp__4657__auto___60419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60406_60420__$1)){
var c__47945__auto___60421 = cljs.core.chunk_first.call(null,seq__60406_60420__$1);
var G__60422 = cljs.core.chunk_rest.call(null,seq__60406_60420__$1);
var G__60423 = c__47945__auto___60421;
var G__60424 = cljs.core.count.call(null,c__47945__auto___60421);
var G__60425 = (0);
seq__60406_60410 = G__60422;
chunk__60407_60411 = G__60423;
count__60408_60412 = G__60424;
i__60409_60413 = G__60425;
continue;
} else {
var mrk_60426 = cljs.core.first.call(null,seq__60406_60420__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_60426);

var G__60427 = cljs.core.next.call(null,seq__60406_60420__$1);
var G__60428 = null;
var G__60429 = (0);
var G__60430 = (0);
seq__60406_60410 = G__60427;
chunk__60407_60411 = G__60428;
count__60408_60412 = G__60429;
i__60409_60413 = G__60430;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.popup = (function chart$client$popup(var_args){
var args60431 = [];
var len__48239__auto___60437 = arguments.length;
var i__48240__auto___60438 = (0);
while(true){
if((i__48240__auto___60438 < len__48239__auto___60437)){
args60431.push((arguments[i__48240__auto___60438]));

var G__60439 = (i__48240__auto___60438 + (1));
i__48240__auto___60438 = G__60439;
continue;
} else {
}
break;
}

var G__60433 = args60431.length;
switch (G__60433) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return chart.client.popup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60431.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__60434 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__60434,(0),null);
var lon = cljs.core.nth.call(null,vec__60434,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(240),(480));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(({"maxWidth": w, "maxHeight": h})).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,chart.client.CHART).addLayer(pop);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (pop){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(pop);
});})(pop))
,time);
} else {
return null;
}
});

chart.client.popup.cljs$lang$maxFixedArity = 6;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__60441_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__60441_SHARP_),cljs.core.second.call(null,p1__60441_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),points));
var pts__$1 = cljs.core.clj__GT_js.call(null,pts);
var trl = L.polyline(pts__$1,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(trl);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (ops,pts,pts__$1,trl){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(trl);
});})(ops,pts,pts__$1,trl))
,time);
} else {
return null;
}
});
chart.client.visible_map = (function chart$client$visible_map(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
chart.client.new_visible = (function chart$client$new_visible(){
var vec__60445 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__60445,(0),null);
var s = cljs.core.nth.call(null,vec__60445,(1),null);
var w = cljs.core.nth.call(null,vec__60445,(2),null);
var e = cljs.core.nth.call(null,vec__60445,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__60445,n,s,w,e,url){
return (function (response){
return null;
});})(vec__60445,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__60448,zoom){
var vec__60452 = p__60448;
var lat = cljs.core.nth.call(null,vec__60452,(0),null);
var lon = cljs.core.nth.call(null,vec__60452,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__47131__auto__ = zoom;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.deref.call(null,chart.client.CHART).getZoom();
}
})();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__60455_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__60455_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__60456_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__60456_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__60457_SHARP_){
return p1__60457_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__60458,ops){
var vec__60462 = p__60458;
var id1 = cljs.core.nth.call(null,vec__60462,(0),null);
var id2 = cljs.core.nth.call(null,vec__60462,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
});
chart.client.add_link = (function chart$client$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(options);
var del = ((typeof tmin === 'number')?(((60000) * tmin) | (0)):(30000));
var llg = chart.client.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(lnk);

lnk.bindPopup(chart.client.linkPopup.call(null,ids,options));

cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids,lnk));

if((del > (0))){
return csasync.proc.delayer.call(null,((function (ops,tmin,del,llg,lnk){
return (function (){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(lnk);

return cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids));
});})(ops,tmin,del,llg,lnk))
,del);
} else {
return null;
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__60507 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__60508 = null;
var count__60509 = (0);
var i__60510 = (0);
while(true){
if((i__60510 < count__60509)){
var map__60511 = cljs.core._nth.call(null,chunk__60508,i__60510);
var map__60511__$1 = ((((!((map__60511 == null)))?((((map__60511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60511):map__60511);
var ins = map__60511__$1;
var instruct = cljs.core.get.call(null,map__60511__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__60513_60549 = cljs.core._EQ_;
var expr__60514_60550 = instruct;
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__60514_60550))){
var map__60516_60551 = ins;
var map__60516_60552__$1 = ((((!((map__60516_60551 == null)))?((((map__60516_60551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516_60551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60516_60551):map__60516_60551);
var id_60553 = cljs.core.get.call(null,map__60516_60552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_60554 = cljs.core.get.call(null,map__60516_60552__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_60553,vehicle_60554);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__60514_60550))){
var map__60518_60555 = ins;
var map__60518_60556__$1 = ((((!((map__60518_60555 == null)))?((((map__60518_60555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60518_60555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60518_60555):map__60518_60555);
var id_60557 = cljs.core.get.call(null,map__60518_60556__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_60557);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__60514_60550))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__60514_60550))){
var map__60520_60558 = ins;
var map__60520_60559__$1 = ((((!((map__60520_60558 == null)))?((((map__60520_60558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60520_60558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60520_60558):map__60520_60558);
var id_60560 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_60561 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_60562 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_60563 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_60564 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_60565 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_60566 = cljs.core.get.call(null,map__60520_60559__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_60560)){
chart.client.popup.call(null,id_60560,html_60563,time_60564);
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = width_60565;
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = height_60566;
if(cljs.core.truth_(and__47119__auto____$1)){
var and__47119__auto____$2 = lat_60561;
if(cljs.core.truth_(and__47119__auto____$2)){
return lon_60562;
} else {
return and__47119__auto____$2;
}
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})())){
chart.client.popup.call(null,lat_60561,lon_60562,html_60563,time_60564,width_60565,height_60566);
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = lat_60561;
if(cljs.core.truth_(and__47119__auto__)){
return lon_60562;
} else {
return and__47119__auto__;
}
})())){
chart.client.popup.call(null,lat_60561,lon_60562,html_60563,time_60564);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__60514_60550))){
var map__60522_60567 = ins;
var map__60522_60568__$1 = ((((!((map__60522_60567 == null)))?((((map__60522_60567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60522_60567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60522_60567):map__60522_60567);
var id_60569 = cljs.core.get.call(null,map__60522_60568__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_60570 = cljs.core.get.call(null,map__60522_60568__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_60571 = cljs.core.get.call(null,map__60522_60568__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_60572 = cljs.core.get.call(null,map__60522_60568__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_60569,points_60570,options_60571,time_60572);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__60514_60550))){
var map__60524_60573 = ins;
var map__60524_60574__$1 = ((((!((map__60524_60573 == null)))?((((map__60524_60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60524_60573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60524_60573):map__60524_60573);
var coord_60575 = cljs.core.get.call(null,map__60524_60574__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_60576 = cljs.core.get.call(null,map__60524_60574__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
chart.client.map_center.call(null,coord_60575,zoom_60576);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__60514_60550))){
var map__60526_60577 = ins;
var map__60526_60578__$1 = ((((!((map__60526_60577 == null)))?((((map__60526_60577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60526_60577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60526_60577):map__60526_60577);
var iname_60579 = cljs.core.get.call(null,map__60526_60578__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_60580 = cljs.core.get.call(null,map__60526_60578__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_60581 = cljs.core.get.call(null,map__60526_60578__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_60582 = cljs.core.get.call(null,map__60526_60578__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_60583 = cljs.core.get.call(null,map__60526_60578__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_60579,tip_60580,lat_60581,lon_60582,feature_60583);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__60514_60550))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__60513_60549.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__60514_60550))){
var map__60528_60584 = ins;
var map__60528_60585__$1 = ((((!((map__60528_60584 == null)))?((((map__60528_60584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528_60584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60528_60584):map__60528_60584);
var ids_60586 = cljs.core.get.call(null,map__60528_60585__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_60587 = cljs.core.get.call(null,map__60528_60585__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_60586,options_60587);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__60588 = seq__60507;
var G__60589 = chunk__60508;
var G__60590 = count__60509;
var G__60591 = (i__60510 + (1));
seq__60507 = G__60588;
chunk__60508 = G__60589;
count__60509 = G__60590;
i__60510 = G__60591;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60507);
if(temp__4657__auto__){
var seq__60507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60507__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__60507__$1);
var G__60592 = cljs.core.chunk_rest.call(null,seq__60507__$1);
var G__60593 = c__47945__auto__;
var G__60594 = cljs.core.count.call(null,c__47945__auto__);
var G__60595 = (0);
seq__60507 = G__60592;
chunk__60508 = G__60593;
count__60509 = G__60594;
i__60510 = G__60595;
continue;
} else {
var map__60530 = cljs.core.first.call(null,seq__60507__$1);
var map__60530__$1 = ((((!((map__60530 == null)))?((((map__60530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60530):map__60530);
var ins = map__60530__$1;
var instruct = cljs.core.get.call(null,map__60530__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__60532_60596 = cljs.core._EQ_;
var expr__60533_60597 = instruct;
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__60533_60597))){
var map__60535_60598 = ins;
var map__60535_60599__$1 = ((((!((map__60535_60598 == null)))?((((map__60535_60598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60535_60598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60535_60598):map__60535_60598);
var id_60600 = cljs.core.get.call(null,map__60535_60599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_60601 = cljs.core.get.call(null,map__60535_60599__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_60600,vehicle_60601);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__60533_60597))){
var map__60537_60602 = ins;
var map__60537_60603__$1 = ((((!((map__60537_60602 == null)))?((((map__60537_60602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537_60602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60537_60602):map__60537_60602);
var id_60604 = cljs.core.get.call(null,map__60537_60603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_60604);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__60533_60597))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__60533_60597))){
var map__60539_60605 = ins;
var map__60539_60606__$1 = ((((!((map__60539_60605 == null)))?((((map__60539_60605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60539_60605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60539_60605):map__60539_60605);
var id_60607 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_60608 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_60609 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_60610 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_60611 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_60612 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_60613 = cljs.core.get.call(null,map__60539_60606__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_60607)){
chart.client.popup.call(null,id_60607,html_60610,time_60611);
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = width_60612;
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = height_60613;
if(cljs.core.truth_(and__47119__auto____$1)){
var and__47119__auto____$2 = lat_60608;
if(cljs.core.truth_(and__47119__auto____$2)){
return lon_60609;
} else {
return and__47119__auto____$2;
}
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})())){
chart.client.popup.call(null,lat_60608,lon_60609,html_60610,time_60611,width_60612,height_60613);
} else {
if(cljs.core.truth_((function (){var and__47119__auto__ = lat_60608;
if(cljs.core.truth_(and__47119__auto__)){
return lon_60609;
} else {
return and__47119__auto__;
}
})())){
chart.client.popup.call(null,lat_60608,lon_60609,html_60610,time_60611);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__60533_60597))){
var map__60541_60614 = ins;
var map__60541_60615__$1 = ((((!((map__60541_60614 == null)))?((((map__60541_60614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60541_60614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60541_60614):map__60541_60614);
var id_60616 = cljs.core.get.call(null,map__60541_60615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_60617 = cljs.core.get.call(null,map__60541_60615__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_60618 = cljs.core.get.call(null,map__60541_60615__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_60619 = cljs.core.get.call(null,map__60541_60615__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_60616,points_60617,options_60618,time_60619);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__60533_60597))){
var map__60543_60620 = ins;
var map__60543_60621__$1 = ((((!((map__60543_60620 == null)))?((((map__60543_60620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543_60620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60543_60620):map__60543_60620);
var coord_60622 = cljs.core.get.call(null,map__60543_60621__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_60623 = cljs.core.get.call(null,map__60543_60621__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
chart.client.map_center.call(null,coord_60622,zoom_60623);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__60533_60597))){
var map__60545_60624 = ins;
var map__60545_60625__$1 = ((((!((map__60545_60624 == null)))?((((map__60545_60624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60545_60624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60545_60624):map__60545_60624);
var iname_60626 = cljs.core.get.call(null,map__60545_60625__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_60627 = cljs.core.get.call(null,map__60545_60625__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_60628 = cljs.core.get.call(null,map__60545_60625__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_60629 = cljs.core.get.call(null,map__60545_60625__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_60630 = cljs.core.get.call(null,map__60545_60625__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_60626,tip_60627,lat_60628,lon_60629,feature_60630);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__60533_60597))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__60532_60596.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__60533_60597))){
var map__60547_60631 = ins;
var map__60547_60632__$1 = ((((!((map__60547_60631 == null)))?((((map__60547_60631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547_60631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60547_60631):map__60547_60631);
var ids_60633 = cljs.core.get.call(null,map__60547_60632__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_60634 = cljs.core.get.call(null,map__60547_60632__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_60633,options_60634);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__60635 = cljs.core.next.call(null,seq__60507__$1);
var G__60636 = null;
var G__60637 = (0);
var G__60638 = (0);
seq__60507 = G__60635;
chunk__60508 = G__60636;
count__60509 = G__60637;
i__60510 = G__60638;
continue;
}
} else {
return null;
}
}
break;
}
});
chart.client.receive_instructions = (function chart$client$receive_instructions(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.move_to = (function chart$client$move_to(var_args){
var args60640 = [];
var len__48239__auto___60643 = arguments.length;
var i__48240__auto___60644 = (0);
while(true){
if((i__48240__auto___60644 < len__48239__auto___60643)){
args60640.push((arguments[i__48240__auto___60644]));

var G__60645 = (i__48240__auto___60644 + (1));
i__48240__auto___60644 = G__60645;
continue;
} else {
}
break;
}

var G__60642 = args60640.length;
switch (G__60642) {
case 0:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60640.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__60639_SHARP_){
return chart.client.move_to.call(null,sel,p1__60639_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str("?country="),cljs.core.str(cnt),cljs.core.str("&airport="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("move-to"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args60651 = [];
var len__48239__auto___60654 = arguments.length;
var i__48240__auto___60655 = (0);
while(true){
if((i__48240__auto___60655 < len__48239__auto___60654)){
args60651.push((arguments[i__48240__auto___60655]));

var G__60656 = (i__48240__auto___60655 + (1));
i__48240__auto___60655 = G__60656;
continue;
} else {
}
break;
}

var G__60653 = args60651.length;
switch (G__60653) {
case 0:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60651.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__60647_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__60647_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__60648_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__60648_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__60649_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__60649_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__60650_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__60650_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.command = (function chart$client$command(cmd){
var pred__60661_60664 = cljs.core._EQ_;
var expr__60662_60665 = cmd;
if(cljs.core.truth_(pred__60661_60664.call(null,"commands",expr__60662_60665))){
} else {
if(cljs.core.truth_(pred__60661_60664.call(null,"watch-visible",expr__60662_60665))){
var bnd_60666 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_60667 = [cljs.core.str("?n="),cljs.core.str(bnd_60666.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_60666.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_60666.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_60666.getEast())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_60667)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__60661_60664.call(null,"move-to",expr__60662_60665))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__60661_60664.call(null,"schedule",expr__60662_60665))){
chart.client.schedule.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e60669){if((e60669 instanceof Error)){
var e_60670 = e60669;
cljs.core.println.call(null,e_60670);
} else {
throw e60669;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

m.on("zoomend",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.display_zoom.call(null,m.getZoom());
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

chart.controls.display_zoom.call(null,m.getZoom());

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("follow?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("trail?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.question = (function chart$client$question(q){
var pred__60674_60677 = cljs.core._EQ_;
var expr__60675_60678 = q;
if(cljs.core.truth_(pred__60674_60677.call(null,"questions",expr__60675_60678))){
} else {
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map