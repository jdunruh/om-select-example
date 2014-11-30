// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t23860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t23860 = (function (val,box,meta23861){
this.val = val;
this.box = box;
this.meta23861 = meta23861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t23860.cljs$lang$type = true;
cljs.core.async.impl.channels.t23860.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t23860";
cljs.core.async.impl.channels.t23860.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async.impl.channels/t23860");
});
cljs.core.async.impl.channels.t23860.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t23860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23862){var self__ = this;
var _23862__$1 = this;return self__.meta23861;
});
cljs.core.async.impl.channels.t23860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23862,meta23861__$1){var self__ = this;
var _23862__$1 = this;return (new cljs.core.async.impl.channels.t23860(self__.val,self__.box,meta23861__$1));
});
cljs.core.async.impl.channels.__GT_t23860 = (function __GT_t23860(val__$1,box__$1,meta23861){return (new cljs.core.async.impl.channels.t23860(val__$1,box__$1,meta23861));
});
}
return (new cljs.core.async.impl.channels.t23860(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4165__auto__,writer__4166__auto__,opts__4167__auto__){return cljs.core._write(writer__4166__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_23866 = self__.takes.pop();if((taker_23866 == null))
{} else
{if(taker_23866.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var take_cb_23867 = taker_23866.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);cljs.core.async.impl.dispatch.run(((function (take_cb_23867,taker_23866,this$__$1){
return (function (){var G__23863 = null;return (take_cb_23867.cljs$core$IFn$_invoke$arity$1 ? take_cb_23867.cljs$core$IFn$_invoke$arity$1(G__23863) : take_cb_23867.call(null,G__23863));
});})(take_cb_23867,taker_23866,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0))))
{var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);return cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
} else
{while(true){
var putter = self__.puts.pop();if(!((putter == null)))
{var put_handler = putter.handler;var val = putter.val;if(put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var put_cb = put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);cljs.core.async.impl.dispatch.run(((function (put_cb,_,put_handler,val,putter,this$__$1){
return (function (){var G__23864 = true;return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__23864) : put_cb.call(null,G__23864));
});})(put_cb,_,put_handler,val,putter,this$__$1))
);
return cljs.core.async.impl.channels.box(val);
} else
{{
continue;
}
}
} else
{if(self__.closed)
{var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);return cljs.core.async.impl.channels.box(null);
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = (0);
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + (1));
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending takes are allowed on a single channel."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0))))));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
break;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error(("Assert failed: Can't put nil in on a channel\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0))))));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))))
{return cljs.core.async.impl.channels.box(!(closed__$1));
} else
{while(true){
var taker = self__.takes.pop();if(!((taker == null)))
{if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);cljs.core.async.impl.dispatch.run(((function (take_cb,_,taker,closed__$1,this$__$1){
return (function (){var G__23865 = val;return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__23865) : take_cb.call(null,G__23865));
});})(take_cb,_,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box(true);
} else
{{
continue;
}
}
} else
{if(!(((self__.buf == null)) || (self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))))
{var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);self__.buf.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(null,val);
return cljs.core.async.impl.channels.box(true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = (0);
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + (1));
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending puts are allowed on a single channel. Consider using a windowed buffer."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0))))));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
break;
}
}
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed));
});
cljs.core.async.impl.channels.chan = (function chan(buf){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false));
});
