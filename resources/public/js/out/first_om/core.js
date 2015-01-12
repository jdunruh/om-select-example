// Compiled by ClojureScript 0.0-2371
goog.provide('first_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
first_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),"def",new cljs.core.Keyword(null,"speakers","speakers",-1482635163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 1! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker One",new cljs.core.Keyword(null,"company","company",-340475075),"Company A",new cljs.core.Keyword(null,"title","title",636505583),"President",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker1.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),true,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"arrow-class-0"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 2! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Two",new cljs.core.Keyword(null,"company","company",-340475075),"Company B",new cljs.core.Keyword(null,"title","title",636505583),"VP Marketing",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker2.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"arrow-class-1"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 3! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Three",new cljs.core.Keyword(null,"company","company",-340475075),"Company C",new cljs.core.Keyword(null,"title","title",636505583),"Director of Operations",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker3.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"arrow-class-2"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 4! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Four",new cljs.core.Keyword(null,"company","company",-340475075),"Company D",new cljs.core.Keyword(null,"title","title",636505583),"Supply Manager",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker4.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"arrow-class-3"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bio","bio",-331851886),"BIO 5! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",new cljs.core.Keyword(null,"name","name",1843675177),"Speaker Four",new cljs.core.Keyword(null,"company","company",-340475075),"Company E",new cljs.core.Keyword(null,"title","title",636505583),"Founder & CEO",new cljs.core.Keyword(null,"image","image",-58725096),"images/speaker5.jpg",new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261),"arrow-class-4"], null)], null)], null));
first_om.core.thumb_class = (function thumb_class(speaker){return ("thumb"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(speaker))?" selected":null)));
});
first_om.core.speaker_view = (function speaker_view(speaker,owner){if(typeof first_om.core.t19613 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t19613 = (function (owner,speaker,speaker_view,meta19614){
this.owner = owner;
this.speaker = speaker;
this.speaker_view = speaker_view;
this.meta19614 = meta19614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t19613.cljs$lang$type = true;
first_om.core.t19613.cljs$lang$ctorStr = "first-om.core/t19613";
first_om.core.t19613.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"first-om.core/t19613");
});
first_om.core.t19613.prototype.om$core$IRenderState$ = true;
first_om.core.t19613.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19616){var self__ = this;
var map__19617 = p__19616;var map__19617__$1 = ((cljs.core.seq_QMARK_.call(null,map__19617))?cljs.core.apply.call(null,cljs.core.hash_map,map__19617):map__19617);var selected_chan = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"selected-chan","selected-chan",1624399999));var index = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var this$__$1 = this;return React.DOM.div({"className": "sBox"},React.DOM.div({"onClick": ((function (this$__$1,map__19617,map__19617__$1,selected_chan,index){
return (function (e){return cljs.core.async.put_BANG_.call(null,selected_chan,cljs.core.deref.call(null,self__.speaker));
});})(this$__$1,map__19617,map__19617__$1,selected_chan,index))
, "className": first_om.core.thumb_class.call(null,self__.speaker)},React.DOM.img({"src": new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(self__.speaker)})),React.DOM.div({"className": "title"},React.DOM.div({"className": "sname"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.speaker)),React.DOM.div({"className": "scompany"},new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(self__.speaker)),React.DOM.div({"className": "stitle"},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.speaker))));
});
first_om.core.t19613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19615){var self__ = this;
var _19615__$1 = this;return self__.meta19614;
});
first_om.core.t19613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19615,meta19614__$1){var self__ = this;
var _19615__$1 = this;return (new first_om.core.t19613(self__.owner,self__.speaker,self__.speaker_view,meta19614__$1));
});
first_om.core.__GT_t19613 = (function __GT_t19613(owner__$1,speaker__$1,speaker_view__$1,meta19614){return (new first_om.core.t19613(owner__$1,speaker__$1,speaker_view__$1,meta19614));
});
}
return (new first_om.core.t19613(owner,speaker,speaker_view,null));
});
first_om.core.arrow_pos = (function arrow_pos(position){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) + ((20) * position)))+"%");
});
first_om.core.set_selected = (function set_selected(selection,item){if(cljs.core._EQ_.call(null,selection,item))
{return cljs.core.assoc_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),true);
} else
{return cljs.core.assoc_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),false);
}
});
first_om.core.speakers_view = (function speakers_view(app,owner){if(typeof first_om.core.t19646 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t19646 = (function (owner,app,speakers_view,meta19647){
this.owner = owner;
this.app = app;
this.speakers_view = speakers_view;
this.meta19647 = meta19647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t19646.cljs$lang$type = true;
first_om.core.t19646.cljs$lang$ctorStr = "first-om.core/t19646";
first_om.core.t19646.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"first-om.core/t19646");
});
first_om.core.t19646.prototype.om$core$IRenderState$ = true;
first_om.core.t19646.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19649){var self__ = this;
var map__19650 = p__19649;var map__19650__$1 = ((cljs.core.seq_QMARK_.call(null,map__19650))?cljs.core.apply.call(null,cljs.core.hash_map,map__19650):map__19650);var selected = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;return React.DOM.div({"id": "content"},React.DOM.h1(null,"Featured Conference Speakers"),cljs.core.apply.call(null,om.dom.div,{"id": "wireframe"},cljs.core.map.call(null,((function (this$__$1,map__19650,map__19650__$1,selected){
return (function (p1__19619_SHARP_){return om.core.build.call(null,first_om.core.speaker_view,p1__19619_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-chan","selected-chan",1624399999),selected], null)], null));
});})(this$__$1,map__19650,map__19650__$1,selected))
,new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.div({"id": "arrow", "className": new cljs.core.Keyword(null,"arrow-pos","arrow-pos",214138261).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app))))}),React.DOM.div({"id": "bio0"},new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"speakers","speakers",-1482635163).cljs$core$IFn$_invoke$arity$1(self__.app))))));
});
first_om.core.t19646.prototype.om$core$IWillMount$ = true;
first_om.core.t19646.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var selected = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__,selected,___$1){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__,selected,___$1){
return (function (state_19660){var state_val_19661 = (state_19660[(1)]);if((state_val_19661 === (4)))
{var inst_19653 = (state_19660[(2)]);var inst_19654 = (function (){var new_selection = inst_19653;return ((function (new_selection,inst_19653,state_val_19661,c__6421__auto__,selected,___$1){
return (function (speakers){return cljs.core.vec.call(null,cljs.core.map.call(null,((function (new_selection,inst_19653,state_val_19661,c__6421__auto__,selected,___$1){
return (function (p1__19618_SHARP_){return first_om.core.set_selected.call(null,new_selection,p1__19618_SHARP_);
});})(new_selection,inst_19653,state_val_19661,c__6421__auto__,selected,___$1))
,speakers));
});
;})(new_selection,inst_19653,state_val_19661,c__6421__auto__,selected,___$1))
})();var inst_19655 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"speakers","speakers",-1482635163),inst_19654);var state_19660__$1 = (function (){var statearr_19662 = state_19660;(statearr_19662[(7)] = inst_19655);
return statearr_19662;
})();var statearr_19663_19672 = state_19660__$1;(statearr_19663_19672[(2)] = null);
(statearr_19663_19672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19661 === (3)))
{var inst_19658 = (state_19660[(2)]);var state_19660__$1 = state_19660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19660__$1,inst_19658);
} else
{if((state_val_19661 === (2)))
{var state_19660__$1 = state_19660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19660__$1,(4),selected);
} else
{if((state_val_19661 === (1)))
{var state_19660__$1 = state_19660;var statearr_19664_19673 = state_19660__$1;(statearr_19664_19673[(2)] = null);
(statearr_19664_19673[(1)] = (2));
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
var state_machine__6407__auto____0 = (function (){var statearr_19668 = [null,null,null,null,null,null,null,null];(statearr_19668[(0)] = state_machine__6407__auto__);
(statearr_19668[(1)] = (1));
return statearr_19668;
});
var state_machine__6407__auto____1 = (function (state_19660){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_19660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e19669){if((e19669 instanceof Object))
{var ex__6410__auto__ = e19669;var statearr_19670_19674 = state_19660;(statearr_19670_19674[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19669;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19675 = state_19660;
state_19660 = G__19675;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_19660){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_19660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__,selected,___$1))
})();var state__6423__auto__ = (function (){var statearr_19671 = f__6422__auto__.call(null);(statearr_19671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_19671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__,selected,___$1))
);
return c__6421__auto__;
});
first_om.core.t19646.prototype.om$core$IInitState$ = true;
first_om.core.t19646.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.async.chan.call(null)], null);
});
first_om.core.t19646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19648){var self__ = this;
var _19648__$1 = this;return self__.meta19647;
});
first_om.core.t19646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19648,meta19647__$1){var self__ = this;
var _19648__$1 = this;return (new first_om.core.t19646(self__.owner,self__.app,self__.speakers_view,meta19647__$1));
});
first_om.core.__GT_t19646 = (function __GT_t19646(owner__$1,app__$1,speakers_view__$1,meta19647){return (new first_om.core.t19646(owner__$1,app__$1,speakers_view__$1,meta19647));
});
}
return (new first_om.core.t19646(owner,app,speakers_view,null));
});
om.core.root.call(null,first_om.core.speakers_view,first_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("body")], null));

//# sourceMappingURL=core.js.map