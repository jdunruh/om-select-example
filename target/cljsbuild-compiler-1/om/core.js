// Compiled by ClojureScript 0.0-2371
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj17375 = {};return obj17375;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.display_name[(function (){var G__17379 = x__4222__auto__;return goog.typeOf(G__17379);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.display_name["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj17381 = {};return obj17381;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.init_state[(function (){var G__17385 = x__4222__auto__;return goog.typeOf(G__17385);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.init_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj17387 = {};return obj17387;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.should_update[(function (){var G__17391 = x__4222__auto__;return goog.typeOf(G__17391);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.should_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj17393 = {};return obj17393;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_mount[(function (){var G__17397 = x__4222__auto__;return goog.typeOf(G__17397);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_mount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj17399 = {};return obj17399;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.did_mount[(function (){var G__17403 = x__4222__auto__;return goog.typeOf(G__17403);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.did_mount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj17405 = {};return obj17405;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_unmount[(function (){var G__17409 = x__4222__auto__;return goog.typeOf(G__17409);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_unmount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj17411 = {};return obj17411;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_update[(function (){var G__17415 = x__4222__auto__;return goog.typeOf(G__17415);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj17417 = {};return obj17417;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.did_update[(function (){var G__17421 = x__4222__auto__;return goog.typeOf(G__17421);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.did_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj17423 = {};return obj17423;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_receive_props[(function (){var G__17427 = x__4222__auto__;return goog.typeOf(G__17427);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_receive_props["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj17429 = {};return obj17429;
})();
om.core.render = (function render(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render[(function (){var G__17433 = x__4222__auto__;return goog.typeOf(G__17433);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj17435 = {};return obj17435;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render_props[(function (){var G__17439 = x__4222__auto__;return goog.typeOf(G__17439);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render_props["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj17441 = {};return obj17441;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render_state[(function (){var G__17445 = x__4222__auto__;return goog.typeOf(G__17445);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj17447 = {};return obj17447;
})();
om.core.IOmSwap = (function (){var obj17449 = {};return obj17449;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._om_swap_BANG_[(function (){var G__17453 = x__4222__auto__;return goog.typeOf(G__17453);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj17455 = {};return obj17455;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_state[(function (){var G__17461 = x__4222__auto__;return goog.typeOf(G__17461);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_state[(function (){var G__17463 = x__4222__auto__;return goog.typeOf(G__17463);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj17465 = {};return obj17465;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_render_state[(function (){var G__17471 = x__4222__auto__;return goog.typeOf(G__17471);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_render_state[(function (){var G__17473 = x__4222__auto__;return goog.typeOf(G__17473);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj17475 = {};return obj17475;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_state_BANG_[(function (){var G__17481 = x__4222__auto__;return goog.typeOf(G__17481);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_state_BANG_[(function (){var G__17483 = x__4222__auto__;return goog.typeOf(G__17483);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj17485 = {};return obj17485;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_queue[(function (){var G__17489 = x__4222__auto__;return goog.typeOf(G__17489);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_queue["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._queue_render_BANG_[(function (){var G__17493 = x__4222__auto__;return goog.typeOf(G__17493);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._empty_queue_BANG_[(function (){var G__17497 = x__4222__auto__;return goog.typeOf(G__17497);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj17499 = {};return obj17499;
})();
om.core._value = (function _value(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._value[(function (){var G__17503 = x__4222__auto__;return goog.typeOf(G__17503);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._value["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj17505 = {};return obj17505;
})();
om.core._path = (function _path(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._path[(function (){var G__17509 = x__4222__auto__;return goog.typeOf(G__17509);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._path["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._state[(function (){var G__17513 = x__4222__auto__;return goog.typeOf(G__17513);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj17515 = {};return obj17515;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3573__auto__ = value;if(and__3573__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3573__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4222__auto__ = (((value == null))?null:value);return (function (){var or__3585__auto__ = (om.core._to_cursor[(function (){var G__17521 = x__4222__auto__;return goog.typeOf(G__17521);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._to_cursor["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3573__auto__ = value;if(and__3573__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3573__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4222__auto__ = (((value == null))?null:value);return (function (){var or__3585__auto__ = (om.core._to_cursor[(function (){var G__17523 = x__4222__auto__;return goog.typeOf(G__17523);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._to_cursor["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj17525 = {};return obj17525;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._derive[(function (){var G__17529 = x__4222__auto__;return goog.typeOf(G__17529);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._derive["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){var G__17530 = derived;var G__17531 = state;var G__17532 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__17530,G__17531,G__17532) : om.core.to_cursor.call(null,G__17530,G__17531,G__17532));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj17534 = {};return obj17534;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._transact_BANG_[(function (){var G__17538 = x__4222__auto__;return goog.typeOf(G__17538);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj17540 = {};return obj17540;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._listen_BANG_[(function (){var G__17544 = x__4222__auto__;return goog.typeOf(G__17544);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._unlisten_BANG_[(function (){var G__17548 = x__4222__auto__;return goog.typeOf(G__17548);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._notify_BANG_[(function (){var G__17552 = x__4222__auto__;return goog.typeOf(G__17552);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj17554 = {};return obj17554;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_property_BANG_[(function (){var G__17558 = x__4222__auto__;return goog.typeOf(G__17558);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_property_BANG_[(function (){var G__17562 = x__4222__auto__;return goog.typeOf(G__17562);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_properties_BANG_[(function (){var G__17566 = x__4222__auto__;return goog.typeOf(G__17566);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_property[(function (){var G__17570 = x__4222__auto__;return goog.typeOf(G__17570);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_property["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj17572 = {};return obj17572;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._root_key[(function (){var G__17576 = x__4222__auto__;return goog.typeOf(G__17576);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._root_key["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj17578 = {};return obj17578;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._adapt[(function (){var G__17582 = x__4222__auto__;return goog.typeOf(G__17582);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._adapt["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt(x,other);
});
om.core.IOmRef = (function (){var obj17584 = {};return obj17584;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._add_dep_BANG_[(function (){var G__17588 = x__4222__auto__;return goog.typeOf(G__17588);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_dep_BANG_[(function (){var G__17592 = x__4222__auto__;return goog.typeOf(G__17592);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__17596 = x__4222__auto__;return goog.typeOf(G__17596);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_deps[(function (){var G__17600 = x__4222__auto__;return goog.typeOf(G__17600);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_deps["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__17610 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17610) : cljs.core.deref.call(null,G__17610));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__17611 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17611) : om.core.path.call(null,G__17611));
})(),korks);var ret = (((function (){var G__17612 = state;if(G__17612)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17612.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__17612.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__17612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__17612);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$77))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$78,path,cljs.core.constant$keyword$79,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$80,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17613 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17613) : cljs.core.deref.call(null,G__17613));
})(),path),cljs.core.constant$keyword$81,old_state,cljs.core.constant$keyword$82,(function (){var G__17614 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17614) : cljs.core.deref.call(null,G__17614));
})()], null);if(!((tag == null)))
{var G__17615 = cursor;var G__17616 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$83,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__17615,G__17616) : om.core.notify_STAR_.call(null,G__17615,G__17616));
} else
{var G__17617 = cursor;var G__17618 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__17617,G__17618) : om.core.notify_STAR_.call(null,G__17617,G__17618));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__17620 = x;if(G__17620)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17620.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__17620.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17620);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var G__17622 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__17622) : c.call(null,G__17622));
})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__17627 = state;(G__17627["__om_prev_state"] = (state["__om_state"]));
(G__17627["__om_state"] = pending_state);
(G__17627["__om_pending_state"] = null);
return G__17627;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3585__auto__ = props;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3585__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17632 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17632) : cljs.core.deref.call(null,G__17632));
})(),(function (){var G__17633 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17633) : om.core.path.call(null,G__17633));
})(),cljs.core.constant$keyword$84);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__17639 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17639) : om.core.path.call(null,G__17639));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17640 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17640) : cljs.core.deref.call(null,G__17640));
})(),ref_path,cljs.core.constant$keyword$84);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$84))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__17641 = ref_val_SINGLEQUOTE_;var G__17642 = ref_state;var G__17643 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__17641,G__17642,G__17643) : om.core.to_cursor.call(null,G__17641,G__17642,G__17643));
})());
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$85,cljs.core.constant$keyword$86,cljs.core.constant$keyword$87,cljs.core.constant$keyword$88,cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92,cljs.core.constant$keyword$93,cljs.core.constant$keyword$94],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__17645 = c;if(G__17645)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17645.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__17645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17645);
}
})())
{var state_17670 = this$.state;om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3585__auto__ = (state_17670["__om_prev_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state_17670["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__17646 = c;if(G__17646)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17646.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__17646.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17646);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17646);
}
})())
{om.core.will_unmount(c);
} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__17647 = cljs.core.seq(refs);var chunk__17648 = null;var count__17649 = (0);var i__17650 = (0);while(true){
if((i__17650 < count__17649))
{var ref = chunk__17648.cljs$core$IIndexed$_nth$arity$2(null,i__17650);var G__17651_17671 = this$;var G__17652_17672 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17651_17671,G__17652_17672) : om.core.unobserve.call(null,G__17651_17671,G__17652_17672));
{
var G__17673 = seq__17647;
var G__17674 = chunk__17648;
var G__17675 = count__17649;
var G__17676 = (i__17650 + (1));
seq__17647 = G__17673;
chunk__17648 = G__17674;
count__17649 = G__17675;
i__17650 = G__17676;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__17647);if(temp__4126__auto____$1)
{var seq__17647__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__17647__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__17647__$1);{
var G__17677 = cljs.core.chunk_rest(seq__17647__$1);
var G__17678 = c__4355__auto__;
var G__17679 = cljs.core.count(c__4355__auto__);
var G__17680 = (0);
seq__17647 = G__17677;
chunk__17648 = G__17678;
count__17649 = G__17679;
i__17650 = G__17680;
continue;
}
} else
{var ref = cljs.core.first(seq__17647__$1);var G__17653_17681 = this$;var G__17654_17682 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17653_17681,G__17654_17682) : om.core.unobserve.call(null,G__17653_17681,G__17654_17682));
{
var G__17683 = cljs.core.next(seq__17647__$1);
var G__17684 = null;
var G__17685 = (0);
var G__17686 = (0);
seq__17647 = G__17683;
chunk__17648 = G__17684;
count__17649 = G__17685;
i__17650 = G__17686;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__17655 = c;if(G__17655)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17655.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__17655.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__17655);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__17655);
}
})())
{return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__17656 = c;if(G__17656)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17656.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__17656.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__17656);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__17656);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));if(and__3573__auto__)
{return cljs.core.some(((function (and__3573__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__17644_SHARP_){return om.core.ref_changed_QMARK_(p1__17644_SHARP_);
});})(and__3573__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__3573__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_17657 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_17658 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_17659 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_17660 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_17661 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__17662 = c;if(G__17662)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17662.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__17662.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17662);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__17663 = c;if(G__17663)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17663.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__17663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17663);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__17664 = c;if(G__17664)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17664.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__17664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17664);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17661;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17660;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17659;
om.core._STAR_state_STAR_ = _STAR_state_STAR_17658;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_17657;
}}),(function (next_props,next_state){var this$ = this;var c_17687 = om.core.children(this$);if((function (){var G__17665 = c_17687;if(G__17665)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17665.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__17665.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17665);
}
})())
{var state_17688 = this$.state;om.core.will_update(c_17687,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3585__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__17666 = c;if(G__17666)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17666.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__17666.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17666);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$95)], 0)), "__om_id": (function (){var or__3585__auto__ = id;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__17667 = c;if(G__17667)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17667.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__17667.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__17667);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__17667);
}
})())
{return om.core.did_mount(c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__17668 = c;if(G__17668)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17668.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__17668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__17668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__17668);
}
})())
{return om.core.display_name(c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_17689 = om.core.children(this$);if((function (){var G__17669 = c_17689;if(G__17669)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17669.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__17669.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17669);
}
})())
{om.core.will_mount(c_17689);
} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x17691 = obj;x17691.om$core$IGetState$ = true;
x17691.om$core$IGetState$_get_state$arity$1 = ((function (x17691){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3585__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state["__om_state"]);
}
});})(x17691))
;
x17691.om$core$IGetState$_get_state$arity$2 = ((function (x17691){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17691))
;
x17691.om$core$IGetRenderState$ = true;
x17691.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17691){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x17691))
;
x17691.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17691){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17691))
;
x17691.om$core$ISetState$ = true;
x17691.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17691){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3573__auto__ = !((app_state == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
});})(x17691))
;
x17691.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17691){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if(cljs.core.truth_((function (){var and__3573__auto__ = !((app_state == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
});})(x17691))
;
return x17691;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17693 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17693) : cljs.core.deref.call(null,G__17693));
})(),spath);if(cljs.core.truth_(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$98,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$97);
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$91,(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3585__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3585__auto__ = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$95),(((function (){var G__17694 = c;if(G__17694)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17694.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__17694.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17694);
}
})())?om.core.init_state(c):null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$),cljs.core.constant$keyword$98], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$94,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_17708 = om.core.children(this$);if((function (){var G__17695 = c_17708;if(G__17695)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17695.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__17695.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17695);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17695);
}
})())
{om.core.will_mount(c_17708);
} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$86,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$)], null);if((function (){var G__17696 = c;if(G__17696)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17696.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__17696.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17696);
}
})())
{om.core.will_unmount(c);
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__17697 = cljs.core.seq(refs);var chunk__17698 = null;var count__17699 = (0);var i__17700 = (0);while(true){
if((i__17700 < count__17699))
{var ref = chunk__17698.cljs$core$IIndexed$_nth$arity$2(null,i__17700);var G__17701_17709 = this$;var G__17702_17710 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17701_17709,G__17702_17710) : om.core.unobserve.call(null,G__17701_17709,G__17702_17710));
{
var G__17711 = seq__17697;
var G__17712 = chunk__17698;
var G__17713 = count__17699;
var G__17714 = (i__17700 + (1));
seq__17697 = G__17711;
chunk__17698 = G__17712;
count__17699 = G__17713;
i__17700 = G__17714;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__17697);if(temp__4126__auto____$1)
{var seq__17697__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__17697__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__17697__$1);{
var G__17715 = cljs.core.chunk_rest(seq__17697__$1);
var G__17716 = c__4355__auto__;
var G__17717 = cljs.core.count(c__4355__auto__);
var G__17718 = (0);
seq__17697 = G__17715;
chunk__17698 = G__17716;
count__17699 = G__17717;
i__17700 = G__17718;
continue;
}
} else
{var ref = cljs.core.first(seq__17697__$1);var G__17703_17719 = this$;var G__17704_17720 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17703_17719,G__17704_17720) : om.core.unobserve.call(null,G__17703_17719,G__17704_17720));
{
var G__17721 = cljs.core.next(seq__17697__$1);
var G__17722 = null;
var G__17723 = (0);
var G__17724 = (0);
seq__17697 = G__17721;
chunk__17698 = G__17722;
count__17699 = G__17723;
i__17700 = G__17724;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),cljs.core.constant$keyword$90,(function (next_props,next_state){var this$ = this;var props_17725 = this$.props;var c_17726 = om.core.children(this$);if((function (){var G__17705 = c_17726;if(G__17705)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17705.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__17705.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17705);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17705);
}
})())
{var state_17727 = this$.state;om.core.will_update(c_17726,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{}
om.core.no_local_merge_pending_state(this$);
return om.core.update_refs(this$);
}),cljs.core.constant$keyword$85,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17706 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17706) : cljs.core.deref.call(null,G__17706));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$)], null);if((function (){var G__17707 = c;if(G__17707)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17707.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__17707.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17707);
}
})())
{var state_17728 = this$.state;om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3585__auto__ = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$99], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x17732 = cljs.core.clj__GT_js(methods$);x17732.om$core$IGetState$ = true;
x17732.om$core$IGetState$_get_state$arity$1 = ((function (x17732){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17733 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17733) : cljs.core.deref.call(null,G__17733));
})(),spath);var or__3585__auto__ = cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x17732))
;
x17732.om$core$IGetState$_get_state$arity$2 = ((function (x17732){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17732))
;
x17732.om$core$IGetRenderState$ = true;
x17732.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17732){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$__$1),cljs.core.constant$keyword$98], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17734 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17734) : cljs.core.deref.call(null,G__17734));
})(),spath);
});})(x17732))
;
x17732.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17732){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17732))
;
x17732.om$core$ISetState$ = true;
x17732.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17732){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate(this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,om.core.react_id(this$__$1),cljs.core.constant$keyword$97], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3573__auto__ = !((gstate == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_(gstate,this$__$1);
} else
{return null;
}
});})(x17732))
;
x17732.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17732){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x17732))
;
return x17732;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__17737 = x;if(G__17737)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17737.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__17737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17737);
}
})())
{return !(cljs.core.keyword_identical_QMARK_((function (){var G__17738 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17738) : cljs.core.deref.call(null,G__17738));
})(),cljs.core.constant$keyword$100));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$84);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$84)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta(self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count(self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_(self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17740){var vec__17741 = p__17740;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17741,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17741,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__17743 = null;
var G__17743__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17743__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17743 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17743__2.call(this,self__,k);
case 3:
return G__17743__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17743.cljs$core$IFn$_invoke$arity$2 = G__17743__2;
G__17743.cljs$core$IFn$_invoke$arity$3 = G__17743__3;
return G__17743;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args17739){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17739)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17742 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17742) : cljs.core.deref.call(null,G__17742));
})(),self__.path,cljs.core.constant$keyword$100);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta(self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count(self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_(self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__17746 = null;
var G__17746__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17746__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17746 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17746__2.call(this,self__,k);
case 3:
return G__17746__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17746.cljs$core$IFn$_invoke$arity$2 = G__17746__2;
G__17746.cljs$core$IFn$_invoke$arity$3 = G__17746__3;
return G__17746;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args17744){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17744)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17745 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17745) : cljs.core.deref.call(null,G__17745));
})(),self__.path,cljs.core.constant$keyword$100);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x17749 = cljs.core.clone(val);x17749.cljs$core$IEquiv$ = true;
x17749.cljs$core$IEquiv$_equiv$arity$2 = ((function (x17749){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x17749))
;
x17749.om$core$ITransact$ = true;
x17749.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17749){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x17749))
;
x17749.om$core$ICursor$ = true;
x17749.om$core$ICursor$_path$arity$1 = ((function (x17749){
return (function (_){var ___$1 = this;return path;
});})(x17749))
;
x17749.om$core$ICursor$_state$arity$1 = ((function (x17749){
return (function (_){var ___$1 = this;return state;
});})(x17749))
;
x17749.cljs$core$IDeref$ = true;
x17749.cljs$core$IDeref$_deref$arity$1 = ((function (x17749){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17750 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17750) : cljs.core.deref.call(null,G__17750));
})(),path,cljs.core.constant$keyword$100);
});})(x17749))
;
return x17749;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__17759 = val;if(G__17759)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17759.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__17759.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__17759);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__17759);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__17760 = val;if(G__17760)
{var bit__4249__auto__ = (G__17760.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4249__auto__) || (G__17760.cljs$core$ICloneable$))
{return true;
} else
{if((!G__17760.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17760);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__17762 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17762) : cljs.core.deref.call(null,G__17762));
})(),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__17764 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17764) : cljs.core.deref.call(null,G__17764));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__17765 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17765) : cljs.core.atom.call(null,G__17765));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x17774 = cljs.core.clone(x);x17774.om$core$ITransact$ = true;
x17774.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17774){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__17775_17778 = cursor__$1;var G__17776_17779 = korks;var G__17777_17780 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__17775_17778,G__17776_17779,G__17777_17780) : om.core.commit_BANG_.call(null,G__17775_17778,G__17776_17779,G__17777_17780));
return om.core._refresh_deps_BANG_(parent);
});})(x17774))
;
x17774.om$core$ICursorDerive$ = true;
x17774.om$core$ICursorDerive$_derive$arity$4 = ((function (x17774){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x17774))
;
x17774.om$core$IAdapt$ = true;
x17774.om$core$IAdapt$_adapt$arity$2 = ((function (x17774){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x17774))
;
x17774.cljs$core$ICloneable$ = true;
x17774.cljs$core$ICloneable$_clone$arity$1 = ((function (x17774){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x17774))
;
return x17774;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if((function (){var G__17796 = cursor;if(G__17796)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17796.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__17796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__17796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__17796);
}
})())
{return cursor;
} else
{var path = (function (){var G__17797 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17797) : om.core.path.call(null,G__17797));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__17798 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17798) : cljs.core.atom.call(null,G__17798));
})())),path);var x17799 = cljs.core.clone(cursor);x17799.om$core$ITransact$ = true;
x17799.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17799,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__17800_17811 = cursor__$2;var G__17801_17812 = korks;var G__17802_17813 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__17800_17811,G__17801_17812,G__17802_17813) : om.core.commit_BANG_.call(null,G__17800_17811,G__17801_17812,G__17802_17813));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x17799,path,storage))
;
x17799.om$core$IOmRef$ = true;
x17799.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x17799,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__17803 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__17803) : om.core.id.call(null,G__17803));
})(),c);
});})(x17799,path,storage))
;
x17799.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x17799,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__17804 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__17804) : om.core.id.call(null,G__17804));
})());if((cljs.core.count(m) === (0)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x17799,path,storage))
;
x17799.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x17799,path,storage){
return (function (_){var ___$1 = this;var seq__17805 = cljs.core.seq(cljs.core.vals((function (){var G__17809 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17809) : cljs.core.deref.call(null,G__17809));
})()));var chunk__17806 = null;var count__17807 = (0);var i__17808 = (0);while(true){
if((i__17808 < count__17807))
{var c = chunk__17806.cljs$core$IIndexed$_nth$arity$2(null,i__17808);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__17814 = seq__17805;
var G__17815 = chunk__17806;
var G__17816 = count__17807;
var G__17817 = (i__17808 + (1));
seq__17805 = G__17814;
chunk__17806 = G__17815;
count__17807 = G__17816;
i__17808 = G__17817;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__17805);if(temp__4126__auto__)
{var seq__17805__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__17805__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__17805__$1);{
var G__17818 = cljs.core.chunk_rest(seq__17805__$1);
var G__17819 = c__4355__auto__;
var G__17820 = cljs.core.count(c__4355__auto__);
var G__17821 = (0);
seq__17805 = G__17818;
chunk__17806 = G__17819;
count__17807 = G__17820;
i__17808 = G__17821;
continue;
}
} else
{var c = cljs.core.first(seq__17805__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__17822 = cljs.core.next(seq__17805__$1);
var G__17823 = null;
var G__17824 = (0);
var G__17825 = (0);
seq__17805 = G__17822;
chunk__17806 = G__17823;
count__17807 = G__17824;
i__17808 = G__17825;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x17799,path,storage))
;
x17799.om$core$IOmRef$_get_deps$arity$1 = ((function (x17799,path,storage){
return (function (_){var ___$1 = this;var G__17810 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17810) : cljs.core.deref.call(null,G__17810));
});})(x17799,path,storage))
;
x17799.om$core$ICursorDerive$ = true;
x17799.om$core$ICursorDerive$_derive$arity$4 = ((function (x17799,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x17799,path,storage))
;
return x17799;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3585__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_(refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_(refs,ref))
{return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_(c,ref);
om.core._add_dep_BANG_(ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_(c,ref);
om.core._remove_dep_BANG_(ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__17826 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17826) : cljs.core.atom.call(null,G__17826));
})();
om.core.get_renderT = (function get_renderT(state){var or__3585__auto__ = state.om$render$T;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (0);
}
});
om.core.render_all = (function render_all(state){om.core.refresh_queued = false;
var seq__17832_17837 = cljs.core.seq((function (){var G__17836 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17836) : cljs.core.deref.call(null,G__17836));
})());var chunk__17833_17838 = null;var count__17834_17839 = (0);var i__17835_17840 = (0);while(true){
if((i__17835_17840 < count__17834_17839))
{var f_17841 = chunk__17833_17838.cljs$core$IIndexed$_nth$arity$2(null,i__17835_17840);(f_17841.cljs$core$IFn$_invoke$arity$0 ? f_17841.cljs$core$IFn$_invoke$arity$0() : f_17841.call(null));
{
var G__17842 = seq__17832_17837;
var G__17843 = chunk__17833_17838;
var G__17844 = count__17834_17839;
var G__17845 = (i__17835_17840 + (1));
seq__17832_17837 = G__17842;
chunk__17833_17838 = G__17843;
count__17834_17839 = G__17844;
i__17835_17840 = G__17845;
continue;
}
} else
{var temp__4126__auto___17846 = cljs.core.seq(seq__17832_17837);if(temp__4126__auto___17846)
{var seq__17832_17847__$1 = temp__4126__auto___17846;if(cljs.core.chunked_seq_QMARK_(seq__17832_17847__$1))
{var c__4355__auto___17848 = cljs.core.chunk_first(seq__17832_17847__$1);{
var G__17849 = cljs.core.chunk_rest(seq__17832_17847__$1);
var G__17850 = c__4355__auto___17848;
var G__17851 = cljs.core.count(c__4355__auto___17848);
var G__17852 = (0);
seq__17832_17837 = G__17849;
chunk__17833_17838 = G__17850;
count__17834_17839 = G__17851;
i__17835_17840 = G__17852;
continue;
}
} else
{var f_17853 = cljs.core.first(seq__17832_17847__$1);(f_17853.cljs$core$IFn$_invoke$arity$0 ? f_17853.cljs$core$IFn$_invoke$arity$0() : f_17853.call(null));
{
var G__17854 = cljs.core.next(seq__17832_17847__$1);
var G__17855 = null;
var G__17856 = (0);
var G__17857 = (0);
seq__17832_17837 = G__17854;
chunk__17833_17838 = G__17855;
count__17834_17839 = G__17856;
i__17835_17840 = G__17857;
continue;
}
}
} else
{}
}
break;
}
return state.om$render$T = (om.core.get_renderT(state) + (1));
});
om.core.roots = (function (){var G__17858 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17858) : cljs.core.atom.call(null,G__17858));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3585__auto__ = (function (){var G__17865 = x;if(G__17865)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17865.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__17865.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17865);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17865);
}
})();if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__17867 = x;if(G__17867)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto____$1 = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{return G__17867.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__17867.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17867);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17867);
}
})();if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{var G__17868 = x;if(G__17868)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto____$2 = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{return G__17868.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__17868.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17868);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$103,null,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null,cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null,cljs.core.constant$keyword$110,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__17872 = (function (){var or__3585__auto__ = descriptor;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__17872);
})());
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_opts_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0))))));
}
if((m == null))
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__17889 = {"children": ((function (shared,ctor){
return (function (this$){var ret = (function (){var G__17890 = cursor;var G__17891 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17890,G__17891) : f.call(null,G__17890,G__17891));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17889) : ctor.call(null,G__17889));
} else
{var map__17892 = m;var map__17892__$1 = ((cljs.core.seq_QMARK_(map__17892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17892):map__17892);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,cljs.core.constant$keyword$108);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,cljs.core.constant$keyword$106);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,cljs.core.constant$keyword$107);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,cljs.core.constant$keyword$105);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$102);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__17893 = cursor;var G__17894 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__17893,G__17894) : dataf.call(null,G__17893,G__17894));
} else
{var G__17895 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__17895) : dataf.call(null,G__17895));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$104));var shared = (function (){var or__3585__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(m));var G__17896 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__17892,map__17892__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = (function (){var G__17897 = cursor_SINGLEQUOTE_;var G__17898 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17897,G__17898) : f.call(null,G__17897,G__17898));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
});})(map__17892,map__17892__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__17892,map__17892__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = (function (){var G__17899 = cursor_SINGLEQUOTE_;var G__17900 = this$;var G__17901 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17899,G__17900,G__17901) : f.call(null,G__17899,G__17900,G__17901));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
});})(map__17892,map__17892__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17896) : ctor.call(null,G__17896));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var G__17908 = f;var G__17909 = x;var G__17910 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__17908,G__17909,G__17910) : om.core._STAR_instrument_STAR_.call(null,G__17908,G__17909,G__17910));
})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$111))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$109,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__17933 = state;if(G__17933)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__17933.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__17933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__17933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__17933);
}
})())
{} else
{var properties_17952 = (function (){var G__17934 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17934) : cljs.core.atom.call(null,G__17934));
})();var listeners_17953 = (function (){var G__17935 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17935) : cljs.core.atom.call(null,G__17935));
})();var render_queue_17954 = (function (){var G__17936 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17936) : cljs.core.atom.call(null,G__17936));
})();var x17937_17955 = state;x17937_17955.om$core$IRenderQueue$ = true;
x17937_17955.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$){var this$__$1 = this;var G__17938 = render_queue_17954;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17938) : cljs.core.deref.call(null,G__17938));
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__17939 = render_queue_17954;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17939) : cljs.core.deref.call(null,G__17939));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_17954,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_17954,cljs.core.empty);
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$INotify$ = true;
x17937_17955.om$core$INotify$_listen_BANG_$arity$3 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_17953,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_17953,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$INotify$_notify_BANG_$arity$3 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__17940_17956 = cljs.core.seq((function (){var G__17944 = listeners_17953;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17944) : cljs.core.deref.call(null,G__17944));
})());var chunk__17941_17957 = null;var count__17942_17958 = (0);var i__17943_17959 = (0);while(true){
if((i__17943_17959 < count__17942_17958))
{var vec__17945_17960 = chunk__17941_17957.cljs$core$IIndexed$_nth$arity$2(null,i__17943_17959);var __17961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945_17960,(0),null);var f_17962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945_17960,(1),null);var G__17946_17963 = tx_data;var G__17947_17964 = root_cursor;(f_17962.cljs$core$IFn$_invoke$arity$2 ? f_17962.cljs$core$IFn$_invoke$arity$2(G__17946_17963,G__17947_17964) : f_17962.call(null,G__17946_17963,G__17947_17964));
{
var G__17965 = seq__17940_17956;
var G__17966 = chunk__17941_17957;
var G__17967 = count__17942_17958;
var G__17968 = (i__17943_17959 + (1));
seq__17940_17956 = G__17965;
chunk__17941_17957 = G__17966;
count__17942_17958 = G__17967;
i__17943_17959 = G__17968;
continue;
}
} else
{var temp__4126__auto___17969 = cljs.core.seq(seq__17940_17956);if(temp__4126__auto___17969)
{var seq__17940_17970__$1 = temp__4126__auto___17969;if(cljs.core.chunked_seq_QMARK_(seq__17940_17970__$1))
{var c__4355__auto___17971 = cljs.core.chunk_first(seq__17940_17970__$1);{
var G__17972 = cljs.core.chunk_rest(seq__17940_17970__$1);
var G__17973 = c__4355__auto___17971;
var G__17974 = cljs.core.count(c__4355__auto___17971);
var G__17975 = (0);
seq__17940_17956 = G__17972;
chunk__17941_17957 = G__17973;
count__17942_17958 = G__17974;
i__17943_17959 = G__17975;
continue;
}
} else
{var vec__17948_17976 = cljs.core.first(seq__17940_17970__$1);var __17977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_17976,(0),null);var f_17978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_17976,(1),null);var G__17949_17979 = tx_data;var G__17950_17980 = root_cursor;(f_17978.cljs$core$IFn$_invoke$arity$2 ? f_17978.cljs$core$IFn$_invoke$arity$2(G__17949_17979,G__17950_17980) : f_17978.call(null,G__17949_17979,G__17950_17980));
{
var G__17981 = cljs.core.next(seq__17940_17970__$1);
var G__17982 = null;
var G__17983 = (0);
var G__17984 = (0);
seq__17940_17956 = G__17981;
chunk__17941_17957 = G__17982;
count__17942_17958 = G__17983;
i__17943_17959 = G__17984;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRootProperties$ = true;
x17937_17955.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17952,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17952,cljs.core.dissoc,id,k);
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_17952,cljs.core.dissoc,id);
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
x17937_17955.om$core$IRootProperties$_get_property$arity$3 = ((function (x17937_17955,properties_17952,listeners_17953,render_queue_17954){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17951 = properties_17952;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17951) : cljs.core.deref.call(null,G__17951));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x17937_17955,properties_17952,listeners_17953,render_queue_17954))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x17990 = cljs.core.clone(cursor);x17990.om$core$IRootKey$ = true;
x17990.om$core$IRootKey$_root_key$arity$1 = ((function (x17990){
return (function (this$){var this$__$1 = this;return root_key;
});})(x17990))
;
x17990.om$core$IAdapt$ = true;
x17990.om$core$IAdapt$_adapt$arity$2 = ((function (x17990){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x17990))
;
x17990.cljs$core$ICloneable$ = true;
x17990.cljs$core$ICloneable$_clone$arity$1 = ((function (x17990){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x17990))
;
return x17990;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__17991){var map__18080 = p__17991;var map__18080__$1 = ((cljs.core.seq_QMARK_(map__18080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18080):map__18080);var options = map__18080__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$112);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$101);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$103);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$78);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$113);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18080__$1,cljs.core.constant$keyword$114);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__18168 = (function (){var G__18081 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18081) : cljs.core.deref.call(null,G__18081));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__18168,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__18168,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__18082 = value;if(G__18082)
{var bit__4249__auto__ = (G__18082.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4249__auto__) || (G__18082.cljs$core$IAtom$))
{return true;
} else
{if((!G__18082.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__18082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__18082);
}
})())?value:(function (){var G__18083 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18083) : cljs.core.atom.call(null,G__18083));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3585__auto__ = adapt;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$114,cljs.core.array_seq([cljs.core.constant$keyword$113,cljs.core.constant$keyword$78,cljs.core.constant$keyword$112], 0));var ret = (function (){var G__18084 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18084) : cljs.core.atom.call(null,G__18084));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__18124 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18124) : cljs.core.deref.call(null,G__18124));
})();var cursor = (function (){var G__18125 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__18125) : adapt__$1.call(null,G__18125));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$115)))
{} else
{var c_18169 = om.dom.render((function (){var _STAR_descriptor_STAR_18126 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_18127 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_18128 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_18129 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18129;
om.core._STAR_state_STAR_ = _STAR_state_STAR_18128;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18127;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18126;
}})(),target);if(((function (){var G__18130 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18130) : cljs.core.deref.call(null,G__18130));
})() == null))
{var G__18131_18170 = ret;var G__18132_18171 = c_18169;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18131_18170,G__18132_18171) : cljs.core.reset_BANG_.call(null,G__18131_18170,G__18132_18171));
} else
{}
}
var queue_18172 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_18172))
{} else
{var seq__18133_18173 = cljs.core.seq(queue_18172);var chunk__18134_18174 = null;var count__18135_18175 = (0);var i__18136_18176 = (0);while(true){
if((i__18136_18176 < count__18135_18175))
{var c_18177 = chunk__18134_18174.cljs$core$IIndexed$_nth$arity$2(null,i__18136_18176);if(cljs.core.truth_(c_18177.isMounted()))
{var temp__4126__auto___18178 = (c_18177.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___18178))
{var next_props_18179 = temp__4126__auto___18178;(c_18177.props["__om_cursor"] = next_props_18179);
(c_18177.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3585__auto__ = !((function (){var G__18138 = om.core.children(c_18177);if(G__18138)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__18138.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__18138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18138);
}
})());if(or__3585__auto__)
{return or__3585__auto__;
} else
{return c_18177.shouldComponentUpdate(c_18177.props,c_18177.state);
}
})()))
{c_18177.forceUpdate();
} else
{}
} else
{}
{
var G__18180 = seq__18133_18173;
var G__18181 = chunk__18134_18174;
var G__18182 = count__18135_18175;
var G__18183 = (i__18136_18176 + (1));
seq__18133_18173 = G__18180;
chunk__18134_18174 = G__18181;
count__18135_18175 = G__18182;
i__18136_18176 = G__18183;
continue;
}
} else
{var temp__4126__auto___18184 = cljs.core.seq(seq__18133_18173);if(temp__4126__auto___18184)
{var seq__18133_18185__$1 = temp__4126__auto___18184;if(cljs.core.chunked_seq_QMARK_(seq__18133_18185__$1))
{var c__4355__auto___18186 = cljs.core.chunk_first(seq__18133_18185__$1);{
var G__18187 = cljs.core.chunk_rest(seq__18133_18185__$1);
var G__18188 = c__4355__auto___18186;
var G__18189 = cljs.core.count(c__4355__auto___18186);
var G__18190 = (0);
seq__18133_18173 = G__18187;
chunk__18134_18174 = G__18188;
count__18135_18175 = G__18189;
i__18136_18176 = G__18190;
continue;
}
} else
{var c_18191 = cljs.core.first(seq__18133_18185__$1);if(cljs.core.truth_(c_18191.isMounted()))
{var temp__4126__auto___18192__$1 = (c_18191.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___18192__$1))
{var next_props_18193 = temp__4126__auto___18192__$1;(c_18191.props["__om_cursor"] = next_props_18193);
(c_18191.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3585__auto__ = !((function (){var G__18140 = om.core.children(c_18191);if(G__18140)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__18140.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__18140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__18140);
}
})());if(or__3585__auto__)
{return or__3585__auto__;
} else
{return c_18191.shouldComponentUpdate(c_18191.props,c_18191.state);
}
})()))
{c_18191.forceUpdate();
} else
{}
} else
{}
{
var G__18194 = cljs.core.next(seq__18133_18185__$1);
var G__18195 = null;
var G__18196 = (0);
var G__18197 = (0);
seq__18133_18173 = G__18194;
chunk__18134_18174 = G__18195;
count__18135_18175 = G__18196;
i__18136_18176 = G__18197;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_(state__$1);
}
var _refs_18198 = (function (){var G__18141 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18141) : cljs.core.deref.call(null,G__18141));
})();if(cljs.core.empty_QMARK_(_refs_18198))
{} else
{var seq__18142_18199 = cljs.core.seq(_refs_18198);var chunk__18143_18200 = null;var count__18144_18201 = (0);var i__18145_18202 = (0);while(true){
if((i__18145_18202 < count__18144_18201))
{var vec__18146_18203 = chunk__18143_18200.cljs$core$IIndexed$_nth$arity$2(null,i__18145_18202);var path_18204__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146_18203,(0),null);var cs_18205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146_18203,(1),null);var cs_18206__$1 = (function (){var G__18147 = cs_18205;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18147) : cljs.core.deref.call(null,G__18147));
})();var seq__18148_18207 = cljs.core.seq(cs_18206__$1);var chunk__18149_18208 = null;var count__18150_18209 = (0);var i__18151_18210 = (0);while(true){
if((i__18151_18210 < count__18150_18209))
{var vec__18152_18211 = chunk__18149_18208.cljs$core$IIndexed$_nth$arity$2(null,i__18151_18210);var id_18212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18152_18211,(0),null);var c_18213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18152_18211,(1),null);if(cljs.core.truth_(c_18213.shouldComponentUpdate(c_18213.props,c_18213.state)))
{c_18213.forceUpdate();
} else
{}
{
var G__18214 = seq__18148_18207;
var G__18215 = chunk__18149_18208;
var G__18216 = count__18150_18209;
var G__18217 = (i__18151_18210 + (1));
seq__18148_18207 = G__18214;
chunk__18149_18208 = G__18215;
count__18150_18209 = G__18216;
i__18151_18210 = G__18217;
continue;
}
} else
{var temp__4126__auto___18218 = cljs.core.seq(seq__18148_18207);if(temp__4126__auto___18218)
{var seq__18148_18219__$1 = temp__4126__auto___18218;if(cljs.core.chunked_seq_QMARK_(seq__18148_18219__$1))
{var c__4355__auto___18220 = cljs.core.chunk_first(seq__18148_18219__$1);{
var G__18221 = cljs.core.chunk_rest(seq__18148_18219__$1);
var G__18222 = c__4355__auto___18220;
var G__18223 = cljs.core.count(c__4355__auto___18220);
var G__18224 = (0);
seq__18148_18207 = G__18221;
chunk__18149_18208 = G__18222;
count__18150_18209 = G__18223;
i__18151_18210 = G__18224;
continue;
}
} else
{var vec__18153_18225 = cljs.core.first(seq__18148_18219__$1);var id_18226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18153_18225,(0),null);var c_18227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18153_18225,(1),null);if(cljs.core.truth_(c_18227.shouldComponentUpdate(c_18227.props,c_18227.state)))
{c_18227.forceUpdate();
} else
{}
{
var G__18228 = cljs.core.next(seq__18148_18219__$1);
var G__18229 = null;
var G__18230 = (0);
var G__18231 = (0);
seq__18148_18207 = G__18228;
chunk__18149_18208 = G__18229;
count__18150_18209 = G__18230;
i__18151_18210 = G__18231;
continue;
}
}
} else
{}
}
break;
}
{
var G__18232 = seq__18142_18199;
var G__18233 = chunk__18143_18200;
var G__18234 = count__18144_18201;
var G__18235 = (i__18145_18202 + (1));
seq__18142_18199 = G__18232;
chunk__18143_18200 = G__18233;
count__18144_18201 = G__18234;
i__18145_18202 = G__18235;
continue;
}
} else
{var temp__4126__auto___18236 = cljs.core.seq(seq__18142_18199);if(temp__4126__auto___18236)
{var seq__18142_18237__$1 = temp__4126__auto___18236;if(cljs.core.chunked_seq_QMARK_(seq__18142_18237__$1))
{var c__4355__auto___18238 = cljs.core.chunk_first(seq__18142_18237__$1);{
var G__18239 = cljs.core.chunk_rest(seq__18142_18237__$1);
var G__18240 = c__4355__auto___18238;
var G__18241 = cljs.core.count(c__4355__auto___18238);
var G__18242 = (0);
seq__18142_18199 = G__18239;
chunk__18143_18200 = G__18240;
count__18144_18201 = G__18241;
i__18145_18202 = G__18242;
continue;
}
} else
{var vec__18154_18243 = cljs.core.first(seq__18142_18237__$1);var path_18244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18154_18243,(0),null);var cs_18245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18154_18243,(1),null);var cs_18246__$1 = (function (){var G__18155 = cs_18245;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18155) : cljs.core.deref.call(null,G__18155));
})();var seq__18156_18247 = cljs.core.seq(cs_18246__$1);var chunk__18157_18248 = null;var count__18158_18249 = (0);var i__18159_18250 = (0);while(true){
if((i__18159_18250 < count__18158_18249))
{var vec__18160_18251 = chunk__18157_18248.cljs$core$IIndexed$_nth$arity$2(null,i__18159_18250);var id_18252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18251,(0),null);var c_18253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18251,(1),null);if(cljs.core.truth_(c_18253.shouldComponentUpdate(c_18253.props,c_18253.state)))
{c_18253.forceUpdate();
} else
{}
{
var G__18254 = seq__18156_18247;
var G__18255 = chunk__18157_18248;
var G__18256 = count__18158_18249;
var G__18257 = (i__18159_18250 + (1));
seq__18156_18247 = G__18254;
chunk__18157_18248 = G__18255;
count__18158_18249 = G__18256;
i__18159_18250 = G__18257;
continue;
}
} else
{var temp__4126__auto___18258__$1 = cljs.core.seq(seq__18156_18247);if(temp__4126__auto___18258__$1)
{var seq__18156_18259__$1 = temp__4126__auto___18258__$1;if(cljs.core.chunked_seq_QMARK_(seq__18156_18259__$1))
{var c__4355__auto___18260 = cljs.core.chunk_first(seq__18156_18259__$1);{
var G__18261 = cljs.core.chunk_rest(seq__18156_18259__$1);
var G__18262 = c__4355__auto___18260;
var G__18263 = cljs.core.count(c__4355__auto___18260);
var G__18264 = (0);
seq__18156_18247 = G__18261;
chunk__18157_18248 = G__18262;
count__18158_18249 = G__18263;
i__18159_18250 = G__18264;
continue;
}
} else
{var vec__18161_18265 = cljs.core.first(seq__18156_18259__$1);var id_18266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161_18265,(0),null);var c_18267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161_18265,(1),null);if(cljs.core.truth_(c_18267.shouldComponentUpdate(c_18267.props,c_18267.state)))
{c_18267.forceUpdate();
} else
{}
{
var G__18268 = cljs.core.next(seq__18156_18259__$1);
var G__18269 = null;
var G__18270 = (0);
var G__18271 = (0);
seq__18156_18247 = G__18268;
chunk__18157_18248 = G__18269;
count__18158_18249 = G__18270;
i__18159_18250 = G__18271;
continue;
}
}
} else
{}
}
break;
}
{
var G__18272 = cljs.core.next(seq__18142_18237__$1);
var G__18273 = null;
var G__18274 = (0);
var G__18275 = (0);
seq__18142_18199 = G__18272;
chunk__18143_18200 = G__18273;
count__18144_18201 = G__18274;
i__18145_18202 = G__18275;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$115,true);
var G__18162 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18162) : cljs.core.deref.call(null,G__18162));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$116))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$115,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$116,false);
if(cljs.core.contains_QMARK_((function (){var G__18163 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18163) : cljs.core.deref.call(null,G__18163));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__18164 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;return requestAnimationFrame(G__18164);
} else
{var G__18165 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;var G__18166 = (16);return setTimeout(G__18165,G__18166);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__18167 = target;return React.unmountComponentAtNode(G__18167);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18080,map__18080__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__18277 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18277) : cljs.core.deref.call(null,G__18277));
})(),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_(cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__18288 = cursor;if(G__18288)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__18288.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__18288.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__18288);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__18288);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__18289 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__18289) : om.core.path.call(null,G__18289));
})();var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$116,true);
} else
{}
if(cljs.core.empty_QMARK_(rpath))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__18292 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18292) : f.call(null,G__18292));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__18293 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18293) : f.call(null,G__18293));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__18296 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18296) : f.call(null,G__18296));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__18297 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18297) : f.call(null,G__18297));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
