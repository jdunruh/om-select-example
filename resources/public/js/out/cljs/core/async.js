// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9679 = (function (f,fn_handler,meta9680){
this.f = f;
this.fn_handler = fn_handler;
this.meta9680 = meta9680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9679.cljs$lang$type = true;
cljs.core.async.t9679.cljs$lang$ctorStr = "cljs.core.async/t9679";
cljs.core.async.t9679.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9679");
});
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9681){var self__ = this;
var _9681__$1 = this;return self__.meta9680;
});
cljs.core.async.t9679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9681,meta9680__$1){var self__ = this;
var _9681__$1 = this;return (new cljs.core.async.t9679(self__.f,self__.fn_handler,meta9680__$1));
});
cljs.core.async.__GT_t9679 = (function __GT_t9679(f__$1,fn_handler__$1,meta9680){return (new cljs.core.async.t9679(f__$1,fn_handler__$1,meta9680));
});
}
return (new cljs.core.async.t9679(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9683 = buff;if(G__9683)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__9683.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9683.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9683);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9683);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9684 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9684);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9684,ret){
return (function (){return fn1.call(null,val_9684);
});})(val_9684,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4455__auto___9685 = n;var x_9686 = (0);while(true){
if((x_9686 < n__4455__auto___9685))
{(a[x_9686] = (0));
{
var G__9687 = (x_9686 + (1));
x_9686 = G__9687;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9688 = (i + (1));
i = G__9688;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9692 = (function (flag,alt_flag,meta9693){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9693 = meta9693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9692.cljs$lang$type = true;
cljs.core.async.t9692.cljs$lang$ctorStr = "cljs.core.async/t9692";
cljs.core.async.t9692.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9692");
});})(flag))
;
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9694){var self__ = this;
var _9694__$1 = this;return self__.meta9693;
});})(flag))
;
cljs.core.async.t9692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9694,meta9693__$1){var self__ = this;
var _9694__$1 = this;return (new cljs.core.async.t9692(self__.flag,self__.alt_flag,meta9693__$1));
});})(flag))
;
cljs.core.async.__GT_t9692 = ((function (flag){
return (function __GT_t9692(flag__$1,alt_flag__$1,meta9693){return (new cljs.core.async.t9692(flag__$1,alt_flag__$1,meta9693));
});})(flag))
;
}
return (new cljs.core.async.t9692(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9698 = (function (cb,flag,alt_handler,meta9699){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9699 = meta9699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9698.cljs$lang$type = true;
cljs.core.async.t9698.cljs$lang$ctorStr = "cljs.core.async/t9698";
cljs.core.async.t9698.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9698");
});
cljs.core.async.t9698.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9700){var self__ = this;
var _9700__$1 = this;return self__.meta9699;
});
cljs.core.async.t9698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9700,meta9699__$1){var self__ = this;
var _9700__$1 = this;return (new cljs.core.async.t9698(self__.cb,self__.flag,self__.alt_handler,meta9699__$1));
});
cljs.core.async.__GT_t9698 = (function __GT_t9698(cb__$1,flag__$1,alt_handler__$1,meta9699){return (new cljs.core.async.t9698(cb__$1,flag__$1,alt_handler__$1,meta9699));
});
}
return (new cljs.core.async.t9698(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9701_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9701_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9702_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9702_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3585__auto__ = wport;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9703 = (i + (1));
i = G__9703;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3585__auto__ = ret;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3573__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3573__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3573__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9704){var map__9706 = p__9704;var map__9706__$1 = ((cljs.core.seq_QMARK_.call(null,map__9706))?cljs.core.apply.call(null,cljs.core.hash_map,map__9706):map__9706);var opts = map__9706__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__9704 = null;if (arguments.length > 1) {
  p__9704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9704);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9707){
var ports = cljs.core.first(arglist__9707);
var p__9704 = cljs.core.rest(arglist__9707);
return alts_BANG___delegate(ports,p__9704);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9715 = (function (ch,f,map_LT_,meta9716){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9716 = meta9716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9715.cljs$lang$type = true;
cljs.core.async.t9715.cljs$lang$ctorStr = "cljs.core.async/t9715";
cljs.core.async.t9715.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9715");
});
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9718 = (function (fn1,_,meta9716,ch,f,map_LT_,meta9719){
this.fn1 = fn1;
this._ = _;
this.meta9716 = meta9716;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9719 = meta9719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9718.cljs$lang$type = true;
cljs.core.async.t9718.cljs$lang$ctorStr = "cljs.core.async/t9718";
cljs.core.async.t9718.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9718");
});})(___$1))
;
cljs.core.async.t9718.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9718.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__9708_SHARP_){return f1.call(null,(((p1__9708_SHARP_ == null))?null:self__.f.call(null,p1__9708_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t9718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9720){var self__ = this;
var _9720__$1 = this;return self__.meta9719;
});})(___$1))
;
cljs.core.async.t9718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9720,meta9719__$1){var self__ = this;
var _9720__$1 = this;return (new cljs.core.async.t9718(self__.fn1,self__._,self__.meta9716,self__.ch,self__.f,self__.map_LT_,meta9719__$1));
});})(___$1))
;
cljs.core.async.__GT_t9718 = ((function (___$1){
return (function __GT_t9718(fn1__$1,___$2,meta9716__$1,ch__$2,f__$2,map_LT___$2,meta9719){return (new cljs.core.async.t9718(fn1__$1,___$2,meta9716__$1,ch__$2,f__$2,map_LT___$2,meta9719));
});})(___$1))
;
}
return (new cljs.core.async.t9718(fn1,___$1,self__.meta9716,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3573__auto__ = ret;if(cljs.core.truth_(and__3573__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3573__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9717){var self__ = this;
var _9717__$1 = this;return self__.meta9716;
});
cljs.core.async.t9715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9717,meta9716__$1){var self__ = this;
var _9717__$1 = this;return (new cljs.core.async.t9715(self__.ch,self__.f,self__.map_LT_,meta9716__$1));
});
cljs.core.async.__GT_t9715 = (function __GT_t9715(ch__$1,f__$1,map_LT___$1,meta9716){return (new cljs.core.async.t9715(ch__$1,f__$1,map_LT___$1,meta9716));
});
}
return (new cljs.core.async.t9715(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9724 = (function (ch,f,map_GT_,meta9725){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9725 = meta9725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9724.cljs$lang$type = true;
cljs.core.async.t9724.cljs$lang$ctorStr = "cljs.core.async/t9724";
cljs.core.async.t9724.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9724");
});
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9726){var self__ = this;
var _9726__$1 = this;return self__.meta9725;
});
cljs.core.async.t9724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9726,meta9725__$1){var self__ = this;
var _9726__$1 = this;return (new cljs.core.async.t9724(self__.ch,self__.f,self__.map_GT_,meta9725__$1));
});
cljs.core.async.__GT_t9724 = (function __GT_t9724(ch__$1,f__$1,map_GT___$1,meta9725){return (new cljs.core.async.t9724(ch__$1,f__$1,map_GT___$1,meta9725));
});
}
return (new cljs.core.async.t9724(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9730 = (function (ch,p,filter_GT_,meta9731){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9731 = meta9731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9730.cljs$lang$type = true;
cljs.core.async.t9730.cljs$lang$ctorStr = "cljs.core.async/t9730";
cljs.core.async.t9730.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t9730");
});
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9732){var self__ = this;
var _9732__$1 = this;return self__.meta9731;
});
cljs.core.async.t9730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9732,meta9731__$1){var self__ = this;
var _9732__$1 = this;return (new cljs.core.async.t9730(self__.ch,self__.p,self__.filter_GT_,meta9731__$1));
});
cljs.core.async.__GT_t9730 = (function __GT_t9730(ch__$1,p__$1,filter_GT___$1,meta9731){return (new cljs.core.async.t9730(ch__$1,p__$1,filter_GT___$1,meta9731));
});
}
return (new cljs.core.async.t9730(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___9815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___9815,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___9815,out){
return (function (state_9794){var state_val_9795 = (state_9794[(1)]);if((state_val_9795 === (7)))
{var inst_9790 = (state_9794[(2)]);var state_9794__$1 = state_9794;var statearr_9796_9816 = state_9794__$1;(statearr_9796_9816[(2)] = inst_9790);
(statearr_9796_9816[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (1)))
{var state_9794__$1 = state_9794;var statearr_9797_9817 = state_9794__$1;(statearr_9797_9817[(2)] = null);
(statearr_9797_9817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (4)))
{var inst_9776 = (state_9794[(7)]);var inst_9776__$1 = (state_9794[(2)]);var inst_9777 = (inst_9776__$1 == null);var state_9794__$1 = (function (){var statearr_9798 = state_9794;(statearr_9798[(7)] = inst_9776__$1);
return statearr_9798;
})();if(cljs.core.truth_(inst_9777))
{var statearr_9799_9818 = state_9794__$1;(statearr_9799_9818[(1)] = (5));
} else
{var statearr_9800_9819 = state_9794__$1;(statearr_9800_9819[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (6)))
{var inst_9776 = (state_9794[(7)]);var inst_9781 = p.call(null,inst_9776);var state_9794__$1 = state_9794;if(cljs.core.truth_(inst_9781))
{var statearr_9801_9820 = state_9794__$1;(statearr_9801_9820[(1)] = (8));
} else
{var statearr_9802_9821 = state_9794__$1;(statearr_9802_9821[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (3)))
{var inst_9792 = (state_9794[(2)]);var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9794__$1,inst_9792);
} else
{if((state_val_9795 === (2)))
{var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9794__$1,(4),ch);
} else
{if((state_val_9795 === (11)))
{var inst_9784 = (state_9794[(2)]);var state_9794__$1 = state_9794;var statearr_9803_9822 = state_9794__$1;(statearr_9803_9822[(2)] = inst_9784);
(statearr_9803_9822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (9)))
{var state_9794__$1 = state_9794;var statearr_9804_9823 = state_9794__$1;(statearr_9804_9823[(2)] = null);
(statearr_9804_9823[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (5)))
{var inst_9779 = cljs.core.async.close_BANG_.call(null,out);var state_9794__$1 = state_9794;var statearr_9805_9824 = state_9794__$1;(statearr_9805_9824[(2)] = inst_9779);
(statearr_9805_9824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (10)))
{var inst_9787 = (state_9794[(2)]);var state_9794__$1 = (function (){var statearr_9806 = state_9794;(statearr_9806[(8)] = inst_9787);
return statearr_9806;
})();var statearr_9807_9825 = state_9794__$1;(statearr_9807_9825[(2)] = null);
(statearr_9807_9825[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9795 === (8)))
{var inst_9776 = (state_9794[(7)]);var state_9794__$1 = state_9794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9794__$1,(11),out,inst_9776);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___9815,out))
;return ((function (switch__6406__auto__,c__6421__auto___9815,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_9811 = [null,null,null,null,null,null,null,null,null];(statearr_9811[(0)] = state_machine__6407__auto__);
(statearr_9811[(1)] = (1));
return statearr_9811;
});
var state_machine__6407__auto____1 = (function (state_9794){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_9794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e9812){if((e9812 instanceof Object))
{var ex__6410__auto__ = e9812;var statearr_9813_9826 = state_9794;(statearr_9813_9826[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9827 = state_9794;
state_9794 = G__9827;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_9794){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_9794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___9815,out))
})();var state__6423__auto__ = (function (){var statearr_9814 = f__6422__auto__.call(null);(statearr_9814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___9815);
return statearr_9814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___9815,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_9993){var state_val_9994 = (state_9993[(1)]);if((state_val_9994 === (7)))
{var inst_9989 = (state_9993[(2)]);var state_9993__$1 = state_9993;var statearr_9995_10036 = state_9993__$1;(statearr_9995_10036[(2)] = inst_9989);
(statearr_9995_10036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (20)))
{var inst_9959 = (state_9993[(7)]);var inst_9970 = (state_9993[(2)]);var inst_9971 = cljs.core.next.call(null,inst_9959);var inst_9945 = inst_9971;var inst_9946 = null;var inst_9947 = (0);var inst_9948 = (0);var state_9993__$1 = (function (){var statearr_9996 = state_9993;(statearr_9996[(8)] = inst_9947);
(statearr_9996[(9)] = inst_9945);
(statearr_9996[(10)] = inst_9970);
(statearr_9996[(11)] = inst_9948);
(statearr_9996[(12)] = inst_9946);
return statearr_9996;
})();var statearr_9997_10037 = state_9993__$1;(statearr_9997_10037[(2)] = null);
(statearr_9997_10037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (1)))
{var state_9993__$1 = state_9993;var statearr_9998_10038 = state_9993__$1;(statearr_9998_10038[(2)] = null);
(statearr_9998_10038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (4)))
{var inst_9934 = (state_9993[(13)]);var inst_9934__$1 = (state_9993[(2)]);var inst_9935 = (inst_9934__$1 == null);var state_9993__$1 = (function (){var statearr_9999 = state_9993;(statearr_9999[(13)] = inst_9934__$1);
return statearr_9999;
})();if(cljs.core.truth_(inst_9935))
{var statearr_10000_10039 = state_9993__$1;(statearr_10000_10039[(1)] = (5));
} else
{var statearr_10001_10040 = state_9993__$1;(statearr_10001_10040[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (15)))
{var state_9993__$1 = state_9993;var statearr_10005_10041 = state_9993__$1;(statearr_10005_10041[(2)] = null);
(statearr_10005_10041[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (21)))
{var state_9993__$1 = state_9993;var statearr_10006_10042 = state_9993__$1;(statearr_10006_10042[(2)] = null);
(statearr_10006_10042[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (13)))
{var inst_9947 = (state_9993[(8)]);var inst_9945 = (state_9993[(9)]);var inst_9948 = (state_9993[(11)]);var inst_9946 = (state_9993[(12)]);var inst_9955 = (state_9993[(2)]);var inst_9956 = (inst_9948 + (1));var tmp10002 = inst_9947;var tmp10003 = inst_9945;var tmp10004 = inst_9946;var inst_9945__$1 = tmp10003;var inst_9946__$1 = tmp10004;var inst_9947__$1 = tmp10002;var inst_9948__$1 = inst_9956;var state_9993__$1 = (function (){var statearr_10007 = state_9993;(statearr_10007[(14)] = inst_9955);
(statearr_10007[(8)] = inst_9947__$1);
(statearr_10007[(9)] = inst_9945__$1);
(statearr_10007[(11)] = inst_9948__$1);
(statearr_10007[(12)] = inst_9946__$1);
return statearr_10007;
})();var statearr_10008_10043 = state_9993__$1;(statearr_10008_10043[(2)] = null);
(statearr_10008_10043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (22)))
{var state_9993__$1 = state_9993;var statearr_10009_10044 = state_9993__$1;(statearr_10009_10044[(2)] = null);
(statearr_10009_10044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (6)))
{var inst_9934 = (state_9993[(13)]);var inst_9943 = f.call(null,inst_9934);var inst_9944 = cljs.core.seq.call(null,inst_9943);var inst_9945 = inst_9944;var inst_9946 = null;var inst_9947 = (0);var inst_9948 = (0);var state_9993__$1 = (function (){var statearr_10010 = state_9993;(statearr_10010[(8)] = inst_9947);
(statearr_10010[(9)] = inst_9945);
(statearr_10010[(11)] = inst_9948);
(statearr_10010[(12)] = inst_9946);
return statearr_10010;
})();var statearr_10011_10045 = state_9993__$1;(statearr_10011_10045[(2)] = null);
(statearr_10011_10045[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (17)))
{var inst_9959 = (state_9993[(7)]);var inst_9963 = cljs.core.chunk_first.call(null,inst_9959);var inst_9964 = cljs.core.chunk_rest.call(null,inst_9959);var inst_9965 = cljs.core.count.call(null,inst_9963);var inst_9945 = inst_9964;var inst_9946 = inst_9963;var inst_9947 = inst_9965;var inst_9948 = (0);var state_9993__$1 = (function (){var statearr_10012 = state_9993;(statearr_10012[(8)] = inst_9947);
(statearr_10012[(9)] = inst_9945);
(statearr_10012[(11)] = inst_9948);
(statearr_10012[(12)] = inst_9946);
return statearr_10012;
})();var statearr_10013_10046 = state_9993__$1;(statearr_10013_10046[(2)] = null);
(statearr_10013_10046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (3)))
{var inst_9991 = (state_9993[(2)]);var state_9993__$1 = state_9993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9993__$1,inst_9991);
} else
{if((state_val_9994 === (12)))
{var inst_9979 = (state_9993[(2)]);var state_9993__$1 = state_9993;var statearr_10014_10047 = state_9993__$1;(statearr_10014_10047[(2)] = inst_9979);
(statearr_10014_10047[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (2)))
{var state_9993__$1 = state_9993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9993__$1,(4),in$);
} else
{if((state_val_9994 === (23)))
{var inst_9987 = (state_9993[(2)]);var state_9993__$1 = state_9993;var statearr_10015_10048 = state_9993__$1;(statearr_10015_10048[(2)] = inst_9987);
(statearr_10015_10048[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (19)))
{var inst_9974 = (state_9993[(2)]);var state_9993__$1 = state_9993;var statearr_10016_10049 = state_9993__$1;(statearr_10016_10049[(2)] = inst_9974);
(statearr_10016_10049[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (11)))
{var inst_9945 = (state_9993[(9)]);var inst_9959 = (state_9993[(7)]);var inst_9959__$1 = cljs.core.seq.call(null,inst_9945);var state_9993__$1 = (function (){var statearr_10017 = state_9993;(statearr_10017[(7)] = inst_9959__$1);
return statearr_10017;
})();if(inst_9959__$1)
{var statearr_10018_10050 = state_9993__$1;(statearr_10018_10050[(1)] = (14));
} else
{var statearr_10019_10051 = state_9993__$1;(statearr_10019_10051[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (9)))
{var inst_9981 = (state_9993[(2)]);var inst_9982 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_9993__$1 = (function (){var statearr_10020 = state_9993;(statearr_10020[(15)] = inst_9981);
return statearr_10020;
})();if(cljs.core.truth_(inst_9982))
{var statearr_10021_10052 = state_9993__$1;(statearr_10021_10052[(1)] = (21));
} else
{var statearr_10022_10053 = state_9993__$1;(statearr_10022_10053[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (5)))
{var inst_9937 = cljs.core.async.close_BANG_.call(null,out);var state_9993__$1 = state_9993;var statearr_10023_10054 = state_9993__$1;(statearr_10023_10054[(2)] = inst_9937);
(statearr_10023_10054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (14)))
{var inst_9959 = (state_9993[(7)]);var inst_9961 = cljs.core.chunked_seq_QMARK_.call(null,inst_9959);var state_9993__$1 = state_9993;if(inst_9961)
{var statearr_10024_10055 = state_9993__$1;(statearr_10024_10055[(1)] = (17));
} else
{var statearr_10025_10056 = state_9993__$1;(statearr_10025_10056[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (16)))
{var inst_9977 = (state_9993[(2)]);var state_9993__$1 = state_9993;var statearr_10026_10057 = state_9993__$1;(statearr_10026_10057[(2)] = inst_9977);
(statearr_10026_10057[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9994 === (10)))
{var inst_9948 = (state_9993[(11)]);var inst_9946 = (state_9993[(12)]);var inst_9953 = cljs.core._nth.call(null,inst_9946,inst_9948);var state_9993__$1 = state_9993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9993__$1,(13),out,inst_9953);
} else
{if((state_val_9994 === (18)))
{var inst_9959 = (state_9993[(7)]);var inst_9968 = cljs.core.first.call(null,inst_9959);var state_9993__$1 = state_9993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9993__$1,(20),out,inst_9968);
} else
{if((state_val_9994 === (8)))
{var inst_9947 = (state_9993[(8)]);var inst_9948 = (state_9993[(11)]);var inst_9950 = (inst_9948 < inst_9947);var inst_9951 = inst_9950;var state_9993__$1 = state_9993;if(cljs.core.truth_(inst_9951))
{var statearr_10027_10058 = state_9993__$1;(statearr_10027_10058[(1)] = (10));
} else
{var statearr_10028_10059 = state_9993__$1;(statearr_10028_10059[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10032[(0)] = state_machine__6407__auto__);
(statearr_10032[(1)] = (1));
return statearr_10032;
});
var state_machine__6407__auto____1 = (function (state_9993){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_9993);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10033){if((e10033 instanceof Object))
{var ex__6410__auto__ = e10033;var statearr_10034_10060 = state_9993;(statearr_10034_10060[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10061 = state_9993;
state_9993 = G__10061;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_9993){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_9993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_10035 = f__6422__auto__.call(null);(statearr_10035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_10035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6421__auto___10156 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___10156){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___10156){
return (function (state_10132){var state_val_10133 = (state_10132[(1)]);if((state_val_10133 === (7)))
{var inst_10128 = (state_10132[(2)]);var state_10132__$1 = state_10132;var statearr_10134_10157 = state_10132__$1;(statearr_10134_10157[(2)] = inst_10128);
(statearr_10134_10157[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (1)))
{var state_10132__$1 = state_10132;var statearr_10135_10158 = state_10132__$1;(statearr_10135_10158[(2)] = null);
(statearr_10135_10158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (4)))
{var inst_10111 = (state_10132[(7)]);var inst_10111__$1 = (state_10132[(2)]);var inst_10112 = (inst_10111__$1 == null);var state_10132__$1 = (function (){var statearr_10136 = state_10132;(statearr_10136[(7)] = inst_10111__$1);
return statearr_10136;
})();if(cljs.core.truth_(inst_10112))
{var statearr_10137_10159 = state_10132__$1;(statearr_10137_10159[(1)] = (5));
} else
{var statearr_10138_10160 = state_10132__$1;(statearr_10138_10160[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (13)))
{var state_10132__$1 = state_10132;var statearr_10139_10161 = state_10132__$1;(statearr_10139_10161[(2)] = null);
(statearr_10139_10161[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (6)))
{var inst_10111 = (state_10132[(7)]);var state_10132__$1 = state_10132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10132__$1,(11),to,inst_10111);
} else
{if((state_val_10133 === (3)))
{var inst_10130 = (state_10132[(2)]);var state_10132__$1 = state_10132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10132__$1,inst_10130);
} else
{if((state_val_10133 === (12)))
{var state_10132__$1 = state_10132;var statearr_10140_10162 = state_10132__$1;(statearr_10140_10162[(2)] = null);
(statearr_10140_10162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (2)))
{var state_10132__$1 = state_10132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10132__$1,(4),from);
} else
{if((state_val_10133 === (11)))
{var inst_10121 = (state_10132[(2)]);var state_10132__$1 = state_10132;if(cljs.core.truth_(inst_10121))
{var statearr_10141_10163 = state_10132__$1;(statearr_10141_10163[(1)] = (12));
} else
{var statearr_10142_10164 = state_10132__$1;(statearr_10142_10164[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (9)))
{var state_10132__$1 = state_10132;var statearr_10143_10165 = state_10132__$1;(statearr_10143_10165[(2)] = null);
(statearr_10143_10165[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (5)))
{var state_10132__$1 = state_10132;if(cljs.core.truth_(close_QMARK_))
{var statearr_10144_10166 = state_10132__$1;(statearr_10144_10166[(1)] = (8));
} else
{var statearr_10145_10167 = state_10132__$1;(statearr_10145_10167[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (14)))
{var inst_10126 = (state_10132[(2)]);var state_10132__$1 = state_10132;var statearr_10146_10168 = state_10132__$1;(statearr_10146_10168[(2)] = inst_10126);
(statearr_10146_10168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (10)))
{var inst_10118 = (state_10132[(2)]);var state_10132__$1 = state_10132;var statearr_10147_10169 = state_10132__$1;(statearr_10147_10169[(2)] = inst_10118);
(statearr_10147_10169[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10133 === (8)))
{var inst_10115 = cljs.core.async.close_BANG_.call(null,to);var state_10132__$1 = state_10132;var statearr_10148_10170 = state_10132__$1;(statearr_10148_10170[(2)] = inst_10115);
(statearr_10148_10170[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___10156))
;return ((function (switch__6406__auto__,c__6421__auto___10156){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10152 = [null,null,null,null,null,null,null,null];(statearr_10152[(0)] = state_machine__6407__auto__);
(statearr_10152[(1)] = (1));
return statearr_10152;
});
var state_machine__6407__auto____1 = (function (state_10132){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_10132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10153){if((e10153 instanceof Object))
{var ex__6410__auto__ = e10153;var statearr_10154_10171 = state_10132;(statearr_10154_10171[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10153;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10172 = state_10132;
state_10132 = G__10172;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_10132){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_10132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___10156))
})();var state__6423__auto__ = (function (){var statearr_10155 = f__6422__auto__.call(null);(statearr_10155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___10156);
return statearr_10155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___10156))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6421__auto___10273 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___10273,tc,fc){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___10273,tc,fc){
return (function (state_10248){var state_val_10249 = (state_10248[(1)]);if((state_val_10249 === (7)))
{var inst_10244 = (state_10248[(2)]);var state_10248__$1 = state_10248;var statearr_10250_10274 = state_10248__$1;(statearr_10250_10274[(2)] = inst_10244);
(statearr_10250_10274[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (1)))
{var state_10248__$1 = state_10248;var statearr_10251_10275 = state_10248__$1;(statearr_10251_10275[(2)] = null);
(statearr_10251_10275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (4)))
{var inst_10225 = (state_10248[(7)]);var inst_10225__$1 = (state_10248[(2)]);var inst_10226 = (inst_10225__$1 == null);var state_10248__$1 = (function (){var statearr_10252 = state_10248;(statearr_10252[(7)] = inst_10225__$1);
return statearr_10252;
})();if(cljs.core.truth_(inst_10226))
{var statearr_10253_10276 = state_10248__$1;(statearr_10253_10276[(1)] = (5));
} else
{var statearr_10254_10277 = state_10248__$1;(statearr_10254_10277[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (13)))
{var state_10248__$1 = state_10248;var statearr_10255_10278 = state_10248__$1;(statearr_10255_10278[(2)] = null);
(statearr_10255_10278[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (6)))
{var inst_10225 = (state_10248[(7)]);var inst_10231 = p.call(null,inst_10225);var state_10248__$1 = state_10248;if(cljs.core.truth_(inst_10231))
{var statearr_10256_10279 = state_10248__$1;(statearr_10256_10279[(1)] = (9));
} else
{var statearr_10257_10280 = state_10248__$1;(statearr_10257_10280[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (3)))
{var inst_10246 = (state_10248[(2)]);var state_10248__$1 = state_10248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10248__$1,inst_10246);
} else
{if((state_val_10249 === (12)))
{var state_10248__$1 = state_10248;var statearr_10258_10281 = state_10248__$1;(statearr_10258_10281[(2)] = null);
(statearr_10258_10281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (2)))
{var state_10248__$1 = state_10248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10248__$1,(4),ch);
} else
{if((state_val_10249 === (11)))
{var inst_10225 = (state_10248[(7)]);var inst_10235 = (state_10248[(2)]);var state_10248__$1 = state_10248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10248__$1,(8),inst_10235,inst_10225);
} else
{if((state_val_10249 === (9)))
{var state_10248__$1 = state_10248;var statearr_10259_10282 = state_10248__$1;(statearr_10259_10282[(2)] = tc);
(statearr_10259_10282[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (5)))
{var inst_10228 = cljs.core.async.close_BANG_.call(null,tc);var inst_10229 = cljs.core.async.close_BANG_.call(null,fc);var state_10248__$1 = (function (){var statearr_10260 = state_10248;(statearr_10260[(8)] = inst_10228);
return statearr_10260;
})();var statearr_10261_10283 = state_10248__$1;(statearr_10261_10283[(2)] = inst_10229);
(statearr_10261_10283[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (14)))
{var inst_10242 = (state_10248[(2)]);var state_10248__$1 = state_10248;var statearr_10262_10284 = state_10248__$1;(statearr_10262_10284[(2)] = inst_10242);
(statearr_10262_10284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (10)))
{var state_10248__$1 = state_10248;var statearr_10263_10285 = state_10248__$1;(statearr_10263_10285[(2)] = fc);
(statearr_10263_10285[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10249 === (8)))
{var inst_10237 = (state_10248[(2)]);var state_10248__$1 = state_10248;if(cljs.core.truth_(inst_10237))
{var statearr_10264_10286 = state_10248__$1;(statearr_10264_10286[(1)] = (12));
} else
{var statearr_10265_10287 = state_10248__$1;(statearr_10265_10287[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___10273,tc,fc))
;return ((function (switch__6406__auto__,c__6421__auto___10273,tc,fc){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10269 = [null,null,null,null,null,null,null,null,null];(statearr_10269[(0)] = state_machine__6407__auto__);
(statearr_10269[(1)] = (1));
return statearr_10269;
});
var state_machine__6407__auto____1 = (function (state_10248){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_10248);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10270){if((e10270 instanceof Object))
{var ex__6410__auto__ = e10270;var statearr_10271_10288 = state_10248;(statearr_10271_10288[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10289 = state_10248;
state_10248 = G__10289;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_10248){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_10248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___10273,tc,fc))
})();var state__6423__auto__ = (function (){var statearr_10272 = f__6422__auto__.call(null);(statearr_10272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___10273);
return statearr_10272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___10273,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_10336){var state_val_10337 = (state_10336[(1)]);if((state_val_10337 === (7)))
{var inst_10332 = (state_10336[(2)]);var state_10336__$1 = state_10336;var statearr_10338_10354 = state_10336__$1;(statearr_10338_10354[(2)] = inst_10332);
(statearr_10338_10354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10337 === (6)))
{var inst_10322 = (state_10336[(7)]);var inst_10325 = (state_10336[(8)]);var inst_10329 = f.call(null,inst_10322,inst_10325);var inst_10322__$1 = inst_10329;var state_10336__$1 = (function (){var statearr_10339 = state_10336;(statearr_10339[(7)] = inst_10322__$1);
return statearr_10339;
})();var statearr_10340_10355 = state_10336__$1;(statearr_10340_10355[(2)] = null);
(statearr_10340_10355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10337 === (5)))
{var inst_10322 = (state_10336[(7)]);var state_10336__$1 = state_10336;var statearr_10341_10356 = state_10336__$1;(statearr_10341_10356[(2)] = inst_10322);
(statearr_10341_10356[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10337 === (4)))
{var inst_10325 = (state_10336[(8)]);var inst_10325__$1 = (state_10336[(2)]);var inst_10326 = (inst_10325__$1 == null);var state_10336__$1 = (function (){var statearr_10342 = state_10336;(statearr_10342[(8)] = inst_10325__$1);
return statearr_10342;
})();if(cljs.core.truth_(inst_10326))
{var statearr_10343_10357 = state_10336__$1;(statearr_10343_10357[(1)] = (5));
} else
{var statearr_10344_10358 = state_10336__$1;(statearr_10344_10358[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10337 === (3)))
{var inst_10334 = (state_10336[(2)]);var state_10336__$1 = state_10336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10336__$1,inst_10334);
} else
{if((state_val_10337 === (2)))
{var state_10336__$1 = state_10336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10336__$1,(4),ch);
} else
{if((state_val_10337 === (1)))
{var inst_10322 = init;var state_10336__$1 = (function (){var statearr_10345 = state_10336;(statearr_10345[(7)] = inst_10322);
return statearr_10345;
})();var statearr_10346_10359 = state_10336__$1;(statearr_10346_10359[(2)] = null);
(statearr_10346_10359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10350 = [null,null,null,null,null,null,null,null,null];(statearr_10350[(0)] = state_machine__6407__auto__);
(statearr_10350[(1)] = (1));
return statearr_10350;
});
var state_machine__6407__auto____1 = (function (state_10336){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_10336);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10351){if((e10351 instanceof Object))
{var ex__6410__auto__ = e10351;var statearr_10352_10360 = state_10336;(statearr_10352_10360[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10351;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10361 = state_10336;
state_10336 = G__10361;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_10336){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_10336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_10353 = f__6422__auto__.call(null);(statearr_10353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_10353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_10435){var state_val_10436 = (state_10435[(1)]);if((state_val_10436 === (7)))
{var inst_10417 = (state_10435[(2)]);var state_10435__$1 = state_10435;var statearr_10437_10460 = state_10435__$1;(statearr_10437_10460[(2)] = inst_10417);
(statearr_10437_10460[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (1)))
{var inst_10411 = cljs.core.seq.call(null,coll);var inst_10412 = inst_10411;var state_10435__$1 = (function (){var statearr_10438 = state_10435;(statearr_10438[(7)] = inst_10412);
return statearr_10438;
})();var statearr_10439_10461 = state_10435__$1;(statearr_10439_10461[(2)] = null);
(statearr_10439_10461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (4)))
{var inst_10412 = (state_10435[(7)]);var inst_10415 = cljs.core.first.call(null,inst_10412);var state_10435__$1 = state_10435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10435__$1,(7),ch,inst_10415);
} else
{if((state_val_10436 === (13)))
{var inst_10429 = (state_10435[(2)]);var state_10435__$1 = state_10435;var statearr_10440_10462 = state_10435__$1;(statearr_10440_10462[(2)] = inst_10429);
(statearr_10440_10462[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (6)))
{var inst_10420 = (state_10435[(2)]);var state_10435__$1 = state_10435;if(cljs.core.truth_(inst_10420))
{var statearr_10441_10463 = state_10435__$1;(statearr_10441_10463[(1)] = (8));
} else
{var statearr_10442_10464 = state_10435__$1;(statearr_10442_10464[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (3)))
{var inst_10433 = (state_10435[(2)]);var state_10435__$1 = state_10435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10435__$1,inst_10433);
} else
{if((state_val_10436 === (12)))
{var state_10435__$1 = state_10435;var statearr_10443_10465 = state_10435__$1;(statearr_10443_10465[(2)] = null);
(statearr_10443_10465[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (2)))
{var inst_10412 = (state_10435[(7)]);var state_10435__$1 = state_10435;if(cljs.core.truth_(inst_10412))
{var statearr_10444_10466 = state_10435__$1;(statearr_10444_10466[(1)] = (4));
} else
{var statearr_10445_10467 = state_10435__$1;(statearr_10445_10467[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (11)))
{var inst_10426 = cljs.core.async.close_BANG_.call(null,ch);var state_10435__$1 = state_10435;var statearr_10446_10468 = state_10435__$1;(statearr_10446_10468[(2)] = inst_10426);
(statearr_10446_10468[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (9)))
{var state_10435__$1 = state_10435;if(cljs.core.truth_(close_QMARK_))
{var statearr_10447_10469 = state_10435__$1;(statearr_10447_10469[(1)] = (11));
} else
{var statearr_10448_10470 = state_10435__$1;(statearr_10448_10470[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (5)))
{var inst_10412 = (state_10435[(7)]);var state_10435__$1 = state_10435;var statearr_10449_10471 = state_10435__$1;(statearr_10449_10471[(2)] = inst_10412);
(statearr_10449_10471[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (10)))
{var inst_10431 = (state_10435[(2)]);var state_10435__$1 = state_10435;var statearr_10450_10472 = state_10435__$1;(statearr_10450_10472[(2)] = inst_10431);
(statearr_10450_10472[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10436 === (8)))
{var inst_10412 = (state_10435[(7)]);var inst_10422 = cljs.core.next.call(null,inst_10412);var inst_10412__$1 = inst_10422;var state_10435__$1 = (function (){var statearr_10451 = state_10435;(statearr_10451[(7)] = inst_10412__$1);
return statearr_10451;
})();var statearr_10452_10473 = state_10435__$1;(statearr_10452_10473[(2)] = null);
(statearr_10452_10473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10456 = [null,null,null,null,null,null,null,null];(statearr_10456[(0)] = state_machine__6407__auto__);
(statearr_10456[(1)] = (1));
return statearr_10456;
});
var state_machine__6407__auto____1 = (function (state_10435){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_10435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10457){if((e10457 instanceof Object))
{var ex__6410__auto__ = e10457;var statearr_10458_10474 = state_10435;(statearr_10458_10474[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10475 = state_10435;
state_10435 = G__10475;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_10435){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_10435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_10459 = f__6422__auto__.call(null);(statearr_10459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_10459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10477 = {};return obj10477;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3573__auto__ = _;if(and__3573__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4222__auto__ = (((_ == null))?null:_);return (function (){var or__3585__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10479 = {};return obj10479;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10701 = (function (cs,ch,mult,meta10702){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10702 = meta10702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10701.cljs$lang$type = true;
cljs.core.async.t10701.cljs$lang$ctorStr = "cljs.core.async/t10701";
cljs.core.async.t10701.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t10701");
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10701.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10703){var self__ = this;
var _10703__$1 = this;return self__.meta10702;
});})(cs))
;
cljs.core.async.t10701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10703,meta10702__$1){var self__ = this;
var _10703__$1 = this;return (new cljs.core.async.t10701(self__.cs,self__.ch,self__.mult,meta10702__$1));
});})(cs))
;
cljs.core.async.__GT_t10701 = ((function (cs){
return (function __GT_t10701(cs__$1,ch__$1,mult__$1,meta10702){return (new cljs.core.async.t10701(cs__$1,ch__$1,mult__$1,meta10702));
});})(cs))
;
}
return (new cljs.core.async.t10701(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6421__auto___10922 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___10922,cs,m,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___10922,cs,m,dchan,dctr,done){
return (function (state_10834){var state_val_10835 = (state_10834[(1)]);if((state_val_10835 === (7)))
{var inst_10830 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10836_10923 = state_10834__$1;(statearr_10836_10923[(2)] = inst_10830);
(statearr_10836_10923[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (20)))
{var inst_10735 = (state_10834[(7)]);var inst_10745 = cljs.core.first.call(null,inst_10735);var inst_10746 = cljs.core.nth.call(null,inst_10745,(0),null);var inst_10747 = cljs.core.nth.call(null,inst_10745,(1),null);var state_10834__$1 = (function (){var statearr_10837 = state_10834;(statearr_10837[(8)] = inst_10746);
return statearr_10837;
})();if(cljs.core.truth_(inst_10747))
{var statearr_10838_10924 = state_10834__$1;(statearr_10838_10924[(1)] = (22));
} else
{var statearr_10839_10925 = state_10834__$1;(statearr_10839_10925[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (27)))
{var inst_10706 = (state_10834[(9)]);var inst_10782 = (state_10834[(10)]);var inst_10775 = (state_10834[(11)]);var inst_10777 = (state_10834[(12)]);var inst_10782__$1 = cljs.core._nth.call(null,inst_10775,inst_10777);var inst_10783 = cljs.core.async.put_BANG_.call(null,inst_10782__$1,inst_10706,done);var state_10834__$1 = (function (){var statearr_10840 = state_10834;(statearr_10840[(10)] = inst_10782__$1);
return statearr_10840;
})();if(cljs.core.truth_(inst_10783))
{var statearr_10841_10926 = state_10834__$1;(statearr_10841_10926[(1)] = (30));
} else
{var statearr_10842_10927 = state_10834__$1;(statearr_10842_10927[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (1)))
{var state_10834__$1 = state_10834;var statearr_10843_10928 = state_10834__$1;(statearr_10843_10928[(2)] = null);
(statearr_10843_10928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (24)))
{var inst_10735 = (state_10834[(7)]);var inst_10752 = (state_10834[(2)]);var inst_10753 = cljs.core.next.call(null,inst_10735);var inst_10715 = inst_10753;var inst_10716 = null;var inst_10717 = (0);var inst_10718 = (0);var state_10834__$1 = (function (){var statearr_10844 = state_10834;(statearr_10844[(13)] = inst_10718);
(statearr_10844[(14)] = inst_10716);
(statearr_10844[(15)] = inst_10717);
(statearr_10844[(16)] = inst_10715);
(statearr_10844[(17)] = inst_10752);
return statearr_10844;
})();var statearr_10845_10929 = state_10834__$1;(statearr_10845_10929[(2)] = null);
(statearr_10845_10929[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (39)))
{var state_10834__$1 = state_10834;var statearr_10849_10930 = state_10834__$1;(statearr_10849_10930[(2)] = null);
(statearr_10849_10930[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (4)))
{var inst_10706 = (state_10834[(9)]);var inst_10706__$1 = (state_10834[(2)]);var inst_10707 = (inst_10706__$1 == null);var state_10834__$1 = (function (){var statearr_10850 = state_10834;(statearr_10850[(9)] = inst_10706__$1);
return statearr_10850;
})();if(cljs.core.truth_(inst_10707))
{var statearr_10851_10931 = state_10834__$1;(statearr_10851_10931[(1)] = (5));
} else
{var statearr_10852_10932 = state_10834__$1;(statearr_10852_10932[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (15)))
{var inst_10718 = (state_10834[(13)]);var inst_10716 = (state_10834[(14)]);var inst_10717 = (state_10834[(15)]);var inst_10715 = (state_10834[(16)]);var inst_10731 = (state_10834[(2)]);var inst_10732 = (inst_10718 + (1));var tmp10846 = inst_10716;var tmp10847 = inst_10717;var tmp10848 = inst_10715;var inst_10715__$1 = tmp10848;var inst_10716__$1 = tmp10846;var inst_10717__$1 = tmp10847;var inst_10718__$1 = inst_10732;var state_10834__$1 = (function (){var statearr_10853 = state_10834;(statearr_10853[(13)] = inst_10718__$1);
(statearr_10853[(14)] = inst_10716__$1);
(statearr_10853[(18)] = inst_10731);
(statearr_10853[(15)] = inst_10717__$1);
(statearr_10853[(16)] = inst_10715__$1);
return statearr_10853;
})();var statearr_10854_10933 = state_10834__$1;(statearr_10854_10933[(2)] = null);
(statearr_10854_10933[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (21)))
{var inst_10756 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10858_10934 = state_10834__$1;(statearr_10858_10934[(2)] = inst_10756);
(statearr_10858_10934[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (31)))
{var inst_10782 = (state_10834[(10)]);var inst_10786 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10787 = cljs.core.async.untap_STAR_.call(null,m,inst_10782);var state_10834__$1 = (function (){var statearr_10859 = state_10834;(statearr_10859[(19)] = inst_10786);
return statearr_10859;
})();var statearr_10860_10935 = state_10834__$1;(statearr_10860_10935[(2)] = inst_10787);
(statearr_10860_10935[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (32)))
{var inst_10774 = (state_10834[(20)]);var inst_10776 = (state_10834[(21)]);var inst_10775 = (state_10834[(11)]);var inst_10777 = (state_10834[(12)]);var inst_10789 = (state_10834[(2)]);var inst_10790 = (inst_10777 + (1));var tmp10855 = inst_10774;var tmp10856 = inst_10776;var tmp10857 = inst_10775;var inst_10774__$1 = tmp10855;var inst_10775__$1 = tmp10857;var inst_10776__$1 = tmp10856;var inst_10777__$1 = inst_10790;var state_10834__$1 = (function (){var statearr_10861 = state_10834;(statearr_10861[(20)] = inst_10774__$1);
(statearr_10861[(21)] = inst_10776__$1);
(statearr_10861[(11)] = inst_10775__$1);
(statearr_10861[(12)] = inst_10777__$1);
(statearr_10861[(22)] = inst_10789);
return statearr_10861;
})();var statearr_10862_10936 = state_10834__$1;(statearr_10862_10936[(2)] = null);
(statearr_10862_10936[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (40)))
{var inst_10802 = (state_10834[(23)]);var inst_10806 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10807 = cljs.core.async.untap_STAR_.call(null,m,inst_10802);var state_10834__$1 = (function (){var statearr_10863 = state_10834;(statearr_10863[(24)] = inst_10806);
return statearr_10863;
})();var statearr_10864_10937 = state_10834__$1;(statearr_10864_10937[(2)] = inst_10807);
(statearr_10864_10937[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (33)))
{var inst_10793 = (state_10834[(25)]);var inst_10795 = cljs.core.chunked_seq_QMARK_.call(null,inst_10793);var state_10834__$1 = state_10834;if(inst_10795)
{var statearr_10865_10938 = state_10834__$1;(statearr_10865_10938[(1)] = (36));
} else
{var statearr_10866_10939 = state_10834__$1;(statearr_10866_10939[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (13)))
{var inst_10725 = (state_10834[(26)]);var inst_10728 = cljs.core.async.close_BANG_.call(null,inst_10725);var state_10834__$1 = state_10834;var statearr_10867_10940 = state_10834__$1;(statearr_10867_10940[(2)] = inst_10728);
(statearr_10867_10940[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (22)))
{var inst_10746 = (state_10834[(8)]);var inst_10749 = cljs.core.async.close_BANG_.call(null,inst_10746);var state_10834__$1 = state_10834;var statearr_10868_10941 = state_10834__$1;(statearr_10868_10941[(2)] = inst_10749);
(statearr_10868_10941[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (36)))
{var inst_10793 = (state_10834[(25)]);var inst_10797 = cljs.core.chunk_first.call(null,inst_10793);var inst_10798 = cljs.core.chunk_rest.call(null,inst_10793);var inst_10799 = cljs.core.count.call(null,inst_10797);var inst_10774 = inst_10798;var inst_10775 = inst_10797;var inst_10776 = inst_10799;var inst_10777 = (0);var state_10834__$1 = (function (){var statearr_10869 = state_10834;(statearr_10869[(20)] = inst_10774);
(statearr_10869[(21)] = inst_10776);
(statearr_10869[(11)] = inst_10775);
(statearr_10869[(12)] = inst_10777);
return statearr_10869;
})();var statearr_10870_10942 = state_10834__$1;(statearr_10870_10942[(2)] = null);
(statearr_10870_10942[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (41)))
{var inst_10793 = (state_10834[(25)]);var inst_10809 = (state_10834[(2)]);var inst_10810 = cljs.core.next.call(null,inst_10793);var inst_10774 = inst_10810;var inst_10775 = null;var inst_10776 = (0);var inst_10777 = (0);var state_10834__$1 = (function (){var statearr_10871 = state_10834;(statearr_10871[(20)] = inst_10774);
(statearr_10871[(21)] = inst_10776);
(statearr_10871[(27)] = inst_10809);
(statearr_10871[(11)] = inst_10775);
(statearr_10871[(12)] = inst_10777);
return statearr_10871;
})();var statearr_10872_10943 = state_10834__$1;(statearr_10872_10943[(2)] = null);
(statearr_10872_10943[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (43)))
{var state_10834__$1 = state_10834;var statearr_10873_10944 = state_10834__$1;(statearr_10873_10944[(2)] = null);
(statearr_10873_10944[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (29)))
{var inst_10818 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10874_10945 = state_10834__$1;(statearr_10874_10945[(2)] = inst_10818);
(statearr_10874_10945[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (44)))
{var inst_10827 = (state_10834[(2)]);var state_10834__$1 = (function (){var statearr_10875 = state_10834;(statearr_10875[(28)] = inst_10827);
return statearr_10875;
})();var statearr_10876_10946 = state_10834__$1;(statearr_10876_10946[(2)] = null);
(statearr_10876_10946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (6)))
{var inst_10766 = (state_10834[(29)]);var inst_10765 = cljs.core.deref.call(null,cs);var inst_10766__$1 = cljs.core.keys.call(null,inst_10765);var inst_10767 = cljs.core.count.call(null,inst_10766__$1);var inst_10768 = cljs.core.reset_BANG_.call(null,dctr,inst_10767);var inst_10773 = cljs.core.seq.call(null,inst_10766__$1);var inst_10774 = inst_10773;var inst_10775 = null;var inst_10776 = (0);var inst_10777 = (0);var state_10834__$1 = (function (){var statearr_10877 = state_10834;(statearr_10877[(20)] = inst_10774);
(statearr_10877[(29)] = inst_10766__$1);
(statearr_10877[(21)] = inst_10776);
(statearr_10877[(30)] = inst_10768);
(statearr_10877[(11)] = inst_10775);
(statearr_10877[(12)] = inst_10777);
return statearr_10877;
})();var statearr_10878_10947 = state_10834__$1;(statearr_10878_10947[(2)] = null);
(statearr_10878_10947[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (28)))
{var inst_10774 = (state_10834[(20)]);var inst_10793 = (state_10834[(25)]);var inst_10793__$1 = cljs.core.seq.call(null,inst_10774);var state_10834__$1 = (function (){var statearr_10879 = state_10834;(statearr_10879[(25)] = inst_10793__$1);
return statearr_10879;
})();if(inst_10793__$1)
{var statearr_10880_10948 = state_10834__$1;(statearr_10880_10948[(1)] = (33));
} else
{var statearr_10881_10949 = state_10834__$1;(statearr_10881_10949[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (25)))
{var inst_10776 = (state_10834[(21)]);var inst_10777 = (state_10834[(12)]);var inst_10779 = (inst_10777 < inst_10776);var inst_10780 = inst_10779;var state_10834__$1 = state_10834;if(cljs.core.truth_(inst_10780))
{var statearr_10882_10950 = state_10834__$1;(statearr_10882_10950[(1)] = (27));
} else
{var statearr_10883_10951 = state_10834__$1;(statearr_10883_10951[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (34)))
{var state_10834__$1 = state_10834;var statearr_10884_10952 = state_10834__$1;(statearr_10884_10952[(2)] = null);
(statearr_10884_10952[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (17)))
{var state_10834__$1 = state_10834;var statearr_10885_10953 = state_10834__$1;(statearr_10885_10953[(2)] = null);
(statearr_10885_10953[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (3)))
{var inst_10832 = (state_10834[(2)]);var state_10834__$1 = state_10834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10834__$1,inst_10832);
} else
{if((state_val_10835 === (12)))
{var inst_10761 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10886_10954 = state_10834__$1;(statearr_10886_10954[(2)] = inst_10761);
(statearr_10886_10954[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (2)))
{var state_10834__$1 = state_10834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10834__$1,(4),ch);
} else
{if((state_val_10835 === (23)))
{var state_10834__$1 = state_10834;var statearr_10887_10955 = state_10834__$1;(statearr_10887_10955[(2)] = null);
(statearr_10887_10955[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (35)))
{var inst_10816 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10888_10956 = state_10834__$1;(statearr_10888_10956[(2)] = inst_10816);
(statearr_10888_10956[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (19)))
{var inst_10735 = (state_10834[(7)]);var inst_10739 = cljs.core.chunk_first.call(null,inst_10735);var inst_10740 = cljs.core.chunk_rest.call(null,inst_10735);var inst_10741 = cljs.core.count.call(null,inst_10739);var inst_10715 = inst_10740;var inst_10716 = inst_10739;var inst_10717 = inst_10741;var inst_10718 = (0);var state_10834__$1 = (function (){var statearr_10889 = state_10834;(statearr_10889[(13)] = inst_10718);
(statearr_10889[(14)] = inst_10716);
(statearr_10889[(15)] = inst_10717);
(statearr_10889[(16)] = inst_10715);
return statearr_10889;
})();var statearr_10890_10957 = state_10834__$1;(statearr_10890_10957[(2)] = null);
(statearr_10890_10957[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (11)))
{var inst_10735 = (state_10834[(7)]);var inst_10715 = (state_10834[(16)]);var inst_10735__$1 = cljs.core.seq.call(null,inst_10715);var state_10834__$1 = (function (){var statearr_10891 = state_10834;(statearr_10891[(7)] = inst_10735__$1);
return statearr_10891;
})();if(inst_10735__$1)
{var statearr_10892_10958 = state_10834__$1;(statearr_10892_10958[(1)] = (16));
} else
{var statearr_10893_10959 = state_10834__$1;(statearr_10893_10959[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (9)))
{var inst_10763 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10894_10960 = state_10834__$1;(statearr_10894_10960[(2)] = inst_10763);
(statearr_10894_10960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (5)))
{var inst_10713 = cljs.core.deref.call(null,cs);var inst_10714 = cljs.core.seq.call(null,inst_10713);var inst_10715 = inst_10714;var inst_10716 = null;var inst_10717 = (0);var inst_10718 = (0);var state_10834__$1 = (function (){var statearr_10895 = state_10834;(statearr_10895[(13)] = inst_10718);
(statearr_10895[(14)] = inst_10716);
(statearr_10895[(15)] = inst_10717);
(statearr_10895[(16)] = inst_10715);
return statearr_10895;
})();var statearr_10896_10961 = state_10834__$1;(statearr_10896_10961[(2)] = null);
(statearr_10896_10961[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (14)))
{var state_10834__$1 = state_10834;var statearr_10897_10962 = state_10834__$1;(statearr_10897_10962[(2)] = null);
(statearr_10897_10962[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (45)))
{var inst_10824 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10898_10963 = state_10834__$1;(statearr_10898_10963[(2)] = inst_10824);
(statearr_10898_10963[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (26)))
{var inst_10766 = (state_10834[(29)]);var inst_10820 = (state_10834[(2)]);var inst_10821 = cljs.core.seq.call(null,inst_10766);var state_10834__$1 = (function (){var statearr_10899 = state_10834;(statearr_10899[(31)] = inst_10820);
return statearr_10899;
})();if(inst_10821)
{var statearr_10900_10964 = state_10834__$1;(statearr_10900_10964[(1)] = (42));
} else
{var statearr_10901_10965 = state_10834__$1;(statearr_10901_10965[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (16)))
{var inst_10735 = (state_10834[(7)]);var inst_10737 = cljs.core.chunked_seq_QMARK_.call(null,inst_10735);var state_10834__$1 = state_10834;if(inst_10737)
{var statearr_10902_10966 = state_10834__$1;(statearr_10902_10966[(1)] = (19));
} else
{var statearr_10903_10967 = state_10834__$1;(statearr_10903_10967[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (38)))
{var inst_10813 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10904_10968 = state_10834__$1;(statearr_10904_10968[(2)] = inst_10813);
(statearr_10904_10968[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (30)))
{var state_10834__$1 = state_10834;var statearr_10905_10969 = state_10834__$1;(statearr_10905_10969[(2)] = null);
(statearr_10905_10969[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (10)))
{var inst_10718 = (state_10834[(13)]);var inst_10716 = (state_10834[(14)]);var inst_10724 = cljs.core._nth.call(null,inst_10716,inst_10718);var inst_10725 = cljs.core.nth.call(null,inst_10724,(0),null);var inst_10726 = cljs.core.nth.call(null,inst_10724,(1),null);var state_10834__$1 = (function (){var statearr_10906 = state_10834;(statearr_10906[(26)] = inst_10725);
return statearr_10906;
})();if(cljs.core.truth_(inst_10726))
{var statearr_10907_10970 = state_10834__$1;(statearr_10907_10970[(1)] = (13));
} else
{var statearr_10908_10971 = state_10834__$1;(statearr_10908_10971[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (18)))
{var inst_10759 = (state_10834[(2)]);var state_10834__$1 = state_10834;var statearr_10909_10972 = state_10834__$1;(statearr_10909_10972[(2)] = inst_10759);
(statearr_10909_10972[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (42)))
{var state_10834__$1 = state_10834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10834__$1,(45),dchan);
} else
{if((state_val_10835 === (37)))
{var inst_10793 = (state_10834[(25)]);var inst_10706 = (state_10834[(9)]);var inst_10802 = (state_10834[(23)]);var inst_10802__$1 = cljs.core.first.call(null,inst_10793);var inst_10803 = cljs.core.async.put_BANG_.call(null,inst_10802__$1,inst_10706,done);var state_10834__$1 = (function (){var statearr_10910 = state_10834;(statearr_10910[(23)] = inst_10802__$1);
return statearr_10910;
})();if(cljs.core.truth_(inst_10803))
{var statearr_10911_10973 = state_10834__$1;(statearr_10911_10973[(1)] = (39));
} else
{var statearr_10912_10974 = state_10834__$1;(statearr_10912_10974[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10835 === (8)))
{var inst_10718 = (state_10834[(13)]);var inst_10717 = (state_10834[(15)]);var inst_10720 = (inst_10718 < inst_10717);var inst_10721 = inst_10720;var state_10834__$1 = state_10834;if(cljs.core.truth_(inst_10721))
{var statearr_10913_10975 = state_10834__$1;(statearr_10913_10975[(1)] = (10));
} else
{var statearr_10914_10976 = state_10834__$1;(statearr_10914_10976[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___10922,cs,m,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___10922,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_10918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10918[(0)] = state_machine__6407__auto__);
(statearr_10918[(1)] = (1));
return statearr_10918;
});
var state_machine__6407__auto____1 = (function (state_10834){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_10834);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e10919){if((e10919 instanceof Object))
{var ex__6410__auto__ = e10919;var statearr_10920_10977 = state_10834;(statearr_10920_10977[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10978 = state_10834;
state_10834 = G__10978;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_10834){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_10834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___10922,cs,m,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_10921 = f__6422__auto__.call(null);(statearr_10921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___10922);
return statearr_10921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___10922,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10980 = {};return obj10980;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11100 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11101){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11101 = meta11101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11100.cljs$lang$type = true;
cljs.core.async.t11100.cljs$lang$ctorStr = "cljs.core.async/t11100";
cljs.core.async.t11100.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11100");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11102){var self__ = this;
var _11102__$1 = this;return self__.meta11101;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11102,meta11101__$1){var self__ = this;
var _11102__$1 = this;return (new cljs.core.async.t11100(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11101__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11100 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11100(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11101){return (new cljs.core.async.t11100(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11101));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11100(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6421__auto___11219 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11172){var state_val_11173 = (state_11172[(1)]);if((state_val_11173 === (7)))
{var inst_11116 = (state_11172[(7)]);var inst_11121 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11116);var state_11172__$1 = state_11172;var statearr_11174_11220 = state_11172__$1;(statearr_11174_11220[(2)] = inst_11121);
(statearr_11174_11220[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (20)))
{var inst_11131 = (state_11172[(8)]);var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11172__$1,(23),out,inst_11131);
} else
{if((state_val_11173 === (1)))
{var inst_11106 = (state_11172[(9)]);var inst_11106__$1 = calc_state.call(null);var inst_11107 = cljs.core.seq_QMARK_.call(null,inst_11106__$1);var state_11172__$1 = (function (){var statearr_11175 = state_11172;(statearr_11175[(9)] = inst_11106__$1);
return statearr_11175;
})();if(inst_11107)
{var statearr_11176_11221 = state_11172__$1;(statearr_11176_11221[(1)] = (2));
} else
{var statearr_11177_11222 = state_11172__$1;(statearr_11177_11222[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (24)))
{var inst_11124 = (state_11172[(10)]);var inst_11116 = inst_11124;var state_11172__$1 = (function (){var statearr_11178 = state_11172;(statearr_11178[(7)] = inst_11116);
return statearr_11178;
})();var statearr_11179_11223 = state_11172__$1;(statearr_11179_11223[(2)] = null);
(statearr_11179_11223[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (4)))
{var inst_11106 = (state_11172[(9)]);var inst_11112 = (state_11172[(2)]);var inst_11113 = cljs.core.get.call(null,inst_11112,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11114 = cljs.core.get.call(null,inst_11112,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11115 = cljs.core.get.call(null,inst_11112,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11116 = inst_11106;var state_11172__$1 = (function (){var statearr_11180 = state_11172;(statearr_11180[(7)] = inst_11116);
(statearr_11180[(11)] = inst_11114);
(statearr_11180[(12)] = inst_11115);
(statearr_11180[(13)] = inst_11113);
return statearr_11180;
})();var statearr_11181_11224 = state_11172__$1;(statearr_11181_11224[(2)] = null);
(statearr_11181_11224[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (15)))
{var state_11172__$1 = state_11172;var statearr_11182_11225 = state_11172__$1;(statearr_11182_11225[(2)] = null);
(statearr_11182_11225[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (21)))
{var inst_11124 = (state_11172[(10)]);var inst_11116 = inst_11124;var state_11172__$1 = (function (){var statearr_11183 = state_11172;(statearr_11183[(7)] = inst_11116);
return statearr_11183;
})();var statearr_11184_11226 = state_11172__$1;(statearr_11184_11226[(2)] = null);
(statearr_11184_11226[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (13)))
{var inst_11168 = (state_11172[(2)]);var state_11172__$1 = state_11172;var statearr_11185_11227 = state_11172__$1;(statearr_11185_11227[(2)] = inst_11168);
(statearr_11185_11227[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (22)))
{var inst_11166 = (state_11172[(2)]);var state_11172__$1 = state_11172;var statearr_11186_11228 = state_11172__$1;(statearr_11186_11228[(2)] = inst_11166);
(statearr_11186_11228[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (6)))
{var inst_11170 = (state_11172[(2)]);var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11172__$1,inst_11170);
} else
{if((state_val_11173 === (25)))
{var state_11172__$1 = state_11172;var statearr_11187_11229 = state_11172__$1;(statearr_11187_11229[(2)] = null);
(statearr_11187_11229[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (17)))
{var inst_11146 = (state_11172[(14)]);var state_11172__$1 = state_11172;var statearr_11188_11230 = state_11172__$1;(statearr_11188_11230[(2)] = inst_11146);
(statearr_11188_11230[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (3)))
{var inst_11106 = (state_11172[(9)]);var state_11172__$1 = state_11172;var statearr_11189_11231 = state_11172__$1;(statearr_11189_11231[(2)] = inst_11106);
(statearr_11189_11231[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (12)))
{var inst_11146 = (state_11172[(14)]);var inst_11127 = (state_11172[(15)]);var inst_11132 = (state_11172[(16)]);var inst_11146__$1 = inst_11127.call(null,inst_11132);var state_11172__$1 = (function (){var statearr_11190 = state_11172;(statearr_11190[(14)] = inst_11146__$1);
return statearr_11190;
})();if(cljs.core.truth_(inst_11146__$1))
{var statearr_11191_11232 = state_11172__$1;(statearr_11191_11232[(1)] = (17));
} else
{var statearr_11192_11233 = state_11172__$1;(statearr_11192_11233[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (2)))
{var inst_11106 = (state_11172[(9)]);var inst_11109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11106);var state_11172__$1 = state_11172;var statearr_11193_11234 = state_11172__$1;(statearr_11193_11234[(2)] = inst_11109);
(statearr_11193_11234[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (23)))
{var inst_11157 = (state_11172[(2)]);var state_11172__$1 = state_11172;if(cljs.core.truth_(inst_11157))
{var statearr_11194_11235 = state_11172__$1;(statearr_11194_11235[(1)] = (24));
} else
{var statearr_11195_11236 = state_11172__$1;(statearr_11195_11236[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (19)))
{var inst_11154 = (state_11172[(2)]);var state_11172__$1 = state_11172;if(cljs.core.truth_(inst_11154))
{var statearr_11196_11237 = state_11172__$1;(statearr_11196_11237[(1)] = (20));
} else
{var statearr_11197_11238 = state_11172__$1;(statearr_11197_11238[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (11)))
{var inst_11131 = (state_11172[(8)]);var inst_11137 = (inst_11131 == null);var state_11172__$1 = state_11172;if(cljs.core.truth_(inst_11137))
{var statearr_11198_11239 = state_11172__$1;(statearr_11198_11239[(1)] = (14));
} else
{var statearr_11199_11240 = state_11172__$1;(statearr_11199_11240[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (9)))
{var inst_11124 = (state_11172[(10)]);var inst_11124__$1 = (state_11172[(2)]);var inst_11125 = cljs.core.get.call(null,inst_11124__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11126 = cljs.core.get.call(null,inst_11124__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11127 = cljs.core.get.call(null,inst_11124__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11172__$1 = (function (){var statearr_11200 = state_11172;(statearr_11200[(10)] = inst_11124__$1);
(statearr_11200[(15)] = inst_11127);
(statearr_11200[(17)] = inst_11126);
return statearr_11200;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11172__$1,(10),inst_11125);
} else
{if((state_val_11173 === (5)))
{var inst_11116 = (state_11172[(7)]);var inst_11119 = cljs.core.seq_QMARK_.call(null,inst_11116);var state_11172__$1 = state_11172;if(inst_11119)
{var statearr_11201_11241 = state_11172__$1;(statearr_11201_11241[(1)] = (7));
} else
{var statearr_11202_11242 = state_11172__$1;(statearr_11202_11242[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (14)))
{var inst_11132 = (state_11172[(16)]);var inst_11139 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11132);var state_11172__$1 = state_11172;var statearr_11203_11243 = state_11172__$1;(statearr_11203_11243[(2)] = inst_11139);
(statearr_11203_11243[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (26)))
{var inst_11162 = (state_11172[(2)]);var state_11172__$1 = state_11172;var statearr_11204_11244 = state_11172__$1;(statearr_11204_11244[(2)] = inst_11162);
(statearr_11204_11244[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (16)))
{var inst_11142 = (state_11172[(2)]);var inst_11143 = calc_state.call(null);var inst_11116 = inst_11143;var state_11172__$1 = (function (){var statearr_11205 = state_11172;(statearr_11205[(7)] = inst_11116);
(statearr_11205[(18)] = inst_11142);
return statearr_11205;
})();var statearr_11206_11245 = state_11172__$1;(statearr_11206_11245[(2)] = null);
(statearr_11206_11245[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (10)))
{var inst_11131 = (state_11172[(8)]);var inst_11132 = (state_11172[(16)]);var inst_11130 = (state_11172[(2)]);var inst_11131__$1 = cljs.core.nth.call(null,inst_11130,(0),null);var inst_11132__$1 = cljs.core.nth.call(null,inst_11130,(1),null);var inst_11133 = (inst_11131__$1 == null);var inst_11134 = cljs.core._EQ_.call(null,inst_11132__$1,change);var inst_11135 = (inst_11133) || (inst_11134);var state_11172__$1 = (function (){var statearr_11207 = state_11172;(statearr_11207[(8)] = inst_11131__$1);
(statearr_11207[(16)] = inst_11132__$1);
return statearr_11207;
})();if(cljs.core.truth_(inst_11135))
{var statearr_11208_11246 = state_11172__$1;(statearr_11208_11246[(1)] = (11));
} else
{var statearr_11209_11247 = state_11172__$1;(statearr_11209_11247[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (18)))
{var inst_11127 = (state_11172[(15)]);var inst_11132 = (state_11172[(16)]);var inst_11126 = (state_11172[(17)]);var inst_11149 = cljs.core.empty_QMARK_.call(null,inst_11127);var inst_11150 = inst_11126.call(null,inst_11132);var inst_11151 = cljs.core.not.call(null,inst_11150);var inst_11152 = (inst_11149) && (inst_11151);var state_11172__$1 = state_11172;var statearr_11210_11248 = state_11172__$1;(statearr_11210_11248[(2)] = inst_11152);
(statearr_11210_11248[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (8)))
{var inst_11116 = (state_11172[(7)]);var state_11172__$1 = state_11172;var statearr_11211_11249 = state_11172__$1;(statearr_11211_11249[(2)] = inst_11116);
(statearr_11211_11249[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6406__auto__,c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11215[(0)] = state_machine__6407__auto__);
(statearr_11215[(1)] = (1));
return statearr_11215;
});
var state_machine__6407__auto____1 = (function (state_11172){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11216){if((e11216 instanceof Object))
{var ex__6410__auto__ = e11216;var statearr_11217_11250 = state_11172;(statearr_11217_11250[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11216;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11251 = state_11172;
state_11172 = G__11251;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6423__auto__ = (function (){var statearr_11218 = f__6422__auto__.call(null);(statearr_11218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11219);
return statearr_11218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11219,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11253 = {};return obj11253;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3585__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3585__auto__,mults){
return (function (p1__11254_SHARP_){if(cljs.core.truth_(p1__11254_SHARP_.call(null,topic)))
{return p1__11254_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11254_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3585__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11369 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11370){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11370 = meta11370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11369.cljs$lang$type = true;
cljs.core.async.t11369.cljs$lang$ctorStr = "cljs.core.async/t11369";
cljs.core.async.t11369.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11369");
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11369.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11371){var self__ = this;
var _11371__$1 = this;return self__.meta11370;
});})(mults,ensure_mult))
;
cljs.core.async.t11369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11371,meta11370__$1){var self__ = this;
var _11371__$1 = this;return (new cljs.core.async.t11369(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11370__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11369 = ((function (mults,ensure_mult){
return (function __GT_t11369(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11370){return (new cljs.core.async.t11369(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11370));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11369(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6421__auto___11483 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11483,mults,ensure_mult,p){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11483,mults,ensure_mult,p){
return (function (state_11439){var state_val_11440 = (state_11439[(1)]);if((state_val_11440 === (7)))
{var inst_11435 = (state_11439[(2)]);var state_11439__$1 = state_11439;var statearr_11441_11484 = state_11439__$1;(statearr_11441_11484[(2)] = inst_11435);
(statearr_11441_11484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (20)))
{var state_11439__$1 = state_11439;var statearr_11442_11485 = state_11439__$1;(statearr_11442_11485[(2)] = null);
(statearr_11442_11485[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (1)))
{var state_11439__$1 = state_11439;var statearr_11443_11486 = state_11439__$1;(statearr_11443_11486[(2)] = null);
(statearr_11443_11486[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (4)))
{var inst_11374 = (state_11439[(7)]);var inst_11374__$1 = (state_11439[(2)]);var inst_11375 = (inst_11374__$1 == null);var state_11439__$1 = (function (){var statearr_11444 = state_11439;(statearr_11444[(7)] = inst_11374__$1);
return statearr_11444;
})();if(cljs.core.truth_(inst_11375))
{var statearr_11445_11487 = state_11439__$1;(statearr_11445_11487[(1)] = (5));
} else
{var statearr_11446_11488 = state_11439__$1;(statearr_11446_11488[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (15)))
{var inst_11416 = (state_11439[(2)]);var state_11439__$1 = state_11439;var statearr_11447_11489 = state_11439__$1;(statearr_11447_11489[(2)] = inst_11416);
(statearr_11447_11489[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (21)))
{var inst_11422 = (state_11439[(8)]);var inst_11430 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11422);var state_11439__$1 = state_11439;var statearr_11448_11490 = state_11439__$1;(statearr_11448_11490[(2)] = inst_11430);
(statearr_11448_11490[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (13)))
{var inst_11398 = (state_11439[(9)]);var inst_11400 = cljs.core.chunked_seq_QMARK_.call(null,inst_11398);var state_11439__$1 = state_11439;if(inst_11400)
{var statearr_11449_11491 = state_11439__$1;(statearr_11449_11491[(1)] = (16));
} else
{var statearr_11450_11492 = state_11439__$1;(statearr_11450_11492[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (22)))
{var inst_11432 = (state_11439[(2)]);var state_11439__$1 = (function (){var statearr_11451 = state_11439;(statearr_11451[(10)] = inst_11432);
return statearr_11451;
})();var statearr_11452_11493 = state_11439__$1;(statearr_11452_11493[(2)] = null);
(statearr_11452_11493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (6)))
{var inst_11374 = (state_11439[(7)]);var inst_11422 = (state_11439[(8)]);var inst_11422__$1 = topic_fn.call(null,inst_11374);var inst_11423 = cljs.core.deref.call(null,mults);var inst_11424 = cljs.core.get.call(null,inst_11423,inst_11422__$1);var inst_11425 = cljs.core.async.muxch_STAR_.call(null,inst_11424);var state_11439__$1 = (function (){var statearr_11453 = state_11439;(statearr_11453[(8)] = inst_11422__$1);
return statearr_11453;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11439__$1,(19),inst_11425,inst_11374);
} else
{if((state_val_11440 === (17)))
{var inst_11398 = (state_11439[(9)]);var inst_11407 = cljs.core.first.call(null,inst_11398);var inst_11408 = cljs.core.async.muxch_STAR_.call(null,inst_11407);var inst_11409 = cljs.core.async.close_BANG_.call(null,inst_11408);var inst_11410 = cljs.core.next.call(null,inst_11398);var inst_11384 = inst_11410;var inst_11385 = null;var inst_11386 = (0);var inst_11387 = (0);var state_11439__$1 = (function (){var statearr_11454 = state_11439;(statearr_11454[(11)] = inst_11385);
(statearr_11454[(12)] = inst_11384);
(statearr_11454[(13)] = inst_11387);
(statearr_11454[(14)] = inst_11386);
(statearr_11454[(15)] = inst_11409);
return statearr_11454;
})();var statearr_11455_11494 = state_11439__$1;(statearr_11455_11494[(2)] = null);
(statearr_11455_11494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (3)))
{var inst_11437 = (state_11439[(2)]);var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11439__$1,inst_11437);
} else
{if((state_val_11440 === (12)))
{var inst_11418 = (state_11439[(2)]);var state_11439__$1 = state_11439;var statearr_11456_11495 = state_11439__$1;(statearr_11456_11495[(2)] = inst_11418);
(statearr_11456_11495[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (2)))
{var state_11439__$1 = state_11439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11439__$1,(4),ch);
} else
{if((state_val_11440 === (19)))
{var inst_11427 = (state_11439[(2)]);var state_11439__$1 = state_11439;if(cljs.core.truth_(inst_11427))
{var statearr_11457_11496 = state_11439__$1;(statearr_11457_11496[(1)] = (20));
} else
{var statearr_11458_11497 = state_11439__$1;(statearr_11458_11497[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (11)))
{var inst_11398 = (state_11439[(9)]);var inst_11384 = (state_11439[(12)]);var inst_11398__$1 = cljs.core.seq.call(null,inst_11384);var state_11439__$1 = (function (){var statearr_11459 = state_11439;(statearr_11459[(9)] = inst_11398__$1);
return statearr_11459;
})();if(inst_11398__$1)
{var statearr_11460_11498 = state_11439__$1;(statearr_11460_11498[(1)] = (13));
} else
{var statearr_11461_11499 = state_11439__$1;(statearr_11461_11499[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (9)))
{var inst_11420 = (state_11439[(2)]);var state_11439__$1 = state_11439;var statearr_11462_11500 = state_11439__$1;(statearr_11462_11500[(2)] = inst_11420);
(statearr_11462_11500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (5)))
{var inst_11381 = cljs.core.deref.call(null,mults);var inst_11382 = cljs.core.vals.call(null,inst_11381);var inst_11383 = cljs.core.seq.call(null,inst_11382);var inst_11384 = inst_11383;var inst_11385 = null;var inst_11386 = (0);var inst_11387 = (0);var state_11439__$1 = (function (){var statearr_11463 = state_11439;(statearr_11463[(11)] = inst_11385);
(statearr_11463[(12)] = inst_11384);
(statearr_11463[(13)] = inst_11387);
(statearr_11463[(14)] = inst_11386);
return statearr_11463;
})();var statearr_11464_11501 = state_11439__$1;(statearr_11464_11501[(2)] = null);
(statearr_11464_11501[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (14)))
{var state_11439__$1 = state_11439;var statearr_11468_11502 = state_11439__$1;(statearr_11468_11502[(2)] = null);
(statearr_11468_11502[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (16)))
{var inst_11398 = (state_11439[(9)]);var inst_11402 = cljs.core.chunk_first.call(null,inst_11398);var inst_11403 = cljs.core.chunk_rest.call(null,inst_11398);var inst_11404 = cljs.core.count.call(null,inst_11402);var inst_11384 = inst_11403;var inst_11385 = inst_11402;var inst_11386 = inst_11404;var inst_11387 = (0);var state_11439__$1 = (function (){var statearr_11469 = state_11439;(statearr_11469[(11)] = inst_11385);
(statearr_11469[(12)] = inst_11384);
(statearr_11469[(13)] = inst_11387);
(statearr_11469[(14)] = inst_11386);
return statearr_11469;
})();var statearr_11470_11503 = state_11439__$1;(statearr_11470_11503[(2)] = null);
(statearr_11470_11503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (10)))
{var inst_11385 = (state_11439[(11)]);var inst_11384 = (state_11439[(12)]);var inst_11387 = (state_11439[(13)]);var inst_11386 = (state_11439[(14)]);var inst_11392 = cljs.core._nth.call(null,inst_11385,inst_11387);var inst_11393 = cljs.core.async.muxch_STAR_.call(null,inst_11392);var inst_11394 = cljs.core.async.close_BANG_.call(null,inst_11393);var inst_11395 = (inst_11387 + (1));var tmp11465 = inst_11385;var tmp11466 = inst_11384;var tmp11467 = inst_11386;var inst_11384__$1 = tmp11466;var inst_11385__$1 = tmp11465;var inst_11386__$1 = tmp11467;var inst_11387__$1 = inst_11395;var state_11439__$1 = (function (){var statearr_11471 = state_11439;(statearr_11471[(11)] = inst_11385__$1);
(statearr_11471[(16)] = inst_11394);
(statearr_11471[(12)] = inst_11384__$1);
(statearr_11471[(13)] = inst_11387__$1);
(statearr_11471[(14)] = inst_11386__$1);
return statearr_11471;
})();var statearr_11472_11504 = state_11439__$1;(statearr_11472_11504[(2)] = null);
(statearr_11472_11504[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (18)))
{var inst_11413 = (state_11439[(2)]);var state_11439__$1 = state_11439;var statearr_11473_11505 = state_11439__$1;(statearr_11473_11505[(2)] = inst_11413);
(statearr_11473_11505[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11440 === (8)))
{var inst_11387 = (state_11439[(13)]);var inst_11386 = (state_11439[(14)]);var inst_11389 = (inst_11387 < inst_11386);var inst_11390 = inst_11389;var state_11439__$1 = state_11439;if(cljs.core.truth_(inst_11390))
{var statearr_11474_11506 = state_11439__$1;(statearr_11474_11506[(1)] = (10));
} else
{var statearr_11475_11507 = state_11439__$1;(statearr_11475_11507[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11483,mults,ensure_mult,p))
;return ((function (switch__6406__auto__,c__6421__auto___11483,mults,ensure_mult,p){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11479[(0)] = state_machine__6407__auto__);
(statearr_11479[(1)] = (1));
return statearr_11479;
});
var state_machine__6407__auto____1 = (function (state_11439){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11439);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11480){if((e11480 instanceof Object))
{var ex__6410__auto__ = e11480;var statearr_11481_11508 = state_11439;(statearr_11481_11508[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11480;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11509 = state_11439;
state_11439 = G__11509;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11439){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11483,mults,ensure_mult,p))
})();var state__6423__auto__ = (function (){var statearr_11482 = f__6422__auto__.call(null);(statearr_11482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11483);
return statearr_11482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11483,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6421__auto___11646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11616){var state_val_11617 = (state_11616[(1)]);if((state_val_11617 === (7)))
{var state_11616__$1 = state_11616;var statearr_11618_11647 = state_11616__$1;(statearr_11618_11647[(2)] = null);
(statearr_11618_11647[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (1)))
{var state_11616__$1 = state_11616;var statearr_11619_11648 = state_11616__$1;(statearr_11619_11648[(2)] = null);
(statearr_11619_11648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (4)))
{var inst_11580 = (state_11616[(7)]);var inst_11582 = (inst_11580 < cnt);var state_11616__$1 = state_11616;if(cljs.core.truth_(inst_11582))
{var statearr_11620_11649 = state_11616__$1;(statearr_11620_11649[(1)] = (6));
} else
{var statearr_11621_11650 = state_11616__$1;(statearr_11621_11650[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (15)))
{var inst_11612 = (state_11616[(2)]);var state_11616__$1 = state_11616;var statearr_11622_11651 = state_11616__$1;(statearr_11622_11651[(2)] = inst_11612);
(statearr_11622_11651[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (13)))
{var inst_11605 = cljs.core.async.close_BANG_.call(null,out);var state_11616__$1 = state_11616;var statearr_11623_11652 = state_11616__$1;(statearr_11623_11652[(2)] = inst_11605);
(statearr_11623_11652[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (6)))
{var state_11616__$1 = state_11616;var statearr_11624_11653 = state_11616__$1;(statearr_11624_11653[(2)] = null);
(statearr_11624_11653[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (3)))
{var inst_11614 = (state_11616[(2)]);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11616__$1,inst_11614);
} else
{if((state_val_11617 === (12)))
{var inst_11602 = (state_11616[(8)]);var inst_11602__$1 = (state_11616[(2)]);var inst_11603 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11602__$1);var state_11616__$1 = (function (){var statearr_11625 = state_11616;(statearr_11625[(8)] = inst_11602__$1);
return statearr_11625;
})();if(cljs.core.truth_(inst_11603))
{var statearr_11626_11654 = state_11616__$1;(statearr_11626_11654[(1)] = (13));
} else
{var statearr_11627_11655 = state_11616__$1;(statearr_11627_11655[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (2)))
{var inst_11579 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11580 = (0);var state_11616__$1 = (function (){var statearr_11628 = state_11616;(statearr_11628[(7)] = inst_11580);
(statearr_11628[(9)] = inst_11579);
return statearr_11628;
})();var statearr_11629_11656 = state_11616__$1;(statearr_11629_11656[(2)] = null);
(statearr_11629_11656[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (11)))
{var inst_11580 = (state_11616[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11616,(10),Object,null,(9));var inst_11589 = chs__$1.call(null,inst_11580);var inst_11590 = done.call(null,inst_11580);var inst_11591 = cljs.core.async.take_BANG_.call(null,inst_11589,inst_11590);var state_11616__$1 = state_11616;var statearr_11630_11657 = state_11616__$1;(statearr_11630_11657[(2)] = inst_11591);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (9)))
{var inst_11580 = (state_11616[(7)]);var inst_11593 = (state_11616[(2)]);var inst_11594 = (inst_11580 + (1));var inst_11580__$1 = inst_11594;var state_11616__$1 = (function (){var statearr_11631 = state_11616;(statearr_11631[(10)] = inst_11593);
(statearr_11631[(7)] = inst_11580__$1);
return statearr_11631;
})();var statearr_11632_11658 = state_11616__$1;(statearr_11632_11658[(2)] = null);
(statearr_11632_11658[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (5)))
{var inst_11600 = (state_11616[(2)]);var state_11616__$1 = (function (){var statearr_11633 = state_11616;(statearr_11633[(11)] = inst_11600);
return statearr_11633;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11616__$1,(12),dchan);
} else
{if((state_val_11617 === (14)))
{var inst_11602 = (state_11616[(8)]);var inst_11607 = cljs.core.apply.call(null,f,inst_11602);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11616__$1,(16),out,inst_11607);
} else
{if((state_val_11617 === (16)))
{var inst_11609 = (state_11616[(2)]);var state_11616__$1 = (function (){var statearr_11634 = state_11616;(statearr_11634[(12)] = inst_11609);
return statearr_11634;
})();var statearr_11635_11659 = state_11616__$1;(statearr_11635_11659[(2)] = null);
(statearr_11635_11659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (10)))
{var inst_11584 = (state_11616[(2)]);var inst_11585 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11616__$1 = (function (){var statearr_11636 = state_11616;(statearr_11636[(13)] = inst_11584);
return statearr_11636;
})();var statearr_11637_11660 = state_11616__$1;(statearr_11637_11660[(2)] = inst_11585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11617 === (8)))
{var inst_11598 = (state_11616[(2)]);var state_11616__$1 = state_11616;var statearr_11638_11661 = state_11616__$1;(statearr_11638_11661[(2)] = inst_11598);
(statearr_11638_11661[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11642[(0)] = state_machine__6407__auto__);
(statearr_11642[(1)] = (1));
return statearr_11642;
});
var state_machine__6407__auto____1 = (function (state_11616){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11643){if((e11643 instanceof Object))
{var ex__6410__auto__ = e11643;var statearr_11644_11662 = state_11616;(statearr_11644_11662[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11663 = state_11616;
state_11616 = G__11663;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11616){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_11645 = f__6422__auto__.call(null);(statearr_11645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11646);
return statearr_11645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11646,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___11771 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11771,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11771,out){
return (function (state_11747){var state_val_11748 = (state_11747[(1)]);if((state_val_11748 === (7)))
{var inst_11726 = (state_11747[(7)]);var inst_11727 = (state_11747[(8)]);var inst_11726__$1 = (state_11747[(2)]);var inst_11727__$1 = cljs.core.nth.call(null,inst_11726__$1,(0),null);var inst_11728 = cljs.core.nth.call(null,inst_11726__$1,(1),null);var inst_11729 = (inst_11727__$1 == null);var state_11747__$1 = (function (){var statearr_11749 = state_11747;(statearr_11749[(9)] = inst_11728);
(statearr_11749[(7)] = inst_11726__$1);
(statearr_11749[(8)] = inst_11727__$1);
return statearr_11749;
})();if(cljs.core.truth_(inst_11729))
{var statearr_11750_11772 = state_11747__$1;(statearr_11750_11772[(1)] = (8));
} else
{var statearr_11751_11773 = state_11747__$1;(statearr_11751_11773[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (1)))
{var inst_11718 = cljs.core.vec.call(null,chs);var inst_11719 = inst_11718;var state_11747__$1 = (function (){var statearr_11752 = state_11747;(statearr_11752[(10)] = inst_11719);
return statearr_11752;
})();var statearr_11753_11774 = state_11747__$1;(statearr_11753_11774[(2)] = null);
(statearr_11753_11774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (4)))
{var inst_11719 = (state_11747[(10)]);var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11747__$1,(7),inst_11719);
} else
{if((state_val_11748 === (6)))
{var inst_11743 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11754_11775 = state_11747__$1;(statearr_11754_11775[(2)] = inst_11743);
(statearr_11754_11775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (3)))
{var inst_11745 = (state_11747[(2)]);var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11747__$1,inst_11745);
} else
{if((state_val_11748 === (2)))
{var inst_11719 = (state_11747[(10)]);var inst_11721 = cljs.core.count.call(null,inst_11719);var inst_11722 = (inst_11721 > (0));var state_11747__$1 = state_11747;if(cljs.core.truth_(inst_11722))
{var statearr_11756_11776 = state_11747__$1;(statearr_11756_11776[(1)] = (4));
} else
{var statearr_11757_11777 = state_11747__$1;(statearr_11757_11777[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (11)))
{var inst_11719 = (state_11747[(10)]);var inst_11736 = (state_11747[(2)]);var tmp11755 = inst_11719;var inst_11719__$1 = tmp11755;var state_11747__$1 = (function (){var statearr_11758 = state_11747;(statearr_11758[(11)] = inst_11736);
(statearr_11758[(10)] = inst_11719__$1);
return statearr_11758;
})();var statearr_11759_11778 = state_11747__$1;(statearr_11759_11778[(2)] = null);
(statearr_11759_11778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (9)))
{var inst_11727 = (state_11747[(8)]);var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11747__$1,(11),out,inst_11727);
} else
{if((state_val_11748 === (5)))
{var inst_11741 = cljs.core.async.close_BANG_.call(null,out);var state_11747__$1 = state_11747;var statearr_11760_11779 = state_11747__$1;(statearr_11760_11779[(2)] = inst_11741);
(statearr_11760_11779[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (10)))
{var inst_11739 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11761_11780 = state_11747__$1;(statearr_11761_11780[(2)] = inst_11739);
(statearr_11761_11780[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (8)))
{var inst_11728 = (state_11747[(9)]);var inst_11719 = (state_11747[(10)]);var inst_11726 = (state_11747[(7)]);var inst_11727 = (state_11747[(8)]);var inst_11731 = (function (){var c = inst_11728;var v = inst_11727;var vec__11724 = inst_11726;var cs = inst_11719;return ((function (c,v,vec__11724,cs,inst_11728,inst_11719,inst_11726,inst_11727,state_val_11748,c__6421__auto___11771,out){
return (function (p1__11664_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11664_SHARP_);
});
;})(c,v,vec__11724,cs,inst_11728,inst_11719,inst_11726,inst_11727,state_val_11748,c__6421__auto___11771,out))
})();var inst_11732 = cljs.core.filterv.call(null,inst_11731,inst_11719);var inst_11719__$1 = inst_11732;var state_11747__$1 = (function (){var statearr_11762 = state_11747;(statearr_11762[(10)] = inst_11719__$1);
return statearr_11762;
})();var statearr_11763_11781 = state_11747__$1;(statearr_11763_11781[(2)] = null);
(statearr_11763_11781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11771,out))
;return ((function (switch__6406__auto__,c__6421__auto___11771,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11767 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11767[(0)] = state_machine__6407__auto__);
(statearr_11767[(1)] = (1));
return statearr_11767;
});
var state_machine__6407__auto____1 = (function (state_11747){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11768){if((e11768 instanceof Object))
{var ex__6410__auto__ = e11768;var statearr_11769_11782 = state_11747;(statearr_11769_11782[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11768;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11783 = state_11747;
state_11747 = G__11783;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11747){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11771,out))
})();var state__6423__auto__ = (function (){var statearr_11770 = f__6422__auto__.call(null);(statearr_11770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11771);
return statearr_11770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11771,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___11876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11876,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11876,out){
return (function (state_11853){var state_val_11854 = (state_11853[(1)]);if((state_val_11854 === (7)))
{var inst_11835 = (state_11853[(7)]);var inst_11835__$1 = (state_11853[(2)]);var inst_11836 = (inst_11835__$1 == null);var inst_11837 = cljs.core.not.call(null,inst_11836);var state_11853__$1 = (function (){var statearr_11855 = state_11853;(statearr_11855[(7)] = inst_11835__$1);
return statearr_11855;
})();if(inst_11837)
{var statearr_11856_11877 = state_11853__$1;(statearr_11856_11877[(1)] = (8));
} else
{var statearr_11857_11878 = state_11853__$1;(statearr_11857_11878[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (1)))
{var inst_11830 = (0);var state_11853__$1 = (function (){var statearr_11858 = state_11853;(statearr_11858[(8)] = inst_11830);
return statearr_11858;
})();var statearr_11859_11879 = state_11853__$1;(statearr_11859_11879[(2)] = null);
(statearr_11859_11879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (4)))
{var state_11853__$1 = state_11853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11853__$1,(7),ch);
} else
{if((state_val_11854 === (6)))
{var inst_11848 = (state_11853[(2)]);var state_11853__$1 = state_11853;var statearr_11860_11880 = state_11853__$1;(statearr_11860_11880[(2)] = inst_11848);
(statearr_11860_11880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (3)))
{var inst_11850 = (state_11853[(2)]);var inst_11851 = cljs.core.async.close_BANG_.call(null,out);var state_11853__$1 = (function (){var statearr_11861 = state_11853;(statearr_11861[(9)] = inst_11850);
return statearr_11861;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11853__$1,inst_11851);
} else
{if((state_val_11854 === (2)))
{var inst_11830 = (state_11853[(8)]);var inst_11832 = (inst_11830 < n);var state_11853__$1 = state_11853;if(cljs.core.truth_(inst_11832))
{var statearr_11862_11881 = state_11853__$1;(statearr_11862_11881[(1)] = (4));
} else
{var statearr_11863_11882 = state_11853__$1;(statearr_11863_11882[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (11)))
{var inst_11830 = (state_11853[(8)]);var inst_11840 = (state_11853[(2)]);var inst_11841 = (inst_11830 + (1));var inst_11830__$1 = inst_11841;var state_11853__$1 = (function (){var statearr_11864 = state_11853;(statearr_11864[(8)] = inst_11830__$1);
(statearr_11864[(10)] = inst_11840);
return statearr_11864;
})();var statearr_11865_11883 = state_11853__$1;(statearr_11865_11883[(2)] = null);
(statearr_11865_11883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (9)))
{var state_11853__$1 = state_11853;var statearr_11866_11884 = state_11853__$1;(statearr_11866_11884[(2)] = null);
(statearr_11866_11884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (5)))
{var state_11853__$1 = state_11853;var statearr_11867_11885 = state_11853__$1;(statearr_11867_11885[(2)] = null);
(statearr_11867_11885[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (10)))
{var inst_11845 = (state_11853[(2)]);var state_11853__$1 = state_11853;var statearr_11868_11886 = state_11853__$1;(statearr_11868_11886[(2)] = inst_11845);
(statearr_11868_11886[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11854 === (8)))
{var inst_11835 = (state_11853[(7)]);var state_11853__$1 = state_11853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11853__$1,(11),out,inst_11835);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11876,out))
;return ((function (switch__6406__auto__,c__6421__auto___11876,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11872 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11872[(0)] = state_machine__6407__auto__);
(statearr_11872[(1)] = (1));
return statearr_11872;
});
var state_machine__6407__auto____1 = (function (state_11853){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11873){if((e11873 instanceof Object))
{var ex__6410__auto__ = e11873;var statearr_11874_11887 = state_11853;(statearr_11874_11887[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11873;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11888 = state_11853;
state_11853 = G__11888;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11853){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11876,out))
})();var state__6423__auto__ = (function (){var statearr_11875 = f__6422__auto__.call(null);(statearr_11875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11876);
return statearr_11875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11876,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___11985 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11985,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11985,out){
return (function (state_11960){var state_val_11961 = (state_11960[(1)]);if((state_val_11961 === (7)))
{var inst_11955 = (state_11960[(2)]);var state_11960__$1 = state_11960;var statearr_11962_11986 = state_11960__$1;(statearr_11962_11986[(2)] = inst_11955);
(statearr_11962_11986[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (1)))
{var inst_11937 = null;var state_11960__$1 = (function (){var statearr_11963 = state_11960;(statearr_11963[(7)] = inst_11937);
return statearr_11963;
})();var statearr_11964_11987 = state_11960__$1;(statearr_11964_11987[(2)] = null);
(statearr_11964_11987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (4)))
{var inst_11940 = (state_11960[(8)]);var inst_11940__$1 = (state_11960[(2)]);var inst_11941 = (inst_11940__$1 == null);var inst_11942 = cljs.core.not.call(null,inst_11941);var state_11960__$1 = (function (){var statearr_11965 = state_11960;(statearr_11965[(8)] = inst_11940__$1);
return statearr_11965;
})();if(inst_11942)
{var statearr_11966_11988 = state_11960__$1;(statearr_11966_11988[(1)] = (5));
} else
{var statearr_11967_11989 = state_11960__$1;(statearr_11967_11989[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (6)))
{var state_11960__$1 = state_11960;var statearr_11968_11990 = state_11960__$1;(statearr_11968_11990[(2)] = null);
(statearr_11968_11990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (3)))
{var inst_11957 = (state_11960[(2)]);var inst_11958 = cljs.core.async.close_BANG_.call(null,out);var state_11960__$1 = (function (){var statearr_11969 = state_11960;(statearr_11969[(9)] = inst_11957);
return statearr_11969;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11960__$1,inst_11958);
} else
{if((state_val_11961 === (2)))
{var state_11960__$1 = state_11960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11960__$1,(4),ch);
} else
{if((state_val_11961 === (11)))
{var inst_11940 = (state_11960[(8)]);var inst_11949 = (state_11960[(2)]);var inst_11937 = inst_11940;var state_11960__$1 = (function (){var statearr_11970 = state_11960;(statearr_11970[(10)] = inst_11949);
(statearr_11970[(7)] = inst_11937);
return statearr_11970;
})();var statearr_11971_11991 = state_11960__$1;(statearr_11971_11991[(2)] = null);
(statearr_11971_11991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (9)))
{var inst_11940 = (state_11960[(8)]);var state_11960__$1 = state_11960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11960__$1,(11),out,inst_11940);
} else
{if((state_val_11961 === (5)))
{var inst_11940 = (state_11960[(8)]);var inst_11937 = (state_11960[(7)]);var inst_11944 = cljs.core._EQ_.call(null,inst_11940,inst_11937);var state_11960__$1 = state_11960;if(inst_11944)
{var statearr_11973_11992 = state_11960__$1;(statearr_11973_11992[(1)] = (8));
} else
{var statearr_11974_11993 = state_11960__$1;(statearr_11974_11993[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (10)))
{var inst_11952 = (state_11960[(2)]);var state_11960__$1 = state_11960;var statearr_11975_11994 = state_11960__$1;(statearr_11975_11994[(2)] = inst_11952);
(statearr_11975_11994[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11961 === (8)))
{var inst_11937 = (state_11960[(7)]);var tmp11972 = inst_11937;var inst_11937__$1 = tmp11972;var state_11960__$1 = (function (){var statearr_11976 = state_11960;(statearr_11976[(7)] = inst_11937__$1);
return statearr_11976;
})();var statearr_11977_11995 = state_11960__$1;(statearr_11977_11995[(2)] = null);
(statearr_11977_11995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11985,out))
;return ((function (switch__6406__auto__,c__6421__auto___11985,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11981 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11981[(0)] = state_machine__6407__auto__);
(statearr_11981[(1)] = (1));
return statearr_11981;
});
var state_machine__6407__auto____1 = (function (state_11960){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11982){if((e11982 instanceof Object))
{var ex__6410__auto__ = e11982;var statearr_11983_11996 = state_11960;(statearr_11983_11996[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11982;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11997 = state_11960;
state_11960 = G__11997;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11960){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11985,out))
})();var state__6423__auto__ = (function (){var statearr_11984 = f__6422__auto__.call(null);(statearr_11984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11985);
return statearr_11984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11985,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___12132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12132,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12132,out){
return (function (state_12102){var state_val_12103 = (state_12102[(1)]);if((state_val_12103 === (7)))
{var inst_12098 = (state_12102[(2)]);var state_12102__$1 = state_12102;var statearr_12104_12133 = state_12102__$1;(statearr_12104_12133[(2)] = inst_12098);
(statearr_12104_12133[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (1)))
{var inst_12065 = (new Array(n));var inst_12066 = inst_12065;var inst_12067 = (0);var state_12102__$1 = (function (){var statearr_12105 = state_12102;(statearr_12105[(7)] = inst_12067);
(statearr_12105[(8)] = inst_12066);
return statearr_12105;
})();var statearr_12106_12134 = state_12102__$1;(statearr_12106_12134[(2)] = null);
(statearr_12106_12134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (4)))
{var inst_12070 = (state_12102[(9)]);var inst_12070__$1 = (state_12102[(2)]);var inst_12071 = (inst_12070__$1 == null);var inst_12072 = cljs.core.not.call(null,inst_12071);var state_12102__$1 = (function (){var statearr_12107 = state_12102;(statearr_12107[(9)] = inst_12070__$1);
return statearr_12107;
})();if(inst_12072)
{var statearr_12108_12135 = state_12102__$1;(statearr_12108_12135[(1)] = (5));
} else
{var statearr_12109_12136 = state_12102__$1;(statearr_12109_12136[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (15)))
{var inst_12092 = (state_12102[(2)]);var state_12102__$1 = state_12102;var statearr_12110_12137 = state_12102__$1;(statearr_12110_12137[(2)] = inst_12092);
(statearr_12110_12137[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (13)))
{var state_12102__$1 = state_12102;var statearr_12111_12138 = state_12102__$1;(statearr_12111_12138[(2)] = null);
(statearr_12111_12138[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (6)))
{var inst_12067 = (state_12102[(7)]);var inst_12088 = (inst_12067 > (0));var state_12102__$1 = state_12102;if(cljs.core.truth_(inst_12088))
{var statearr_12112_12139 = state_12102__$1;(statearr_12112_12139[(1)] = (12));
} else
{var statearr_12113_12140 = state_12102__$1;(statearr_12113_12140[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (3)))
{var inst_12100 = (state_12102[(2)]);var state_12102__$1 = state_12102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12102__$1,inst_12100);
} else
{if((state_val_12103 === (12)))
{var inst_12066 = (state_12102[(8)]);var inst_12090 = cljs.core.vec.call(null,inst_12066);var state_12102__$1 = state_12102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12102__$1,(15),out,inst_12090);
} else
{if((state_val_12103 === (2)))
{var state_12102__$1 = state_12102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12102__$1,(4),ch);
} else
{if((state_val_12103 === (11)))
{var inst_12082 = (state_12102[(2)]);var inst_12083 = (new Array(n));var inst_12066 = inst_12083;var inst_12067 = (0);var state_12102__$1 = (function (){var statearr_12114 = state_12102;(statearr_12114[(7)] = inst_12067);
(statearr_12114[(10)] = inst_12082);
(statearr_12114[(8)] = inst_12066);
return statearr_12114;
})();var statearr_12115_12141 = state_12102__$1;(statearr_12115_12141[(2)] = null);
(statearr_12115_12141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (9)))
{var inst_12066 = (state_12102[(8)]);var inst_12080 = cljs.core.vec.call(null,inst_12066);var state_12102__$1 = state_12102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12102__$1,(11),out,inst_12080);
} else
{if((state_val_12103 === (5)))
{var inst_12067 = (state_12102[(7)]);var inst_12075 = (state_12102[(11)]);var inst_12070 = (state_12102[(9)]);var inst_12066 = (state_12102[(8)]);var inst_12074 = (inst_12066[inst_12067] = inst_12070);var inst_12075__$1 = (inst_12067 + (1));var inst_12076 = (inst_12075__$1 < n);var state_12102__$1 = (function (){var statearr_12116 = state_12102;(statearr_12116[(11)] = inst_12075__$1);
(statearr_12116[(12)] = inst_12074);
return statearr_12116;
})();if(cljs.core.truth_(inst_12076))
{var statearr_12117_12142 = state_12102__$1;(statearr_12117_12142[(1)] = (8));
} else
{var statearr_12118_12143 = state_12102__$1;(statearr_12118_12143[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (14)))
{var inst_12095 = (state_12102[(2)]);var inst_12096 = cljs.core.async.close_BANG_.call(null,out);var state_12102__$1 = (function (){var statearr_12120 = state_12102;(statearr_12120[(13)] = inst_12095);
return statearr_12120;
})();var statearr_12121_12144 = state_12102__$1;(statearr_12121_12144[(2)] = inst_12096);
(statearr_12121_12144[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (10)))
{var inst_12086 = (state_12102[(2)]);var state_12102__$1 = state_12102;var statearr_12122_12145 = state_12102__$1;(statearr_12122_12145[(2)] = inst_12086);
(statearr_12122_12145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12103 === (8)))
{var inst_12075 = (state_12102[(11)]);var inst_12066 = (state_12102[(8)]);var tmp12119 = inst_12066;var inst_12066__$1 = tmp12119;var inst_12067 = inst_12075;var state_12102__$1 = (function (){var statearr_12123 = state_12102;(statearr_12123[(7)] = inst_12067);
(statearr_12123[(8)] = inst_12066__$1);
return statearr_12123;
})();var statearr_12124_12146 = state_12102__$1;(statearr_12124_12146[(2)] = null);
(statearr_12124_12146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12132,out))
;return ((function (switch__6406__auto__,c__6421__auto___12132,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12128[(0)] = state_machine__6407__auto__);
(statearr_12128[(1)] = (1));
return statearr_12128;
});
var state_machine__6407__auto____1 = (function (state_12102){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12102);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12129){if((e12129 instanceof Object))
{var ex__6410__auto__ = e12129;var statearr_12130_12147 = state_12102;(statearr_12130_12147[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12148 = state_12102;
state_12102 = G__12148;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12102){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12132,out))
})();var state__6423__auto__ = (function (){var statearr_12131 = f__6422__auto__.call(null);(statearr_12131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12132);
return statearr_12131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12132,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___12291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12291,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12291,out){
return (function (state_12261){var state_val_12262 = (state_12261[(1)]);if((state_val_12262 === (7)))
{var inst_12257 = (state_12261[(2)]);var state_12261__$1 = state_12261;var statearr_12263_12292 = state_12261__$1;(statearr_12263_12292[(2)] = inst_12257);
(statearr_12263_12292[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (1)))
{var inst_12220 = [];var inst_12221 = inst_12220;var inst_12222 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12261__$1 = (function (){var statearr_12264 = state_12261;(statearr_12264[(7)] = inst_12222);
(statearr_12264[(8)] = inst_12221);
return statearr_12264;
})();var statearr_12265_12293 = state_12261__$1;(statearr_12265_12293[(2)] = null);
(statearr_12265_12293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (4)))
{var inst_12225 = (state_12261[(9)]);var inst_12225__$1 = (state_12261[(2)]);var inst_12226 = (inst_12225__$1 == null);var inst_12227 = cljs.core.not.call(null,inst_12226);var state_12261__$1 = (function (){var statearr_12266 = state_12261;(statearr_12266[(9)] = inst_12225__$1);
return statearr_12266;
})();if(inst_12227)
{var statearr_12267_12294 = state_12261__$1;(statearr_12267_12294[(1)] = (5));
} else
{var statearr_12268_12295 = state_12261__$1;(statearr_12268_12295[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (15)))
{var inst_12251 = (state_12261[(2)]);var state_12261__$1 = state_12261;var statearr_12269_12296 = state_12261__$1;(statearr_12269_12296[(2)] = inst_12251);
(statearr_12269_12296[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (13)))
{var state_12261__$1 = state_12261;var statearr_12270_12297 = state_12261__$1;(statearr_12270_12297[(2)] = null);
(statearr_12270_12297[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (6)))
{var inst_12221 = (state_12261[(8)]);var inst_12246 = inst_12221.length;var inst_12247 = (inst_12246 > (0));var state_12261__$1 = state_12261;if(cljs.core.truth_(inst_12247))
{var statearr_12271_12298 = state_12261__$1;(statearr_12271_12298[(1)] = (12));
} else
{var statearr_12272_12299 = state_12261__$1;(statearr_12272_12299[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (3)))
{var inst_12259 = (state_12261[(2)]);var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12261__$1,inst_12259);
} else
{if((state_val_12262 === (12)))
{var inst_12221 = (state_12261[(8)]);var inst_12249 = cljs.core.vec.call(null,inst_12221);var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12261__$1,(15),out,inst_12249);
} else
{if((state_val_12262 === (2)))
{var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12261__$1,(4),ch);
} else
{if((state_val_12262 === (11)))
{var inst_12225 = (state_12261[(9)]);var inst_12229 = (state_12261[(10)]);var inst_12239 = (state_12261[(2)]);var inst_12240 = [];var inst_12241 = inst_12240.push(inst_12225);var inst_12221 = inst_12240;var inst_12222 = inst_12229;var state_12261__$1 = (function (){var statearr_12273 = state_12261;(statearr_12273[(11)] = inst_12239);
(statearr_12273[(7)] = inst_12222);
(statearr_12273[(8)] = inst_12221);
(statearr_12273[(12)] = inst_12241);
return statearr_12273;
})();var statearr_12274_12300 = state_12261__$1;(statearr_12274_12300[(2)] = null);
(statearr_12274_12300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (9)))
{var inst_12221 = (state_12261[(8)]);var inst_12237 = cljs.core.vec.call(null,inst_12221);var state_12261__$1 = state_12261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12261__$1,(11),out,inst_12237);
} else
{if((state_val_12262 === (5)))
{var inst_12222 = (state_12261[(7)]);var inst_12225 = (state_12261[(9)]);var inst_12229 = (state_12261[(10)]);var inst_12229__$1 = f.call(null,inst_12225);var inst_12230 = cljs.core._EQ_.call(null,inst_12229__$1,inst_12222);var inst_12231 = cljs.core.keyword_identical_QMARK_.call(null,inst_12222,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12232 = (inst_12230) || (inst_12231);var state_12261__$1 = (function (){var statearr_12275 = state_12261;(statearr_12275[(10)] = inst_12229__$1);
return statearr_12275;
})();if(cljs.core.truth_(inst_12232))
{var statearr_12276_12301 = state_12261__$1;(statearr_12276_12301[(1)] = (8));
} else
{var statearr_12277_12302 = state_12261__$1;(statearr_12277_12302[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (14)))
{var inst_12254 = (state_12261[(2)]);var inst_12255 = cljs.core.async.close_BANG_.call(null,out);var state_12261__$1 = (function (){var statearr_12279 = state_12261;(statearr_12279[(13)] = inst_12254);
return statearr_12279;
})();var statearr_12280_12303 = state_12261__$1;(statearr_12280_12303[(2)] = inst_12255);
(statearr_12280_12303[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (10)))
{var inst_12244 = (state_12261[(2)]);var state_12261__$1 = state_12261;var statearr_12281_12304 = state_12261__$1;(statearr_12281_12304[(2)] = inst_12244);
(statearr_12281_12304[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12262 === (8)))
{var inst_12221 = (state_12261[(8)]);var inst_12225 = (state_12261[(9)]);var inst_12229 = (state_12261[(10)]);var inst_12234 = inst_12221.push(inst_12225);var tmp12278 = inst_12221;var inst_12221__$1 = tmp12278;var inst_12222 = inst_12229;var state_12261__$1 = (function (){var statearr_12282 = state_12261;(statearr_12282[(7)] = inst_12222);
(statearr_12282[(8)] = inst_12221__$1);
(statearr_12282[(14)] = inst_12234);
return statearr_12282;
})();var statearr_12283_12305 = state_12261__$1;(statearr_12283_12305[(2)] = null);
(statearr_12283_12305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12291,out))
;return ((function (switch__6406__auto__,c__6421__auto___12291,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12287[(0)] = state_machine__6407__auto__);
(statearr_12287[(1)] = (1));
return statearr_12287;
});
var state_machine__6407__auto____1 = (function (state_12261){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12261);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object))
{var ex__6410__auto__ = e12288;var statearr_12289_12306 = state_12261;(statearr_12289_12306[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12288;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12307 = state_12261;
state_12261 = G__12307;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12261){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12291,out))
})();var state__6423__auto__ = (function (){var statearr_12290 = f__6422__auto__.call(null);(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12291);
return statearr_12290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12291,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map