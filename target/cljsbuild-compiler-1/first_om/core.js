// Compiled by ClojureScript 0.0-2371
goog.provide('first_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
first_om.core.app_state = (function (){var G__27152 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,(0),cljs.core.constant$keyword$149,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,"BIO 1! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$151,"Speaker One",cljs.core.constant$keyword$152,"Company A",cljs.core.constant$keyword$153,"President",cljs.core.constant$keyword$154,"images/speaker1.jpg",cljs.core.constant$keyword$148,true,cljs.core.constant$keyword$155,"8%"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,"BIO 2! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$151,"Speaker Two",cljs.core.constant$keyword$152,"Compayn B",cljs.core.constant$keyword$153,"VP Marketing",cljs.core.constant$keyword$154,"images/speaker2.jpg",cljs.core.constant$keyword$148,false,cljs.core.constant$keyword$155,"28%"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,"BIO 3! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$151,"Speaker Three",cljs.core.constant$keyword$152,"Compayn C",cljs.core.constant$keyword$153,"Director of Operations",cljs.core.constant$keyword$154,"images/speaker3.jpg",cljs.core.constant$keyword$148,false,cljs.core.constant$keyword$155,"48%"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,"BIO 4! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$151,"Speaker Four",cljs.core.constant$keyword$152,"Compayn D",cljs.core.constant$keyword$153,"Supply Manager",cljs.core.constant$keyword$154,"images/speaker4.jpg",cljs.core.constant$keyword$148,false,cljs.core.constant$keyword$155,"68%"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,"BIO 5! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$151,"Speaker Four",cljs.core.constant$keyword$152,"Compayn E",cljs.core.constant$keyword$153,"Founder & CEO",cljs.core.constant$keyword$154,"images/speaker5.jpg",cljs.core.constant$keyword$148,false,cljs.core.constant$keyword$155,"88%"], null)], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27152) : cljs.core.atom.call(null,G__27152));
})();
first_om.core.thumb_class = (function thumb_class(speaker){return ("thumb"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(speaker))?" selected":null)));
});
first_om.core.speaker_view = (function speaker_view(speaker,owner){if(typeof first_om.core.t27175 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t27175 = (function (owner,speaker,speaker_view,meta27176){
this.owner = owner;
this.speaker = speaker;
this.speaker_view = speaker_view;
this.meta27176 = meta27176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t27175.cljs$lang$type = true;
first_om.core.t27175.cljs$lang$ctorStr = "first-om.core/t27175";
first_om.core.t27175.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"first-om.core/t27175");
});
first_om.core.t27175.prototype.om$core$IRenderState$ = true;
first_om.core.t27175.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__27178){var self__ = this;
var map__27179 = p__27178;var map__27179__$1 = ((cljs.core.seq_QMARK_(map__27179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27179):map__27179);var selected_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27179__$1,cljs.core.constant$keyword$158);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27179__$1,cljs.core.constant$keyword$156);var this$__$1 = this;var G__27180 = {"className": "sBox"};var G__27181 = (function (){var G__27183 = {"onClick": ((function (G__27180,this$__$1,map__27179,map__27179__$1,selected_chan,index){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(selected_chan,(function (){var G__27185 = self__.speaker;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27185) : cljs.core.deref.call(null,G__27185));
})());
});})(G__27180,this$__$1,map__27179,map__27179__$1,selected_chan,index))
, "className": first_om.core.thumb_class(self__.speaker)};var G__27184 = (function (){var G__27186 = {"src": cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(self__.speaker)};return React.DOM.img(G__27186);
})();return React.DOM.div(G__27183,G__27184);
})();var G__27182 = (function (){var G__27187 = {"className": "title"};var G__27188 = (function (){var G__27191 = {"className": "sname"};var G__27192 = cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__27191,G__27192);
})();var G__27189 = (function (){var G__27193 = {"className": "scompany"};var G__27194 = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__27193,G__27194);
})();var G__27190 = (function (){var G__27195 = {"className": "stitle"};var G__27196 = cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__27195,G__27196);
})();return React.DOM.div(G__27187,G__27188,G__27189,G__27190);
})();return React.DOM.div(G__27180,G__27181,G__27182);
});
first_om.core.t27175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27177){var self__ = this;
var _27177__$1 = this;return self__.meta27176;
});
first_om.core.t27175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27177,meta27176__$1){var self__ = this;
var _27177__$1 = this;return (new first_om.core.t27175(self__.owner,self__.speaker,self__.speaker_view,meta27176__$1));
});
first_om.core.__GT_t27175 = (function __GT_t27175(owner__$1,speaker__$1,speaker_view__$1,meta27176){return (new first_om.core.t27175(owner__$1,speaker__$1,speaker_view__$1,meta27176));
});
}
return (new first_om.core.t27175(owner,speaker,speaker_view,null));
});
first_om.core.arrow_pos = (function arrow_pos(position){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) + ((20) * position)))+"%");
});
first_om.core.set_selected = (function set_selected(selection,item){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection,item))
{return cljs.core.assoc_in(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148], null),true);
} else
{return cljs.core.assoc_in(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148], null),false);
}
});
first_om.core.speakers_view = (function speakers_view(app,owner){if(typeof first_om.core.t27235 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t27235 = (function (owner,app,speakers_view,meta27236){
this.owner = owner;
this.app = app;
this.speakers_view = speakers_view;
this.meta27236 = meta27236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t27235.cljs$lang$type = true;
first_om.core.t27235.cljs$lang$ctorStr = "first-om.core/t27235";
first_om.core.t27235.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"first-om.core/t27235");
});
first_om.core.t27235.prototype.om$core$IRenderState$ = true;
first_om.core.t27235.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__27238){var self__ = this;
var map__27239 = p__27238;var map__27239__$1 = ((cljs.core.seq_QMARK_(map__27239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27239):map__27239);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27239__$1,cljs.core.constant$keyword$148);var this$__$1 = this;var G__27240 = {"id": "content"};var G__27241 = (function (){var G__27245 = null;var G__27246 = "Featured Conference Speakers";return React.DOM.h1(G__27245,G__27246);
})();var G__27242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"id": "wireframe"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__27240,G__27241,this$__$1,map__27239,map__27239__$1,selected){
return (function (p1__27198_SHARP_){return om.core.build.cljs$core$IFn$_invoke$arity$3(first_om.core.speaker_view,p1__27198_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,selected], null)], null));
});})(G__27240,G__27241,this$__$1,map__27239,map__27239__$1,selected))
,cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(self__.app)));var G__27243 = (function (){var G__27247 = {"id": "arrow", "left": cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(self__.app)))};return React.DOM.div(G__27247);
})();var G__27244 = (function (){var G__27248 = {"id": "bio0"};var G__27249 = cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(self__.app))));return React.DOM.div(G__27248,G__27249);
})();return React.DOM.div(G__27240,G__27241,G__27242,G__27243,G__27244);
});
first_om.core.t27235.prototype.om$core$IWillMount$ = true;
first_om.core.t27235.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var selected = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$148);var c__6421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto__,selected,___$1){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__,selected,___$1){
return (function (state_27259){var state_val_27260 = (state_27259[(1)]);if((state_val_27260 === (4)))
{var inst_27252 = (state_27259[(2)]);var inst_27253 = (function (){var new_selection = inst_27252;return ((function (new_selection,inst_27252,state_val_27260,c__6421__auto__,selected,___$1){
return (function (speakers){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_selection,inst_27252,state_val_27260,c__6421__auto__,selected,___$1){
return (function (p1__27197_SHARP_){return first_om.core.set_selected(new_selection,p1__27197_SHARP_);
});})(new_selection,inst_27252,state_val_27260,c__6421__auto__,selected,___$1))
,speakers));
});
;})(new_selection,inst_27252,state_val_27260,c__6421__auto__,selected,___$1))
})();var inst_27254 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$149,inst_27253);var state_27259__$1 = (function (){var statearr_27261 = state_27259;(statearr_27261[(7)] = inst_27254);
return statearr_27261;
})();var statearr_27262_27271 = state_27259__$1;(statearr_27262_27271[(2)] = null);
(statearr_27262_27271[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_27260 === (3)))
{var inst_27257 = (state_27259[(2)]);var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.return_chan(state_27259__$1,inst_27257);
} else
{if((state_val_27260 === (2)))
{var state_27259__$1 = state_27259;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27259__$1,(4),selected);
} else
{if((state_val_27260 === (1)))
{var state_27259__$1 = state_27259;var statearr_27263_27272 = state_27259__$1;(statearr_27263_27272[(2)] = null);
(statearr_27263_27272[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{return null;
}
}
}
}
});})(c__6421__auto__,selected,___$1))
;return ((function (switch__6406__auto__,c__6421__auto__,selected,___$1){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_27267 = [null,null,null,null,null,null,null,null];(statearr_27267[(0)] = state_machine__6407__auto__);
(statearr_27267[(1)] = (1));
return statearr_27267;
});
var state_machine__6407__auto____1 = (function (state_27259){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_27259);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e27268){if((e27268 instanceof Object))
{var ex__6410__auto__ = e27268;var statearr_27269_27273 = state_27259;(statearr_27269_27273[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27259);
return cljs.core.constant$keyword$94;
} else
{throw e27268;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__27274 = state_27259;
state_27259 = G__27274;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_27259){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_27259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__,selected,___$1))
})();var state__6423__auto__ = (function (){var statearr_27270 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_27270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_27270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto__,selected,___$1))
);
return c__6421__auto__;
});
first_om.core.t27235.prototype.om$core$IInitState$ = true;
first_om.core.t27235.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});
first_om.core.t27235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27237){var self__ = this;
var _27237__$1 = this;return self__.meta27236;
});
first_om.core.t27235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27237,meta27236__$1){var self__ = this;
var _27237__$1 = this;return (new first_om.core.t27235(self__.owner,self__.app,self__.speakers_view,meta27236__$1));
});
first_om.core.__GT_t27235 = (function __GT_t27235(owner__$1,app__$1,speakers_view__$1,meta27236){return (new first_om.core.t27235(owner__$1,app__$1,speakers_view__$1,meta27236));
});
}
return (new first_om.core.t27235(owner,app,speakers_view,null));
});
om.core.root(first_om.core.speakers_view,first_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,document.getElementById("body")], null));
