// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
chart.controls.format = (function chart$controls$format(var_args){
var args__22873__auto__ = [];
var len__22866__auto___25631 = arguments.length;
var i__22867__auto___25632 = (0);
while(true){
if((i__22867__auto___25632 < len__22866__auto___25631)){
args__22873__auto__.push((arguments[i__22867__auto___25632]));

var G__25633 = (i__22867__auto___25632 + (1));
i__22867__auto___25632 = G__25633;
continue;
} else {
}
break;
}

var argseq__22874__auto__ = ((((1) < args__22873__auto__.length))?(new cljs.core.IndexedSeq(args__22873__auto__.slice((1)),(0),null)):null);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22874__auto__);
});

chart.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.controls.format.cljs$lang$maxFixedArity = (1);

chart.controls.format.cljs$lang$applyTo = (function (seq25629){
var G__25630 = cljs.core.first.call(null,seq25629);
var seq25629__$1 = cljs.core.next.call(null,seq25629);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__25630,seq25629__$1);
});

chart.controls.by_id = (function chart$controls$by_id(id){
return document.getElementById(id);
});
chart.controls.set_html_BANG_ = (function chart$controls$set_html_BANG_(id,msg){
return chart.controls.by_id.call(null,id).innerHTML = msg;
});
chart.controls.mouse_move = (function chart$controls$mouse_move(lat,lng){
return chart.controls.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(chart.controls.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(chart.controls.format.call(null,"%.4f",lng))].join(''));
});
chart.controls.show_chart_controls = (function chart$controls$show_chart_controls(){
chart.controls.set_html_BANG_.call(null,"commands-header","<h4>Commands</h4>");

return chart.controls.set_html_BANG_.call(null,"commands","<select onchange='javascript:chart.client.command(this.value)'>\n   <option value='commands'>Commands</option>\n   <option value='watch-visible'>Watch visible area</option>\n   <option value='intersect'>Intersections</option>\n   <option value='move-to'>Move to Airport</option>\n   <option value='schedule'>Schedule Flight</option>\n   <option value='wikipedia'>Wikipedia</option>\n   <option value='clear'>Clear</option>\n   </select>");
});

//# sourceMappingURL=controls.js.map