// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj23793 = {};return obj23793;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__3573__auto__ = port;if(and__3573__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__4222__auto__ = (((port == null))?null:port);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__23797 = x__4222__auto__;return goog.typeOf(G__23797);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj23799 = {};return obj23799;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__3573__auto__ = port;if(and__3573__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__4222__auto__ = (((port == null))?null:port);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__23803 = x__4222__auto__;return goog.typeOf(G__23803);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj23805 = {};return obj23805;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__3573__auto__ = chan;if(and__3573__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__4222__auto__ = (((chan == null))?null:chan);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__23809 = x__4222__auto__;return goog.typeOf(G__23809);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__3573__auto__ = chan;if(and__3573__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__4222__auto__ = (((chan == null))?null:chan);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__23813 = x__4222__auto__;return goog.typeOf(G__23813);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj23815 = {};return obj23815;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__3573__auto__ = h;if(and__3573__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__4222__auto__ = (((h == null))?null:h);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__23819 = x__4222__auto__;return goog.typeOf(G__23819);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__3573__auto__ = h;if(and__3573__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__3573__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__4222__auto__ = (((h == null))?null:h);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__23823 = x__4222__auto__;return goog.typeOf(G__23823);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj23825 = {};return obj23825;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__3573__auto__ = b;if(and__3573__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__4222__auto__ = (((b == null))?null:b);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__23829 = x__4222__auto__;return goog.typeOf(G__23829);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__3573__auto__ = b;if(and__3573__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__4222__auto__ = (((b == null))?null:b);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__23833 = x__4222__auto__;return goog.typeOf(G__23833);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__3573__auto__ = b;if(and__3573__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__4222__auto__ = (((b == null))?null:b);return (function (){var or__3585__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__23837 = x__4222__auto__;return goog.typeOf(G__23837);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj23839 = {};return obj23839;
})();
