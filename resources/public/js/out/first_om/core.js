// Compiled by ClojureScript 0.0-2371
goog.provide('first_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
first_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"speakers","speakers",-1482635163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 1! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker One",new cljs.core.Keyword(null,"company","company",-340475075),"Company A",new cljs.core.Keyword(null,"title","title",636505583),"President",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker1.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),true,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"8%"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 2! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Two",new cljs.core.Keyword(null,"company","company",-340475075),"Compayn B",new cljs.core.Keyword(null,"title","title",636505583),"VP Marketing",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker2.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"28%"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 3! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Three",new cljs.core.Keyword(null,"company","company",-340475075),"Compayn C",new cljs.core.Keyword(null,"title","title",636505583),"Director of Operations",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker3.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"48%"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 4! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Four",new cljs.core.Keyword(null,"company","company",-340475075),"Compayn D",new cljs.core.Keyword(null,"title","title",636505583),"Supply Manager",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker4.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"68%"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 5! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Four",new cljs.core.Keyword(null,"company","company",-340475075),"Compayn E",new cljs.core.Keyword(null,"title","title",636505583),"Founder & CEO",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker5.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"88%"], null)], null)], null));
first_om.core.thumb_class = (function thumb_class(speaker){return ("thumb"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(speaker))?" selected":null)));
});
first_om.core.speaker_view = (function speaker_view(speaker,owner){if(typeof first_om.core.t27089 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t27089 = (function (owner,speaker,speaker_view,meta27090){
this.owner = owner;
this.speaker = speaker;
this.speaker_view = speaker_view;
this.meta27090 = meta27090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t27089.cljs$lang$type = true;
first_om.core.t27089.cljs$lang$ctorStr = "first-om.core/t27089";
first_om.core.t27089.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"first-om.core/t27089");
});
first_om.core.t27089.prototype.om$core$IRenderState$ = true;
first_om.core.t27089.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__27092){var self__ = this;
var map__27093 = p__27092;var map__27093__$1 = ((cljs.core.seq_QMARK_.call(null,map__27093))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);var selected_chan = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"selected-chan","selected-chan",1624399999));var index = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var this$__$1 = this;return React.DOM.div({"className": "sBox"},React.DOM.div({"onClick": ((function (this$__$1,map__27093,map__27093__$1,selected_chan,index){
return (function (e){return cljs.core.async.put_BANG_.call(null,selected_chan,cljs.core.deref.call(null,self__.speaker));
});})(this$__$1,map__27093,map__27093__$1,selected_chan,index))
, "className": first_om.core.thumb_class.call(null,self__.speaker)},React.DOM.img({"src": new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(self__.speaker)})),React.DOM.div({"className": "title"},React.DOM.div({"className": "sname"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.speaker)),React.DOM.div({"className": "scompany"},new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(self__.speaker)),React.DOM.div({"className": "stitle"},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.speaker))));
});
first_om.core.t27089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27091){var self__ = this;
var _27091__$1 = this;return self__.meta27090;
});
first_om.core.t27089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27091,meta27090__$1){var self__ = this;
var _27091__$1 = this;return (new first_om.core.t27089(self__.owner,self__.speaker,self__.speaker_view,meta27090__$1));
});
first_om.core.__GT_t27089 = (function __GT_t27089(owner__$1,speaker__$1,speaker_view__$1,meta27090){return (new first_om.core.t27089(owner__$1,speaker__$1,speaker_view__$1,meta27090));
});
}
return (new first_om.core.t27089(owner,speaker,speaker_view,null));
});
first_om.core.arrow_pos = (function arrow_pos(position){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) + ((20) * position)))+"%");
});
first_om.core.set_selected = (function set_selected(selection,item){if(cljs.core._EQ_.call(null,selection,item))
{return cljs.core.assoc_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),true);
} else
{return cljs.core.assoc_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),false);
}
});
first_om.core.speakers_view = (function speakers_view(app,owner){if(typeof first_om.core.t27122 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t27122 = (function (owner,app,speakers_view,meta27123){
this.owner = owner;
this.app = app;
this.speakers_view = speakers_view;
this.meta27123 = meta27123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t27122.cljs$lang$type = true;
first_om.core.t27122.cljs$lang$ctorStr = "first-om.core/t27122";
first_om.core.t27122.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"first-om.core/t27122");
});
first_om.core.t27122.prototype.om$core$IRenderState$ = true;
first_om.core.t27122.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__27125){var self__ = this;
var map__27126 = p__27125;var map__27126__$1 = ((cljs.core.seq_QMARK_.call(null,map__27126))?cljs.core.apply.call(null,cljs.core.hash_map,map__27126):map__27126);var selected = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;return React.DOM.div({"id": "content"},React.DOM.h1(null,"Featured Conference Speakers"),cljs.core.apply.call(null,om.dom.div,{"id": "wireframe"},cljs.core.map.call(null,((function (this$__$1,map__27126,map__27126__$1,selected){
return (function (p1__27095_SHARP_){return om.core.build.call(null,first_om.core.speaker_view,p1__27095_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-chan","selected-chan",1624399999),selected], null)], null));
});})(this$__$1,map__27126,map__27126__$1,selected))
,new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.div({"id": "arrow", "left": new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261).cljs$core$IFn$_invoke$arity$1(cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app)))}),React.DOM.div({"id": "bio0"},new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
first_om.core.t27122.prototype.om$core$IWillMount$ = true;
first_om.core.t27122.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var selected = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__,selected,___$1){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__,selected,___$1){
return (function (state_27136){var state_val_27137 = (state_27136[(1)]);if((state_val_27137 === (4)))
{var inst_27129 = (state_27136[(2)]);var inst_27130 = (function (){var new_selection = inst_27129;return ((function (new_selection,inst_27129,state_val_27137,c__6421__auto__,selected,___$1){
return (function (speakers){return cljs.core.vec.call(null,cljs.core.map.call(null,((function (new_selection,inst_27129,state_val_27137,c__6421__auto__,selected,___$1){
return (function (p1__27094_SHARP_){return first_om.core.set_selected.call(null,new_selection,p1__27094_SHARP_);
});})(new_selection,inst_27129,state_val_27137,c__6421__auto__,selected,___$1))
,speakers));
});
;})(new_selection,inst_27129,state_val_27137,c__6421__auto__,selected,___$1))
})();var inst_27131 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"speakers","speakers",-1482635163),inst_27130);var state_27136__$1 = (function (){var statearr_27138 = state_27136;(statearr_27138[(7)] = inst_27131);
return statearr_27138;
})();var statearr_27139_27148 = state_27136__$1;(statearr_27139_27148[(2)] = null);
(statearr_27139_27148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27137 === (3)))
{var inst_27134 = (state_27136[(2)]);var state_27136__$1 = state_27136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27136__$1,inst_27134);
} else
{if((state_val_27137 === (2)))
{var state_27136__$1 = state_27136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27136__$1,(4),selected);
} else
{if((state_val_27137 === (1)))
{var state_27136__$1 = state_27136;var statearr_27140_27149 = state_27136__$1;(statearr_27140_27149[(2)] = null);
(statearr_27140_27149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__6407__auto____0 = (function (){var statearr_27144 = [null,null,null,null,null,null,null,null];(statearr_27144[(0)] = state_machine__6407__auto__);
(statearr_27144[(1)] = (1));
return statearr_27144;
});
var state_machine__6407__auto____1 = (function (state_27136){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_27136);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e27145){if((e27145 instanceof Object))
{var ex__6410__auto__ = e27145;var statearr_27146_27150 = state_27136;(statearr_27146_27150[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27151 = state_27136;
state_27136 = G__27151;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_27136){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_27136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__,selected,___$1))
})();var state__6423__auto__ = (function (){var statearr_27147 = f__6422__auto__.call(null);(statearr_27147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_27147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__,selected,___$1))
);
return c__6421__auto__;
});
first_om.core.t27122.prototype.om$core$IInitState$ = true;
first_om.core.t27122.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null)], null);
});
first_om.core.t27122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27124){var self__ = this;
var _27124__$1 = this;return self__.meta27123;
});
first_om.core.t27122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27124,meta27123__$1){var self__ = this;
var _27124__$1 = this;return (new first_om.core.t27122(self__.owner,self__.app,self__.speakers_view,meta27123__$1));
});
first_om.core.__GT_t27122 = (function __GT_t27122(owner__$1,app__$1,speakers_view__$1,meta27123){return (new first_om.core.t27122(owner__$1,app__$1,speakers_view__$1,meta27123));
});
}
return (new first_om.core.t27122(owner,app,speakers_view,null));
});
om.core.root.call(null,first_om.core.speakers_view,first_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("body")], null));

//# sourceMappingURL=core.js.map