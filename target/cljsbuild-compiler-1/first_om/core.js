// Compiled by ClojureScript 0.0-2371
goog.provide('first_om.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
first_om.core.app_state = (function (){var G__19676 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$149,"def",cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$151,"BIO 1! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$152,"Speaker One",cljs.core.constant$keyword$153,"Company A",cljs.core.constant$keyword$154,"President",cljs.core.constant$keyword$155,"images/speaker1.jpg",cljs.core.constant$keyword$149,true,cljs.core.constant$keyword$156,"arrow-class-0"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$151,"BIO 2! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$152,"Speaker Two",cljs.core.constant$keyword$153,"Company B",cljs.core.constant$keyword$154,"VP Marketing",cljs.core.constant$keyword$155,"images/speaker2.jpg",cljs.core.constant$keyword$149,false,cljs.core.constant$keyword$156,"arrow-class-1"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$151,"BIO 3! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$152,"Speaker Three",cljs.core.constant$keyword$153,"Company C",cljs.core.constant$keyword$154,"Director of Operations",cljs.core.constant$keyword$155,"images/speaker3.jpg",cljs.core.constant$keyword$149,false,cljs.core.constant$keyword$156,"arrow-class-2"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$151,"BIO 4! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$152,"Speaker Four",cljs.core.constant$keyword$153,"Company D",cljs.core.constant$keyword$154,"Supply Manager",cljs.core.constant$keyword$155,"images/speaker4.jpg",cljs.core.constant$keyword$149,false,cljs.core.constant$keyword$156,"arrow-class-3"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$151,"BIO 5! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei.",cljs.core.constant$keyword$152,"Speaker Four",cljs.core.constant$keyword$153,"Company E",cljs.core.constant$keyword$154,"Founder & CEO",cljs.core.constant$keyword$155,"images/speaker5.jpg",cljs.core.constant$keyword$149,false,cljs.core.constant$keyword$156,"arrow-class-4"], null)], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19676) : cljs.core.atom.call(null,G__19676));
})();
first_om.core.thumb_class = (function thumb_class(speaker){return ("thumb"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(speaker))?" selected":null)));
});
first_om.core.speaker_view = (function speaker_view(speaker,owner){if(typeof first_om.core.t19699 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t19699 = (function (owner,speaker,speaker_view,meta19700){
this.owner = owner;
this.speaker = speaker;
this.speaker_view = speaker_view;
this.meta19700 = meta19700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t19699.cljs$lang$type = true;
first_om.core.t19699.cljs$lang$ctorStr = "first-om.core/t19699";
first_om.core.t19699.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"first-om.core/t19699");
});
first_om.core.t19699.prototype.om$core$IRenderState$ = true;
first_om.core.t19699.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19702){var self__ = this;
var map__19703 = p__19702;var map__19703__$1 = ((cljs.core.seq_QMARK_(map__19703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19703):map__19703);var selected_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19703__$1,cljs.core.constant$keyword$157);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19703__$1,cljs.core.constant$keyword$158);var this$__$1 = this;var G__19704 = {"className": "sBox"};var G__19705 = (function (){var G__19707 = {"onClick": ((function (G__19704,this$__$1,map__19703,map__19703__$1,selected_chan,index){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(selected_chan,(function (){var G__19709 = self__.speaker;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19709) : cljs.core.deref.call(null,G__19709));
})());
});})(G__19704,this$__$1,map__19703,map__19703__$1,selected_chan,index))
, "className": first_om.core.thumb_class(self__.speaker)};var G__19708 = (function (){var G__19710 = {"src": cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(self__.speaker)};return React.DOM.img(G__19710);
})();return React.DOM.div(G__19707,G__19708);
})();var G__19706 = (function (){var G__19711 = {"className": "title"};var G__19712 = (function (){var G__19715 = {"className": "sname"};var G__19716 = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__19715,G__19716);
})();var G__19713 = (function (){var G__19717 = {"className": "scompany"};var G__19718 = cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__19717,G__19718);
})();var G__19714 = (function (){var G__19719 = {"className": "stitle"};var G__19720 = cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(self__.speaker);return React.DOM.div(G__19719,G__19720);
})();return React.DOM.div(G__19711,G__19712,G__19713,G__19714);
})();return React.DOM.div(G__19704,G__19705,G__19706);
});
first_om.core.t19699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19701){var self__ = this;
var _19701__$1 = this;return self__.meta19700;
});
first_om.core.t19699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19701,meta19700__$1){var self__ = this;
var _19701__$1 = this;return (new first_om.core.t19699(self__.owner,self__.speaker,self__.speaker_view,meta19700__$1));
});
first_om.core.__GT_t19699 = (function __GT_t19699(owner__$1,speaker__$1,speaker_view__$1,meta19700){return (new first_om.core.t19699(owner__$1,speaker__$1,speaker_view__$1,meta19700));
});
}
return (new first_om.core.t19699(owner,speaker,speaker_view,null));
});
first_om.core.arrow_pos = (function arrow_pos(position){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) + ((20) * position)))+"%");
});
first_om.core.set_selected = (function set_selected(selection,item){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection,item))
{return cljs.core.assoc_in(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149], null),true);
} else
{return cljs.core.assoc_in(item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149], null),false);
}
});
first_om.core.speakers_view = (function speakers_view(app,owner){if(typeof first_om.core.t19759 !== 'undefined')
{} else
{
/**
* @constructor
*/
first_om.core.t19759 = (function (owner,app,speakers_view,meta19760){
this.owner = owner;
this.app = app;
this.speakers_view = speakers_view;
this.meta19760 = meta19760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
first_om.core.t19759.cljs$lang$type = true;
first_om.core.t19759.cljs$lang$ctorStr = "first-om.core/t19759";
first_om.core.t19759.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"first-om.core/t19759");
});
first_om.core.t19759.prototype.om$core$IRenderState$ = true;
first_om.core.t19759.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19762){var self__ = this;
var map__19763 = p__19762;var map__19763__$1 = ((cljs.core.seq_QMARK_(map__19763))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19763):map__19763);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19763__$1,cljs.core.constant$keyword$149);var this$__$1 = this;var G__19764 = {"id": "content"};var G__19765 = (function (){var G__19769 = null;var G__19770 = "Featured Conference Speakers";return React.DOM.h1(G__19769,G__19770);
})();var G__19766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"id": "wireframe"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__19764,G__19765,this$__$1,map__19763,map__19763__$1,selected){
return (function (p1__19722_SHARP_){return om.core.build.cljs$core$IFn$_invoke$arity$3(first_om.core.speaker_view,p1__19722_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$157,selected], null)], null));
});})(G__19764,G__19765,this$__$1,map__19763,map__19763__$1,selected))
,cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(self__.app)));var G__19767 = (function (){var G__19771 = {"id": "arrow", "className": cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(self__.app))))};return React.DOM.div(G__19771);
})();var G__19768 = (function (){var G__19772 = {"id": "bio0"};var G__19773 = cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(self__.app))));return React.DOM.div(G__19772,G__19773);
})();return React.DOM.div(G__19764,G__19765,G__19766,G__19767,G__19768);
});
first_om.core.t19759.prototype.om$core$IWillMount$ = true;
first_om.core.t19759.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var selected = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$149);var c__6421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto__,selected,___$1){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__,selected,___$1){
return (function (state_19783){var state_val_19784 = (state_19783[(1)]);if((state_val_19784 === (4)))
{var inst_19776 = (state_19783[(2)]);var inst_19777 = (function (){var new_selection = inst_19776;return ((function (new_selection,inst_19776,state_val_19784,c__6421__auto__,selected,___$1){
return (function (speakers){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_selection,inst_19776,state_val_19784,c__6421__auto__,selected,___$1){
return (function (p1__19721_SHARP_){return first_om.core.set_selected(new_selection,p1__19721_SHARP_);
});})(new_selection,inst_19776,state_val_19784,c__6421__auto__,selected,___$1))
,speakers));
});
;})(new_selection,inst_19776,state_val_19784,c__6421__auto__,selected,___$1))
})();var inst_19778 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$150,inst_19777);var state_19783__$1 = (function (){var statearr_19785 = state_19783;(statearr_19785[(7)] = inst_19778);
return statearr_19785;
})();var statearr_19786_19795 = state_19783__$1;(statearr_19786_19795[(2)] = null);
(statearr_19786_19795[(1)] = (2));
return cljs.core.constant$keyword$95;
} else
{if((state_val_19784 === (3)))
{var inst_19781 = (state_19783[(2)]);var state_19783__$1 = state_19783;return cljs.core.async.impl.ioc_helpers.return_chan(state_19783__$1,inst_19781);
} else
{if((state_val_19784 === (2)))
{var state_19783__$1 = state_19783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19783__$1,(4),selected);
} else
{if((state_val_19784 === (1)))
{var state_19783__$1 = state_19783;var statearr_19787_19796 = state_19783__$1;(statearr_19787_19796[(2)] = null);
(statearr_19787_19796[(1)] = (2));
return cljs.core.constant$keyword$95;
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
var state_machine__6407__auto____0 = (function (){var statearr_19791 = [null,null,null,null,null,null,null,null];(statearr_19791[(0)] = state_machine__6407__auto__);
(statearr_19791[(1)] = (1));
return statearr_19791;
});
var state_machine__6407__auto____1 = (function (state_19783){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_19783);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$95))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e19792){if((e19792 instanceof Object))
{var ex__6410__auto__ = e19792;var statearr_19793_19797 = state_19783;(statearr_19793_19797[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19783);
return cljs.core.constant$keyword$95;
} else
{throw e19792;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$95))
{{
var G__19798 = state_19783;
state_19783 = G__19798;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_19783){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_19783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__,selected,___$1))
})();var state__6423__auto__ = (function (){var statearr_19794 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_19794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_19794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto__,selected,___$1))
);
return c__6421__auto__;
});
first_om.core.t19759.prototype.om$core$IInitState$ = true;
first_om.core.t19759.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});
first_om.core.t19759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19761){var self__ = this;
var _19761__$1 = this;return self__.meta19760;
});
first_om.core.t19759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19761,meta19760__$1){var self__ = this;
var _19761__$1 = this;return (new first_om.core.t19759(self__.owner,self__.app,self__.speakers_view,meta19760__$1));
});
first_om.core.__GT_t19759 = (function __GT_t19759(owner__$1,app__$1,speakers_view__$1,meta19760){return (new first_om.core.t19759(owner__$1,app__$1,speakers_view__$1,meta19760));
});
}
return (new first_om.core.t19759(owner,app,speakers_view,null));
});
om.core.root(first_om.core.speakers_view,first_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$146,document.getElementById("body")], null));
