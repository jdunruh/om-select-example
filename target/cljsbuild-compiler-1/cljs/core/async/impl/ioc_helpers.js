// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$93);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t23724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t23724 = (function (f,fn_handler,meta23725){
this.f = f;
this.fn_handler = fn_handler;
this.meta23725 = meta23725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t23724.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t23724.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t23724";
cljs.core.async.impl.ioc_helpers.t23724.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async.impl.ioc-helpers/t23724");
});
cljs.core.async.impl.ioc_helpers.t23724.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t23724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t23724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t23724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23726){var self__ = this;
var _23726__$1 = this;return self__.meta23725;
});
cljs.core.async.impl.ioc_helpers.t23724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23726,meta23725__$1){var self__ = this;
var _23726__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t23724(self__.f,self__.fn_handler,meta23725__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t23724 = (function __GT_t23724(f__$1,fn_handler__$1,meta23725){return (new cljs.core.async.impl.ioc_helpers.t23724(f__$1,fn_handler__$1,meta23725));
});
}
return (new cljs.core.async.impl.ioc_helpers.t23724(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e23728){if((e23728 instanceof Object))
{var ex = e23728;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e23728;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_23732_23735 = state;(statearr_23732_23735[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_23732_23735[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_23733_23736 = state;(statearr_23733_23736[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23734 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23734) : cljs.core.deref.call(null,G__23734));
})());
(statearr_23733_23736[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$94;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_23740_23743 = state;(statearr_23740_23743[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_23740_23743[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_23741_23744 = state;(statearr_23741_23744[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23742 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23742) : cljs.core.deref.call(null,G__23742));
})());
(statearr_23741_23744[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$94;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23745){var map__23751 = p__23745;var map__23751__$1 = ((cljs.core.seq_QMARK_(map__23751))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23751):map__23751);var opts = map__23751__$1;var statearr_23752_23756 = state;(statearr_23752_23756[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23751,map__23751__$1,opts){
return (function (val){var statearr_23753_23757 = state;(statearr_23753_23757[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23751,map__23751__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23754_23758 = state;(statearr_23754_23758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23755 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23755) : cljs.core.deref.call(null,G__23755));
})());
return cljs.core.constant$keyword$94;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23745 = null;if (arguments.length > 3) {
  p__23745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23745);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23759){
var state = cljs.core.first(arglist__23759);
arglist__23759 = cljs.core.next(arglist__23759);
var cont_block = cljs.core.first(arglist__23759);
arglist__23759 = cljs.core.next(arglist__23759);
var ports = cljs.core.first(arglist__23759);
var p__23745 = cljs.core.rest(arglist__23759);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23745);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4181__auto__,k__4182__auto__){var self__ = this;
var this__4181__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4181__auto____$1,k__4182__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4183__auto__,k23761,else__4184__auto__){var self__ = this;
var this__4183__auto____$1 = this;var G__23763 = (((k23761 instanceof cljs.core.Keyword))?k23761.fqn:null);switch (G__23763) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23761,else__4184__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4195__auto__,writer__4196__auto__,opts__4197__auto__){var self__ = this;
var this__4195__auto____$1 = this;var pr_pair__4198__auto__ = ((function (this__4195__auto____$1){
return (function (keyval__4199__auto__){return cljs.core.pr_sequential_writer(writer__4196__auto__,cljs.core.pr_writer,""," ","",opts__4197__auto__,keyval__4199__auto__);
});})(this__4195__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4196__auto__,pr_pair__4198__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$96,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$97,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4179__auto__){var self__ = this;
var this__4179__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4175__auto__){var self__ = this;
var this__4175__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4185__auto__){var self__ = this;
var this__4185__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4176__auto__){var self__ = this;
var this__4176__auto____$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_imap(this__4176__auto____$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4177__auto__,other__4178__auto__){var self__ = this;
var this__4177__auto____$1 = this;if(cljs.core.truth_((function (){var and__3573__auto__ = other__4178__auto__;if(cljs.core.truth_(and__3573__auto__))
{return ((this__4177__auto____$1.constructor === other__4178__auto__.constructor)) && (cljs.core.equiv_map(this__4177__auto____$1,other__4178__auto__));
} else
{return and__3573__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4190__auto__,k__4191__auto__){var self__ = this;
var this__4190__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$95,null,cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$98,null], null), null),k__4191__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4190__auto____$1),self__.__meta),k__4191__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4191__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4188__auto__,k__4189__auto__,G__23760){var self__ = this;
var this__4188__auto____$1 = this;var pred__23764 = cljs.core.keyword_identical_QMARK_;var expr__23765 = k__4189__auto__;if(cljs.core.truth_((function (){var G__23767 = cljs.core.constant$keyword$95;var G__23768 = expr__23765;return (pred__23764.cljs$core$IFn$_invoke$arity$2 ? pred__23764.cljs$core$IFn$_invoke$arity$2(G__23767,G__23768) : pred__23764.call(null,G__23767,G__23768));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__23760,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__23769 = cljs.core.constant$keyword$96;var G__23770 = expr__23765;return (pred__23764.cljs$core$IFn$_invoke$arity$2 ? pred__23764.cljs$core$IFn$_invoke$arity$2(G__23769,G__23770) : pred__23764.call(null,G__23769,G__23770));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__23760,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__23771 = cljs.core.constant$keyword$97;var G__23772 = expr__23765;return (pred__23764.cljs$core$IFn$_invoke$arity$2 ? pred__23764.cljs$core$IFn$_invoke$arity$2(G__23771,G__23772) : pred__23764.call(null,G__23771,G__23772));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__23760,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__23773 = cljs.core.constant$keyword$98;var G__23774 = expr__23765;return (pred__23764.cljs$core$IFn$_invoke$arity$2 ? pred__23764.cljs$core$IFn$_invoke$arity$2(G__23773,G__23774) : pred__23764.call(null,G__23773,G__23774));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__23760,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__23775 = cljs.core.constant$keyword$99;var G__23776 = expr__23765;return (pred__23764.cljs$core$IFn$_invoke$arity$2 ? pred__23764.cljs$core$IFn$_invoke$arity$2(G__23775,G__23776) : pred__23764.call(null,G__23775,G__23776));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__23760,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4189__auto__,G__23760),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4193__auto__){var self__ = this;
var this__4193__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$96,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$97,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4180__auto__,G__23760){var self__ = this;
var this__4180__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__23760,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4186__auto__,entry__4187__auto__){var self__ = this;
var this__4186__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4187__auto__))
{return cljs.core._assoc(this__4186__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4187__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4186__auto____$1,entry__4187__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4215__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__23762){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__23762),cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__23762),cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(G__23762),cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(G__23762),cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(G__23762),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23762,cljs.core.constant$keyword$95,cljs.core.array_seq([cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_23779 = state;(statearr_23779[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_23779;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3573__auto__ = exception;if(cljs.core.truth_(and__3573__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3573__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = exception;if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = catch_block;if(cljs.core.truth_(and__3573__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})()))
{var statearr_23785 = state;(statearr_23785[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_23785[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_23785[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_23785[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$95,null,cljs.core.array_seq([cljs.core.constant$keyword$96,null], 0)));
return statearr_23785;
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = exception;if(cljs.core.truth_(and__3573__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3573__auto__;
}
})()))
{var statearr_23786_23790 = state;(statearr_23786_23790[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__23791 = state;
state = G__23791;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = exception;if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = cljs.core.not(catch_block);if(and__3573__auto____$1)
{return cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})()))
{var statearr_23787 = state;(statearr_23787[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23787[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$97,null));
return statearr_23787;
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = cljs.core.not(exception);if(and__3573__auto__)
{return cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3573__auto__;
}
})()))
{var statearr_23788 = state;(statearr_23788[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23788[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$97,null));
return statearr_23788;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_23789 = state;(statearr_23789[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23789[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_23789;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});
