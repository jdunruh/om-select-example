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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20802 = (function (f,fn_handler,meta20803){
this.f = f;
this.fn_handler = fn_handler;
this.meta20803 = meta20803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20802.cljs$lang$type = true;
cljs.core.async.t20802.cljs$lang$ctorStr = "cljs.core.async/t20802";
cljs.core.async.t20802.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20802");
});
cljs.core.async.t20802.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20804){var self__ = this;
var _20804__$1 = this;return self__.meta20803;
});
cljs.core.async.t20802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20804,meta20803__$1){var self__ = this;
var _20804__$1 = this;return (new cljs.core.async.t20802(self__.f,self__.fn_handler,meta20803__$1));
});
cljs.core.async.__GT_t20802 = (function __GT_t20802(f__$1,fn_handler__$1,meta20803){return (new cljs.core.async.t20802(f__$1,fn_handler__$1,meta20803));
});
}
return (new cljs.core.async.t20802(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20806 = buff;if(G__20806)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__20806.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20806.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20806);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20806);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_20817 = (function (){var G__20814 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20814) : cljs.core.deref.call(null,G__20814));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__20815_20818 = val_20817;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20815_20818) : fn1.call(null,G__20815_20818));
} else
{cljs.core.async.impl.dispatch.run(((function (val_20817,ret){
return (function (){var G__20816 = val_20817;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20816) : fn1.call(null,G__20816));
});})(val_20817,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__20827 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20827) : cljs.core.deref.call(null,G__20827));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__20828 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20828) : cljs.core.deref.call(null,G__20828));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__20829_20831 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20829_20831) : fn1.call(null,G__20829_20831));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__20830 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20830) : fn1.call(null,G__20830));
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4455__auto___20832 = n;var x_20833 = (0);while(true){
if((x_20833 < n__4455__auto___20832))
{(a[x_20833] = (0));
{
var G__20834 = (x_20833 + (1));
x_20833 = G__20834;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__20835 = (i + (1));
i = G__20835;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__20843 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20843) : cljs.core.atom.call(null,G__20843));
})();if(typeof cljs.core.async.t20844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20844 = (function (flag,alt_flag,meta20845){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20845 = meta20845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20844.cljs$lang$type = true;
cljs.core.async.t20844.cljs$lang$ctorStr = "cljs.core.async/t20844";
cljs.core.async.t20844.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20844");
});})(flag))
;
cljs.core.async.t20844.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__20847 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20847) : cljs.core.deref.call(null,G__20847));
});})(flag))
;
cljs.core.async.t20844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__20848_20850 = self__.flag;var G__20849_20851 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20848_20850,G__20849_20851) : cljs.core.reset_BANG_.call(null,G__20848_20850,G__20849_20851));
return true;
});})(flag))
;
cljs.core.async.t20844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20846){var self__ = this;
var _20846__$1 = this;return self__.meta20845;
});})(flag))
;
cljs.core.async.t20844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20846,meta20845__$1){var self__ = this;
var _20846__$1 = this;return (new cljs.core.async.t20844(self__.flag,self__.alt_flag,meta20845__$1));
});})(flag))
;
cljs.core.async.__GT_t20844 = ((function (flag){
return (function __GT_t20844(flag__$1,alt_flag__$1,meta20845){return (new cljs.core.async.t20844(flag__$1,alt_flag__$1,meta20845));
});})(flag))
;
}
return (new cljs.core.async.t20844(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20855 = (function (cb,flag,alt_handler,meta20856){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20856 = meta20856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20855.cljs$lang$type = true;
cljs.core.async.t20855.cljs$lang$ctorStr = "cljs.core.async/t20855";
cljs.core.async.t20855.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20855");
});
cljs.core.async.t20855.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20857){var self__ = this;
var _20857__$1 = this;return self__.meta20856;
});
cljs.core.async.t20855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20857,meta20856__$1){var self__ = this;
var _20857__$1 = this;return (new cljs.core.async.t20855(self__.cb,self__.flag,self__.alt_handler,meta20856__$1));
});
cljs.core.async.__GT_t20855 = (function __GT_t20855(cb__$1,flag__$1,alt_handler__$1,meta20856){return (new cljs.core.async.t20855(cb__$1,flag__$1,alt_handler__$1,meta20856));
});
}
return (new cljs.core.async.t20855(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__20865 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20865) : port.call(null,G__20865));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__20866 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20866) : port.call(null,G__20866));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20858_SHARP_){var G__20867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20858_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20867) : fret.call(null,G__20867));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20859_SHARP_){var G__20868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20859_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20868) : fret.call(null,G__20868));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20869 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20869) : cljs.core.deref.call(null,G__20869));
})(),(function (){var or__3585__auto__ = wport;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20870 = (i + (1));
i = G__20870;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$85))
{var temp__4126__auto__ = (function (){var and__3573__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3573__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3573__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$85], null));
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
var alts_BANG___delegate = function (ports,p__20871){var map__20873 = p__20871;var map__20873__$1 = ((cljs.core.seq_QMARK_(map__20873))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20873):map__20873);var opts = map__20873__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__20871 = null;if (arguments.length > 1) {
  p__20871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20871);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20874){
var ports = cljs.core.first(arglist__20874);
var p__20871 = cljs.core.rest(arglist__20874);
return alts_BANG___delegate(ports,p__20871);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20888 = (function (ch,f,map_LT_,meta20889){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20889 = meta20889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20888.cljs$lang$type = true;
cljs.core.async.t20888.cljs$lang$ctorStr = "cljs.core.async/t20888";
cljs.core.async.t20888.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20888");
});
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20891 = (function (fn1,_,meta20889,ch,f,map_LT_,meta20892){
this.fn1 = fn1;
this._ = _;
this.meta20889 = meta20889;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20892 = meta20892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20891.cljs$lang$type = true;
cljs.core.async.t20891.cljs$lang$ctorStr = "cljs.core.async/t20891";
cljs.core.async.t20891.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20891");
});})(___$1))
;
cljs.core.async.t20891.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t20891.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__20894 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__20894) : cljs.core.async.impl.protocols.lock_id.call(null,G__20894));
});})(___$1))
;
cljs.core.async.t20891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20875_SHARP_){var G__20895 = (((p1__20875_SHARP_ == null))?null:(function (){var G__20896 = p1__20875_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20896) : self__.f.call(null,G__20896));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20895) : f1.call(null,G__20895));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20893){var self__ = this;
var _20893__$1 = this;return self__.meta20892;
});})(___$1))
;
cljs.core.async.t20891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20893,meta20892__$1){var self__ = this;
var _20893__$1 = this;return (new cljs.core.async.t20891(self__.fn1,self__._,self__.meta20889,self__.ch,self__.f,self__.map_LT_,meta20892__$1));
});})(___$1))
;
cljs.core.async.__GT_t20891 = ((function (___$1){
return (function __GT_t20891(fn1__$1,___$2,meta20889__$1,ch__$2,f__$2,map_LT___$2,meta20892){return (new cljs.core.async.t20891(fn1__$1,___$2,meta20889__$1,ch__$2,f__$2,map_LT___$2,meta20892));
});})(___$1))
;
}
return (new cljs.core.async.t20891(fn1,___$1,self__.meta20889,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3573__auto__ = ret;if(cljs.core.truth_(and__3573__auto__))
{return !(((function (){var G__20897 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20897) : cljs.core.deref.call(null,G__20897));
})() == null));
} else
{return and__3573__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__20898 = (function (){var G__20899 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20899) : cljs.core.deref.call(null,G__20899));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20898) : self__.f.call(null,G__20898));
})());
} else
{return ret;
}
});
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t20888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20890){var self__ = this;
var _20890__$1 = this;return self__.meta20889;
});
cljs.core.async.t20888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20890,meta20889__$1){var self__ = this;
var _20890__$1 = this;return (new cljs.core.async.t20888(self__.ch,self__.f,self__.map_LT_,meta20889__$1));
});
cljs.core.async.__GT_t20888 = (function __GT_t20888(ch__$1,f__$1,map_LT___$1,meta20889){return (new cljs.core.async.t20888(ch__$1,f__$1,map_LT___$1,meta20889));
});
}
return (new cljs.core.async.t20888(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20904 = (function (ch,f,map_GT_,meta20905){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20905 = meta20905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20904.cljs$lang$type = true;
cljs.core.async.t20904.cljs$lang$ctorStr = "cljs.core.async/t20904";
cljs.core.async.t20904.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20904");
});
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__20907 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20907) : self__.f.call(null,G__20907));
})(),fn1);
});
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20906){var self__ = this;
var _20906__$1 = this;return self__.meta20905;
});
cljs.core.async.t20904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20906,meta20905__$1){var self__ = this;
var _20906__$1 = this;return (new cljs.core.async.t20904(self__.ch,self__.f,self__.map_GT_,meta20905__$1));
});
cljs.core.async.__GT_t20904 = (function __GT_t20904(ch__$1,f__$1,map_GT___$1,meta20905){return (new cljs.core.async.t20904(ch__$1,f__$1,map_GT___$1,meta20905));
});
}
return (new cljs.core.async.t20904(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20912 = (function (ch,p,filter_GT_,meta20913){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20913 = meta20913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20912.cljs$lang$type = true;
cljs.core.async.t20912.cljs$lang$ctorStr = "cljs.core.async/t20912";
cljs.core.async.t20912.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t20912");
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__20915 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__20915) : self__.p.call(null,G__20915));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t20912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20914){var self__ = this;
var _20914__$1 = this;return self__.meta20913;
});
cljs.core.async.t20912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20914,meta20913__$1){var self__ = this;
var _20914__$1 = this;return (new cljs.core.async.t20912(self__.ch,self__.p,self__.filter_GT_,meta20913__$1));
});
cljs.core.async.__GT_t20912 = (function __GT_t20912(ch__$1,p__$1,filter_GT___$1,meta20913){return (new cljs.core.async.t20912(ch__$1,p__$1,filter_GT___$1,meta20913));
});
}
return (new cljs.core.async.t20912(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___21003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___21003,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___21003,out){
return (function (state_20981){var state_val_20982 = (state_20981[(1)]);if((state_val_20982 === (7)))
{var inst_20977 = (state_20981[(2)]);var state_20981__$1 = state_20981;var statearr_20983_21004 = state_20981__$1;(statearr_20983_21004[(2)] = inst_20977);
(statearr_20983_21004[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (1)))
{var state_20981__$1 = state_20981;var statearr_20984_21005 = state_20981__$1;(statearr_20984_21005[(2)] = null);
(statearr_20984_21005[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (4)))
{var inst_20963 = (state_20981[(7)]);var inst_20963__$1 = (state_20981[(2)]);var inst_20964 = (inst_20963__$1 == null);var state_20981__$1 = (function (){var statearr_20985 = state_20981;(statearr_20985[(7)] = inst_20963__$1);
return statearr_20985;
})();if(cljs.core.truth_(inst_20964))
{var statearr_20986_21006 = state_20981__$1;(statearr_20986_21006[(1)] = (5));
} else
{var statearr_20987_21007 = state_20981__$1;(statearr_20987_21007[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (6)))
{var inst_20963 = (state_20981[(7)]);var inst_20968 = (function (){var G__20988 = inst_20963;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20988) : p.call(null,G__20988));
})();var state_20981__$1 = state_20981;if(cljs.core.truth_(inst_20968))
{var statearr_20989_21008 = state_20981__$1;(statearr_20989_21008[(1)] = (8));
} else
{var statearr_20990_21009 = state_20981__$1;(statearr_20990_21009[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (3)))
{var inst_20979 = (state_20981[(2)]);var state_20981__$1 = state_20981;return cljs.core.async.impl.ioc_helpers.return_chan(state_20981__$1,inst_20979);
} else
{if((state_val_20982 === (2)))
{var state_20981__$1 = state_20981;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20981__$1,(4),ch);
} else
{if((state_val_20982 === (11)))
{var inst_20971 = (state_20981[(2)]);var state_20981__$1 = state_20981;var statearr_20991_21010 = state_20981__$1;(statearr_20991_21010[(2)] = inst_20971);
(statearr_20991_21010[(1)] = (10));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (9)))
{var state_20981__$1 = state_20981;var statearr_20992_21011 = state_20981__$1;(statearr_20992_21011[(2)] = null);
(statearr_20992_21011[(1)] = (10));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (5)))
{var inst_20966 = cljs.core.async.close_BANG_(out);var state_20981__$1 = state_20981;var statearr_20993_21012 = state_20981__$1;(statearr_20993_21012[(2)] = inst_20966);
(statearr_20993_21012[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (10)))
{var inst_20974 = (state_20981[(2)]);var state_20981__$1 = (function (){var statearr_20994 = state_20981;(statearr_20994[(8)] = inst_20974);
return statearr_20994;
})();var statearr_20995_21013 = state_20981__$1;(statearr_20995_21013[(2)] = null);
(statearr_20995_21013[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_20982 === (8)))
{var inst_20963 = (state_20981[(7)]);var state_20981__$1 = state_20981;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20981__$1,(11),out,inst_20963);
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
});})(c__6421__auto___21003,out))
;return ((function (switch__6406__auto__,c__6421__auto___21003,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_20999 = [null,null,null,null,null,null,null,null,null];(statearr_20999[(0)] = state_machine__6407__auto__);
(statearr_20999[(1)] = (1));
return statearr_20999;
});
var state_machine__6407__auto____1 = (function (state_20981){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_20981);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object))
{var ex__6410__auto__ = e21000;var statearr_21001_21014 = state_20981;(statearr_21001_21014[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20981);
return cljs.core.constant$keyword$94;
} else
{throw e21000;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21015 = state_20981;
state_20981 = G__21015;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_20981){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_20981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___21003,out))
})();var state__6423__auto__ = (function (){var statearr_21002 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___21003);
return statearr_21002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___21003,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_21185){var state_val_21186 = (state_21185[(1)]);if((state_val_21186 === (7)))
{var inst_21181 = (state_21185[(2)]);var state_21185__$1 = state_21185;var statearr_21187_21229 = state_21185__$1;(statearr_21187_21229[(2)] = inst_21181);
(statearr_21187_21229[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (20)))
{var inst_21151 = (state_21185[(7)]);var inst_21162 = (state_21185[(2)]);var inst_21163 = cljs.core.next(inst_21151);var inst_21137 = inst_21163;var inst_21138 = null;var inst_21139 = (0);var inst_21140 = (0);var state_21185__$1 = (function (){var statearr_21188 = state_21185;(statearr_21188[(8)] = inst_21139);
(statearr_21188[(9)] = inst_21138);
(statearr_21188[(10)] = inst_21137);
(statearr_21188[(11)] = inst_21162);
(statearr_21188[(12)] = inst_21140);
return statearr_21188;
})();var statearr_21189_21230 = state_21185__$1;(statearr_21189_21230[(2)] = null);
(statearr_21189_21230[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (1)))
{var state_21185__$1 = state_21185;var statearr_21190_21231 = state_21185__$1;(statearr_21190_21231[(2)] = null);
(statearr_21190_21231[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (4)))
{var inst_21126 = (state_21185[(13)]);var inst_21126__$1 = (state_21185[(2)]);var inst_21127 = (inst_21126__$1 == null);var state_21185__$1 = (function (){var statearr_21191 = state_21185;(statearr_21191[(13)] = inst_21126__$1);
return statearr_21191;
})();if(cljs.core.truth_(inst_21127))
{var statearr_21192_21232 = state_21185__$1;(statearr_21192_21232[(1)] = (5));
} else
{var statearr_21193_21233 = state_21185__$1;(statearr_21193_21233[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (15)))
{var state_21185__$1 = state_21185;var statearr_21197_21234 = state_21185__$1;(statearr_21197_21234[(2)] = null);
(statearr_21197_21234[(1)] = (16));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (21)))
{var state_21185__$1 = state_21185;var statearr_21198_21235 = state_21185__$1;(statearr_21198_21235[(2)] = null);
(statearr_21198_21235[(1)] = (23));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (13)))
{var inst_21139 = (state_21185[(8)]);var inst_21138 = (state_21185[(9)]);var inst_21137 = (state_21185[(10)]);var inst_21140 = (state_21185[(12)]);var inst_21147 = (state_21185[(2)]);var inst_21148 = (inst_21140 + (1));var tmp21194 = inst_21139;var tmp21195 = inst_21138;var tmp21196 = inst_21137;var inst_21137__$1 = tmp21196;var inst_21138__$1 = tmp21195;var inst_21139__$1 = tmp21194;var inst_21140__$1 = inst_21148;var state_21185__$1 = (function (){var statearr_21199 = state_21185;(statearr_21199[(8)] = inst_21139__$1);
(statearr_21199[(9)] = inst_21138__$1);
(statearr_21199[(10)] = inst_21137__$1);
(statearr_21199[(12)] = inst_21140__$1);
(statearr_21199[(14)] = inst_21147);
return statearr_21199;
})();var statearr_21200_21236 = state_21185__$1;(statearr_21200_21236[(2)] = null);
(statearr_21200_21236[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (22)))
{var state_21185__$1 = state_21185;var statearr_21201_21237 = state_21185__$1;(statearr_21201_21237[(2)] = null);
(statearr_21201_21237[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (6)))
{var inst_21126 = (state_21185[(13)]);var inst_21135 = (function (){var G__21202 = inst_21126;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21202) : f.call(null,G__21202));
})();var inst_21136 = cljs.core.seq(inst_21135);var inst_21137 = inst_21136;var inst_21138 = null;var inst_21139 = (0);var inst_21140 = (0);var state_21185__$1 = (function (){var statearr_21203 = state_21185;(statearr_21203[(8)] = inst_21139);
(statearr_21203[(9)] = inst_21138);
(statearr_21203[(10)] = inst_21137);
(statearr_21203[(12)] = inst_21140);
return statearr_21203;
})();var statearr_21204_21238 = state_21185__$1;(statearr_21204_21238[(2)] = null);
(statearr_21204_21238[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (17)))
{var inst_21151 = (state_21185[(7)]);var inst_21155 = cljs.core.chunk_first(inst_21151);var inst_21156 = cljs.core.chunk_rest(inst_21151);var inst_21157 = cljs.core.count(inst_21155);var inst_21137 = inst_21156;var inst_21138 = inst_21155;var inst_21139 = inst_21157;var inst_21140 = (0);var state_21185__$1 = (function (){var statearr_21205 = state_21185;(statearr_21205[(8)] = inst_21139);
(statearr_21205[(9)] = inst_21138);
(statearr_21205[(10)] = inst_21137);
(statearr_21205[(12)] = inst_21140);
return statearr_21205;
})();var statearr_21206_21239 = state_21185__$1;(statearr_21206_21239[(2)] = null);
(statearr_21206_21239[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (3)))
{var inst_21183 = (state_21185[(2)]);var state_21185__$1 = state_21185;return cljs.core.async.impl.ioc_helpers.return_chan(state_21185__$1,inst_21183);
} else
{if((state_val_21186 === (12)))
{var inst_21171 = (state_21185[(2)]);var state_21185__$1 = state_21185;var statearr_21207_21240 = state_21185__$1;(statearr_21207_21240[(2)] = inst_21171);
(statearr_21207_21240[(1)] = (9));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (2)))
{var state_21185__$1 = state_21185;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21185__$1,(4),in$);
} else
{if((state_val_21186 === (23)))
{var inst_21179 = (state_21185[(2)]);var state_21185__$1 = state_21185;var statearr_21208_21241 = state_21185__$1;(statearr_21208_21241[(2)] = inst_21179);
(statearr_21208_21241[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (19)))
{var inst_21166 = (state_21185[(2)]);var state_21185__$1 = state_21185;var statearr_21209_21242 = state_21185__$1;(statearr_21209_21242[(2)] = inst_21166);
(statearr_21209_21242[(1)] = (16));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (11)))
{var inst_21137 = (state_21185[(10)]);var inst_21151 = (state_21185[(7)]);var inst_21151__$1 = cljs.core.seq(inst_21137);var state_21185__$1 = (function (){var statearr_21210 = state_21185;(statearr_21210[(7)] = inst_21151__$1);
return statearr_21210;
})();if(inst_21151__$1)
{var statearr_21211_21243 = state_21185__$1;(statearr_21211_21243[(1)] = (14));
} else
{var statearr_21212_21244 = state_21185__$1;(statearr_21212_21244[(1)] = (15));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (9)))
{var inst_21173 = (state_21185[(2)]);var inst_21174 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_21185__$1 = (function (){var statearr_21213 = state_21185;(statearr_21213[(15)] = inst_21173);
return statearr_21213;
})();if(cljs.core.truth_(inst_21174))
{var statearr_21214_21245 = state_21185__$1;(statearr_21214_21245[(1)] = (21));
} else
{var statearr_21215_21246 = state_21185__$1;(statearr_21215_21246[(1)] = (22));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (5)))
{var inst_21129 = cljs.core.async.close_BANG_(out);var state_21185__$1 = state_21185;var statearr_21216_21247 = state_21185__$1;(statearr_21216_21247[(2)] = inst_21129);
(statearr_21216_21247[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (14)))
{var inst_21151 = (state_21185[(7)]);var inst_21153 = cljs.core.chunked_seq_QMARK_(inst_21151);var state_21185__$1 = state_21185;if(inst_21153)
{var statearr_21217_21248 = state_21185__$1;(statearr_21217_21248[(1)] = (17));
} else
{var statearr_21218_21249 = state_21185__$1;(statearr_21218_21249[(1)] = (18));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (16)))
{var inst_21169 = (state_21185[(2)]);var state_21185__$1 = state_21185;var statearr_21219_21250 = state_21185__$1;(statearr_21219_21250[(2)] = inst_21169);
(statearr_21219_21250[(1)] = (12));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21186 === (10)))
{var inst_21138 = (state_21185[(9)]);var inst_21140 = (state_21185[(12)]);var inst_21145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21138,inst_21140);var state_21185__$1 = state_21185;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21185__$1,(13),out,inst_21145);
} else
{if((state_val_21186 === (18)))
{var inst_21151 = (state_21185[(7)]);var inst_21160 = cljs.core.first(inst_21151);var state_21185__$1 = state_21185;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21185__$1,(20),out,inst_21160);
} else
{if((state_val_21186 === (8)))
{var inst_21139 = (state_21185[(8)]);var inst_21140 = (state_21185[(12)]);var inst_21142 = (inst_21140 < inst_21139);var inst_21143 = inst_21142;var state_21185__$1 = state_21185;if(cljs.core.truth_(inst_21143))
{var statearr_21220_21251 = state_21185__$1;(statearr_21220_21251[(1)] = (10));
} else
{var statearr_21221_21252 = state_21185__$1;(statearr_21221_21252[(1)] = (11));
}
return cljs.core.constant$keyword$94;
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
var state_machine__6407__auto____0 = (function (){var statearr_21225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21225[(0)] = state_machine__6407__auto__);
(statearr_21225[(1)] = (1));
return statearr_21225;
});
var state_machine__6407__auto____1 = (function (state_21185){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_21185);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21226){if((e21226 instanceof Object))
{var ex__6410__auto__ = e21226;var statearr_21227_21253 = state_21185;(statearr_21227_21253[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21185);
return cljs.core.constant$keyword$94;
} else
{throw e21226;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21254 = state_21185;
state_21185 = G__21254;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_21185){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_21185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_21228 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_21228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6421__auto___21358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___21358){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___21358){
return (function (state_21334){var state_val_21335 = (state_21334[(1)]);if((state_val_21335 === (7)))
{var inst_21330 = (state_21334[(2)]);var state_21334__$1 = state_21334;var statearr_21336_21359 = state_21334__$1;(statearr_21336_21359[(2)] = inst_21330);
(statearr_21336_21359[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (1)))
{var state_21334__$1 = state_21334;var statearr_21337_21360 = state_21334__$1;(statearr_21337_21360[(2)] = null);
(statearr_21337_21360[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (4)))
{var inst_21313 = (state_21334[(7)]);var inst_21313__$1 = (state_21334[(2)]);var inst_21314 = (inst_21313__$1 == null);var state_21334__$1 = (function (){var statearr_21338 = state_21334;(statearr_21338[(7)] = inst_21313__$1);
return statearr_21338;
})();if(cljs.core.truth_(inst_21314))
{var statearr_21339_21361 = state_21334__$1;(statearr_21339_21361[(1)] = (5));
} else
{var statearr_21340_21362 = state_21334__$1;(statearr_21340_21362[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (13)))
{var state_21334__$1 = state_21334;var statearr_21341_21363 = state_21334__$1;(statearr_21341_21363[(2)] = null);
(statearr_21341_21363[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (6)))
{var inst_21313 = (state_21334[(7)]);var state_21334__$1 = state_21334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21334__$1,(11),to,inst_21313);
} else
{if((state_val_21335 === (3)))
{var inst_21332 = (state_21334[(2)]);var state_21334__$1 = state_21334;return cljs.core.async.impl.ioc_helpers.return_chan(state_21334__$1,inst_21332);
} else
{if((state_val_21335 === (12)))
{var state_21334__$1 = state_21334;var statearr_21342_21364 = state_21334__$1;(statearr_21342_21364[(2)] = null);
(statearr_21342_21364[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (2)))
{var state_21334__$1 = state_21334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21334__$1,(4),from);
} else
{if((state_val_21335 === (11)))
{var inst_21323 = (state_21334[(2)]);var state_21334__$1 = state_21334;if(cljs.core.truth_(inst_21323))
{var statearr_21343_21365 = state_21334__$1;(statearr_21343_21365[(1)] = (12));
} else
{var statearr_21344_21366 = state_21334__$1;(statearr_21344_21366[(1)] = (13));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (9)))
{var state_21334__$1 = state_21334;var statearr_21345_21367 = state_21334__$1;(statearr_21345_21367[(2)] = null);
(statearr_21345_21367[(1)] = (10));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (5)))
{var state_21334__$1 = state_21334;if(cljs.core.truth_(close_QMARK_))
{var statearr_21346_21368 = state_21334__$1;(statearr_21346_21368[(1)] = (8));
} else
{var statearr_21347_21369 = state_21334__$1;(statearr_21347_21369[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (14)))
{var inst_21328 = (state_21334[(2)]);var state_21334__$1 = state_21334;var statearr_21348_21370 = state_21334__$1;(statearr_21348_21370[(2)] = inst_21328);
(statearr_21348_21370[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (10)))
{var inst_21320 = (state_21334[(2)]);var state_21334__$1 = state_21334;var statearr_21349_21371 = state_21334__$1;(statearr_21349_21371[(2)] = inst_21320);
(statearr_21349_21371[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21335 === (8)))
{var inst_21317 = cljs.core.async.close_BANG_(to);var state_21334__$1 = state_21334;var statearr_21350_21372 = state_21334__$1;(statearr_21350_21372[(2)] = inst_21317);
(statearr_21350_21372[(1)] = (10));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___21358))
;return ((function (switch__6406__auto__,c__6421__auto___21358){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_21354 = [null,null,null,null,null,null,null,null];(statearr_21354[(0)] = state_machine__6407__auto__);
(statearr_21354[(1)] = (1));
return statearr_21354;
});
var state_machine__6407__auto____1 = (function (state_21334){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_21334);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21355){if((e21355 instanceof Object))
{var ex__6410__auto__ = e21355;var statearr_21356_21373 = state_21334;(statearr_21356_21373[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21334);
return cljs.core.constant$keyword$94;
} else
{throw e21355;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21374 = state_21334;
state_21334 = G__21374;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_21334){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_21334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___21358))
})();var state__6423__auto__ = (function (){var statearr_21357 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___21358);
return statearr_21357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___21358))
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
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6421__auto___21481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___21481,tc,fc){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___21481,tc,fc){
return (function (state_21455){var state_val_21456 = (state_21455[(1)]);if((state_val_21456 === (7)))
{var inst_21451 = (state_21455[(2)]);var state_21455__$1 = state_21455;var statearr_21457_21482 = state_21455__$1;(statearr_21457_21482[(2)] = inst_21451);
(statearr_21457_21482[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (1)))
{var state_21455__$1 = state_21455;var statearr_21458_21483 = state_21455__$1;(statearr_21458_21483[(2)] = null);
(statearr_21458_21483[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (4)))
{var inst_21432 = (state_21455[(7)]);var inst_21432__$1 = (state_21455[(2)]);var inst_21433 = (inst_21432__$1 == null);var state_21455__$1 = (function (){var statearr_21459 = state_21455;(statearr_21459[(7)] = inst_21432__$1);
return statearr_21459;
})();if(cljs.core.truth_(inst_21433))
{var statearr_21460_21484 = state_21455__$1;(statearr_21460_21484[(1)] = (5));
} else
{var statearr_21461_21485 = state_21455__$1;(statearr_21461_21485[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (13)))
{var state_21455__$1 = state_21455;var statearr_21462_21486 = state_21455__$1;(statearr_21462_21486[(2)] = null);
(statearr_21462_21486[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (6)))
{var inst_21432 = (state_21455[(7)]);var inst_21438 = (function (){var G__21463 = inst_21432;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21463) : p.call(null,G__21463));
})();var state_21455__$1 = state_21455;if(cljs.core.truth_(inst_21438))
{var statearr_21464_21487 = state_21455__$1;(statearr_21464_21487[(1)] = (9));
} else
{var statearr_21465_21488 = state_21455__$1;(statearr_21465_21488[(1)] = (10));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (3)))
{var inst_21453 = (state_21455[(2)]);var state_21455__$1 = state_21455;return cljs.core.async.impl.ioc_helpers.return_chan(state_21455__$1,inst_21453);
} else
{if((state_val_21456 === (12)))
{var state_21455__$1 = state_21455;var statearr_21466_21489 = state_21455__$1;(statearr_21466_21489[(2)] = null);
(statearr_21466_21489[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (2)))
{var state_21455__$1 = state_21455;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21455__$1,(4),ch);
} else
{if((state_val_21456 === (11)))
{var inst_21432 = (state_21455[(7)]);var inst_21442 = (state_21455[(2)]);var state_21455__$1 = state_21455;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21455__$1,(8),inst_21442,inst_21432);
} else
{if((state_val_21456 === (9)))
{var state_21455__$1 = state_21455;var statearr_21467_21490 = state_21455__$1;(statearr_21467_21490[(2)] = tc);
(statearr_21467_21490[(1)] = (11));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (5)))
{var inst_21435 = cljs.core.async.close_BANG_(tc);var inst_21436 = cljs.core.async.close_BANG_(fc);var state_21455__$1 = (function (){var statearr_21468 = state_21455;(statearr_21468[(8)] = inst_21435);
return statearr_21468;
})();var statearr_21469_21491 = state_21455__$1;(statearr_21469_21491[(2)] = inst_21436);
(statearr_21469_21491[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (14)))
{var inst_21449 = (state_21455[(2)]);var state_21455__$1 = state_21455;var statearr_21470_21492 = state_21455__$1;(statearr_21470_21492[(2)] = inst_21449);
(statearr_21470_21492[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (10)))
{var state_21455__$1 = state_21455;var statearr_21471_21493 = state_21455__$1;(statearr_21471_21493[(2)] = fc);
(statearr_21471_21493[(1)] = (11));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21456 === (8)))
{var inst_21444 = (state_21455[(2)]);var state_21455__$1 = state_21455;if(cljs.core.truth_(inst_21444))
{var statearr_21472_21494 = state_21455__$1;(statearr_21472_21494[(1)] = (12));
} else
{var statearr_21473_21495 = state_21455__$1;(statearr_21473_21495[(1)] = (13));
}
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___21481,tc,fc))
;return ((function (switch__6406__auto__,c__6421__auto___21481,tc,fc){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_21477 = [null,null,null,null,null,null,null,null,null];(statearr_21477[(0)] = state_machine__6407__auto__);
(statearr_21477[(1)] = (1));
return statearr_21477;
});
var state_machine__6407__auto____1 = (function (state_21455){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_21455);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21478){if((e21478 instanceof Object))
{var ex__6410__auto__ = e21478;var statearr_21479_21496 = state_21455;(statearr_21479_21496[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21455);
return cljs.core.constant$keyword$94;
} else
{throw e21478;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21497 = state_21455;
state_21455 = G__21497;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_21455){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_21455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___21481,tc,fc))
})();var state__6423__auto__ = (function (){var statearr_21480 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___21481);
return statearr_21480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___21481,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_21546){var state_val_21547 = (state_21546[(1)]);if((state_val_21547 === (7)))
{var inst_21542 = (state_21546[(2)]);var state_21546__$1 = state_21546;var statearr_21548_21566 = state_21546__$1;(statearr_21548_21566[(2)] = inst_21542);
(statearr_21548_21566[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21547 === (6)))
{var inst_21532 = (state_21546[(7)]);var inst_21535 = (state_21546[(8)]);var inst_21539 = (function (){var G__21549 = inst_21532;var G__21550 = inst_21535;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21549,G__21550) : f.call(null,G__21549,G__21550));
})();var inst_21532__$1 = inst_21539;var state_21546__$1 = (function (){var statearr_21551 = state_21546;(statearr_21551[(7)] = inst_21532__$1);
return statearr_21551;
})();var statearr_21552_21567 = state_21546__$1;(statearr_21552_21567[(2)] = null);
(statearr_21552_21567[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21547 === (5)))
{var inst_21532 = (state_21546[(7)]);var state_21546__$1 = state_21546;var statearr_21553_21568 = state_21546__$1;(statearr_21553_21568[(2)] = inst_21532);
(statearr_21553_21568[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21547 === (4)))
{var inst_21535 = (state_21546[(8)]);var inst_21535__$1 = (state_21546[(2)]);var inst_21536 = (inst_21535__$1 == null);var state_21546__$1 = (function (){var statearr_21554 = state_21546;(statearr_21554[(8)] = inst_21535__$1);
return statearr_21554;
})();if(cljs.core.truth_(inst_21536))
{var statearr_21555_21569 = state_21546__$1;(statearr_21555_21569[(1)] = (5));
} else
{var statearr_21556_21570 = state_21546__$1;(statearr_21556_21570[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21547 === (3)))
{var inst_21544 = (state_21546[(2)]);var state_21546__$1 = state_21546;return cljs.core.async.impl.ioc_helpers.return_chan(state_21546__$1,inst_21544);
} else
{if((state_val_21547 === (2)))
{var state_21546__$1 = state_21546;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21546__$1,(4),ch);
} else
{if((state_val_21547 === (1)))
{var inst_21532 = init;var state_21546__$1 = (function (){var statearr_21557 = state_21546;(statearr_21557[(7)] = inst_21532);
return statearr_21557;
})();var statearr_21558_21571 = state_21546__$1;(statearr_21558_21571[(2)] = null);
(statearr_21558_21571[(1)] = (2));
return cljs.core.constant$keyword$94;
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
var state_machine__6407__auto____0 = (function (){var statearr_21562 = [null,null,null,null,null,null,null,null,null];(statearr_21562[(0)] = state_machine__6407__auto__);
(statearr_21562[(1)] = (1));
return statearr_21562;
});
var state_machine__6407__auto____1 = (function (state_21546){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_21546);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21563){if((e21563 instanceof Object))
{var ex__6410__auto__ = e21563;var statearr_21564_21572 = state_21546;(statearr_21564_21572[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21546);
return cljs.core.constant$keyword$94;
} else
{throw e21563;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21573 = state_21546;
state_21546 = G__21573;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_21546){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_21546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_21565 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_21565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_21650){var state_val_21651 = (state_21650[(1)]);if((state_val_21651 === (7)))
{var inst_21632 = (state_21650[(2)]);var state_21650__$1 = state_21650;var statearr_21652_21675 = state_21650__$1;(statearr_21652_21675[(2)] = inst_21632);
(statearr_21652_21675[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (1)))
{var inst_21626 = cljs.core.seq(coll);var inst_21627 = inst_21626;var state_21650__$1 = (function (){var statearr_21653 = state_21650;(statearr_21653[(7)] = inst_21627);
return statearr_21653;
})();var statearr_21654_21676 = state_21650__$1;(statearr_21654_21676[(2)] = null);
(statearr_21654_21676[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (4)))
{var inst_21627 = (state_21650[(7)]);var inst_21630 = cljs.core.first(inst_21627);var state_21650__$1 = state_21650;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21650__$1,(7),ch,inst_21630);
} else
{if((state_val_21651 === (13)))
{var inst_21644 = (state_21650[(2)]);var state_21650__$1 = state_21650;var statearr_21655_21677 = state_21650__$1;(statearr_21655_21677[(2)] = inst_21644);
(statearr_21655_21677[(1)] = (10));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (6)))
{var inst_21635 = (state_21650[(2)]);var state_21650__$1 = state_21650;if(cljs.core.truth_(inst_21635))
{var statearr_21656_21678 = state_21650__$1;(statearr_21656_21678[(1)] = (8));
} else
{var statearr_21657_21679 = state_21650__$1;(statearr_21657_21679[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (3)))
{var inst_21648 = (state_21650[(2)]);var state_21650__$1 = state_21650;return cljs.core.async.impl.ioc_helpers.return_chan(state_21650__$1,inst_21648);
} else
{if((state_val_21651 === (12)))
{var state_21650__$1 = state_21650;var statearr_21658_21680 = state_21650__$1;(statearr_21658_21680[(2)] = null);
(statearr_21658_21680[(1)] = (13));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (2)))
{var inst_21627 = (state_21650[(7)]);var state_21650__$1 = state_21650;if(cljs.core.truth_(inst_21627))
{var statearr_21659_21681 = state_21650__$1;(statearr_21659_21681[(1)] = (4));
} else
{var statearr_21660_21682 = state_21650__$1;(statearr_21660_21682[(1)] = (5));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (11)))
{var inst_21641 = cljs.core.async.close_BANG_(ch);var state_21650__$1 = state_21650;var statearr_21661_21683 = state_21650__$1;(statearr_21661_21683[(2)] = inst_21641);
(statearr_21661_21683[(1)] = (13));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (9)))
{var state_21650__$1 = state_21650;if(cljs.core.truth_(close_QMARK_))
{var statearr_21662_21684 = state_21650__$1;(statearr_21662_21684[(1)] = (11));
} else
{var statearr_21663_21685 = state_21650__$1;(statearr_21663_21685[(1)] = (12));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (5)))
{var inst_21627 = (state_21650[(7)]);var state_21650__$1 = state_21650;var statearr_21664_21686 = state_21650__$1;(statearr_21664_21686[(2)] = inst_21627);
(statearr_21664_21686[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (10)))
{var inst_21646 = (state_21650[(2)]);var state_21650__$1 = state_21650;var statearr_21665_21687 = state_21650__$1;(statearr_21665_21687[(2)] = inst_21646);
(statearr_21665_21687[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_21651 === (8)))
{var inst_21627 = (state_21650[(7)]);var inst_21637 = cljs.core.next(inst_21627);var inst_21627__$1 = inst_21637;var state_21650__$1 = (function (){var statearr_21666 = state_21650;(statearr_21666[(7)] = inst_21627__$1);
return statearr_21666;
})();var statearr_21667_21688 = state_21650__$1;(statearr_21667_21688[(2)] = null);
(statearr_21667_21688[(1)] = (2));
return cljs.core.constant$keyword$94;
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
var state_machine__6407__auto____0 = (function (){var statearr_21671 = [null,null,null,null,null,null,null,null];(statearr_21671[(0)] = state_machine__6407__auto__);
(statearr_21671[(1)] = (1));
return statearr_21671;
});
var state_machine__6407__auto____1 = (function (state_21650){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_21650);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e21672){if((e21672 instanceof Object))
{var ex__6410__auto__ = e21672;var statearr_21673_21689 = state_21650;(statearr_21673_21689[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21650);
return cljs.core.constant$keyword$94;
} else
{throw e21672;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__21690 = state_21650;
state_21650 = G__21690;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_21650){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_21650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_21674 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_21674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_21674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21692 = {};return obj21692;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3573__auto__ = _;if(and__3573__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4222__auto__ = (((_ == null))?null:_);return (function (){var or__3585__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__21696 = x__4222__auto__;return goog.typeOf(G__21696);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21698 = {};return obj21698;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__21702 = x__4222__auto__;return goog.typeOf(G__21702);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__21706 = x__4222__auto__;return goog.typeOf(G__21706);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__21710 = x__4222__auto__;return goog.typeOf(G__21710);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__21940 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21940) : cljs.core.atom.call(null,G__21940));
})();var m = (function (){if(typeof cljs.core.async.t21941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21941 = (function (cs,ch,mult,meta21942){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21942 = meta21942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21941.cljs$lang$type = true;
cljs.core.async.t21941.cljs$lang$ctorStr = "cljs.core.async/t21941";
cljs.core.async.t21941.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t21941");
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21941.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__21944_22169 = self__.cs;var G__21945_22170 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21944_22169,G__21945_22170) : cljs.core.reset_BANG_.call(null,G__21944_22169,G__21945_22170));
return null;
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21943){var self__ = this;
var _21943__$1 = this;return self__.meta21942;
});})(cs))
;
cljs.core.async.t21941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21943,meta21942__$1){var self__ = this;
var _21943__$1 = this;return (new cljs.core.async.t21941(self__.cs,self__.ch,self__.mult,meta21942__$1));
});})(cs))
;
cljs.core.async.__GT_t21941 = ((function (cs){
return (function __GT_t21941(cs__$1,ch__$1,mult__$1,meta21942){return (new cljs.core.async.t21941(cs__$1,ch__$1,mult__$1,meta21942));
});})(cs))
;
}
return (new cljs.core.async.t21941(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__21946 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21946) : cljs.core.atom.call(null,G__21946));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6421__auto___22171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___22171,cs,m,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___22171,cs,m,dchan,dctr,done){
return (function (state_22077){var state_val_22078 = (state_22077[(1)]);if((state_val_22078 === (7)))
{var inst_22073 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22079_22172 = state_22077__$1;(statearr_22079_22172[(2)] = inst_22073);
(statearr_22079_22172[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (20)))
{var inst_21978 = (state_22077[(7)]);var inst_21988 = cljs.core.first(inst_21978);var inst_21989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21988,(0),null);var inst_21990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21988,(1),null);var state_22077__$1 = (function (){var statearr_22080 = state_22077;(statearr_22080[(8)] = inst_21989);
return statearr_22080;
})();if(cljs.core.truth_(inst_21990))
{var statearr_22081_22173 = state_22077__$1;(statearr_22081_22173[(1)] = (22));
} else
{var statearr_22082_22174 = state_22077__$1;(statearr_22082_22174[(1)] = (23));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (27)))
{var inst_22018 = (state_22077[(9)]);var inst_22025 = (state_22077[(10)]);var inst_21949 = (state_22077[(11)]);var inst_22020 = (state_22077[(12)]);var inst_22025__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22018,inst_22020);var inst_22026 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22025__$1,inst_21949,done);var state_22077__$1 = (function (){var statearr_22083 = state_22077;(statearr_22083[(10)] = inst_22025__$1);
return statearr_22083;
})();if(cljs.core.truth_(inst_22026))
{var statearr_22084_22175 = state_22077__$1;(statearr_22084_22175[(1)] = (30));
} else
{var statearr_22085_22176 = state_22077__$1;(statearr_22085_22176[(1)] = (31));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (1)))
{var state_22077__$1 = state_22077;var statearr_22086_22177 = state_22077__$1;(statearr_22086_22177[(2)] = null);
(statearr_22086_22177[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (24)))
{var inst_21978 = (state_22077[(7)]);var inst_21995 = (state_22077[(2)]);var inst_21996 = cljs.core.next(inst_21978);var inst_21958 = inst_21996;var inst_21959 = null;var inst_21960 = (0);var inst_21961 = (0);var state_22077__$1 = (function (){var statearr_22087 = state_22077;(statearr_22087[(13)] = inst_21959);
(statearr_22087[(14)] = inst_21958);
(statearr_22087[(15)] = inst_21961);
(statearr_22087[(16)] = inst_21995);
(statearr_22087[(17)] = inst_21960);
return statearr_22087;
})();var statearr_22088_22178 = state_22077__$1;(statearr_22088_22178[(2)] = null);
(statearr_22088_22178[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (39)))
{var state_22077__$1 = state_22077;var statearr_22092_22179 = state_22077__$1;(statearr_22092_22179[(2)] = null);
(statearr_22092_22179[(1)] = (41));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (4)))
{var inst_21949 = (state_22077[(11)]);var inst_21949__$1 = (state_22077[(2)]);var inst_21950 = (inst_21949__$1 == null);var state_22077__$1 = (function (){var statearr_22093 = state_22077;(statearr_22093[(11)] = inst_21949__$1);
return statearr_22093;
})();if(cljs.core.truth_(inst_21950))
{var statearr_22094_22180 = state_22077__$1;(statearr_22094_22180[(1)] = (5));
} else
{var statearr_22095_22181 = state_22077__$1;(statearr_22095_22181[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (15)))
{var inst_21959 = (state_22077[(13)]);var inst_21958 = (state_22077[(14)]);var inst_21961 = (state_22077[(15)]);var inst_21960 = (state_22077[(17)]);var inst_21974 = (state_22077[(2)]);var inst_21975 = (inst_21961 + (1));var tmp22089 = inst_21959;var tmp22090 = inst_21958;var tmp22091 = inst_21960;var inst_21958__$1 = tmp22090;var inst_21959__$1 = tmp22089;var inst_21960__$1 = tmp22091;var inst_21961__$1 = inst_21975;var state_22077__$1 = (function (){var statearr_22096 = state_22077;(statearr_22096[(13)] = inst_21959__$1);
(statearr_22096[(14)] = inst_21958__$1);
(statearr_22096[(15)] = inst_21961__$1);
(statearr_22096[(18)] = inst_21974);
(statearr_22096[(17)] = inst_21960__$1);
return statearr_22096;
})();var statearr_22097_22182 = state_22077__$1;(statearr_22097_22182[(2)] = null);
(statearr_22097_22182[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (21)))
{var inst_21999 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22101_22183 = state_22077__$1;(statearr_22101_22183[(2)] = inst_21999);
(statearr_22101_22183[(1)] = (18));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (31)))
{var inst_22025 = (state_22077[(10)]);var inst_22029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22025);var state_22077__$1 = (function (){var statearr_22102 = state_22077;(statearr_22102[(19)] = inst_22029);
return statearr_22102;
})();var statearr_22103_22184 = state_22077__$1;(statearr_22103_22184[(2)] = inst_22030);
(statearr_22103_22184[(1)] = (32));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (32)))
{var inst_22019 = (state_22077[(20)]);var inst_22017 = (state_22077[(21)]);var inst_22018 = (state_22077[(9)]);var inst_22020 = (state_22077[(12)]);var inst_22032 = (state_22077[(2)]);var inst_22033 = (inst_22020 + (1));var tmp22098 = inst_22019;var tmp22099 = inst_22017;var tmp22100 = inst_22018;var inst_22017__$1 = tmp22099;var inst_22018__$1 = tmp22100;var inst_22019__$1 = tmp22098;var inst_22020__$1 = inst_22033;var state_22077__$1 = (function (){var statearr_22104 = state_22077;(statearr_22104[(20)] = inst_22019__$1);
(statearr_22104[(21)] = inst_22017__$1);
(statearr_22104[(9)] = inst_22018__$1);
(statearr_22104[(22)] = inst_22032);
(statearr_22104[(12)] = inst_22020__$1);
return statearr_22104;
})();var statearr_22105_22185 = state_22077__$1;(statearr_22105_22185[(2)] = null);
(statearr_22105_22185[(1)] = (25));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (40)))
{var inst_22045 = (state_22077[(23)]);var inst_22049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22050 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22045);var state_22077__$1 = (function (){var statearr_22106 = state_22077;(statearr_22106[(24)] = inst_22049);
return statearr_22106;
})();var statearr_22107_22186 = state_22077__$1;(statearr_22107_22186[(2)] = inst_22050);
(statearr_22107_22186[(1)] = (41));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (33)))
{var inst_22036 = (state_22077[(25)]);var inst_22038 = cljs.core.chunked_seq_QMARK_(inst_22036);var state_22077__$1 = state_22077;if(inst_22038)
{var statearr_22108_22187 = state_22077__$1;(statearr_22108_22187[(1)] = (36));
} else
{var statearr_22109_22188 = state_22077__$1;(statearr_22109_22188[(1)] = (37));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (13)))
{var inst_21968 = (state_22077[(26)]);var inst_21971 = cljs.core.async.close_BANG_(inst_21968);var state_22077__$1 = state_22077;var statearr_22110_22189 = state_22077__$1;(statearr_22110_22189[(2)] = inst_21971);
(statearr_22110_22189[(1)] = (15));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (22)))
{var inst_21989 = (state_22077[(8)]);var inst_21992 = cljs.core.async.close_BANG_(inst_21989);var state_22077__$1 = state_22077;var statearr_22111_22190 = state_22077__$1;(statearr_22111_22190[(2)] = inst_21992);
(statearr_22111_22190[(1)] = (24));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (36)))
{var inst_22036 = (state_22077[(25)]);var inst_22040 = cljs.core.chunk_first(inst_22036);var inst_22041 = cljs.core.chunk_rest(inst_22036);var inst_22042 = cljs.core.count(inst_22040);var inst_22017 = inst_22041;var inst_22018 = inst_22040;var inst_22019 = inst_22042;var inst_22020 = (0);var state_22077__$1 = (function (){var statearr_22112 = state_22077;(statearr_22112[(20)] = inst_22019);
(statearr_22112[(21)] = inst_22017);
(statearr_22112[(9)] = inst_22018);
(statearr_22112[(12)] = inst_22020);
return statearr_22112;
})();var statearr_22113_22191 = state_22077__$1;(statearr_22113_22191[(2)] = null);
(statearr_22113_22191[(1)] = (25));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (41)))
{var inst_22036 = (state_22077[(25)]);var inst_22052 = (state_22077[(2)]);var inst_22053 = cljs.core.next(inst_22036);var inst_22017 = inst_22053;var inst_22018 = null;var inst_22019 = (0);var inst_22020 = (0);var state_22077__$1 = (function (){var statearr_22114 = state_22077;(statearr_22114[(27)] = inst_22052);
(statearr_22114[(20)] = inst_22019);
(statearr_22114[(21)] = inst_22017);
(statearr_22114[(9)] = inst_22018);
(statearr_22114[(12)] = inst_22020);
return statearr_22114;
})();var statearr_22115_22192 = state_22077__$1;(statearr_22115_22192[(2)] = null);
(statearr_22115_22192[(1)] = (25));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (43)))
{var state_22077__$1 = state_22077;var statearr_22116_22193 = state_22077__$1;(statearr_22116_22193[(2)] = null);
(statearr_22116_22193[(1)] = (44));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (29)))
{var inst_22061 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22117_22194 = state_22077__$1;(statearr_22117_22194[(2)] = inst_22061);
(statearr_22117_22194[(1)] = (26));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (44)))
{var inst_22070 = (state_22077[(2)]);var state_22077__$1 = (function (){var statearr_22118 = state_22077;(statearr_22118[(28)] = inst_22070);
return statearr_22118;
})();var statearr_22119_22195 = state_22077__$1;(statearr_22119_22195[(2)] = null);
(statearr_22119_22195[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (6)))
{var inst_22009 = (state_22077[(29)]);var inst_22008 = (function (){var G__22120 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22120) : cljs.core.deref.call(null,G__22120));
})();var inst_22009__$1 = cljs.core.keys(inst_22008);var inst_22010 = cljs.core.count(inst_22009__$1);var inst_22011 = (function (){var G__22121 = dctr;var G__22122 = inst_22010;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22121,G__22122) : cljs.core.reset_BANG_.call(null,G__22121,G__22122));
})();var inst_22016 = cljs.core.seq(inst_22009__$1);var inst_22017 = inst_22016;var inst_22018 = null;var inst_22019 = (0);var inst_22020 = (0);var state_22077__$1 = (function (){var statearr_22123 = state_22077;(statearr_22123[(20)] = inst_22019);
(statearr_22123[(21)] = inst_22017);
(statearr_22123[(9)] = inst_22018);
(statearr_22123[(29)] = inst_22009__$1);
(statearr_22123[(12)] = inst_22020);
(statearr_22123[(30)] = inst_22011);
return statearr_22123;
})();var statearr_22124_22196 = state_22077__$1;(statearr_22124_22196[(2)] = null);
(statearr_22124_22196[(1)] = (25));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (28)))
{var inst_22017 = (state_22077[(21)]);var inst_22036 = (state_22077[(25)]);var inst_22036__$1 = cljs.core.seq(inst_22017);var state_22077__$1 = (function (){var statearr_22125 = state_22077;(statearr_22125[(25)] = inst_22036__$1);
return statearr_22125;
})();if(inst_22036__$1)
{var statearr_22126_22197 = state_22077__$1;(statearr_22126_22197[(1)] = (33));
} else
{var statearr_22127_22198 = state_22077__$1;(statearr_22127_22198[(1)] = (34));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (25)))
{var inst_22019 = (state_22077[(20)]);var inst_22020 = (state_22077[(12)]);var inst_22022 = (inst_22020 < inst_22019);var inst_22023 = inst_22022;var state_22077__$1 = state_22077;if(cljs.core.truth_(inst_22023))
{var statearr_22128_22199 = state_22077__$1;(statearr_22128_22199[(1)] = (27));
} else
{var statearr_22129_22200 = state_22077__$1;(statearr_22129_22200[(1)] = (28));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (34)))
{var state_22077__$1 = state_22077;var statearr_22130_22201 = state_22077__$1;(statearr_22130_22201[(2)] = null);
(statearr_22130_22201[(1)] = (35));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (17)))
{var state_22077__$1 = state_22077;var statearr_22131_22202 = state_22077__$1;(statearr_22131_22202[(2)] = null);
(statearr_22131_22202[(1)] = (18));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (3)))
{var inst_22075 = (state_22077[(2)]);var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.return_chan(state_22077__$1,inst_22075);
} else
{if((state_val_22078 === (12)))
{var inst_22004 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22132_22203 = state_22077__$1;(statearr_22132_22203[(2)] = inst_22004);
(statearr_22132_22203[(1)] = (9));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (2)))
{var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22077__$1,(4),ch);
} else
{if((state_val_22078 === (23)))
{var state_22077__$1 = state_22077;var statearr_22133_22204 = state_22077__$1;(statearr_22133_22204[(2)] = null);
(statearr_22133_22204[(1)] = (24));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (35)))
{var inst_22059 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22134_22205 = state_22077__$1;(statearr_22134_22205[(2)] = inst_22059);
(statearr_22134_22205[(1)] = (29));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (19)))
{var inst_21978 = (state_22077[(7)]);var inst_21982 = cljs.core.chunk_first(inst_21978);var inst_21983 = cljs.core.chunk_rest(inst_21978);var inst_21984 = cljs.core.count(inst_21982);var inst_21958 = inst_21983;var inst_21959 = inst_21982;var inst_21960 = inst_21984;var inst_21961 = (0);var state_22077__$1 = (function (){var statearr_22135 = state_22077;(statearr_22135[(13)] = inst_21959);
(statearr_22135[(14)] = inst_21958);
(statearr_22135[(15)] = inst_21961);
(statearr_22135[(17)] = inst_21960);
return statearr_22135;
})();var statearr_22136_22206 = state_22077__$1;(statearr_22136_22206[(2)] = null);
(statearr_22136_22206[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (11)))
{var inst_21958 = (state_22077[(14)]);var inst_21978 = (state_22077[(7)]);var inst_21978__$1 = cljs.core.seq(inst_21958);var state_22077__$1 = (function (){var statearr_22137 = state_22077;(statearr_22137[(7)] = inst_21978__$1);
return statearr_22137;
})();if(inst_21978__$1)
{var statearr_22138_22207 = state_22077__$1;(statearr_22138_22207[(1)] = (16));
} else
{var statearr_22139_22208 = state_22077__$1;(statearr_22139_22208[(1)] = (17));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (9)))
{var inst_22006 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22140_22209 = state_22077__$1;(statearr_22140_22209[(2)] = inst_22006);
(statearr_22140_22209[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (5)))
{var inst_21956 = (function (){var G__22141 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22141) : cljs.core.deref.call(null,G__22141));
})();var inst_21957 = cljs.core.seq(inst_21956);var inst_21958 = inst_21957;var inst_21959 = null;var inst_21960 = (0);var inst_21961 = (0);var state_22077__$1 = (function (){var statearr_22142 = state_22077;(statearr_22142[(13)] = inst_21959);
(statearr_22142[(14)] = inst_21958);
(statearr_22142[(15)] = inst_21961);
(statearr_22142[(17)] = inst_21960);
return statearr_22142;
})();var statearr_22143_22210 = state_22077__$1;(statearr_22143_22210[(2)] = null);
(statearr_22143_22210[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (14)))
{var state_22077__$1 = state_22077;var statearr_22144_22211 = state_22077__$1;(statearr_22144_22211[(2)] = null);
(statearr_22144_22211[(1)] = (15));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (45)))
{var inst_22067 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22145_22212 = state_22077__$1;(statearr_22145_22212[(2)] = inst_22067);
(statearr_22145_22212[(1)] = (44));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (26)))
{var inst_22009 = (state_22077[(29)]);var inst_22063 = (state_22077[(2)]);var inst_22064 = cljs.core.seq(inst_22009);var state_22077__$1 = (function (){var statearr_22146 = state_22077;(statearr_22146[(31)] = inst_22063);
return statearr_22146;
})();if(inst_22064)
{var statearr_22147_22213 = state_22077__$1;(statearr_22147_22213[(1)] = (42));
} else
{var statearr_22148_22214 = state_22077__$1;(statearr_22148_22214[(1)] = (43));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (16)))
{var inst_21978 = (state_22077[(7)]);var inst_21980 = cljs.core.chunked_seq_QMARK_(inst_21978);var state_22077__$1 = state_22077;if(inst_21980)
{var statearr_22149_22215 = state_22077__$1;(statearr_22149_22215[(1)] = (19));
} else
{var statearr_22150_22216 = state_22077__$1;(statearr_22150_22216[(1)] = (20));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (38)))
{var inst_22056 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22151_22217 = state_22077__$1;(statearr_22151_22217[(2)] = inst_22056);
(statearr_22151_22217[(1)] = (35));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (30)))
{var state_22077__$1 = state_22077;var statearr_22152_22218 = state_22077__$1;(statearr_22152_22218[(2)] = null);
(statearr_22152_22218[(1)] = (32));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (10)))
{var inst_21959 = (state_22077[(13)]);var inst_21961 = (state_22077[(15)]);var inst_21967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21959,inst_21961);var inst_21968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21967,(0),null);var inst_21969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21967,(1),null);var state_22077__$1 = (function (){var statearr_22153 = state_22077;(statearr_22153[(26)] = inst_21968);
return statearr_22153;
})();if(cljs.core.truth_(inst_21969))
{var statearr_22154_22219 = state_22077__$1;(statearr_22154_22219[(1)] = (13));
} else
{var statearr_22155_22220 = state_22077__$1;(statearr_22155_22220[(1)] = (14));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (18)))
{var inst_22002 = (state_22077[(2)]);var state_22077__$1 = state_22077;var statearr_22156_22221 = state_22077__$1;(statearr_22156_22221[(2)] = inst_22002);
(statearr_22156_22221[(1)] = (12));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (42)))
{var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22077__$1,(45),dchan);
} else
{if((state_val_22078 === (37)))
{var inst_22036 = (state_22077[(25)]);var inst_21949 = (state_22077[(11)]);var inst_22045 = (state_22077[(23)]);var inst_22045__$1 = cljs.core.first(inst_22036);var inst_22046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22045__$1,inst_21949,done);var state_22077__$1 = (function (){var statearr_22157 = state_22077;(statearr_22157[(23)] = inst_22045__$1);
return statearr_22157;
})();if(cljs.core.truth_(inst_22046))
{var statearr_22158_22222 = state_22077__$1;(statearr_22158_22222[(1)] = (39));
} else
{var statearr_22159_22223 = state_22077__$1;(statearr_22159_22223[(1)] = (40));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22078 === (8)))
{var inst_21961 = (state_22077[(15)]);var inst_21960 = (state_22077[(17)]);var inst_21963 = (inst_21961 < inst_21960);var inst_21964 = inst_21963;var state_22077__$1 = state_22077;if(cljs.core.truth_(inst_21964))
{var statearr_22160_22224 = state_22077__$1;(statearr_22160_22224[(1)] = (10));
} else
{var statearr_22161_22225 = state_22077__$1;(statearr_22161_22225[(1)] = (11));
}
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___22171,cs,m,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___22171,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_22165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22165[(0)] = state_machine__6407__auto__);
(statearr_22165[(1)] = (1));
return statearr_22165;
});
var state_machine__6407__auto____1 = (function (state_22077){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_22077);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e22166){if((e22166 instanceof Object))
{var ex__6410__auto__ = e22166;var statearr_22167_22226 = state_22077;(statearr_22167_22226[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22077);
return cljs.core.constant$keyword$94;
} else
{throw e22166;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__22227 = state_22077;
state_22077 = G__22227;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_22077){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_22077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___22171,cs,m,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_22168 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_22168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___22171);
return statearr_22168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___22171,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj22232 = {};return obj22232;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__22236 = x__4222__auto__;return goog.typeOf(G__22236);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__22240 = x__4222__auto__;return goog.typeOf(G__22240);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__22244 = x__4222__auto__;return goog.typeOf(G__22244);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__22248 = x__4222__auto__;return goog.typeOf(G__22248);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
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
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__22252 = x__4222__auto__;return goog.typeOf(G__22252);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__22386 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22386) : cljs.core.atom.call(null,G__22386));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$103);var solo_mode = (function (){var G__22387 = cljs.core.constant$keyword$102;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22387) : cljs.core.atom.call(null,G__22387));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__22388 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22388) : attr.call(null,G__22388));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__22389 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22389) : cljs.core.deref.call(null,G__22389));
})();var mode = (function (){var G__22390 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22390) : cljs.core.deref.call(null,G__22390));
})();var solos = pick(cljs.core.constant$keyword$103,chs);var pauses = pick(cljs.core.constant$keyword$101,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$104,solos,cljs.core.constant$keyword$105,pick(cljs.core.constant$keyword$102,chs),cljs.core.constant$keyword$106,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$101)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22391 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22392){
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
this.meta22392 = meta22392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22391.cljs$lang$type = true;
cljs.core.async.t22391.cljs$lang$ctorStr = "cljs.core.async/t22391";
cljs.core.async.t22391.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t22391");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__22394_22519 = self__.cs;var G__22395_22520 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22394_22519,G__22395_22520) : cljs.core.reset_BANG_.call(null,G__22394_22519,G__22395_22520));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__22396 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__22396) : self__.solo_modes.call(null,G__22396));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__22397_22521 = self__.solo_mode;var G__22398_22522 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22397_22521,G__22398_22522) : cljs.core.reset_BANG_.call(null,G__22397_22521,G__22398_22522));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22393){var self__ = this;
var _22393__$1 = this;return self__.meta22392;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22393,meta22392__$1){var self__ = this;
var _22393__$1 = this;return (new cljs.core.async.t22391(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22392__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22391 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22392){return (new cljs.core.async.t22391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22392));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22391(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6421__auto___22523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22470){var state_val_22471 = (state_22470[(1)]);if((state_val_22471 === (7)))
{var inst_22412 = (state_22470[(7)]);var inst_22417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22412);var state_22470__$1 = state_22470;var statearr_22472_22524 = state_22470__$1;(statearr_22472_22524[(2)] = inst_22417);
(statearr_22472_22524[(1)] = (9));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (20)))
{var inst_22427 = (state_22470[(8)]);var state_22470__$1 = state_22470;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22470__$1,(23),out,inst_22427);
} else
{if((state_val_22471 === (1)))
{var inst_22402 = (state_22470[(9)]);var inst_22402__$1 = calc_state();var inst_22403 = cljs.core.seq_QMARK_(inst_22402__$1);var state_22470__$1 = (function (){var statearr_22473 = state_22470;(statearr_22473[(9)] = inst_22402__$1);
return statearr_22473;
})();if(inst_22403)
{var statearr_22474_22525 = state_22470__$1;(statearr_22474_22525[(1)] = (2));
} else
{var statearr_22475_22526 = state_22470__$1;(statearr_22475_22526[(1)] = (3));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (24)))
{var inst_22420 = (state_22470[(10)]);var inst_22412 = inst_22420;var state_22470__$1 = (function (){var statearr_22476 = state_22470;(statearr_22476[(7)] = inst_22412);
return statearr_22476;
})();var statearr_22477_22527 = state_22470__$1;(statearr_22477_22527[(2)] = null);
(statearr_22477_22527[(1)] = (5));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (4)))
{var inst_22402 = (state_22470[(9)]);var inst_22408 = (state_22470[(2)]);var inst_22409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22408,cljs.core.constant$keyword$106);var inst_22410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22408,cljs.core.constant$keyword$105);var inst_22411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22408,cljs.core.constant$keyword$104);var inst_22412 = inst_22402;var state_22470__$1 = (function (){var statearr_22478 = state_22470;(statearr_22478[(7)] = inst_22412);
(statearr_22478[(11)] = inst_22411);
(statearr_22478[(12)] = inst_22409);
(statearr_22478[(13)] = inst_22410);
return statearr_22478;
})();var statearr_22479_22528 = state_22470__$1;(statearr_22479_22528[(2)] = null);
(statearr_22479_22528[(1)] = (5));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (15)))
{var state_22470__$1 = state_22470;var statearr_22480_22529 = state_22470__$1;(statearr_22480_22529[(2)] = null);
(statearr_22480_22529[(1)] = (16));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (21)))
{var inst_22420 = (state_22470[(10)]);var inst_22412 = inst_22420;var state_22470__$1 = (function (){var statearr_22481 = state_22470;(statearr_22481[(7)] = inst_22412);
return statearr_22481;
})();var statearr_22482_22530 = state_22470__$1;(statearr_22482_22530[(2)] = null);
(statearr_22482_22530[(1)] = (5));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (13)))
{var inst_22466 = (state_22470[(2)]);var state_22470__$1 = state_22470;var statearr_22483_22531 = state_22470__$1;(statearr_22483_22531[(2)] = inst_22466);
(statearr_22483_22531[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (22)))
{var inst_22464 = (state_22470[(2)]);var state_22470__$1 = state_22470;var statearr_22484_22532 = state_22470__$1;(statearr_22484_22532[(2)] = inst_22464);
(statearr_22484_22532[(1)] = (13));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (6)))
{var inst_22468 = (state_22470[(2)]);var state_22470__$1 = state_22470;return cljs.core.async.impl.ioc_helpers.return_chan(state_22470__$1,inst_22468);
} else
{if((state_val_22471 === (25)))
{var state_22470__$1 = state_22470;var statearr_22485_22533 = state_22470__$1;(statearr_22485_22533[(2)] = null);
(statearr_22485_22533[(1)] = (26));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (17)))
{var inst_22443 = (state_22470[(14)]);var state_22470__$1 = state_22470;var statearr_22486_22534 = state_22470__$1;(statearr_22486_22534[(2)] = inst_22443);
(statearr_22486_22534[(1)] = (19));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (3)))
{var inst_22402 = (state_22470[(9)]);var state_22470__$1 = state_22470;var statearr_22487_22535 = state_22470__$1;(statearr_22487_22535[(2)] = inst_22402);
(statearr_22487_22535[(1)] = (4));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (12)))
{var inst_22423 = (state_22470[(15)]);var inst_22428 = (state_22470[(16)]);var inst_22443 = (state_22470[(14)]);var inst_22443__$1 = (function (){var G__22488 = inst_22428;return (inst_22423.cljs$core$IFn$_invoke$arity$1 ? inst_22423.cljs$core$IFn$_invoke$arity$1(G__22488) : inst_22423.call(null,G__22488));
})();var state_22470__$1 = (function (){var statearr_22489 = state_22470;(statearr_22489[(14)] = inst_22443__$1);
return statearr_22489;
})();if(cljs.core.truth_(inst_22443__$1))
{var statearr_22490_22536 = state_22470__$1;(statearr_22490_22536[(1)] = (17));
} else
{var statearr_22491_22537 = state_22470__$1;(statearr_22491_22537[(1)] = (18));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (2)))
{var inst_22402 = (state_22470[(9)]);var inst_22405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22402);var state_22470__$1 = state_22470;var statearr_22492_22538 = state_22470__$1;(statearr_22492_22538[(2)] = inst_22405);
(statearr_22492_22538[(1)] = (4));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (23)))
{var inst_22455 = (state_22470[(2)]);var state_22470__$1 = state_22470;if(cljs.core.truth_(inst_22455))
{var statearr_22493_22539 = state_22470__$1;(statearr_22493_22539[(1)] = (24));
} else
{var statearr_22494_22540 = state_22470__$1;(statearr_22494_22540[(1)] = (25));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (19)))
{var inst_22452 = (state_22470[(2)]);var state_22470__$1 = state_22470;if(cljs.core.truth_(inst_22452))
{var statearr_22495_22541 = state_22470__$1;(statearr_22495_22541[(1)] = (20));
} else
{var statearr_22496_22542 = state_22470__$1;(statearr_22496_22542[(1)] = (21));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (11)))
{var inst_22427 = (state_22470[(8)]);var inst_22433 = (inst_22427 == null);var state_22470__$1 = state_22470;if(cljs.core.truth_(inst_22433))
{var statearr_22497_22543 = state_22470__$1;(statearr_22497_22543[(1)] = (14));
} else
{var statearr_22498_22544 = state_22470__$1;(statearr_22498_22544[(1)] = (15));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (9)))
{var inst_22420 = (state_22470[(10)]);var inst_22420__$1 = (state_22470[(2)]);var inst_22421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22420__$1,cljs.core.constant$keyword$106);var inst_22422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22420__$1,cljs.core.constant$keyword$105);var inst_22423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22420__$1,cljs.core.constant$keyword$104);var state_22470__$1 = (function (){var statearr_22499 = state_22470;(statearr_22499[(17)] = inst_22422);
(statearr_22499[(15)] = inst_22423);
(statearr_22499[(10)] = inst_22420__$1);
return statearr_22499;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22470__$1,(10),inst_22421);
} else
{if((state_val_22471 === (5)))
{var inst_22412 = (state_22470[(7)]);var inst_22415 = cljs.core.seq_QMARK_(inst_22412);var state_22470__$1 = state_22470;if(inst_22415)
{var statearr_22500_22545 = state_22470__$1;(statearr_22500_22545[(1)] = (7));
} else
{var statearr_22501_22546 = state_22470__$1;(statearr_22501_22546[(1)] = (8));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (14)))
{var inst_22428 = (state_22470[(16)]);var inst_22435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22428);var state_22470__$1 = state_22470;var statearr_22502_22547 = state_22470__$1;(statearr_22502_22547[(2)] = inst_22435);
(statearr_22502_22547[(1)] = (16));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (26)))
{var inst_22460 = (state_22470[(2)]);var state_22470__$1 = state_22470;var statearr_22503_22548 = state_22470__$1;(statearr_22503_22548[(2)] = inst_22460);
(statearr_22503_22548[(1)] = (22));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (16)))
{var inst_22438 = (state_22470[(2)]);var inst_22439 = calc_state();var inst_22412 = inst_22439;var state_22470__$1 = (function (){var statearr_22504 = state_22470;(statearr_22504[(7)] = inst_22412);
(statearr_22504[(18)] = inst_22438);
return statearr_22504;
})();var statearr_22505_22549 = state_22470__$1;(statearr_22505_22549[(2)] = null);
(statearr_22505_22549[(1)] = (5));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (10)))
{var inst_22428 = (state_22470[(16)]);var inst_22427 = (state_22470[(8)]);var inst_22426 = (state_22470[(2)]);var inst_22427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22426,(0),null);var inst_22428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22426,(1),null);var inst_22429 = (inst_22427__$1 == null);var inst_22430 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22428__$1,change);var inst_22431 = (inst_22429) || (inst_22430);var state_22470__$1 = (function (){var statearr_22506 = state_22470;(statearr_22506[(16)] = inst_22428__$1);
(statearr_22506[(8)] = inst_22427__$1);
return statearr_22506;
})();if(cljs.core.truth_(inst_22431))
{var statearr_22507_22550 = state_22470__$1;(statearr_22507_22550[(1)] = (11));
} else
{var statearr_22508_22551 = state_22470__$1;(statearr_22508_22551[(1)] = (12));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (18)))
{var inst_22422 = (state_22470[(17)]);var inst_22423 = (state_22470[(15)]);var inst_22428 = (state_22470[(16)]);var inst_22447 = cljs.core.empty_QMARK_(inst_22423);var inst_22448 = (function (){var G__22509 = inst_22428;return (inst_22422.cljs$core$IFn$_invoke$arity$1 ? inst_22422.cljs$core$IFn$_invoke$arity$1(G__22509) : inst_22422.call(null,G__22509));
})();var inst_22449 = cljs.core.not(inst_22448);var inst_22450 = (inst_22447) && (inst_22449);var state_22470__$1 = state_22470;var statearr_22510_22552 = state_22470__$1;(statearr_22510_22552[(2)] = inst_22450);
(statearr_22510_22552[(1)] = (19));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22471 === (8)))
{var inst_22412 = (state_22470[(7)]);var state_22470__$1 = state_22470;var statearr_22511_22553 = state_22470__$1;(statearr_22511_22553[(2)] = inst_22412);
(statearr_22511_22553[(1)] = (9));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6406__auto__,c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_22515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22515[(0)] = state_machine__6407__auto__);
(statearr_22515[(1)] = (1));
return statearr_22515;
});
var state_machine__6407__auto____1 = (function (state_22470){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_22470);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e22516){if((e22516 instanceof Object))
{var ex__6410__auto__ = e22516;var statearr_22517_22554 = state_22470;(statearr_22517_22554[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22470);
return cljs.core.constant$keyword$94;
} else
{throw e22516;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__22555 = state_22470;
state_22470 = G__22555;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_22470){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_22470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6423__auto__ = (function (){var statearr_22518 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_22518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___22523);
return statearr_22518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___22523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj22557 = {};return obj22557;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22561 = x__4222__auto__;return goog.typeOf(G__22561);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
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
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22565 = x__4222__auto__;return goog.typeOf(G__22565);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
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
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22571 = x__4222__auto__;return goog.typeOf(G__22571);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22573 = x__4222__auto__;return goog.typeOf(G__22573);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__22704 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22704) : cljs.core.atom.call(null,G__22704));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22706 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22706) : cljs.core.deref.call(null,G__22706));
})(),topic);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3585__auto__,mults){
return (function (p1__22574_SHARP_){if(cljs.core.truth_((function (){var G__22707 = topic;return (p1__22574_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22574_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22707) : p1__22574_SHARP_.call(null,G__22707));
})()))
{return p1__22574_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22574_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__22708 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__22708) : buf_fn.call(null,G__22708));
})())));
}
});})(or__3585__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22709 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22710){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22710 = meta22710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22709.cljs$lang$type = true;
cljs.core.async.t22709.cljs$lang$ctorStr = "cljs.core.async/t22709";
cljs.core.async.t22709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async/t22709");
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__22712 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__22712) : self__.ensure_mult.call(null,G__22712));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22713 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22713) : cljs.core.deref.call(null,G__22713));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__22714 = self__.mults;var G__22715 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22714,G__22715) : cljs.core.reset_BANG_.call(null,G__22714,G__22715));
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22711){var self__ = this;
var _22711__$1 = this;return self__.meta22710;
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22711,meta22710__$1){var self__ = this;
var _22711__$1 = this;return (new cljs.core.async.t22709(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22710__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22709 = ((function (mults,ensure_mult){
return (function __GT_t22709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22710){return (new cljs.core.async.t22709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22710));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22709(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6421__auto___22830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___22830,mults,ensure_mult,p){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___22830,mults,ensure_mult,p){
return (function (state_22783){var state_val_22784 = (state_22783[(1)]);if((state_val_22784 === (7)))
{var inst_22779 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22785_22831 = state_22783__$1;(statearr_22785_22831[(2)] = inst_22779);
(statearr_22785_22831[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (20)))
{var state_22783__$1 = state_22783;var statearr_22786_22832 = state_22783__$1;(statearr_22786_22832[(2)] = null);
(statearr_22786_22832[(1)] = (22));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (1)))
{var state_22783__$1 = state_22783;var statearr_22787_22833 = state_22783__$1;(statearr_22787_22833[(2)] = null);
(statearr_22787_22833[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (4)))
{var inst_22718 = (state_22783[(7)]);var inst_22718__$1 = (state_22783[(2)]);var inst_22719 = (inst_22718__$1 == null);var state_22783__$1 = (function (){var statearr_22788 = state_22783;(statearr_22788[(7)] = inst_22718__$1);
return statearr_22788;
})();if(cljs.core.truth_(inst_22719))
{var statearr_22789_22834 = state_22783__$1;(statearr_22789_22834[(1)] = (5));
} else
{var statearr_22790_22835 = state_22783__$1;(statearr_22790_22835[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (15)))
{var inst_22760 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22791_22836 = state_22783__$1;(statearr_22791_22836[(2)] = inst_22760);
(statearr_22791_22836[(1)] = (12));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (21)))
{var inst_22766 = (state_22783[(8)]);var inst_22774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22766);var state_22783__$1 = state_22783;var statearr_22792_22837 = state_22783__$1;(statearr_22792_22837[(2)] = inst_22774);
(statearr_22792_22837[(1)] = (22));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (13)))
{var inst_22742 = (state_22783[(9)]);var inst_22744 = cljs.core.chunked_seq_QMARK_(inst_22742);var state_22783__$1 = state_22783;if(inst_22744)
{var statearr_22793_22838 = state_22783__$1;(statearr_22793_22838[(1)] = (16));
} else
{var statearr_22794_22839 = state_22783__$1;(statearr_22794_22839[(1)] = (17));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (22)))
{var inst_22776 = (state_22783[(2)]);var state_22783__$1 = (function (){var statearr_22795 = state_22783;(statearr_22795[(10)] = inst_22776);
return statearr_22795;
})();var statearr_22796_22840 = state_22783__$1;(statearr_22796_22840[(2)] = null);
(statearr_22796_22840[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (6)))
{var inst_22766 = (state_22783[(8)]);var inst_22718 = (state_22783[(7)]);var inst_22766__$1 = (function (){var G__22797 = inst_22718;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__22797) : topic_fn.call(null,G__22797));
})();var inst_22767 = (function (){var G__22798 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22798) : cljs.core.deref.call(null,G__22798));
})();var inst_22768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22767,inst_22766__$1);var inst_22769 = cljs.core.async.muxch_STAR_(inst_22768);var state_22783__$1 = (function (){var statearr_22799 = state_22783;(statearr_22799[(8)] = inst_22766__$1);
return statearr_22799;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22783__$1,(19),inst_22769,inst_22718);
} else
{if((state_val_22784 === (17)))
{var inst_22742 = (state_22783[(9)]);var inst_22751 = cljs.core.first(inst_22742);var inst_22752 = cljs.core.async.muxch_STAR_(inst_22751);var inst_22753 = cljs.core.async.close_BANG_(inst_22752);var inst_22754 = cljs.core.next(inst_22742);var inst_22728 = inst_22754;var inst_22729 = null;var inst_22730 = (0);var inst_22731 = (0);var state_22783__$1 = (function (){var statearr_22800 = state_22783;(statearr_22800[(11)] = inst_22728);
(statearr_22800[(12)] = inst_22753);
(statearr_22800[(13)] = inst_22729);
(statearr_22800[(14)] = inst_22730);
(statearr_22800[(15)] = inst_22731);
return statearr_22800;
})();var statearr_22801_22841 = state_22783__$1;(statearr_22801_22841[(2)] = null);
(statearr_22801_22841[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (3)))
{var inst_22781 = (state_22783[(2)]);var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.return_chan(state_22783__$1,inst_22781);
} else
{if((state_val_22784 === (12)))
{var inst_22762 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22802_22842 = state_22783__$1;(statearr_22802_22842[(2)] = inst_22762);
(statearr_22802_22842[(1)] = (9));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (2)))
{var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22783__$1,(4),ch);
} else
{if((state_val_22784 === (19)))
{var inst_22771 = (state_22783[(2)]);var state_22783__$1 = state_22783;if(cljs.core.truth_(inst_22771))
{var statearr_22803_22843 = state_22783__$1;(statearr_22803_22843[(1)] = (20));
} else
{var statearr_22804_22844 = state_22783__$1;(statearr_22804_22844[(1)] = (21));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (11)))
{var inst_22728 = (state_22783[(11)]);var inst_22742 = (state_22783[(9)]);var inst_22742__$1 = cljs.core.seq(inst_22728);var state_22783__$1 = (function (){var statearr_22805 = state_22783;(statearr_22805[(9)] = inst_22742__$1);
return statearr_22805;
})();if(inst_22742__$1)
{var statearr_22806_22845 = state_22783__$1;(statearr_22806_22845[(1)] = (13));
} else
{var statearr_22807_22846 = state_22783__$1;(statearr_22807_22846[(1)] = (14));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (9)))
{var inst_22764 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22808_22847 = state_22783__$1;(statearr_22808_22847[(2)] = inst_22764);
(statearr_22808_22847[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (5)))
{var inst_22725 = (function (){var G__22809 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22809) : cljs.core.deref.call(null,G__22809));
})();var inst_22726 = cljs.core.vals(inst_22725);var inst_22727 = cljs.core.seq(inst_22726);var inst_22728 = inst_22727;var inst_22729 = null;var inst_22730 = (0);var inst_22731 = (0);var state_22783__$1 = (function (){var statearr_22810 = state_22783;(statearr_22810[(11)] = inst_22728);
(statearr_22810[(13)] = inst_22729);
(statearr_22810[(14)] = inst_22730);
(statearr_22810[(15)] = inst_22731);
return statearr_22810;
})();var statearr_22811_22848 = state_22783__$1;(statearr_22811_22848[(2)] = null);
(statearr_22811_22848[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (14)))
{var state_22783__$1 = state_22783;var statearr_22815_22849 = state_22783__$1;(statearr_22815_22849[(2)] = null);
(statearr_22815_22849[(1)] = (15));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (16)))
{var inst_22742 = (state_22783[(9)]);var inst_22746 = cljs.core.chunk_first(inst_22742);var inst_22747 = cljs.core.chunk_rest(inst_22742);var inst_22748 = cljs.core.count(inst_22746);var inst_22728 = inst_22747;var inst_22729 = inst_22746;var inst_22730 = inst_22748;var inst_22731 = (0);var state_22783__$1 = (function (){var statearr_22816 = state_22783;(statearr_22816[(11)] = inst_22728);
(statearr_22816[(13)] = inst_22729);
(statearr_22816[(14)] = inst_22730);
(statearr_22816[(15)] = inst_22731);
return statearr_22816;
})();var statearr_22817_22850 = state_22783__$1;(statearr_22817_22850[(2)] = null);
(statearr_22817_22850[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (10)))
{var inst_22728 = (state_22783[(11)]);var inst_22729 = (state_22783[(13)]);var inst_22730 = (state_22783[(14)]);var inst_22731 = (state_22783[(15)]);var inst_22736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22729,inst_22731);var inst_22737 = cljs.core.async.muxch_STAR_(inst_22736);var inst_22738 = cljs.core.async.close_BANG_(inst_22737);var inst_22739 = (inst_22731 + (1));var tmp22812 = inst_22728;var tmp22813 = inst_22729;var tmp22814 = inst_22730;var inst_22728__$1 = tmp22812;var inst_22729__$1 = tmp22813;var inst_22730__$1 = tmp22814;var inst_22731__$1 = inst_22739;var state_22783__$1 = (function (){var statearr_22818 = state_22783;(statearr_22818[(11)] = inst_22728__$1);
(statearr_22818[(13)] = inst_22729__$1);
(statearr_22818[(14)] = inst_22730__$1);
(statearr_22818[(15)] = inst_22731__$1);
(statearr_22818[(16)] = inst_22738);
return statearr_22818;
})();var statearr_22819_22851 = state_22783__$1;(statearr_22819_22851[(2)] = null);
(statearr_22819_22851[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (18)))
{var inst_22757 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22820_22852 = state_22783__$1;(statearr_22820_22852[(2)] = inst_22757);
(statearr_22820_22852[(1)] = (15));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22784 === (8)))
{var inst_22730 = (state_22783[(14)]);var inst_22731 = (state_22783[(15)]);var inst_22733 = (inst_22731 < inst_22730);var inst_22734 = inst_22733;var state_22783__$1 = state_22783;if(cljs.core.truth_(inst_22734))
{var statearr_22821_22853 = state_22783__$1;(statearr_22821_22853[(1)] = (10));
} else
{var statearr_22822_22854 = state_22783__$1;(statearr_22822_22854[(1)] = (11));
}
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___22830,mults,ensure_mult,p))
;return ((function (switch__6406__auto__,c__6421__auto___22830,mults,ensure_mult,p){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_22826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22826[(0)] = state_machine__6407__auto__);
(statearr_22826[(1)] = (1));
return statearr_22826;
});
var state_machine__6407__auto____1 = (function (state_22783){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_22783);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e22827){if((e22827 instanceof Object))
{var ex__6410__auto__ = e22827;var statearr_22828_22855 = state_22783;(statearr_22828_22855[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22783);
return cljs.core.constant$keyword$94;
} else
{throw e22827;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__22856 = state_22783;
state_22783 = G__22856;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___22830,mults,ensure_mult,p))
})();var state__6423__auto__ = (function (){var statearr_22829 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_22829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___22830);
return statearr_22829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___22830,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__22937 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22937) : cljs.core.atom.call(null,G__22937));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6421__auto___23010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22976){var state_val_22977 = (state_22976[(1)]);if((state_val_22977 === (7)))
{var state_22976__$1 = state_22976;var statearr_22978_23011 = state_22976__$1;(statearr_22978_23011[(2)] = null);
(statearr_22978_23011[(1)] = (8));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (1)))
{var state_22976__$1 = state_22976;var statearr_22979_23012 = state_22976__$1;(statearr_22979_23012[(2)] = null);
(statearr_22979_23012[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (4)))
{var inst_22940 = (state_22976[(7)]);var inst_22942 = (inst_22940 < cnt);var state_22976__$1 = state_22976;if(cljs.core.truth_(inst_22942))
{var statearr_22980_23013 = state_22976__$1;(statearr_22980_23013[(1)] = (6));
} else
{var statearr_22981_23014 = state_22976__$1;(statearr_22981_23014[(1)] = (7));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (15)))
{var inst_22972 = (state_22976[(2)]);var state_22976__$1 = state_22976;var statearr_22982_23015 = state_22976__$1;(statearr_22982_23015[(2)] = inst_22972);
(statearr_22982_23015[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (13)))
{var inst_22965 = cljs.core.async.close_BANG_(out);var state_22976__$1 = state_22976;var statearr_22983_23016 = state_22976__$1;(statearr_22983_23016[(2)] = inst_22965);
(statearr_22983_23016[(1)] = (15));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (6)))
{var state_22976__$1 = state_22976;var statearr_22984_23017 = state_22976__$1;(statearr_22984_23017[(2)] = null);
(statearr_22984_23017[(1)] = (11));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (3)))
{var inst_22974 = (state_22976[(2)]);var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.return_chan(state_22976__$1,inst_22974);
} else
{if((state_val_22977 === (12)))
{var inst_22962 = (state_22976[(8)]);var inst_22962__$1 = (state_22976[(2)]);var inst_22963 = cljs.core.some(cljs.core.nil_QMARK_,inst_22962__$1);var state_22976__$1 = (function (){var statearr_22985 = state_22976;(statearr_22985[(8)] = inst_22962__$1);
return statearr_22985;
})();if(cljs.core.truth_(inst_22963))
{var statearr_22986_23018 = state_22976__$1;(statearr_22986_23018[(1)] = (13));
} else
{var statearr_22987_23019 = state_22976__$1;(statearr_22987_23019[(1)] = (14));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (2)))
{var inst_22939 = (function (){var G__22988 = dctr;var G__22989 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22988,G__22989) : cljs.core.reset_BANG_.call(null,G__22988,G__22989));
})();var inst_22940 = (0);var state_22976__$1 = (function (){var statearr_22990 = state_22976;(statearr_22990[(9)] = inst_22939);
(statearr_22990[(7)] = inst_22940);
return statearr_22990;
})();var statearr_22991_23020 = state_22976__$1;(statearr_22991_23020[(2)] = null);
(statearr_22991_23020[(1)] = (4));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (11)))
{var inst_22940 = (state_22976[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22976,(10),Object,null,(9));var inst_22949 = (function (){var G__22992 = inst_22940;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__22992) : chs__$1.call(null,G__22992));
})();var inst_22950 = (function (){var G__22993 = inst_22940;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22993) : done.call(null,G__22993));
})();var inst_22951 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22949,inst_22950);var state_22976__$1 = state_22976;var statearr_22994_23021 = state_22976__$1;(statearr_22994_23021[(2)] = inst_22951);
cljs.core.async.impl.ioc_helpers.process_exception(state_22976__$1);
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (9)))
{var inst_22940 = (state_22976[(7)]);var inst_22953 = (state_22976[(2)]);var inst_22954 = (inst_22940 + (1));var inst_22940__$1 = inst_22954;var state_22976__$1 = (function (){var statearr_22995 = state_22976;(statearr_22995[(7)] = inst_22940__$1);
(statearr_22995[(10)] = inst_22953);
return statearr_22995;
})();var statearr_22996_23022 = state_22976__$1;(statearr_22996_23022[(2)] = null);
(statearr_22996_23022[(1)] = (4));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (5)))
{var inst_22960 = (state_22976[(2)]);var state_22976__$1 = (function (){var statearr_22997 = state_22976;(statearr_22997[(11)] = inst_22960);
return statearr_22997;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22976__$1,(12),dchan);
} else
{if((state_val_22977 === (14)))
{var inst_22962 = (state_22976[(8)]);var inst_22967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22962);var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22976__$1,(16),out,inst_22967);
} else
{if((state_val_22977 === (16)))
{var inst_22969 = (state_22976[(2)]);var state_22976__$1 = (function (){var statearr_22998 = state_22976;(statearr_22998[(12)] = inst_22969);
return statearr_22998;
})();var statearr_22999_23023 = state_22976__$1;(statearr_22999_23023[(2)] = null);
(statearr_22999_23023[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (10)))
{var inst_22944 = (state_22976[(2)]);var inst_22945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22976__$1 = (function (){var statearr_23000 = state_22976;(statearr_23000[(13)] = inst_22944);
return statearr_23000;
})();var statearr_23001_23024 = state_22976__$1;(statearr_23001_23024[(2)] = inst_22945);
cljs.core.async.impl.ioc_helpers.process_exception(state_22976__$1);
return cljs.core.constant$keyword$94;
} else
{if((state_val_22977 === (8)))
{var inst_22958 = (state_22976[(2)]);var state_22976__$1 = state_22976;var statearr_23002_23025 = state_22976__$1;(statearr_23002_23025[(2)] = inst_22958);
(statearr_23002_23025[(1)] = (5));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23006[(0)] = state_machine__6407__auto__);
(statearr_23006[(1)] = (1));
return statearr_23006;
});
var state_machine__6407__auto____1 = (function (state_22976){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_22976);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23007){if((e23007 instanceof Object))
{var ex__6410__auto__ = e23007;var statearr_23008_23026 = state_22976;(statearr_23008_23026[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22976);
return cljs.core.constant$keyword$94;
} else
{throw e23007;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23027 = state_22976;
state_22976 = G__23027;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_23009 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23010);
return statearr_23009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23010,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___23137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23137,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23137,out){
return (function (state_23113){var state_val_23114 = (state_23113[(1)]);if((state_val_23114 === (7)))
{var inst_23093 = (state_23113[(7)]);var inst_23092 = (state_23113[(8)]);var inst_23092__$1 = (state_23113[(2)]);var inst_23093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23092__$1,(0),null);var inst_23094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23092__$1,(1),null);var inst_23095 = (inst_23093__$1 == null);var state_23113__$1 = (function (){var statearr_23115 = state_23113;(statearr_23115[(9)] = inst_23094);
(statearr_23115[(7)] = inst_23093__$1);
(statearr_23115[(8)] = inst_23092__$1);
return statearr_23115;
})();if(cljs.core.truth_(inst_23095))
{var statearr_23116_23138 = state_23113__$1;(statearr_23116_23138[(1)] = (8));
} else
{var statearr_23117_23139 = state_23113__$1;(statearr_23117_23139[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (1)))
{var inst_23084 = cljs.core.vec(chs);var inst_23085 = inst_23084;var state_23113__$1 = (function (){var statearr_23118 = state_23113;(statearr_23118[(10)] = inst_23085);
return statearr_23118;
})();var statearr_23119_23140 = state_23113__$1;(statearr_23119_23140[(2)] = null);
(statearr_23119_23140[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (4)))
{var inst_23085 = (state_23113[(10)]);var state_23113__$1 = state_23113;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23113__$1,(7),inst_23085);
} else
{if((state_val_23114 === (6)))
{var inst_23109 = (state_23113[(2)]);var state_23113__$1 = state_23113;var statearr_23120_23141 = state_23113__$1;(statearr_23120_23141[(2)] = inst_23109);
(statearr_23120_23141[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (3)))
{var inst_23111 = (state_23113[(2)]);var state_23113__$1 = state_23113;return cljs.core.async.impl.ioc_helpers.return_chan(state_23113__$1,inst_23111);
} else
{if((state_val_23114 === (2)))
{var inst_23085 = (state_23113[(10)]);var inst_23087 = cljs.core.count(inst_23085);var inst_23088 = (inst_23087 > (0));var state_23113__$1 = state_23113;if(cljs.core.truth_(inst_23088))
{var statearr_23122_23142 = state_23113__$1;(statearr_23122_23142[(1)] = (4));
} else
{var statearr_23123_23143 = state_23113__$1;(statearr_23123_23143[(1)] = (5));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (11)))
{var inst_23085 = (state_23113[(10)]);var inst_23102 = (state_23113[(2)]);var tmp23121 = inst_23085;var inst_23085__$1 = tmp23121;var state_23113__$1 = (function (){var statearr_23124 = state_23113;(statearr_23124[(10)] = inst_23085__$1);
(statearr_23124[(11)] = inst_23102);
return statearr_23124;
})();var statearr_23125_23144 = state_23113__$1;(statearr_23125_23144[(2)] = null);
(statearr_23125_23144[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (9)))
{var inst_23093 = (state_23113[(7)]);var state_23113__$1 = state_23113;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23113__$1,(11),out,inst_23093);
} else
{if((state_val_23114 === (5)))
{var inst_23107 = cljs.core.async.close_BANG_(out);var state_23113__$1 = state_23113;var statearr_23126_23145 = state_23113__$1;(statearr_23126_23145[(2)] = inst_23107);
(statearr_23126_23145[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (10)))
{var inst_23105 = (state_23113[(2)]);var state_23113__$1 = state_23113;var statearr_23127_23146 = state_23113__$1;(statearr_23127_23146[(2)] = inst_23105);
(statearr_23127_23146[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23114 === (8)))
{var inst_23085 = (state_23113[(10)]);var inst_23094 = (state_23113[(9)]);var inst_23093 = (state_23113[(7)]);var inst_23092 = (state_23113[(8)]);var inst_23097 = (function (){var c = inst_23094;var v = inst_23093;var vec__23090 = inst_23092;var cs = inst_23085;return ((function (c,v,vec__23090,cs,inst_23085,inst_23094,inst_23093,inst_23092,state_val_23114,c__6421__auto___23137,out){
return (function (p1__23028_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23028_SHARP_);
});
;})(c,v,vec__23090,cs,inst_23085,inst_23094,inst_23093,inst_23092,state_val_23114,c__6421__auto___23137,out))
})();var inst_23098 = cljs.core.filterv(inst_23097,inst_23085);var inst_23085__$1 = inst_23098;var state_23113__$1 = (function (){var statearr_23128 = state_23113;(statearr_23128[(10)] = inst_23085__$1);
return statearr_23128;
})();var statearr_23129_23147 = state_23113__$1;(statearr_23129_23147[(2)] = null);
(statearr_23129_23147[(1)] = (2));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___23137,out))
;return ((function (switch__6406__auto__,c__6421__auto___23137,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23133 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23133[(0)] = state_machine__6407__auto__);
(statearr_23133[(1)] = (1));
return statearr_23133;
});
var state_machine__6407__auto____1 = (function (state_23113){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_23113);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23134){if((e23134 instanceof Object))
{var ex__6410__auto__ = e23134;var statearr_23135_23148 = state_23113;(statearr_23135_23148[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23113);
return cljs.core.constant$keyword$94;
} else
{throw e23134;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23149 = state_23113;
state_23113 = G__23149;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_23113){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_23113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23137,out))
})();var state__6423__auto__ = (function (){var statearr_23136 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23137);
return statearr_23136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23137,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___23245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23245,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23245,out){
return (function (state_23222){var state_val_23223 = (state_23222[(1)]);if((state_val_23223 === (7)))
{var inst_23204 = (state_23222[(7)]);var inst_23204__$1 = (state_23222[(2)]);var inst_23205 = (inst_23204__$1 == null);var inst_23206 = cljs.core.not(inst_23205);var state_23222__$1 = (function (){var statearr_23224 = state_23222;(statearr_23224[(7)] = inst_23204__$1);
return statearr_23224;
})();if(inst_23206)
{var statearr_23225_23246 = state_23222__$1;(statearr_23225_23246[(1)] = (8));
} else
{var statearr_23226_23247 = state_23222__$1;(statearr_23226_23247[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (1)))
{var inst_23199 = (0);var state_23222__$1 = (function (){var statearr_23227 = state_23222;(statearr_23227[(8)] = inst_23199);
return statearr_23227;
})();var statearr_23228_23248 = state_23222__$1;(statearr_23228_23248[(2)] = null);
(statearr_23228_23248[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (4)))
{var state_23222__$1 = state_23222;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23222__$1,(7),ch);
} else
{if((state_val_23223 === (6)))
{var inst_23217 = (state_23222[(2)]);var state_23222__$1 = state_23222;var statearr_23229_23249 = state_23222__$1;(statearr_23229_23249[(2)] = inst_23217);
(statearr_23229_23249[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (3)))
{var inst_23219 = (state_23222[(2)]);var inst_23220 = cljs.core.async.close_BANG_(out);var state_23222__$1 = (function (){var statearr_23230 = state_23222;(statearr_23230[(9)] = inst_23219);
return statearr_23230;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23222__$1,inst_23220);
} else
{if((state_val_23223 === (2)))
{var inst_23199 = (state_23222[(8)]);var inst_23201 = (inst_23199 < n);var state_23222__$1 = state_23222;if(cljs.core.truth_(inst_23201))
{var statearr_23231_23250 = state_23222__$1;(statearr_23231_23250[(1)] = (4));
} else
{var statearr_23232_23251 = state_23222__$1;(statearr_23232_23251[(1)] = (5));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (11)))
{var inst_23199 = (state_23222[(8)]);var inst_23209 = (state_23222[(2)]);var inst_23210 = (inst_23199 + (1));var inst_23199__$1 = inst_23210;var state_23222__$1 = (function (){var statearr_23233 = state_23222;(statearr_23233[(8)] = inst_23199__$1);
(statearr_23233[(10)] = inst_23209);
return statearr_23233;
})();var statearr_23234_23252 = state_23222__$1;(statearr_23234_23252[(2)] = null);
(statearr_23234_23252[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (9)))
{var state_23222__$1 = state_23222;var statearr_23235_23253 = state_23222__$1;(statearr_23235_23253[(2)] = null);
(statearr_23235_23253[(1)] = (10));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (5)))
{var state_23222__$1 = state_23222;var statearr_23236_23254 = state_23222__$1;(statearr_23236_23254[(2)] = null);
(statearr_23236_23254[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (10)))
{var inst_23214 = (state_23222[(2)]);var state_23222__$1 = state_23222;var statearr_23237_23255 = state_23222__$1;(statearr_23237_23255[(2)] = inst_23214);
(statearr_23237_23255[(1)] = (6));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23223 === (8)))
{var inst_23204 = (state_23222[(7)]);var state_23222__$1 = state_23222;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23222__$1,(11),out,inst_23204);
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
});})(c__6421__auto___23245,out))
;return ((function (switch__6406__auto__,c__6421__auto___23245,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23241 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23241[(0)] = state_machine__6407__auto__);
(statearr_23241[(1)] = (1));
return statearr_23241;
});
var state_machine__6407__auto____1 = (function (state_23222){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_23222);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23242){if((e23242 instanceof Object))
{var ex__6410__auto__ = e23242;var statearr_23243_23256 = state_23222;(statearr_23243_23256[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23222);
return cljs.core.constant$keyword$94;
} else
{throw e23242;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23257 = state_23222;
state_23222 = G__23257;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_23222){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_23222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23245,out))
})();var state__6423__auto__ = (function (){var statearr_23244 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23245);
return statearr_23244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23245,out))
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
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___23356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23356,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23356,out){
return (function (state_23331){var state_val_23332 = (state_23331[(1)]);if((state_val_23332 === (7)))
{var inst_23326 = (state_23331[(2)]);var state_23331__$1 = state_23331;var statearr_23333_23357 = state_23331__$1;(statearr_23333_23357[(2)] = inst_23326);
(statearr_23333_23357[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (1)))
{var inst_23308 = null;var state_23331__$1 = (function (){var statearr_23334 = state_23331;(statearr_23334[(7)] = inst_23308);
return statearr_23334;
})();var statearr_23335_23358 = state_23331__$1;(statearr_23335_23358[(2)] = null);
(statearr_23335_23358[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (4)))
{var inst_23311 = (state_23331[(8)]);var inst_23311__$1 = (state_23331[(2)]);var inst_23312 = (inst_23311__$1 == null);var inst_23313 = cljs.core.not(inst_23312);var state_23331__$1 = (function (){var statearr_23336 = state_23331;(statearr_23336[(8)] = inst_23311__$1);
return statearr_23336;
})();if(inst_23313)
{var statearr_23337_23359 = state_23331__$1;(statearr_23337_23359[(1)] = (5));
} else
{var statearr_23338_23360 = state_23331__$1;(statearr_23338_23360[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (6)))
{var state_23331__$1 = state_23331;var statearr_23339_23361 = state_23331__$1;(statearr_23339_23361[(2)] = null);
(statearr_23339_23361[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (3)))
{var inst_23328 = (state_23331[(2)]);var inst_23329 = cljs.core.async.close_BANG_(out);var state_23331__$1 = (function (){var statearr_23340 = state_23331;(statearr_23340[(9)] = inst_23328);
return statearr_23340;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23331__$1,inst_23329);
} else
{if((state_val_23332 === (2)))
{var state_23331__$1 = state_23331;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23331__$1,(4),ch);
} else
{if((state_val_23332 === (11)))
{var inst_23311 = (state_23331[(8)]);var inst_23320 = (state_23331[(2)]);var inst_23308 = inst_23311;var state_23331__$1 = (function (){var statearr_23341 = state_23331;(statearr_23341[(10)] = inst_23320);
(statearr_23341[(7)] = inst_23308);
return statearr_23341;
})();var statearr_23342_23362 = state_23331__$1;(statearr_23342_23362[(2)] = null);
(statearr_23342_23362[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (9)))
{var inst_23311 = (state_23331[(8)]);var state_23331__$1 = state_23331;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23331__$1,(11),out,inst_23311);
} else
{if((state_val_23332 === (5)))
{var inst_23311 = (state_23331[(8)]);var inst_23308 = (state_23331[(7)]);var inst_23315 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23311,inst_23308);var state_23331__$1 = state_23331;if(inst_23315)
{var statearr_23344_23363 = state_23331__$1;(statearr_23344_23363[(1)] = (8));
} else
{var statearr_23345_23364 = state_23331__$1;(statearr_23345_23364[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (10)))
{var inst_23323 = (state_23331[(2)]);var state_23331__$1 = state_23331;var statearr_23346_23365 = state_23331__$1;(statearr_23346_23365[(2)] = inst_23323);
(statearr_23346_23365[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23332 === (8)))
{var inst_23308 = (state_23331[(7)]);var tmp23343 = inst_23308;var inst_23308__$1 = tmp23343;var state_23331__$1 = (function (){var statearr_23347 = state_23331;(statearr_23347[(7)] = inst_23308__$1);
return statearr_23347;
})();var statearr_23348_23366 = state_23331__$1;(statearr_23348_23366[(2)] = null);
(statearr_23348_23366[(1)] = (2));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___23356,out))
;return ((function (switch__6406__auto__,c__6421__auto___23356,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23352 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23352[(0)] = state_machine__6407__auto__);
(statearr_23352[(1)] = (1));
return statearr_23352;
});
var state_machine__6407__auto____1 = (function (state_23331){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_23331);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object))
{var ex__6410__auto__ = e23353;var statearr_23354_23367 = state_23331;(statearr_23354_23367[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23331);
return cljs.core.constant$keyword$94;
} else
{throw e23353;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23368 = state_23331;
state_23331 = G__23368;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_23331){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_23331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23356,out))
})();var state__6423__auto__ = (function (){var statearr_23355 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23356);
return statearr_23355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23356,out))
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
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___23506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23506,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23506,out){
return (function (state_23476){var state_val_23477 = (state_23476[(1)]);if((state_val_23477 === (7)))
{var inst_23472 = (state_23476[(2)]);var state_23476__$1 = state_23476;var statearr_23478_23507 = state_23476__$1;(statearr_23478_23507[(2)] = inst_23472);
(statearr_23478_23507[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (1)))
{var inst_23439 = (new Array(n));var inst_23440 = inst_23439;var inst_23441 = (0);var state_23476__$1 = (function (){var statearr_23479 = state_23476;(statearr_23479[(7)] = inst_23440);
(statearr_23479[(8)] = inst_23441);
return statearr_23479;
})();var statearr_23480_23508 = state_23476__$1;(statearr_23480_23508[(2)] = null);
(statearr_23480_23508[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (4)))
{var inst_23444 = (state_23476[(9)]);var inst_23444__$1 = (state_23476[(2)]);var inst_23445 = (inst_23444__$1 == null);var inst_23446 = cljs.core.not(inst_23445);var state_23476__$1 = (function (){var statearr_23481 = state_23476;(statearr_23481[(9)] = inst_23444__$1);
return statearr_23481;
})();if(inst_23446)
{var statearr_23482_23509 = state_23476__$1;(statearr_23482_23509[(1)] = (5));
} else
{var statearr_23483_23510 = state_23476__$1;(statearr_23483_23510[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (15)))
{var inst_23466 = (state_23476[(2)]);var state_23476__$1 = state_23476;var statearr_23484_23511 = state_23476__$1;(statearr_23484_23511[(2)] = inst_23466);
(statearr_23484_23511[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (13)))
{var state_23476__$1 = state_23476;var statearr_23485_23512 = state_23476__$1;(statearr_23485_23512[(2)] = null);
(statearr_23485_23512[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (6)))
{var inst_23441 = (state_23476[(8)]);var inst_23462 = (inst_23441 > (0));var state_23476__$1 = state_23476;if(cljs.core.truth_(inst_23462))
{var statearr_23486_23513 = state_23476__$1;(statearr_23486_23513[(1)] = (12));
} else
{var statearr_23487_23514 = state_23476__$1;(statearr_23487_23514[(1)] = (13));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (3)))
{var inst_23474 = (state_23476[(2)]);var state_23476__$1 = state_23476;return cljs.core.async.impl.ioc_helpers.return_chan(state_23476__$1,inst_23474);
} else
{if((state_val_23477 === (12)))
{var inst_23440 = (state_23476[(7)]);var inst_23464 = cljs.core.vec(inst_23440);var state_23476__$1 = state_23476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23476__$1,(15),out,inst_23464);
} else
{if((state_val_23477 === (2)))
{var state_23476__$1 = state_23476;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23476__$1,(4),ch);
} else
{if((state_val_23477 === (11)))
{var inst_23456 = (state_23476[(2)]);var inst_23457 = (new Array(n));var inst_23440 = inst_23457;var inst_23441 = (0);var state_23476__$1 = (function (){var statearr_23488 = state_23476;(statearr_23488[(10)] = inst_23456);
(statearr_23488[(7)] = inst_23440);
(statearr_23488[(8)] = inst_23441);
return statearr_23488;
})();var statearr_23489_23515 = state_23476__$1;(statearr_23489_23515[(2)] = null);
(statearr_23489_23515[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (9)))
{var inst_23440 = (state_23476[(7)]);var inst_23454 = cljs.core.vec(inst_23440);var state_23476__$1 = state_23476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23476__$1,(11),out,inst_23454);
} else
{if((state_val_23477 === (5)))
{var inst_23444 = (state_23476[(9)]);var inst_23449 = (state_23476[(11)]);var inst_23440 = (state_23476[(7)]);var inst_23441 = (state_23476[(8)]);var inst_23448 = (inst_23440[inst_23441] = inst_23444);var inst_23449__$1 = (inst_23441 + (1));var inst_23450 = (inst_23449__$1 < n);var state_23476__$1 = (function (){var statearr_23490 = state_23476;(statearr_23490[(12)] = inst_23448);
(statearr_23490[(11)] = inst_23449__$1);
return statearr_23490;
})();if(cljs.core.truth_(inst_23450))
{var statearr_23491_23516 = state_23476__$1;(statearr_23491_23516[(1)] = (8));
} else
{var statearr_23492_23517 = state_23476__$1;(statearr_23492_23517[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (14)))
{var inst_23469 = (state_23476[(2)]);var inst_23470 = cljs.core.async.close_BANG_(out);var state_23476__$1 = (function (){var statearr_23494 = state_23476;(statearr_23494[(13)] = inst_23469);
return statearr_23494;
})();var statearr_23495_23518 = state_23476__$1;(statearr_23495_23518[(2)] = inst_23470);
(statearr_23495_23518[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (10)))
{var inst_23460 = (state_23476[(2)]);var state_23476__$1 = state_23476;var statearr_23496_23519 = state_23476__$1;(statearr_23496_23519[(2)] = inst_23460);
(statearr_23496_23519[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23477 === (8)))
{var inst_23449 = (state_23476[(11)]);var inst_23440 = (state_23476[(7)]);var tmp23493 = inst_23440;var inst_23440__$1 = tmp23493;var inst_23441 = inst_23449;var state_23476__$1 = (function (){var statearr_23497 = state_23476;(statearr_23497[(7)] = inst_23440__$1);
(statearr_23497[(8)] = inst_23441);
return statearr_23497;
})();var statearr_23498_23520 = state_23476__$1;(statearr_23498_23520[(2)] = null);
(statearr_23498_23520[(1)] = (2));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___23506,out))
;return ((function (switch__6406__auto__,c__6421__auto___23506,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23502[(0)] = state_machine__6407__auto__);
(statearr_23502[(1)] = (1));
return statearr_23502;
});
var state_machine__6407__auto____1 = (function (state_23476){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_23476);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23503){if((e23503 instanceof Object))
{var ex__6410__auto__ = e23503;var statearr_23504_23521 = state_23476;(statearr_23504_23521[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23476);
return cljs.core.constant$keyword$94;
} else
{throw e23503;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23522 = state_23476;
state_23476 = G__23522;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_23476){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_23476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23506,out))
})();var state__6423__auto__ = (function (){var statearr_23505 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23506);
return statearr_23505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23506,out))
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
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6421__auto___23670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6421__auto___23670,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___23670,out){
return (function (state_23639){var state_val_23640 = (state_23639[(1)]);if((state_val_23640 === (7)))
{var inst_23635 = (state_23639[(2)]);var state_23639__$1 = state_23639;var statearr_23641_23671 = state_23639__$1;(statearr_23641_23671[(2)] = inst_23635);
(statearr_23641_23671[(1)] = (3));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (1)))
{var inst_23598 = [];var inst_23599 = inst_23598;var inst_23600 = cljs.core.constant$keyword$107;var state_23639__$1 = (function (){var statearr_23642 = state_23639;(statearr_23642[(7)] = inst_23600);
(statearr_23642[(8)] = inst_23599);
return statearr_23642;
})();var statearr_23643_23672 = state_23639__$1;(statearr_23643_23672[(2)] = null);
(statearr_23643_23672[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (4)))
{var inst_23603 = (state_23639[(9)]);var inst_23603__$1 = (state_23639[(2)]);var inst_23604 = (inst_23603__$1 == null);var inst_23605 = cljs.core.not(inst_23604);var state_23639__$1 = (function (){var statearr_23644 = state_23639;(statearr_23644[(9)] = inst_23603__$1);
return statearr_23644;
})();if(inst_23605)
{var statearr_23645_23673 = state_23639__$1;(statearr_23645_23673[(1)] = (5));
} else
{var statearr_23646_23674 = state_23639__$1;(statearr_23646_23674[(1)] = (6));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (15)))
{var inst_23629 = (state_23639[(2)]);var state_23639__$1 = state_23639;var statearr_23647_23675 = state_23639__$1;(statearr_23647_23675[(2)] = inst_23629);
(statearr_23647_23675[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (13)))
{var state_23639__$1 = state_23639;var statearr_23648_23676 = state_23639__$1;(statearr_23648_23676[(2)] = null);
(statearr_23648_23676[(1)] = (14));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (6)))
{var inst_23599 = (state_23639[(8)]);var inst_23624 = inst_23599.length;var inst_23625 = (inst_23624 > (0));var state_23639__$1 = state_23639;if(cljs.core.truth_(inst_23625))
{var statearr_23649_23677 = state_23639__$1;(statearr_23649_23677[(1)] = (12));
} else
{var statearr_23650_23678 = state_23639__$1;(statearr_23650_23678[(1)] = (13));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (3)))
{var inst_23637 = (state_23639[(2)]);var state_23639__$1 = state_23639;return cljs.core.async.impl.ioc_helpers.return_chan(state_23639__$1,inst_23637);
} else
{if((state_val_23640 === (12)))
{var inst_23599 = (state_23639[(8)]);var inst_23627 = cljs.core.vec(inst_23599);var state_23639__$1 = state_23639;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23639__$1,(15),out,inst_23627);
} else
{if((state_val_23640 === (2)))
{var state_23639__$1 = state_23639;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23639__$1,(4),ch);
} else
{if((state_val_23640 === (11)))
{var inst_23607 = (state_23639[(10)]);var inst_23603 = (state_23639[(9)]);var inst_23617 = (state_23639[(2)]);var inst_23618 = [];var inst_23619 = inst_23618.push(inst_23603);var inst_23599 = inst_23618;var inst_23600 = inst_23607;var state_23639__$1 = (function (){var statearr_23651 = state_23639;(statearr_23651[(11)] = inst_23619);
(statearr_23651[(7)] = inst_23600);
(statearr_23651[(8)] = inst_23599);
(statearr_23651[(12)] = inst_23617);
return statearr_23651;
})();var statearr_23652_23679 = state_23639__$1;(statearr_23652_23679[(2)] = null);
(statearr_23652_23679[(1)] = (2));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (9)))
{var inst_23599 = (state_23639[(8)]);var inst_23615 = cljs.core.vec(inst_23599);var state_23639__$1 = state_23639;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23639__$1,(11),out,inst_23615);
} else
{if((state_val_23640 === (5)))
{var inst_23600 = (state_23639[(7)]);var inst_23607 = (state_23639[(10)]);var inst_23603 = (state_23639[(9)]);var inst_23607__$1 = (function (){var G__23653 = inst_23603;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23653) : f.call(null,G__23653));
})();var inst_23608 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23607__$1,inst_23600);var inst_23609 = cljs.core.keyword_identical_QMARK_(inst_23600,cljs.core.constant$keyword$107);var inst_23610 = (inst_23608) || (inst_23609);var state_23639__$1 = (function (){var statearr_23654 = state_23639;(statearr_23654[(10)] = inst_23607__$1);
return statearr_23654;
})();if(cljs.core.truth_(inst_23610))
{var statearr_23655_23680 = state_23639__$1;(statearr_23655_23680[(1)] = (8));
} else
{var statearr_23656_23681 = state_23639__$1;(statearr_23656_23681[(1)] = (9));
}
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (14)))
{var inst_23632 = (state_23639[(2)]);var inst_23633 = cljs.core.async.close_BANG_(out);var state_23639__$1 = (function (){var statearr_23658 = state_23639;(statearr_23658[(13)] = inst_23632);
return statearr_23658;
})();var statearr_23659_23682 = state_23639__$1;(statearr_23659_23682[(2)] = inst_23633);
(statearr_23659_23682[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (10)))
{var inst_23622 = (state_23639[(2)]);var state_23639__$1 = state_23639;var statearr_23660_23683 = state_23639__$1;(statearr_23660_23683[(2)] = inst_23622);
(statearr_23660_23683[(1)] = (7));
return cljs.core.constant$keyword$94;
} else
{if((state_val_23640 === (8)))
{var inst_23607 = (state_23639[(10)]);var inst_23599 = (state_23639[(8)]);var inst_23603 = (state_23639[(9)]);var inst_23612 = inst_23599.push(inst_23603);var tmp23657 = inst_23599;var inst_23599__$1 = tmp23657;var inst_23600 = inst_23607;var state_23639__$1 = (function (){var statearr_23661 = state_23639;(statearr_23661[(7)] = inst_23600);
(statearr_23661[(14)] = inst_23612);
(statearr_23661[(8)] = inst_23599__$1);
return statearr_23661;
})();var statearr_23662_23684 = state_23639__$1;(statearr_23662_23684[(2)] = null);
(statearr_23662_23684[(1)] = (2));
return cljs.core.constant$keyword$94;
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
});})(c__6421__auto___23670,out))
;return ((function (switch__6406__auto__,c__6421__auto___23670,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_23666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23666[(0)] = state_machine__6407__auto__);
(statearr_23666[(1)] = (1));
return statearr_23666;
});
var state_machine__6407__auto____1 = (function (state_23639){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__(state_23639);if(cljs.core.keyword_identical_QMARK_(result__6409__auto__,cljs.core.constant$keyword$94))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e23667){if((e23667 instanceof Object))
{var ex__6410__auto__ = e23667;var statearr_23668_23685 = state_23639;(statearr_23668_23685[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23639);
return cljs.core.constant$keyword$94;
} else
{throw e23667;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6408__auto__,cljs.core.constant$keyword$94))
{{
var G__23686 = state_23639;
state_23639 = G__23686;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_23639){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_23639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___23670,out))
})();var state__6423__auto__ = (function (){var statearr_23669 = (function (){return (f__6422__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6422__auto__.cljs$core$IFn$_invoke$arity$0() : f__6422__auto__.call(null));
})();(statearr_23669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___23670);
return statearr_23669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6423__auto__);
});})(c__6421__auto___23670,out))
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
