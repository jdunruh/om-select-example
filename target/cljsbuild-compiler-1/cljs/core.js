// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2371";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$63,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$64,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$65,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$66,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$67,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11612__delegate = function (args){return console.log.apply(console,(function (){var G__11611 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__11611) : cljs.core.into_array.call(null,G__11611));
})());
};
var G__11612 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11612__delegate.call(this,args);};
G__11612.cljs$lang$maxFixedArity = 0;
G__11612.cljs$lang$applyTo = (function (arglist__11613){
var args = cljs.core.seq(arglist__11613);
return G__11612__delegate(args);
});
G__11612.cljs$core$IFn$_invoke$arity$variadic = G__11612__delegate;
return G__11612;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__11615 = x;return goog.isString(G__11615);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__11617 = x__$1;return goog.typeOf(G__11617);
})()]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__3573__auto__ = ty;if(cljs.core.truth_(and__3573__auto__))
{return ty.cljs$lang$type;
} else
{return and__3573__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__11619 = obj;return goog.typeOf(G__11619);
})());return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4455__auto___11621 = len;var i_11622 = (0);while(true){
if((i_11622 < n__4455__auto___11621))
{(new_arr[i_11622] = (arr[i_11622]));
{
var G__11623 = (i_11622 + (1));
i_11622 = G__11623;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__11632__delegate = function (array,i,idxs){var G__11629 = aget;var G__11630 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__11631 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__11629,G__11630,G__11631) : cljs.core.apply.call(null,G__11629,G__11630,G__11631));
};
var G__11632 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11632__delegate.call(this,array,i,idxs);};
G__11632.cljs$lang$maxFixedArity = 2;
G__11632.cljs$lang$applyTo = (function (arglist__11633){
var array = cljs.core.first(arglist__11633);
arglist__11633 = cljs.core.next(arglist__11633);
var i = cljs.core.first(arglist__11633);
var idxs = cljs.core.rest(arglist__11633);
return G__11632__delegate(array,i,idxs);
});
G__11632.cljs$core$IFn$_invoke$arity$variadic = G__11632__delegate;
return G__11632;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__11642__delegate = function (array,idx,idx2,idxv){var G__11638 = aset;var G__11639 = (array[idx]);var G__11640 = idx2;var G__11641 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__11638,G__11639,G__11640,G__11641) : cljs.core.apply.call(null,G__11638,G__11639,G__11640,G__11641));
};
var G__11642 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11642__delegate.call(this,array,idx,idx2,idxv);};
G__11642.cljs$lang$maxFixedArity = 3;
G__11642.cljs$lang$applyTo = (function (arglist__11643){
var array = cljs.core.first(arglist__11643);
arglist__11643 = cljs.core.next(arglist__11643);
var idx = cljs.core.first(arglist__11643);
arglist__11643 = cljs.core.next(arglist__11643);
var idx2 = cljs.core.first(arglist__11643);
var idxv = cljs.core.rest(arglist__11643);
return G__11642__delegate(array,idx,idx2,idxv);
});
G__11642.cljs$core$IFn$_invoke$arity$variadic = G__11642__delegate;
return G__11642;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){var G__11649 = (function (a,x){a.push(x);
return a;
});var G__11650 = [];var G__11651 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__11649,G__11650,G__11651) : cljs.core.reduce.call(null,G__11649,G__11650,G__11651));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj11653 = {};return obj11653;
})();
cljs.core.IFn = (function (){var obj11655 = {};return obj11655;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11701 = x__4222__auto__;return goog.typeOf(G__11701);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11703 = x__4222__auto__;return goog.typeOf(G__11703);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11705 = x__4222__auto__;return goog.typeOf(G__11705);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11707 = x__4222__auto__;return goog.typeOf(G__11707);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11709 = x__4222__auto__;return goog.typeOf(G__11709);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11711 = x__4222__auto__;return goog.typeOf(G__11711);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11713 = x__4222__auto__;return goog.typeOf(G__11713);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11715 = x__4222__auto__;return goog.typeOf(G__11715);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11717 = x__4222__auto__;return goog.typeOf(G__11717);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11719 = x__4222__auto__;return goog.typeOf(G__11719);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11721 = x__4222__auto__;return goog.typeOf(G__11721);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11723 = x__4222__auto__;return goog.typeOf(G__11723);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11725 = x__4222__auto__;return goog.typeOf(G__11725);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11727 = x__4222__auto__;return goog.typeOf(G__11727);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11729 = x__4222__auto__;return goog.typeOf(G__11729);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11731 = x__4222__auto__;return goog.typeOf(G__11731);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11733 = x__4222__auto__;return goog.typeOf(G__11733);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11735 = x__4222__auto__;return goog.typeOf(G__11735);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11737 = x__4222__auto__;return goog.typeOf(G__11737);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11739 = x__4222__auto__;return goog.typeOf(G__11739);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11741 = x__4222__auto__;return goog.typeOf(G__11741);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._invoke[(function (){var G__11743 = x__4222__auto__;return goog.typeOf(G__11743);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._invoke["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj11745 = {};return obj11745;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3573__auto__ = value;if(and__3573__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3573__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4222__auto__ = (((value == null))?null:value);return (function (){var or__3585__auto__ = (cljs.core._clone[(function (){var G__11749 = x__4222__auto__;return goog.typeOf(G__11749);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._clone["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj11751 = {};return obj11751;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._count[(function (){var G__11755 = x__4222__auto__;return goog.typeOf(G__11755);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._count["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj11757 = {};return obj11757;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._empty[(function (){var G__11761 = x__4222__auto__;return goog.typeOf(G__11761);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._empty["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj11763 = {};return obj11763;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._conj[(function (){var G__11767 = x__4222__auto__;return goog.typeOf(G__11767);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._conj["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj11769 = {};return obj11769;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._nth[(function (){var G__11775 = x__4222__auto__;return goog.typeOf(G__11775);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._nth["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._nth[(function (){var G__11777 = x__4222__auto__;return goog.typeOf(G__11777);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._nth["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj11779 = {};return obj11779;
})();
cljs.core.ISeq = (function (){var obj11781 = {};return obj11781;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._first[(function (){var G__11785 = x__4222__auto__;return goog.typeOf(G__11785);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._first["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._rest[(function (){var G__11789 = x__4222__auto__;return goog.typeOf(G__11789);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._rest["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj11791 = {};return obj11791;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._next[(function (){var G__11795 = x__4222__auto__;return goog.typeOf(G__11795);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._next["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj11797 = {};return obj11797;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._lookup[(function (){var G__11803 = x__4222__auto__;return goog.typeOf(G__11803);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._lookup["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._lookup[(function (){var G__11805 = x__4222__auto__;return goog.typeOf(G__11805);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._lookup["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj11807 = {};return obj11807;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__11811 = x__4222__auto__;return goog.typeOf(G__11811);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._assoc[(function (){var G__11815 = x__4222__auto__;return goog.typeOf(G__11815);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._assoc["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj11817 = {};return obj11817;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._dissoc[(function (){var G__11821 = x__4222__auto__;return goog.typeOf(G__11821);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._dissoc["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj11823 = {};return obj11823;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._key[(function (){var G__11827 = x__4222__auto__;return goog.typeOf(G__11827);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._key["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._val[(function (){var G__11831 = x__4222__auto__;return goog.typeOf(G__11831);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._val["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj11833 = {};return obj11833;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._disjoin[(function (){var G__11837 = x__4222__auto__;return goog.typeOf(G__11837);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._disjoin["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj11839 = {};return obj11839;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._peek[(function (){var G__11843 = x__4222__auto__;return goog.typeOf(G__11843);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._peek["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._pop[(function (){var G__11847 = x__4222__auto__;return goog.typeOf(G__11847);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._pop["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj11849 = {};return obj11849;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._assoc_n[(function (){var G__11853 = x__4222__auto__;return goog.typeOf(G__11853);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj11855 = {};return obj11855;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._deref[(function (){var G__11859 = x__4222__auto__;return goog.typeOf(G__11859);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._deref["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj11861 = {};return obj11861;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._deref_with_timeout[(function (){var G__11865 = x__4222__auto__;return goog.typeOf(G__11865);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj11867 = {};return obj11867;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._meta[(function (){var G__11871 = x__4222__auto__;return goog.typeOf(G__11871);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._meta["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj11873 = {};return obj11873;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._with_meta[(function (){var G__11877 = x__4222__auto__;return goog.typeOf(G__11877);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._with_meta["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj11879 = {};return obj11879;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._reduce[(function (){var G__11885 = x__4222__auto__;return goog.typeOf(G__11885);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._reduce["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._reduce[(function (){var G__11887 = x__4222__auto__;return goog.typeOf(G__11887);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._reduce["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj11889 = {};return obj11889;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._kv_reduce[(function (){var G__11893 = x__4222__auto__;return goog.typeOf(G__11893);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj11895 = {};return obj11895;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._equiv[(function (){var G__11899 = x__4222__auto__;return goog.typeOf(G__11899);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._equiv["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj11901 = {};return obj11901;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._hash[(function (){var G__11905 = x__4222__auto__;return goog.typeOf(G__11905);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._hash["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj11907 = {};return obj11907;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._seq[(function (){var G__11911 = x__4222__auto__;return goog.typeOf(G__11911);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._seq["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj11913 = {};return obj11913;
})();
cljs.core.IList = (function (){var obj11915 = {};return obj11915;
})();
cljs.core.IRecord = (function (){var obj11917 = {};return obj11917;
})();
cljs.core.IReversible = (function (){var obj11919 = {};return obj11919;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._rseq[(function (){var G__11923 = x__4222__auto__;return goog.typeOf(G__11923);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._rseq["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj11925 = {};return obj11925;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._sorted_seq[(function (){var G__11929 = x__4222__auto__;return goog.typeOf(G__11929);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._sorted_seq_from[(function (){var G__11933 = x__4222__auto__;return goog.typeOf(G__11933);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._entry_key[(function (){var G__11937 = x__4222__auto__;return goog.typeOf(G__11937);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._entry_key["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._comparator[(function (){var G__11941 = x__4222__auto__;return goog.typeOf(G__11941);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._comparator["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj11943 = {};return obj11943;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3573__auto__ = writer;if(and__3573__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3573__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4222__auto__ = (((writer == null))?null:writer);return (function (){var or__3585__auto__ = (cljs.core._write[(function (){var G__11947 = x__4222__auto__;return goog.typeOf(G__11947);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._write["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3573__auto__ = writer;if(and__3573__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3573__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4222__auto__ = (((writer == null))?null:writer);return (function (){var or__3585__auto__ = (cljs.core._flush[(function (){var G__11951 = x__4222__auto__;return goog.typeOf(G__11951);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._flush["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj11953 = {};return obj11953;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._pr_writer[(function (){var G__11957 = x__4222__auto__;return goog.typeOf(G__11957);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj11959 = {};return obj11959;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3573__auto__ = d;if(and__3573__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4222__auto__ = (((d == null))?null:d);return (function (){var or__3585__auto__ = (cljs.core._realized_QMARK_[(function (){var G__11963 = x__4222__auto__;return goog.typeOf(G__11963);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj11965 = {};return obj11965;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._notify_watches[(function (){var G__11969 = x__4222__auto__;return goog.typeOf(G__11969);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._add_watch[(function (){var G__11973 = x__4222__auto__;return goog.typeOf(G__11973);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._add_watch["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (cljs.core._remove_watch[(function (){var G__11977 = x__4222__auto__;return goog.typeOf(G__11977);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj11979 = {};return obj11979;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._as_transient[(function (){var G__11983 = x__4222__auto__;return goog.typeOf(G__11983);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._as_transient["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj11985 = {};return obj11985;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._conj_BANG_[(function (){var G__11989 = x__4222__auto__;return goog.typeOf(G__11989);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._persistent_BANG_[(function (){var G__11993 = x__4222__auto__;return goog.typeOf(G__11993);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj11995 = {};return obj11995;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._assoc_BANG_[(function (){var G__11999 = x__4222__auto__;return goog.typeOf(G__11999);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj12001 = {};return obj12001;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__12005 = x__4222__auto__;return goog.typeOf(G__12005);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj12007 = {};return obj12007;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__12011 = x__4222__auto__;return goog.typeOf(G__12011);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._pop_BANG_[(function (){var G__12015 = x__4222__auto__;return goog.typeOf(G__12015);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj12017 = {};return obj12017;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3573__auto__ = tcoll;if(and__3573__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4222__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3585__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__12021 = x__4222__auto__;return goog.typeOf(G__12021);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj12023 = {};return obj12023;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._compare[(function (){var G__12027 = x__4222__auto__;return goog.typeOf(G__12027);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._compare["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj12029 = {};return obj12029;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._drop_first[(function (){var G__12033 = x__4222__auto__;return goog.typeOf(G__12033);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._drop_first["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj12035 = {};return obj12035;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._chunked_first[(function (){var G__12039 = x__4222__auto__;return goog.typeOf(G__12039);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._chunked_rest[(function (){var G__12043 = x__4222__auto__;return goog.typeOf(G__12043);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj12045 = {};return obj12045;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._chunked_next[(function (){var G__12049 = x__4222__auto__;return goog.typeOf(G__12049);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj12051 = {};return obj12051;
})();
cljs.core._name = (function _name(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._name[(function (){var G__12055 = x__4222__auto__;return goog.typeOf(G__12055);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._name["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._namespace[(function (){var G__12059 = x__4222__auto__;return goog.typeOf(G__12059);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._namespace["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj12061 = {};return obj12061;
})();
cljs.core.IReset = (function (){var obj12063 = {};return obj12063;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._reset_BANG_[(function (){var G__12067 = x__4222__auto__;return goog.typeOf(G__12067);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj12069 = {};return obj12069;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._swap_BANG_[(function (){var G__12079 = x__4222__auto__;return goog.typeOf(G__12079);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._swap_BANG_[(function (){var G__12081 = x__4222__auto__;return goog.typeOf(G__12081);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._swap_BANG_[(function (){var G__12083 = x__4222__auto__;return goog.typeOf(G__12083);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__3573__auto__ = o;if(and__3573__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__3573__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__4222__auto__ = (((o == null))?null:o);return (function (){var or__3585__auto__ = (cljs.core._swap_BANG_[(function (){var G__12085 = x__4222__auto__;return goog.typeOf(G__12085);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;
cljs.core.IIterable = (function (){var obj12087 = {};return obj12087;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__3573__auto__ = coll;if(and__3573__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__3573__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__4222__auto__ = (((coll == null))?null:coll);return (function (){var or__3585__auto__ = (cljs.core._iterator[(function (){var G__12091 = x__4222__auto__;return goog.typeOf(G__12091);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._iterator["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__12094 = (4294967295);var G__12095 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__12094,G__12095) : Math.imul.call(null,G__12094,G__12095));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__12098 = a;var G__12099 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__12098,G__12099) : Math.imul.call(null,G__12098,G__12099));
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul(h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul(h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1(in$);var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__12100 = (i + (2));
var G__12101 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__12100;
h1 = G__12101;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj12103 = {};return obj12103;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__12104 = (i + (1));
var G__12105 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__12104;
hash = G__12105;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj12109 = {};return obj12109;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__12112 = o;if(G__12112)
{var bit__4242__auto__ = (G__12112.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__4242__auto__) || (G__12112.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
} else
{if(typeof o === 'number')
{return ((function (){var G__12113 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__12113) : Math.floor.call(null,G__12113));
})() % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash(o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__12122 = a;var G__12123 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__12122,G__12123) : cljs.core._EQ_.call(null,G__12122,G__12123));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = cljs.core.not(a.ns);if(and__3573__auto__)
{return b.ns;
} else
{return and__3573__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__12124 = a.ns;var G__12125 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__12124,G__12125) : cljs.core.compare.call(null,G__12124,G__12125));
})();if((nsc === (0)))
{var G__12126 = a.name;var G__12127 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__12126,G__12127) : cljs.core.compare.call(null,G__12126,G__12127));
} else
{return nsc;
}
}
} else
{var G__12128 = a.name;var G__12129 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__12128,G__12129) : cljs.core.compare.call(null,G__12128,G__12129));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__3996__auto__ = self__._hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__12131 = null;
var G__12131__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__12131__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__12131 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__12131__2.call(this,self__,coll);
case 3:
return G__12131__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12131.cljs$core$IFn$_invoke$arity$2 = G__12131__2;
G__12131.cljs$core$IFn$_invoke$arity$3 = G__12131__3;
return G__12131;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args12130){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12130)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__12135 = x;if(G__12135)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__12135.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__12135.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__12135);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__12135);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__12137 = value;if(G__12137)
{var bit__4249__auto__ = (G__12137.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4249__auto__) || (G__12137.cljs$core$ICloneable$))
{return true;
} else
{if((!G__12137.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__12137);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__12137);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__12139 = coll;if(G__12139)
{var bit__4242__auto__ = (G__12139.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4242__auto__) || (G__12139.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__12141 = coll;if(G__12141)
{var bit__4242__auto__ = (G__12141.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4242__auto__) || (G__12141.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__12143 = coll;if(G__12143)
{var bit__4242__auto__ = (G__12143.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4242__auto__) || (G__12143.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__12145 = coll;if(G__12145)
{var bit__4242__auto__ = (G__12145.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4242__auto__) || (G__12145.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__12150__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__12151 = y;
var G__12152 = cljs.core.first(more);
var G__12153 = cljs.core.next(more);
x = G__12151;
y = G__12152;
more = G__12153;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12150 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12150__delegate.call(this,x,y,more);};
G__12150.cljs$lang$maxFixedArity = 2;
G__12150.cljs$lang$applyTo = (function (arglist__12154){
var x = cljs.core.first(arglist__12154);
arglist__12154 = cljs.core.next(arglist__12154);
var y = cljs.core.first(arglist__12154);
var more = cljs.core.rest(arglist__12154);
return G__12150__delegate(x,y,more);
});
G__12150.cljs$core$IFn$_invoke$arity$variadic = G__12150__delegate;
return G__12150;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1(hash_basis);var h1__$1 = cljs.core.m3_mix_H1(h1,k1);return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__12155 = (n + (1));
var G__12156 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__12157 = cljs.core.next(coll__$1);
n = G__12155;
hash_code = G__12156;
coll__$1 = G__12157;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__12158 = (n + (1));
var G__12159 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__12160 = cljs.core.next(coll__$1);
n = G__12158;
hash_code = G__12159;
coll__$1 = G__12160;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){var G__12161 = o;return goog.getUid(G__12161);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__12168 = val;var G__12169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12168,G__12169) : f.call(null,G__12168,G__12169));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12174 = nval;
var G__12175 = (n + (1));
val = G__12174;
n = G__12175;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__12170 = val__$1;var G__12171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12170,G__12171) : f.call(null,G__12170,G__12171));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12176 = nval;
var G__12177 = (n + (1));
val__$1 = G__12176;
n = G__12177;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__12172 = val__$1;var G__12173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12172,G__12173) : f.call(null,G__12172,G__12173));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12178 = nval;
var G__12179 = (n + (1));
val__$1 = G__12178;
n = G__12179;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__12186 = val;var G__12187 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12186,G__12187) : f.call(null,G__12186,G__12187));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12192 = nval;
var G__12193 = (n + (1));
val = G__12192;
n = G__12193;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__12188 = val__$1;var G__12189 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12188,G__12189) : f.call(null,G__12188,G__12189));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12194 = nval;
var G__12195 = (n + (1));
val__$1 = G__12194;
n = G__12195;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__12190 = val__$1;var G__12191 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12190,G__12191) : f.call(null,G__12190,G__12191));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12196 = nval;
var G__12197 = (n + (1));
val__$1 = G__12196;
n = G__12197;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__12199 = x;if(G__12199)
{var bit__4249__auto__ = (G__12199.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4249__auto__) || (G__12199.cljs$core$ICounted$))
{return true;
} else
{if((!G__12199.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__12199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__12199);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__12201 = x;if(G__12201)
{var bit__4249__auto__ = (G__12201.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4249__auto__) || (G__12201.cljs$core$IIndexed$))
{return true;
} else
{if((!G__12201.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__12201);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__12201);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.cljs$lang$type = true;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/IndexedSeqIterator");
});
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.IndexedSeqIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){return (new cljs.core.IndexedSeqIterator(arr,i));
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__12202 = coll__$1;var G__12203 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__12202,G__12203) : cljs.core.equiv_sequential.call(null,G__12202,G__12203));
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__12204 = o;var G__12205 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__12204,G__12205) : cljs.core.cons.call(null,G__12204,G__12205));
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__12208 = coll__$1;var G__12209 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__12208,G__12209) : cljs.core.equiv_sequential.call(null,G__12208,G__12209));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__12210 = cljs.core.List.EMPTY;var G__12211 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__12210,G__12211) : cljs.core.with_meta.call(null,G__12210,G__12211));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__12212 = f;var G__12213 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__12212,G__12213) : cljs.core.seq_reduce.call(null,G__12212,G__12213));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__12214 = f;var G__12215 = start;var G__12216 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__12214,G__12215,G__12216) : cljs.core.seq_reduce.call(null,G__12214,G__12215,G__12216));
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__12217 = o;var G__12218 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__12217,G__12218) : cljs.core.cons.call(null,G__12217,G__12218));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__12219 = sn;
s = G__12219;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__12224__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__12225 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__12226 = cljs.core.first(xs);
var G__12227 = cljs.core.next(xs);
coll = G__12225;
x = G__12226;
xs = G__12227;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__12224 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12224__delegate.call(this,coll,x,xs);};
G__12224.cljs$lang$maxFixedArity = 2;
G__12224.cljs$lang$applyTo = (function (arglist__12228){
var coll = cljs.core.first(arglist__12228);
arglist__12228 = cljs.core.next(arglist__12228);
var x = cljs.core.first(arglist__12228);
var xs = cljs.core.rest(arglist__12228);
return G__12224__delegate(coll,x,xs);
});
G__12224.cljs$core$IFn$_invoke$arity$variadic = G__12224__delegate;
return G__12224;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__12229 = cljs.core.next(s);
var G__12230 = (acc + (1));
s = G__12229;
acc = G__12230;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__12232 = coll;if(G__12232)
{var bit__4242__auto__ = (G__12232.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4242__auto__) || (G__12232.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__12233 = cljs.core.next(coll);
var G__12234 = (n - (1));
coll = G__12233;
n = G__12234;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__12235 = cljs.core.next(coll);
var G__12236 = (n - (1));
var G__12237 = not_found;
coll = G__12235;
n = G__12236;
not_found = G__12237;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__12242 = coll;if(G__12242)
{var bit__4242__auto__ = (G__12242.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4242__auto__) || (G__12242.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__12243 = coll;if(G__12243)
{var bit__4249__auto__ = (G__12243.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4249__auto__) || (G__12243.cljs$core$ISeq$))
{return true;
} else
{if((!G__12243.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12243);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12243);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__12244 = coll;if(G__12244)
{var bit__4242__auto__ = (G__12244.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4242__auto__) || (G__12244.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__12245 = coll;if(G__12245)
{var bit__4249__auto__ = (G__12245.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4249__auto__) || (G__12245.cljs$core$ISeq$))
{return true;
} else
{if((!G__12245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12245);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12245);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__12248 = o;if(G__12248)
{var bit__4242__auto__ = (G__12248.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4242__auto__) || (G__12248.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__12249 = o;if(G__12249)
{var bit__4242__auto__ = (G__12249.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4242__auto__) || (G__12249.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc(coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__12253__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__12254 = ret;
var G__12255 = cljs.core.first(kvs);
var G__12256 = cljs.core.second(kvs);
var G__12257 = cljs.core.nnext(kvs);
coll = G__12254;
k = G__12255;
v = G__12256;
kvs = G__12257;
continue;
}
} else
{return ret;
}
break;
}
};
var G__12253 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12253__delegate.call(this,coll,k,v,kvs);};
G__12253.cljs$lang$maxFixedArity = 3;
G__12253.cljs$lang$applyTo = (function (arglist__12258){
var coll = cljs.core.first(arglist__12258);
arglist__12258 = cljs.core.next(arglist__12258);
var k = cljs.core.first(arglist__12258);
arglist__12258 = cljs.core.next(arglist__12258);
var v = cljs.core.first(arglist__12258);
var kvs = cljs.core.rest(arglist__12258);
return G__12253__delegate(coll,k,v,kvs);
});
G__12253.cljs$core$IFn$_invoke$arity$variadic = G__12253__delegate;
return G__12253;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__12261__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__12262 = ret;
var G__12263 = cljs.core.first(ks);
var G__12264 = cljs.core.next(ks);
coll = G__12262;
k = G__12263;
ks = G__12264;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__12261 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12261__delegate.call(this,coll,k,ks);};
G__12261.cljs$lang$maxFixedArity = 2;
G__12261.cljs$lang$applyTo = (function (arglist__12265){
var coll = cljs.core.first(arglist__12265);
arglist__12265 = cljs.core.next(arglist__12265);
var k = cljs.core.first(arglist__12265);
var ks = cljs.core.rest(arglist__12265);
return G__12261__delegate(coll,k,ks);
});
G__12261.cljs$core$IFn$_invoke$arity$variadic = G__12261__delegate;
return G__12261;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3585__auto__ = (function (){var G__12270 = f;return goog.isFunction(G__12270);
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var G__12271 = f;if(G__12271)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto____$1 = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{return G__12271.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__12271.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__12271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__12271);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__12737 = null;
var G__12737__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__12737__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12273 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__12273) : self__.afn.call(null,G__12273));
});
var G__12737__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12274 = a;var G__12275 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__12274,G__12275) : self__.afn.call(null,G__12274,G__12275));
});
var G__12737__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12276 = a;var G__12277 = b;var G__12278 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__12276,G__12277,G__12278) : self__.afn.call(null,G__12276,G__12277,G__12278));
});
var G__12737__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12279 = a;var G__12280 = b;var G__12281 = c;var G__12282 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__12279,G__12280,G__12281,G__12282) : self__.afn.call(null,G__12279,G__12280,G__12281,G__12282));
});
var G__12737__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12283 = a;var G__12284 = b;var G__12285 = c;var G__12286 = d;var G__12287 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__12283,G__12284,G__12285,G__12286,G__12287) : self__.afn.call(null,G__12283,G__12284,G__12285,G__12286,G__12287));
});
var G__12737__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12288 = a;var G__12289 = b;var G__12290 = c;var G__12291 = d;var G__12292 = e;var G__12293 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__12288,G__12289,G__12290,G__12291,G__12292,G__12293) : self__.afn.call(null,G__12288,G__12289,G__12290,G__12291,G__12292,G__12293));
});
var G__12737__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12294 = a;var G__12295 = b;var G__12296 = c;var G__12297 = d;var G__12298 = e;var G__12299 = f;var G__12300 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__12294,G__12295,G__12296,G__12297,G__12298,G__12299,G__12300) : self__.afn.call(null,G__12294,G__12295,G__12296,G__12297,G__12298,G__12299,G__12300));
});
var G__12737__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12301 = a;var G__12302 = b;var G__12303 = c;var G__12304 = d;var G__12305 = e;var G__12306 = f;var G__12307 = g;var G__12308 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308) : self__.afn.call(null,G__12301,G__12302,G__12303,G__12304,G__12305,G__12306,G__12307,G__12308));
});
var G__12737__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12309 = a;var G__12310 = b;var G__12311 = c;var G__12312 = d;var G__12313 = e;var G__12314 = f;var G__12315 = g;var G__12316 = h;var G__12317 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__12309,G__12310,G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317) : self__.afn.call(null,G__12309,G__12310,G__12311,G__12312,G__12313,G__12314,G__12315,G__12316,G__12317));
});
var G__12737__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12318 = a;var G__12319 = b;var G__12320 = c;var G__12321 = d;var G__12322 = e;var G__12323 = f;var G__12324 = g;var G__12325 = h;var G__12326 = i;var G__12327 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324,G__12325,G__12326,G__12327) : self__.afn.call(null,G__12318,G__12319,G__12320,G__12321,G__12322,G__12323,G__12324,G__12325,G__12326,G__12327));
});
var G__12737__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12328 = a;var G__12329 = b;var G__12330 = c;var G__12331 = d;var G__12332 = e;var G__12333 = f;var G__12334 = g;var G__12335 = h;var G__12336 = i;var G__12337 = j;var G__12338 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338) : self__.afn.call(null,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338));
});
var G__12737__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12339 = a;var G__12340 = b;var G__12341 = c;var G__12342 = d;var G__12343 = e;var G__12344 = f;var G__12345 = g;var G__12346 = h;var G__12347 = i;var G__12348 = j;var G__12349 = k;var G__12350 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__12339,G__12340,G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350) : self__.afn.call(null,G__12339,G__12340,G__12341,G__12342,G__12343,G__12344,G__12345,G__12346,G__12347,G__12348,G__12349,G__12350));
});
var G__12737__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12351 = a;var G__12352 = b;var G__12353 = c;var G__12354 = d;var G__12355 = e;var G__12356 = f;var G__12357 = g;var G__12358 = h;var G__12359 = i;var G__12360 = j;var G__12361 = k;var G__12362 = l;var G__12363 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__12351,G__12352,G__12353,G__12354,G__12355,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363) : self__.afn.call(null,G__12351,G__12352,G__12353,G__12354,G__12355,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363));
});
var G__12737__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12364 = a;var G__12365 = b;var G__12366 = c;var G__12367 = d;var G__12368 = e;var G__12369 = f;var G__12370 = g;var G__12371 = h;var G__12372 = i;var G__12373 = j;var G__12374 = k;var G__12375 = l;var G__12376 = m;var G__12377 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372,G__12373,G__12374,G__12375,G__12376,G__12377) : self__.afn.call(null,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369,G__12370,G__12371,G__12372,G__12373,G__12374,G__12375,G__12376,G__12377));
});
var G__12737__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12378 = a;var G__12379 = b;var G__12380 = c;var G__12381 = d;var G__12382 = e;var G__12383 = f;var G__12384 = g;var G__12385 = h;var G__12386 = i;var G__12387 = j;var G__12388 = k;var G__12389 = l;var G__12390 = m;var G__12391 = n;var G__12392 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390,G__12391,G__12392) : self__.afn.call(null,G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390,G__12391,G__12392));
});
var G__12737__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12393 = a;var G__12394 = b;var G__12395 = c;var G__12396 = d;var G__12397 = e;var G__12398 = f;var G__12399 = g;var G__12400 = h;var G__12401 = i;var G__12402 = j;var G__12403 = k;var G__12404 = l;var G__12405 = m;var G__12406 = n;var G__12407 = o;var G__12408 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408) : self__.afn.call(null,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407,G__12408));
});
var G__12737__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12409 = a;var G__12410 = b;var G__12411 = c;var G__12412 = d;var G__12413 = e;var G__12414 = f;var G__12415 = g;var G__12416 = h;var G__12417 = i;var G__12418 = j;var G__12419 = k;var G__12420 = l;var G__12421 = m;var G__12422 = n;var G__12423 = o;var G__12424 = p;var G__12425 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__12409,G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425) : self__.afn.call(null,G__12409,G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425));
});
var G__12737__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12426 = a;var G__12427 = b;var G__12428 = c;var G__12429 = d;var G__12430 = e;var G__12431 = f;var G__12432 = g;var G__12433 = h;var G__12434 = i;var G__12435 = j;var G__12436 = k;var G__12437 = l;var G__12438 = m;var G__12439 = n;var G__12440 = o;var G__12441 = p;var G__12442 = q;var G__12443 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__12426,G__12427,G__12428,G__12429,G__12430,G__12431,G__12432,G__12433,G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443) : self__.afn.call(null,G__12426,G__12427,G__12428,G__12429,G__12430,G__12431,G__12432,G__12433,G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443));
});
var G__12737__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12444 = a;var G__12445 = b;var G__12446 = c;var G__12447 = d;var G__12448 = e;var G__12449 = f;var G__12450 = g;var G__12451 = h;var G__12452 = i;var G__12453 = j;var G__12454 = k;var G__12455 = l;var G__12456 = m;var G__12457 = n;var G__12458 = o;var G__12459 = p;var G__12460 = q;var G__12461 = r;var G__12462 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__12444,G__12445,G__12446,G__12447,G__12448,G__12449,G__12450,G__12451,G__12452,G__12453,G__12454,G__12455,G__12456,G__12457,G__12458,G__12459,G__12460,G__12461,G__12462) : self__.afn.call(null,G__12444,G__12445,G__12446,G__12447,G__12448,G__12449,G__12450,G__12451,G__12452,G__12453,G__12454,G__12455,G__12456,G__12457,G__12458,G__12459,G__12460,G__12461,G__12462));
});
var G__12737__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12463 = a;var G__12464 = b;var G__12465 = c;var G__12466 = d;var G__12467 = e;var G__12468 = f;var G__12469 = g;var G__12470 = h;var G__12471 = i;var G__12472 = j;var G__12473 = k;var G__12474 = l;var G__12475 = m;var G__12476 = n;var G__12477 = o;var G__12478 = p;var G__12479 = q;var G__12480 = r;var G__12481 = s;var G__12482 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12463,G__12464,G__12465,G__12466,G__12467,G__12468,G__12469,G__12470,G__12471,G__12472,G__12473,G__12474,G__12475,G__12476,G__12477,G__12478,G__12479,G__12480,G__12481,G__12482) : self__.afn.call(null,G__12463,G__12464,G__12465,G__12466,G__12467,G__12468,G__12469,G__12470,G__12471,G__12472,G__12473,G__12474,G__12475,G__12476,G__12477,G__12478,G__12479,G__12480,G__12481,G__12482));
});
var G__12737__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12483 = self__.afn;var G__12484 = a;var G__12485 = b;var G__12486 = c;var G__12487 = d;var G__12488 = e;var G__12489 = f;var G__12490 = g;var G__12491 = h;var G__12492 = i;var G__12493 = j;var G__12494 = k;var G__12495 = l;var G__12496 = m;var G__12497 = n;var G__12498 = o;var G__12499 = p;var G__12500 = q;var G__12501 = r;var G__12502 = s;var G__12503 = t;var G__12504 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12483,G__12484,G__12485,G__12486,G__12487,G__12488,G__12489,G__12490,G__12491,G__12492,G__12493,G__12494,G__12495,G__12496,G__12497,G__12498,G__12499,G__12500,G__12501,G__12502,G__12503,G__12504) : cljs.core.apply.call(null,G__12483,G__12484,G__12485,G__12486,G__12487,G__12488,G__12489,G__12490,G__12491,G__12492,G__12493,G__12494,G__12495,G__12496,G__12497,G__12498,G__12499,G__12500,G__12501,G__12502,G__12503,G__12504));
});
G__12737 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__12737__1.call(this,self__);
case 2:
return G__12737__2.call(this,self__,a);
case 3:
return G__12737__3.call(this,self__,a,b);
case 4:
return G__12737__4.call(this,self__,a,b,c);
case 5:
return G__12737__5.call(this,self__,a,b,c,d);
case 6:
return G__12737__6.call(this,self__,a,b,c,d,e);
case 7:
return G__12737__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__12737__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__12737__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__12737__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__12737__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__12737__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__12737__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__12737__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__12737__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__12737__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__12737__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__12737__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__12737__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__12737__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__12737__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__12737__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12737.cljs$core$IFn$_invoke$arity$1 = G__12737__1;
G__12737.cljs$core$IFn$_invoke$arity$2 = G__12737__2;
G__12737.cljs$core$IFn$_invoke$arity$3 = G__12737__3;
G__12737.cljs$core$IFn$_invoke$arity$4 = G__12737__4;
G__12737.cljs$core$IFn$_invoke$arity$5 = G__12737__5;
G__12737.cljs$core$IFn$_invoke$arity$6 = G__12737__6;
G__12737.cljs$core$IFn$_invoke$arity$7 = G__12737__7;
G__12737.cljs$core$IFn$_invoke$arity$8 = G__12737__8;
G__12737.cljs$core$IFn$_invoke$arity$9 = G__12737__9;
G__12737.cljs$core$IFn$_invoke$arity$10 = G__12737__10;
G__12737.cljs$core$IFn$_invoke$arity$11 = G__12737__11;
G__12737.cljs$core$IFn$_invoke$arity$12 = G__12737__12;
G__12737.cljs$core$IFn$_invoke$arity$13 = G__12737__13;
G__12737.cljs$core$IFn$_invoke$arity$14 = G__12737__14;
G__12737.cljs$core$IFn$_invoke$arity$15 = G__12737__15;
G__12737.cljs$core$IFn$_invoke$arity$16 = G__12737__16;
G__12737.cljs$core$IFn$_invoke$arity$17 = G__12737__17;
G__12737.cljs$core$IFn$_invoke$arity$18 = G__12737__18;
G__12737.cljs$core$IFn$_invoke$arity$19 = G__12737__19;
G__12737.cljs$core$IFn$_invoke$arity$20 = G__12737__20;
G__12737.cljs$core$IFn$_invoke$arity$21 = G__12737__21;
G__12737.cljs$core$IFn$_invoke$arity$22 = G__12737__22;
return G__12737;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args12272){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12272)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__12505 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__12505) : self__.afn.call(null,G__12505));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__12506 = a;var G__12507 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__12506,G__12507) : self__.afn.call(null,G__12506,G__12507));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__12508 = a;var G__12509 = b;var G__12510 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__12508,G__12509,G__12510) : self__.afn.call(null,G__12508,G__12509,G__12510));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__12511 = a;var G__12512 = b;var G__12513 = c;var G__12514 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__12511,G__12512,G__12513,G__12514) : self__.afn.call(null,G__12511,G__12512,G__12513,G__12514));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__12515 = a;var G__12516 = b;var G__12517 = c;var G__12518 = d;var G__12519 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__12515,G__12516,G__12517,G__12518,G__12519) : self__.afn.call(null,G__12515,G__12516,G__12517,G__12518,G__12519));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__12520 = a;var G__12521 = b;var G__12522 = c;var G__12523 = d;var G__12524 = e;var G__12525 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__12520,G__12521,G__12522,G__12523,G__12524,G__12525) : self__.afn.call(null,G__12520,G__12521,G__12522,G__12523,G__12524,G__12525));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__12526 = a;var G__12527 = b;var G__12528 = c;var G__12529 = d;var G__12530 = e;var G__12531 = f;var G__12532 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__12526,G__12527,G__12528,G__12529,G__12530,G__12531,G__12532) : self__.afn.call(null,G__12526,G__12527,G__12528,G__12529,G__12530,G__12531,G__12532));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__12533 = a;var G__12534 = b;var G__12535 = c;var G__12536 = d;var G__12537 = e;var G__12538 = f;var G__12539 = g;var G__12540 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__12533,G__12534,G__12535,G__12536,G__12537,G__12538,G__12539,G__12540) : self__.afn.call(null,G__12533,G__12534,G__12535,G__12536,G__12537,G__12538,G__12539,G__12540));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__12541 = a;var G__12542 = b;var G__12543 = c;var G__12544 = d;var G__12545 = e;var G__12546 = f;var G__12547 = g;var G__12548 = h;var G__12549 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__12541,G__12542,G__12543,G__12544,G__12545,G__12546,G__12547,G__12548,G__12549) : self__.afn.call(null,G__12541,G__12542,G__12543,G__12544,G__12545,G__12546,G__12547,G__12548,G__12549));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__12550 = a;var G__12551 = b;var G__12552 = c;var G__12553 = d;var G__12554 = e;var G__12555 = f;var G__12556 = g;var G__12557 = h;var G__12558 = i;var G__12559 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__12550,G__12551,G__12552,G__12553,G__12554,G__12555,G__12556,G__12557,G__12558,G__12559) : self__.afn.call(null,G__12550,G__12551,G__12552,G__12553,G__12554,G__12555,G__12556,G__12557,G__12558,G__12559));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__12560 = a;var G__12561 = b;var G__12562 = c;var G__12563 = d;var G__12564 = e;var G__12565 = f;var G__12566 = g;var G__12567 = h;var G__12568 = i;var G__12569 = j;var G__12570 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__12560,G__12561,G__12562,G__12563,G__12564,G__12565,G__12566,G__12567,G__12568,G__12569,G__12570) : self__.afn.call(null,G__12560,G__12561,G__12562,G__12563,G__12564,G__12565,G__12566,G__12567,G__12568,G__12569,G__12570));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__12571 = a;var G__12572 = b;var G__12573 = c;var G__12574 = d;var G__12575 = e;var G__12576 = f;var G__12577 = g;var G__12578 = h;var G__12579 = i;var G__12580 = j;var G__12581 = k;var G__12582 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__12571,G__12572,G__12573,G__12574,G__12575,G__12576,G__12577,G__12578,G__12579,G__12580,G__12581,G__12582) : self__.afn.call(null,G__12571,G__12572,G__12573,G__12574,G__12575,G__12576,G__12577,G__12578,G__12579,G__12580,G__12581,G__12582));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__12583 = a;var G__12584 = b;var G__12585 = c;var G__12586 = d;var G__12587 = e;var G__12588 = f;var G__12589 = g;var G__12590 = h;var G__12591 = i;var G__12592 = j;var G__12593 = k;var G__12594 = l;var G__12595 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__12583,G__12584,G__12585,G__12586,G__12587,G__12588,G__12589,G__12590,G__12591,G__12592,G__12593,G__12594,G__12595) : self__.afn.call(null,G__12583,G__12584,G__12585,G__12586,G__12587,G__12588,G__12589,G__12590,G__12591,G__12592,G__12593,G__12594,G__12595));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__12596 = a;var G__12597 = b;var G__12598 = c;var G__12599 = d;var G__12600 = e;var G__12601 = f;var G__12602 = g;var G__12603 = h;var G__12604 = i;var G__12605 = j;var G__12606 = k;var G__12607 = l;var G__12608 = m;var G__12609 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__12596,G__12597,G__12598,G__12599,G__12600,G__12601,G__12602,G__12603,G__12604,G__12605,G__12606,G__12607,G__12608,G__12609) : self__.afn.call(null,G__12596,G__12597,G__12598,G__12599,G__12600,G__12601,G__12602,G__12603,G__12604,G__12605,G__12606,G__12607,G__12608,G__12609));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__12610 = a;var G__12611 = b;var G__12612 = c;var G__12613 = d;var G__12614 = e;var G__12615 = f;var G__12616 = g;var G__12617 = h;var G__12618 = i;var G__12619 = j;var G__12620 = k;var G__12621 = l;var G__12622 = m;var G__12623 = n;var G__12624 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__12610,G__12611,G__12612,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618,G__12619,G__12620,G__12621,G__12622,G__12623,G__12624) : self__.afn.call(null,G__12610,G__12611,G__12612,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618,G__12619,G__12620,G__12621,G__12622,G__12623,G__12624));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__12625 = a;var G__12626 = b;var G__12627 = c;var G__12628 = d;var G__12629 = e;var G__12630 = f;var G__12631 = g;var G__12632 = h;var G__12633 = i;var G__12634 = j;var G__12635 = k;var G__12636 = l;var G__12637 = m;var G__12638 = n;var G__12639 = o;var G__12640 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__12625,G__12626,G__12627,G__12628,G__12629,G__12630,G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637,G__12638,G__12639,G__12640) : self__.afn.call(null,G__12625,G__12626,G__12627,G__12628,G__12629,G__12630,G__12631,G__12632,G__12633,G__12634,G__12635,G__12636,G__12637,G__12638,G__12639,G__12640));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__12641 = a;var G__12642 = b;var G__12643 = c;var G__12644 = d;var G__12645 = e;var G__12646 = f;var G__12647 = g;var G__12648 = h;var G__12649 = i;var G__12650 = j;var G__12651 = k;var G__12652 = l;var G__12653 = m;var G__12654 = n;var G__12655 = o;var G__12656 = p;var G__12657 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__12641,G__12642,G__12643,G__12644,G__12645,G__12646,G__12647,G__12648,G__12649,G__12650,G__12651,G__12652,G__12653,G__12654,G__12655,G__12656,G__12657) : self__.afn.call(null,G__12641,G__12642,G__12643,G__12644,G__12645,G__12646,G__12647,G__12648,G__12649,G__12650,G__12651,G__12652,G__12653,G__12654,G__12655,G__12656,G__12657));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__12658 = a;var G__12659 = b;var G__12660 = c;var G__12661 = d;var G__12662 = e;var G__12663 = f;var G__12664 = g;var G__12665 = h;var G__12666 = i;var G__12667 = j;var G__12668 = k;var G__12669 = l;var G__12670 = m;var G__12671 = n;var G__12672 = o;var G__12673 = p;var G__12674 = q;var G__12675 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__12658,G__12659,G__12660,G__12661,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12668,G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675) : self__.afn.call(null,G__12658,G__12659,G__12660,G__12661,G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12668,G__12669,G__12670,G__12671,G__12672,G__12673,G__12674,G__12675));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__12676 = a;var G__12677 = b;var G__12678 = c;var G__12679 = d;var G__12680 = e;var G__12681 = f;var G__12682 = g;var G__12683 = h;var G__12684 = i;var G__12685 = j;var G__12686 = k;var G__12687 = l;var G__12688 = m;var G__12689 = n;var G__12690 = o;var G__12691 = p;var G__12692 = q;var G__12693 = r;var G__12694 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__12676,G__12677,G__12678,G__12679,G__12680,G__12681,G__12682,G__12683,G__12684,G__12685,G__12686,G__12687,G__12688,G__12689,G__12690,G__12691,G__12692,G__12693,G__12694) : self__.afn.call(null,G__12676,G__12677,G__12678,G__12679,G__12680,G__12681,G__12682,G__12683,G__12684,G__12685,G__12686,G__12687,G__12688,G__12689,G__12690,G__12691,G__12692,G__12693,G__12694));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__12695 = a;var G__12696 = b;var G__12697 = c;var G__12698 = d;var G__12699 = e;var G__12700 = f;var G__12701 = g;var G__12702 = h;var G__12703 = i;var G__12704 = j;var G__12705 = k;var G__12706 = l;var G__12707 = m;var G__12708 = n;var G__12709 = o;var G__12710 = p;var G__12711 = q;var G__12712 = r;var G__12713 = s;var G__12714 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12695,G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703,G__12704,G__12705,G__12706,G__12707,G__12708,G__12709,G__12710,G__12711,G__12712,G__12713,G__12714) : self__.afn.call(null,G__12695,G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703,G__12704,G__12705,G__12706,G__12707,G__12708,G__12709,G__12710,G__12711,G__12712,G__12713,G__12714));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__12715 = self__.afn;var G__12716 = a;var G__12717 = b;var G__12718 = c;var G__12719 = d;var G__12720 = e;var G__12721 = f;var G__12722 = g;var G__12723 = h;var G__12724 = i;var G__12725 = j;var G__12726 = k;var G__12727 = l;var G__12728 = m;var G__12729 = n;var G__12730 = o;var G__12731 = p;var G__12732 = q;var G__12733 = r;var G__12734 = s;var G__12735 = t;var G__12736 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12715,G__12716,G__12717,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726,G__12727,G__12728,G__12729,G__12730,G__12731,G__12732,G__12733,G__12734,G__12735,G__12736) : cljs.core.apply.call(null,G__12715,G__12716,G__12717,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726,G__12727,G__12728,G__12729,G__12730,G__12731,G__12732,G__12733,G__12734,G__12735,G__12736));
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__12741 = o;if(G__12741)
{var bit__4249__auto__ = (G__12741.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4249__auto__) || (G__12741.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__12741.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12741);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3573__auto__ = !((o == null));if(and__3573__auto__)
{var G__12745 = o;if(G__12745)
{var bit__4249__auto__ = (G__12745.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4249__auto__) || (G__12745.cljs$core$IMeta$))
{return true;
} else
{if((!G__12745.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12745);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12745);
}
} else
{return and__3573__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__12748__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__12749 = ret;
var G__12750 = cljs.core.first(ks);
var G__12751 = cljs.core.next(ks);
coll = G__12749;
k = G__12750;
ks = G__12751;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__12748 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12748__delegate.call(this,coll,k,ks);};
G__12748.cljs$lang$maxFixedArity = 2;
G__12748.cljs$lang$applyTo = (function (arglist__12752){
var coll = cljs.core.first(arglist__12752);
arglist__12752 = cljs.core.next(arglist__12752);
var k = cljs.core.first(arglist__12752);
var ks = cljs.core.rest(arglist__12752);
return G__12748__delegate(coll,k,ks);
});
G__12748.cljs$core$IFn$_invoke$arity$variadic = G__12748__delegate;
return G__12748;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__12754 = x;if(G__12754)
{var bit__4249__auto__ = (G__12754.cljs$lang$protocol_mask$partition0$ & (8));if((bit__4249__auto__) || (G__12754.cljs$core$ICollection$))
{return true;
} else
{if((!G__12754.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12754);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12754);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__12756 = x;if(G__12756)
{var bit__4249__auto__ = (G__12756.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__4249__auto__) || (G__12756.cljs$core$ISet$))
{return true;
} else
{if((!G__12756.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12756);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12756);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__12758 = x;if(G__12758)
{var bit__4249__auto__ = (G__12758.cljs$lang$protocol_mask$partition0$ & (512));if((bit__4249__auto__) || (G__12758.cljs$core$IAssociative$))
{return true;
} else
{if((!G__12758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12758);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12758);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__12760 = x;if(G__12760)
{var bit__4249__auto__ = (G__12760.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__4249__auto__) || (G__12760.cljs$core$ISequential$))
{return true;
} else
{if((!G__12760.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12760);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__12762 = x;if(G__12762)
{var bit__4249__auto__ = (G__12762.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__4249__auto__) || (G__12762.cljs$core$ISorted$))
{return true;
} else
{if((!G__12762.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12762);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__12764 = x;if(G__12764)
{var bit__4249__auto__ = (G__12764.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4249__auto__) || (G__12764.cljs$core$IReduce$))
{return true;
} else
{if((!G__12764.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12764);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12764);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__12766 = x;if(G__12766)
{var bit__4249__auto__ = (G__12766.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4249__auto__) || (G__12766.cljs$core$IMap$))
{return true;
} else
{if((!G__12766.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12766);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12766);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__12768 = x;if(G__12768)
{var bit__4249__auto__ = (G__12768.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__4249__auto__) || (G__12768.cljs$core$IVector$))
{return true;
} else
{if((!G__12768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12768);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__12770 = x;if(G__12770)
{var bit__4242__auto__ = (G__12770.cljs$lang$protocol_mask$partition1$ & (512));if((bit__4242__auto__) || (G__12770.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj12776 = {};return obj12776;
});
var js_obj__1 = (function() { 
var G__12779__delegate = function (keyvals){var G__12777 = goog.object.create;var G__12778 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__12777,G__12778) : cljs.core.apply.call(null,G__12777,G__12778));
};
var G__12779 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12779__delegate.call(this,keyvals);};
G__12779.cljs$lang$maxFixedArity = 0;
G__12779.cljs$lang$applyTo = (function (arglist__12780){
var keyvals = cljs.core.seq(arglist__12780);
return G__12779__delegate(keyvals);
});
G__12779.cljs$core$IFn$_invoke$arity$variadic = G__12779__delegate;
return G__12779;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__12783_12785 = obj;var G__12784_12786 = ((function (G__12783_12785,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__12783_12785,keys))
;goog.object.forEach(G__12783_12785,G__12784_12786);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__12787 = (i__$1 + (1));
var G__12788 = (j__$1 + (1));
var G__12789 = (len__$1 - (1));
i__$1 = G__12787;
j__$1 = G__12788;
len__$1 = G__12789;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__12790 = (i__$1 - (1));
var G__12791 = (j__$1 - (1));
var G__12792 = (len__$1 - (1));
i__$1 = G__12790;
j__$1 = G__12791;
len__$1 = G__12792;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj12794 = {};return obj12794;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__12796 = s;if(G__12796)
{var bit__4249__auto__ = (G__12796.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4249__auto__) || (G__12796.cljs$core$ISeq$))
{return true;
} else
{if((!G__12796.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12796);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__12798 = s;if(G__12798)
{var bit__4249__auto__ = (G__12798.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4249__auto__) || (G__12798.cljs$core$ISeqable$))
{return true;
} else
{if((!G__12798.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12798);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3585__auto__ = cljs.core.fn_QMARK_(f);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var G__12802 = f;if(G__12802)
{var bit__4249__auto__ = (G__12802.cljs$lang$protocol_mask$partition0$ & (1));if((bit__4249__auto__) || (G__12802.cljs$core$IFn$))
{return true;
} else
{if((!G__12802.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12802);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12802);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__12815 = n;return isNaN(G__12815);
})())) && (!((n === Infinity))) && (((function (){var G__12816 = n;return parseFloat(G__12816);
})() === (function (){var G__12817 = n;var G__12818 = (10);return parseInt(G__12817,G__12818);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__12819__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__12820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__12821 = etc;
s = G__12820;
xs = G__12821;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__12819 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12819__delegate.call(this,x,y,more);};
G__12819.cljs$lang$maxFixedArity = 2;
G__12819.cljs$lang$applyTo = (function (arglist__12822){
var x = cljs.core.first(arglist__12822);
arglist__12822 = cljs.core.next(arglist__12822);
var y = cljs.core.first(arglist__12822);
var more = cljs.core.rest(arglist__12822);
return G__12819__delegate(x,y,more);
});
G__12819.cljs$core$IFn$_invoke$arity$variadic = G__12819__delegate;
return G__12819;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3585__auto__ = cljs.core.seq(coll);if(or__3585__auto__)
{return or__3585__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__12826 = x;if(G__12826)
{var bit__4242__auto__ = (G__12826.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__4242__auto__) || (G__12826.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{var G__12827 = x;var G__12828 = y;return goog.array.defaultCompare(G__12827,G__12828);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__12833 = xs;
var G__12834 = ys;
var G__12835 = len;
var G__12836 = (n + (1));
xs = G__12833;
ys = G__12834;
len = G__12835;
n = G__12836;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (function (){var G__12841 = x;var G__12842 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12841,G__12842) : f.call(null,G__12841,G__12842));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__12843 = y;var G__12844 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12843,G__12844) : f.call(null,G__12843,G__12844));
})()))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (function (){var G__12850 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12850) : cljs.core.to_array.call(null,G__12850));
})();var G__12851_12853 = a;var G__12852_12854 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__12851_12853,G__12852_12854);
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__12860 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12860) : keyfn.call(null,G__12860));
})(),(function (){var G__12861 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12861) : keyfn.call(null,G__12861));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;var G__12867 = f;var G__12868 = cljs.core.first(s);var G__12869 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__12867,G__12868,G__12869) : cljs.core.reduce.call(null,G__12867,G__12868,G__12869));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__12870 = val__$1;var G__12871 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12870,G__12871) : f.call(null,G__12870,G__12871));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12872 = nval;
var G__12873 = cljs.core.next(coll__$1);
val__$1 = G__12872;
coll__$1 = G__12873;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__12877 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12877) : cljs.core.to_array.call(null,G__12877));
})();var G__12878_12880 = a;goog.array.shuffle(G__12878_12880);
var G__12879 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__12879) : cljs.core.vec.call(null,G__12879));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__12883 = coll;if(G__12883)
{var bit__4242__auto__ = (G__12883.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4242__auto__) || (G__12883.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__12884 = coll;if(G__12884)
{var bit__4242__auto__ = (G__12884.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4242__auto__) || (G__12884.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__12893 = null;
var G__12893__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__12893__1 = (function (x){var G__12890 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__12890) : cf.call(null,G__12890));
});
var G__12893__2 = (function (x,y){var G__12891 = x;var G__12892 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12891,G__12892) : f.call(null,G__12891,G__12892));
});
G__12893 = function(x,y){
switch(arguments.length){
case 0:
return G__12893__0.call(this);
case 1:
return G__12893__1.call(this,x);
case 2:
return G__12893__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12893.cljs$core$IFn$_invoke$arity$0 = G__12893__0;
G__12893.cljs$core$IFn$_invoke$arity$1 = G__12893__1;
G__12893.cljs$core$IFn$_invoke$arity$2 = G__12893__2;
return G__12893;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__12900 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12900) : xform.call(null,G__12900));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__12901 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12901) : f__$1.call(null,G__12901));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__12902__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__12902 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12902__delegate.call(this,x,y,more);};
G__12902.cljs$lang$maxFixedArity = 2;
G__12902.cljs$lang$applyTo = (function (arglist__12903){
var x = cljs.core.first(arglist__12903);
arglist__12903 = cljs.core.next(arglist__12903);
var y = cljs.core.first(arglist__12903);
var more = cljs.core.rest(arglist__12903);
return G__12902__delegate(x,y,more);
});
G__12902.cljs$core$IFn$_invoke$arity$variadic = G__12902__delegate;
return G__12902;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__12904__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__12904 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12904__delegate.call(this,x,y,more);};
G__12904.cljs$lang$maxFixedArity = 2;
G__12904.cljs$lang$applyTo = (function (arglist__12905){
var x = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var y = cljs.core.first(arglist__12905);
var more = cljs.core.rest(arglist__12905);
return G__12904__delegate(x,y,more);
});
G__12904.cljs$core$IFn$_invoke$arity$variadic = G__12904__delegate;
return G__12904;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__12906__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__12906 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12906__delegate.call(this,x,y,more);};
G__12906.cljs$lang$maxFixedArity = 2;
G__12906.cljs$lang$applyTo = (function (arglist__12907){
var x = cljs.core.first(arglist__12907);
arglist__12907 = cljs.core.next(arglist__12907);
var y = cljs.core.first(arglist__12907);
var more = cljs.core.rest(arglist__12907);
return G__12906__delegate(x,y,more);
});
G__12906.cljs$core$IFn$_invoke$arity$variadic = G__12906__delegate;
return G__12906;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__12912__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12912 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12912__delegate.call(this,x,y,more);};
G__12912.cljs$lang$maxFixedArity = 2;
G__12912.cljs$lang$applyTo = (function (arglist__12913){
var x = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var y = cljs.core.first(arglist__12913);
var more = cljs.core.rest(arglist__12913);
return G__12912__delegate(x,y,more);
});
G__12912.cljs$core$IFn$_invoke$arity$variadic = G__12912__delegate;
return G__12912;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__12914__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__12915 = y;
var G__12916 = cljs.core.first(more);
var G__12917 = cljs.core.next(more);
x = G__12915;
y = G__12916;
more = G__12917;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12914 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12914__delegate.call(this,x,y,more);};
G__12914.cljs$lang$maxFixedArity = 2;
G__12914.cljs$lang$applyTo = (function (arglist__12918){
var x = cljs.core.first(arglist__12918);
arglist__12918 = cljs.core.next(arglist__12918);
var y = cljs.core.first(arglist__12918);
var more = cljs.core.rest(arglist__12918);
return G__12914__delegate(x,y,more);
});
G__12914.cljs$core$IFn$_invoke$arity$variadic = G__12914__delegate;
return G__12914;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__12919__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__12920 = y;
var G__12921 = cljs.core.first(more);
var G__12922 = cljs.core.next(more);
x = G__12920;
y = G__12921;
more = G__12922;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12919 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12919__delegate.call(this,x,y,more);};
G__12919.cljs$lang$maxFixedArity = 2;
G__12919.cljs$lang$applyTo = (function (arglist__12923){
var x = cljs.core.first(arglist__12923);
arglist__12923 = cljs.core.next(arglist__12923);
var y = cljs.core.first(arglist__12923);
var more = cljs.core.rest(arglist__12923);
return G__12919__delegate(x,y,more);
});
G__12919.cljs$core$IFn$_invoke$arity$variadic = G__12919__delegate;
return G__12919;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__12924__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__12925 = y;
var G__12926 = cljs.core.first(more);
var G__12927 = cljs.core.next(more);
x = G__12925;
y = G__12926;
more = G__12927;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12924 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12924__delegate.call(this,x,y,more);};
G__12924.cljs$lang$maxFixedArity = 2;
G__12924.cljs$lang$applyTo = (function (arglist__12928){
var x = cljs.core.first(arglist__12928);
arglist__12928 = cljs.core.next(arglist__12928);
var y = cljs.core.first(arglist__12928);
var more = cljs.core.rest(arglist__12928);
return G__12924__delegate(x,y,more);
});
G__12924.cljs$core$IFn$_invoke$arity$variadic = G__12924__delegate;
return G__12924;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__12929__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__12930 = y;
var G__12931 = cljs.core.first(more);
var G__12932 = cljs.core.next(more);
x = G__12930;
y = G__12931;
more = G__12932;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12929 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12929__delegate.call(this,x,y,more);};
G__12929.cljs$lang$maxFixedArity = 2;
G__12929.cljs$lang$applyTo = (function (arglist__12933){
var x = cljs.core.first(arglist__12933);
arglist__12933 = cljs.core.next(arglist__12933);
var y = cljs.core.first(arglist__12933);
var more = cljs.core.rest(arglist__12933);
return G__12929__delegate(x,y,more);
});
G__12929.cljs$core$IFn$_invoke$arity$variadic = G__12929__delegate;
return G__12929;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__3892__auto__ = x;var y__3893__auto__ = y;return ((x__3892__auto__ > y__3893__auto__) ? x__3892__auto__ : y__3893__auto__);
});
var max__3 = (function() { 
var G__12934__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3892__auto__ = x;var y__3893__auto__ = y;return ((x__3892__auto__ > y__3893__auto__) ? x__3892__auto__ : y__3893__auto__);
})(),more);
};
var G__12934 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12934__delegate.call(this,x,y,more);};
G__12934.cljs$lang$maxFixedArity = 2;
G__12934.cljs$lang$applyTo = (function (arglist__12935){
var x = cljs.core.first(arglist__12935);
arglist__12935 = cljs.core.next(arglist__12935);
var y = cljs.core.first(arglist__12935);
var more = cljs.core.rest(arglist__12935);
return G__12934__delegate(x,y,more);
});
G__12934.cljs$core$IFn$_invoke$arity$variadic = G__12934__delegate;
return G__12934;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__3899__auto__ = x;var y__3900__auto__ = y;return ((x__3899__auto__ < y__3900__auto__) ? x__3899__auto__ : y__3900__auto__);
});
var min__3 = (function() { 
var G__12936__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3899__auto__ = x;var y__3900__auto__ = y;return ((x__3899__auto__ < y__3900__auto__) ? x__3899__auto__ : y__3900__auto__);
})(),more);
};
var G__12936 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12936__delegate.call(this,x,y,more);};
G__12936.cljs$lang$maxFixedArity = 2;
G__12936.cljs$lang$applyTo = (function (arglist__12937){
var x = cljs.core.first(arglist__12937);
arglist__12937 = cljs.core.next(arglist__12937);
var y = cljs.core.first(arglist__12937);
var more = cljs.core.rest(arglist__12937);
return G__12936__delegate(x,y,more);
});
G__12936.cljs$core$IFn$_invoke$arity$variadic = G__12936__delegate;
return G__12936;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__12938__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__12938 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12938__delegate.call(this,x,y,more);};
G__12938.cljs$lang$maxFixedArity = 2;
G__12938.cljs$lang$applyTo = (function (arglist__12939){
var x = cljs.core.first(arglist__12939);
arglist__12939 = cljs.core.next(arglist__12939);
var y = cljs.core.first(arglist__12939);
var more = cljs.core.rest(arglist__12939);
return G__12938__delegate(x,y,more);
});
G__12938.cljs$core$IFn$_invoke$arity$variadic = G__12938__delegate;
return G__12938;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__12940__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__12940 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12940__delegate.call(this,x,y,more);};
G__12940.cljs$lang$maxFixedArity = 2;
G__12940.cljs$lang$applyTo = (function (arglist__12941){
var x = cljs.core.first(arglist__12941);
arglist__12941 = cljs.core.next(arglist__12941);
var y = cljs.core.first(arglist__12941);
var more = cljs.core.rest(arglist__12941);
return G__12940__delegate(x,y,more);
});
G__12940.cljs$core$IFn$_invoke$arity$variadic = G__12940__delegate;
return G__12940;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__12946__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12946 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12946__delegate.call(this,x,y,more);};
G__12946.cljs$lang$maxFixedArity = 2;
G__12946.cljs$lang$applyTo = (function (arglist__12947){
var x = cljs.core.first(arglist__12947);
arglist__12947 = cljs.core.next(arglist__12947);
var y = cljs.core.first(arglist__12947);
var more = cljs.core.rest(arglist__12947);
return G__12946__delegate(x,y,more);
});
G__12946.cljs$core$IFn$_invoke$arity$variadic = G__12946__delegate;
return G__12946;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__12948__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__12948 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12948__delegate.call(this,x,y,more);};
G__12948.cljs$lang$maxFixedArity = 2;
G__12948.cljs$lang$applyTo = (function (arglist__12949){
var x = cljs.core.first(arglist__12949);
arglist__12949 = cljs.core.next(arglist__12949);
var y = cljs.core.first(arglist__12949);
var more = cljs.core.rest(arglist__12949);
return G__12948__delegate(x,y,more);
});
G__12948.cljs$core$IFn$_invoke$arity$variadic = G__12948__delegate;
return G__12948;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__12950__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__12950 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12950__delegate.call(this,x,y,more);};
G__12950.cljs$lang$maxFixedArity = 2;
G__12950.cljs$lang$applyTo = (function (arglist__12951){
var x = cljs.core.first(arglist__12951);
arglist__12951 = cljs.core.next(arglist__12951);
var y = cljs.core.first(arglist__12951);
var more = cljs.core.rest(arglist__12951);
return G__12950__delegate(x,y,more);
});
G__12950.cljs$core$IFn$_invoke$arity$variadic = G__12950__delegate;
return G__12950;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__12954 = x;var G__12955 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__12954,G__12955) : cljs.core.mod.call(null,G__12954,G__12955));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__12956__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__12956 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12956__delegate.call(this,x,y,more);};
G__12956.cljs$lang$maxFixedArity = 2;
G__12956.cljs$lang$applyTo = (function (arglist__12957){
var x = cljs.core.first(arglist__12957);
arglist__12957 = cljs.core.next(arglist__12957);
var y = cljs.core.first(arglist__12957);
var more = cljs.core.rest(arglist__12957);
return G__12956__delegate(x,y,more);
});
G__12956.cljs$core$IFn$_invoke$arity$variadic = G__12956__delegate;
return G__12956;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__12958__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__12958 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12958__delegate.call(this,x,y,more);};
G__12958.cljs$lang$maxFixedArity = 2;
G__12958.cljs$lang$applyTo = (function (arglist__12959){
var x = cljs.core.first(arglist__12959);
arglist__12959 = cljs.core.next(arglist__12959);
var y = cljs.core.first(arglist__12959);
var more = cljs.core.rest(arglist__12959);
return G__12958__delegate(x,y,more);
});
G__12958.cljs$core$IFn$_invoke$arity$variadic = G__12958__delegate;
return G__12958;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{var G__12962 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__12962) : Math.floor.call(null,G__12962));
} else
{var G__12963 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__12963) : Math.ceil.call(null,G__12963));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__12968__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__12969 = y;
var G__12970 = cljs.core.first(more);
var G__12971 = cljs.core.next(more);
x = G__12969;
y = G__12970;
more = G__12971;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12968 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12968__delegate.call(this,x,y,more);};
G__12968.cljs$lang$maxFixedArity = 2;
G__12968.cljs$lang$applyTo = (function (arglist__12972){
var x = cljs.core.first(arglist__12972);
arglist__12972 = cljs.core.next(arglist__12972);
var y = cljs.core.first(arglist__12972);
var more = cljs.core.rest(arglist__12972);
return G__12968__delegate(x,y,more);
});
G__12968.cljs$core$IFn$_invoke$arity$variadic = G__12968__delegate;
return G__12968;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__12973 = (n__$1 - (1));
var G__12974 = cljs.core.next(xs);
n__$1 = G__12973;
xs = G__12974;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__12977__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__12978 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__12979 = cljs.core.next(more);
sb = G__12978;
more = G__12979;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__12977 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12977__delegate.call(this,x,ys);};
G__12977.cljs$lang$maxFixedArity = 1;
G__12977.cljs$lang$applyTo = (function (arglist__12980){
var x = cljs.core.first(arglist__12980);
var ys = cljs.core.rest(arglist__12980);
return G__12977__delegate(x,ys);
});
G__12977.cljs$core$IFn$_invoke$arity$variadic = G__12977__delegate;
return G__12977;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__12981 = cljs.core.next(xs);
var G__12982 = cljs.core.next(ys);
xs = G__12981;
ys = G__12982;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__12983 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__12984 = cljs.core.next(s);
res = G__12983;
s = G__12984;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__12989 = ((h + (cljs.core.hash((function (){var G__12987 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__12987) : cljs.core.key.call(null,G__12987));
})()) ^ cljs.core.hash((function (){var G__12988 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__12988) : cljs.core.val.call(null,G__12988));
})()))) % (4503599627370496));
var G__12990 = cljs.core.next(s);
h = G__12989;
s = G__12990;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__12991 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__12992 = cljs.core.next(s__$1);
h = G__12991;
s__$1 = G__12992;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__13003_13013 = cljs.core.seq(fn_map);var chunk__13004_13014 = null;var count__13005_13015 = (0);var i__13006_13016 = (0);while(true){
if((i__13006_13016 < count__13005_13015))
{var vec__13007_13017 = chunk__13004_13014.cljs$core$IIndexed$_nth$arity$2(null,i__13006_13016);var key_name_13018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13007_13017,(0),null);var f_13019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13007_13017,(1),null);var str_name_13020 = (function (){var G__13008 = key_name_13018;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__13008) : cljs.core.name.call(null,G__13008));
})();(obj[str_name_13020] = f_13019);
{
var G__13021 = seq__13003_13013;
var G__13022 = chunk__13004_13014;
var G__13023 = count__13005_13015;
var G__13024 = (i__13006_13016 + (1));
seq__13003_13013 = G__13021;
chunk__13004_13014 = G__13022;
count__13005_13015 = G__13023;
i__13006_13016 = G__13024;
continue;
}
} else
{var temp__4126__auto___13025 = cljs.core.seq(seq__13003_13013);if(temp__4126__auto___13025)
{var seq__13003_13026__$1 = temp__4126__auto___13025;if(cljs.core.chunked_seq_QMARK_(seq__13003_13026__$1))
{var c__4355__auto___13027 = (function (){var G__13009 = seq__13003_13026__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__13009) : cljs.core.chunk_first.call(null,G__13009));
})();{
var G__13028 = (function (){var G__13010 = seq__13003_13026__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__13010) : cljs.core.chunk_rest.call(null,G__13010));
})();
var G__13029 = c__4355__auto___13027;
var G__13030 = cljs.core.count(c__4355__auto___13027);
var G__13031 = (0);
seq__13003_13013 = G__13028;
chunk__13004_13014 = G__13029;
count__13005_13015 = G__13030;
i__13006_13016 = G__13031;
continue;
}
} else
{var vec__13011_13032 = cljs.core.first(seq__13003_13026__$1);var key_name_13033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011_13032,(0),null);var f_13034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011_13032,(1),null);var str_name_13035 = (function (){var G__13012 = key_name_13033;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__13012) : cljs.core.name.call(null,G__13012));
})();(obj[str_name_13035] = f_13034);
{
var G__13036 = cljs.core.next(seq__13003_13026__$1);
var G__13037 = null;
var G__13038 = (0);
var G__13039 = (0);
seq__13003_13013 = G__13036;
chunk__13004_13014 = G__13037;
count__13005_13015 = G__13038;
i__13006_13016 = G__13039;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest(coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__13041 = coll;if(G__13041)
{var bit__4249__auto__ = (G__13041.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__4249__auto__) || (G__13041.cljs$core$IReversible$))
{return true;
} else
{if((!G__13041.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__13041);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__13041);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__13042 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__13042;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__13043 = (i - (1));
var G__13044 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__13043;
r = G__13044;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__13045){
var xs = cljs.core.seq(arglist__13045);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3585__auto__ = (coll == null);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var G__13049 = coll;if(G__13049)
{var bit__4242__auto__ = (G__13049.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4242__auto__) || (G__13049.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__13051 = x;if(G__13051)
{var bit__4249__auto__ = (G__13051.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__4249__auto__) || (G__13051.cljs$core$IList$))
{return true;
} else
{if((!G__13051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__13051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__13051);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__3996__auto__ = self__._hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__13053 = null;
var G__13053__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__13053__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__13053 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__13053__2.call(this,self__,coll);
case 3:
return G__13053__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13053.cljs$core$IFn$_invoke$arity$2 = G__13053__2;
G__13053.cljs$core$IFn$_invoke$arity$3 = G__13053__3;
return G__13053;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args13052){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13052)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__13055 = x;if(G__13055)
{var bit__4242__auto__ = (G__13055.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4242__auto__) || (G__13055.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__13057 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__13057) : cljs.core.name.call(null,G__13057));
})(),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__13058 = ls.sval();
ls = G__13058;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__13060 = s;if(G__13060)
{var bit__4242__auto__ = (G__13060.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__4242__auto__) || (G__13060.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__13061 = cljs.core.next(s__$1);
s__$1 = G__13061;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_13062 = (0);var xs_13063 = cljs.core.seq(coll);while(true){
if(xs_13063)
{(ret[i_13062] = cljs.core.to_array(cljs.core.first(xs_13063)));
{
var G__13064 = (i_13062 + (1));
var G__13065 = cljs.core.next(xs_13063);
i_13062 = G__13064;
xs_13063 = G__13065;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__13068 = (i + (1));
var G__13069 = cljs.core.next(s__$1);
i = G__13068;
s__$1 = G__13069;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4455__auto___13070 = size;var i_13071 = (0);while(true){
if((i_13071 < n__4455__auto___13070))
{(a[i_13071] = init_val_or_seq);
{
var G__13072 = (i_13071 + (1));
i_13071 = G__13072;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__13075 = (i + (1));
var G__13076 = cljs.core.next(s__$1);
i = G__13075;
s__$1 = G__13076;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4455__auto___13077 = size;var i_13078 = (0);while(true){
if((i_13078 < n__4455__auto___13077))
{(a[i_13078] = init_val_or_seq);
{
var G__13079 = (i_13078 + (1));
i_13078 = G__13079;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__13082 = (i + (1));
var G__13083 = cljs.core.next(s__$1);
i = G__13082;
s__$1 = G__13083;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4455__auto___13084 = size;var i_13085 = (0);while(true){
if((i_13085 < n__4455__auto___13084))
{(a[i_13085] = init_val_or_seq);
{
var G__13086 = (i_13085 + (1));
i_13085 = G__13086;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__13089 = (i + (1));
var G__13090 = cljs.core.next(s__$1);
i = G__13089;
s__$1 = G__13090;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4455__auto___13091 = size;var i_13092 = (0);while(true){
if((i_13092 < n__4455__auto___13091))
{(a[i_13092] = init_val_or_seq);
{
var G__13093 = (i_13092 + (1));
i_13092 = G__13093;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq(s__$1)))
{{
var G__13094 = cljs.core.next(s__$1);
var G__13095 = (i - (1));
var G__13096 = (sum + (1));
s__$1 = G__13094;
i = G__13095;
sum = G__13096;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__13116__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__13116 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13116__delegate.call(this,x,y,zs);};
G__13116.cljs$lang$maxFixedArity = 2;
G__13116.cljs$lang$applyTo = (function (arglist__13117){
var x = cljs.core.first(arglist__13117);
arglist__13117 = cljs.core.next(arglist__13117);
var y = cljs.core.first(arglist__13117);
var zs = cljs.core.rest(arglist__13117);
return G__13116__delegate(x,y,zs);
});
G__13116.cljs$core$IFn$_invoke$arity$variadic = G__13116__delegate;
return G__13116;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__13118__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__13118 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__13118__delegate.call(this,a,b,c,d,more);};
G__13118.cljs$lang$maxFixedArity = 4;
G__13118.cljs$lang$applyTo = (function (arglist__13119){
var a = cljs.core.first(arglist__13119);
arglist__13119 = cljs.core.next(arglist__13119);
var b = cljs.core.first(arglist__13119);
arglist__13119 = cljs.core.next(arglist__13119);
var c = cljs.core.first(arglist__13119);
arglist__13119 = cljs.core.next(arglist__13119);
var d = cljs.core.first(arglist__13119);
var more = cljs.core.rest(arglist__13119);
return G__13118__delegate(a,b,c,d,more);
});
G__13118.cljs$core$IFn$_invoke$arity$variadic = G__13118__delegate;
return G__13118;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__13120__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__13121 = ntcoll;
var G__13122 = cljs.core.first(vals);
var G__13123 = cljs.core.next(vals);
tcoll = G__13121;
val = G__13122;
vals = G__13123;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__13120 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13120__delegate.call(this,tcoll,val,vals);};
G__13120.cljs$lang$maxFixedArity = 2;
G__13120.cljs$lang$applyTo = (function (arglist__13124){
var tcoll = cljs.core.first(arglist__13124);
arglist__13124 = cljs.core.next(arglist__13124);
var val = cljs.core.first(arglist__13124);
var vals = cljs.core.rest(arglist__13124);
return G__13120__delegate(tcoll,val,vals);
});
G__13120.cljs$core$IFn$_invoke$arity$variadic = G__13120__delegate;
return G__13120;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__13125__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__13126 = ntcoll;
var G__13127 = cljs.core.first(kvs);
var G__13128 = cljs.core.second(kvs);
var G__13129 = cljs.core.nnext(kvs);
tcoll = G__13126;
key = G__13127;
val = G__13128;
kvs = G__13129;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__13125 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13125__delegate.call(this,tcoll,key,val,kvs);};
G__13125.cljs$lang$maxFixedArity = 3;
G__13125.cljs$lang$applyTo = (function (arglist__13130){
var tcoll = cljs.core.first(arglist__13130);
arglist__13130 = cljs.core.next(arglist__13130);
var key = cljs.core.first(arglist__13130);
arglist__13130 = cljs.core.next(arglist__13130);
var val = cljs.core.first(arglist__13130);
var kvs = cljs.core.rest(arglist__13130);
return G__13125__delegate(tcoll,key,val,kvs);
});
G__13125.cljs$core$IFn$_invoke$arity$variadic = G__13125__delegate;
return G__13125;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__13131__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__13132 = ntcoll;
var G__13133 = cljs.core.first(ks);
var G__13134 = cljs.core.next(ks);
tcoll = G__13132;
key = G__13133;
ks = G__13134;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__13131 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13131__delegate.call(this,tcoll,key,ks);};
G__13131.cljs$lang$maxFixedArity = 2;
G__13131.cljs$lang$applyTo = (function (arglist__13135){
var tcoll = cljs.core.first(arglist__13135);
arglist__13135 = cljs.core.next(arglist__13135);
var key = cljs.core.first(arglist__13135);
var ks = cljs.core.rest(arglist__13135);
return G__13131__delegate(tcoll,key,ks);
});
G__13131.cljs$core$IFn$_invoke$arity$variadic = G__13131__delegate;
return G__13131;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__13136__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__13137 = ntcoll;
var G__13138 = cljs.core.first(vals);
var G__13139 = cljs.core.next(vals);
tcoll = G__13137;
val = G__13138;
vals = G__13139;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__13136 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13136__delegate.call(this,tcoll,val,vals);};
G__13136.cljs$lang$maxFixedArity = 2;
G__13136.cljs$lang$applyTo = (function (arglist__13140){
var tcoll = cljs.core.first(arglist__13140);
arglist__13140 = cljs.core.next(arglist__13140);
var val = cljs.core.first(arglist__13140);
var vals = cljs.core.rest(arglist__13140);
return G__13136__delegate(tcoll,val,vals);
});
G__13136.cljs$core$IFn$_invoke$arity$variadic = G__13136__delegate;
return G__13136;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a4499 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a4499);
} else
{var G__13351 = a4499;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13351) : f.call(null,G__13351));
}
} else
{var b4500 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a4499,b4500);
} else
{var G__13352 = a4499;var G__13353 = b4500;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13352,G__13353) : f.call(null,G__13352,G__13353));
}
} else
{var c4501 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a4499,b4500,c4501);
} else
{var G__13354 = a4499;var G__13355 = b4500;var G__13356 = c4501;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13354,G__13355,G__13356) : f.call(null,G__13354,G__13355,G__13356));
}
} else
{var d4502 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a4499,b4500,c4501,d4502);
} else
{var G__13357 = a4499;var G__13358 = b4500;var G__13359 = c4501;var G__13360 = d4502;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13357,G__13358,G__13359,G__13360) : f.call(null,G__13357,G__13358,G__13359,G__13360));
}
} else
{var e4503 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a4499,b4500,c4501,d4502,e4503);
} else
{var G__13361 = a4499;var G__13362 = b4500;var G__13363 = c4501;var G__13364 = d4502;var G__13365 = e4503;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13361,G__13362,G__13363,G__13364,G__13365) : f.call(null,G__13361,G__13362,G__13363,G__13364,G__13365));
}
} else
{var f4504 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a4499,b4500,c4501,d4502,e4503,f4504);
} else
{var G__13366 = a4499;var G__13367 = b4500;var G__13368 = c4501;var G__13369 = d4502;var G__13370 = e4503;var G__13371 = f4504;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__13366,G__13367,G__13368,G__13369,G__13370,G__13371) : f.call(null,G__13366,G__13367,G__13368,G__13369,G__13370,G__13371));
}
} else
{var g4505 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a4499,b4500,c4501,d4502,e4503,f4504,g4505);
} else
{var G__13372 = a4499;var G__13373 = b4500;var G__13374 = c4501;var G__13375 = d4502;var G__13376 = e4503;var G__13377 = f4504;var G__13378 = g4505;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__13372,G__13373,G__13374,G__13375,G__13376,G__13377,G__13378) : f.call(null,G__13372,G__13373,G__13374,G__13375,G__13376,G__13377,G__13378));
}
} else
{var h4506 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506);
} else
{var G__13379 = a4499;var G__13380 = b4500;var G__13381 = c4501;var G__13382 = d4502;var G__13383 = e4503;var G__13384 = f4504;var G__13385 = g4505;var G__13386 = h4506;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__13379,G__13380,G__13381,G__13382,G__13383,G__13384,G__13385,G__13386) : f.call(null,G__13379,G__13380,G__13381,G__13382,G__13383,G__13384,G__13385,G__13386));
}
} else
{var i4507 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507);
} else
{var G__13387 = a4499;var G__13388 = b4500;var G__13389 = c4501;var G__13390 = d4502;var G__13391 = e4503;var G__13392 = f4504;var G__13393 = g4505;var G__13394 = h4506;var G__13395 = i4507;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__13387,G__13388,G__13389,G__13390,G__13391,G__13392,G__13393,G__13394,G__13395) : f.call(null,G__13387,G__13388,G__13389,G__13390,G__13391,G__13392,G__13393,G__13394,G__13395));
}
} else
{var j4508 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508);
} else
{var G__13396 = a4499;var G__13397 = b4500;var G__13398 = c4501;var G__13399 = d4502;var G__13400 = e4503;var G__13401 = f4504;var G__13402 = g4505;var G__13403 = h4506;var G__13404 = i4507;var G__13405 = j4508;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__13396,G__13397,G__13398,G__13399,G__13400,G__13401,G__13402,G__13403,G__13404,G__13405) : f.call(null,G__13396,G__13397,G__13398,G__13399,G__13400,G__13401,G__13402,G__13403,G__13404,G__13405));
}
} else
{var k4509 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509);
} else
{var G__13406 = a4499;var G__13407 = b4500;var G__13408 = c4501;var G__13409 = d4502;var G__13410 = e4503;var G__13411 = f4504;var G__13412 = g4505;var G__13413 = h4506;var G__13414 = i4507;var G__13415 = j4508;var G__13416 = k4509;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__13406,G__13407,G__13408,G__13409,G__13410,G__13411,G__13412,G__13413,G__13414,G__13415,G__13416) : f.call(null,G__13406,G__13407,G__13408,G__13409,G__13410,G__13411,G__13412,G__13413,G__13414,G__13415,G__13416));
}
} else
{var l4510 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510);
} else
{var G__13417 = a4499;var G__13418 = b4500;var G__13419 = c4501;var G__13420 = d4502;var G__13421 = e4503;var G__13422 = f4504;var G__13423 = g4505;var G__13424 = h4506;var G__13425 = i4507;var G__13426 = j4508;var G__13427 = k4509;var G__13428 = l4510;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__13417,G__13418,G__13419,G__13420,G__13421,G__13422,G__13423,G__13424,G__13425,G__13426,G__13427,G__13428) : f.call(null,G__13417,G__13418,G__13419,G__13420,G__13421,G__13422,G__13423,G__13424,G__13425,G__13426,G__13427,G__13428));
}
} else
{var m4511 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511);
} else
{var G__13429 = a4499;var G__13430 = b4500;var G__13431 = c4501;var G__13432 = d4502;var G__13433 = e4503;var G__13434 = f4504;var G__13435 = g4505;var G__13436 = h4506;var G__13437 = i4507;var G__13438 = j4508;var G__13439 = k4509;var G__13440 = l4510;var G__13441 = m4511;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__13429,G__13430,G__13431,G__13432,G__13433,G__13434,G__13435,G__13436,G__13437,G__13438,G__13439,G__13440,G__13441) : f.call(null,G__13429,G__13430,G__13431,G__13432,G__13433,G__13434,G__13435,G__13436,G__13437,G__13438,G__13439,G__13440,G__13441));
}
} else
{var n4512 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512);
} else
{var G__13442 = a4499;var G__13443 = b4500;var G__13444 = c4501;var G__13445 = d4502;var G__13446 = e4503;var G__13447 = f4504;var G__13448 = g4505;var G__13449 = h4506;var G__13450 = i4507;var G__13451 = j4508;var G__13452 = k4509;var G__13453 = l4510;var G__13454 = m4511;var G__13455 = n4512;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__13442,G__13443,G__13444,G__13445,G__13446,G__13447,G__13448,G__13449,G__13450,G__13451,G__13452,G__13453,G__13454,G__13455) : f.call(null,G__13442,G__13443,G__13444,G__13445,G__13446,G__13447,G__13448,G__13449,G__13450,G__13451,G__13452,G__13453,G__13454,G__13455));
}
} else
{var o4513 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513);
} else
{var G__13456 = a4499;var G__13457 = b4500;var G__13458 = c4501;var G__13459 = d4502;var G__13460 = e4503;var G__13461 = f4504;var G__13462 = g4505;var G__13463 = h4506;var G__13464 = i4507;var G__13465 = j4508;var G__13466 = k4509;var G__13467 = l4510;var G__13468 = m4511;var G__13469 = n4512;var G__13470 = o4513;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__13456,G__13457,G__13458,G__13459,G__13460,G__13461,G__13462,G__13463,G__13464,G__13465,G__13466,G__13467,G__13468,G__13469,G__13470) : f.call(null,G__13456,G__13457,G__13458,G__13459,G__13460,G__13461,G__13462,G__13463,G__13464,G__13465,G__13466,G__13467,G__13468,G__13469,G__13470));
}
} else
{var p4514 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513,p4514);
} else
{var G__13471 = a4499;var G__13472 = b4500;var G__13473 = c4501;var G__13474 = d4502;var G__13475 = e4503;var G__13476 = f4504;var G__13477 = g4505;var G__13478 = h4506;var G__13479 = i4507;var G__13480 = j4508;var G__13481 = k4509;var G__13482 = l4510;var G__13483 = m4511;var G__13484 = n4512;var G__13485 = o4513;var G__13486 = p4514;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__13471,G__13472,G__13473,G__13474,G__13475,G__13476,G__13477,G__13478,G__13479,G__13480,G__13481,G__13482,G__13483,G__13484,G__13485,G__13486) : f.call(null,G__13471,G__13472,G__13473,G__13474,G__13475,G__13476,G__13477,G__13478,G__13479,G__13480,G__13481,G__13482,G__13483,G__13484,G__13485,G__13486));
}
} else
{var q4515 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513,p4514,q4515);
} else
{var G__13487 = a4499;var G__13488 = b4500;var G__13489 = c4501;var G__13490 = d4502;var G__13491 = e4503;var G__13492 = f4504;var G__13493 = g4505;var G__13494 = h4506;var G__13495 = i4507;var G__13496 = j4508;var G__13497 = k4509;var G__13498 = l4510;var G__13499 = m4511;var G__13500 = n4512;var G__13501 = o4513;var G__13502 = p4514;var G__13503 = q4515;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__13487,G__13488,G__13489,G__13490,G__13491,G__13492,G__13493,G__13494,G__13495,G__13496,G__13497,G__13498,G__13499,G__13500,G__13501,G__13502,G__13503) : f.call(null,G__13487,G__13488,G__13489,G__13490,G__13491,G__13492,G__13493,G__13494,G__13495,G__13496,G__13497,G__13498,G__13499,G__13500,G__13501,G__13502,G__13503));
}
} else
{var r4516 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513,p4514,q4515,r4516);
} else
{var G__13504 = a4499;var G__13505 = b4500;var G__13506 = c4501;var G__13507 = d4502;var G__13508 = e4503;var G__13509 = f4504;var G__13510 = g4505;var G__13511 = h4506;var G__13512 = i4507;var G__13513 = j4508;var G__13514 = k4509;var G__13515 = l4510;var G__13516 = m4511;var G__13517 = n4512;var G__13518 = o4513;var G__13519 = p4514;var G__13520 = q4515;var G__13521 = r4516;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__13504,G__13505,G__13506,G__13507,G__13508,G__13509,G__13510,G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521) : f.call(null,G__13504,G__13505,G__13506,G__13507,G__13508,G__13509,G__13510,G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521));
}
} else
{var s4517 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513,p4514,q4515,r4516,s4517);
} else
{var G__13522 = a4499;var G__13523 = b4500;var G__13524 = c4501;var G__13525 = d4502;var G__13526 = e4503;var G__13527 = f4504;var G__13528 = g4505;var G__13529 = h4506;var G__13530 = i4507;var G__13531 = j4508;var G__13532 = k4509;var G__13533 = l4510;var G__13534 = m4511;var G__13535 = n4512;var G__13536 = o4513;var G__13537 = p4514;var G__13538 = q4515;var G__13539 = r4516;var G__13540 = s4517;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__13522,G__13523,G__13524,G__13525,G__13526,G__13527,G__13528,G__13529,G__13530,G__13531,G__13532,G__13533,G__13534,G__13535,G__13536,G__13537,G__13538,G__13539,G__13540) : f.call(null,G__13522,G__13523,G__13524,G__13525,G__13526,G__13527,G__13528,G__13529,G__13530,G__13531,G__13532,G__13533,G__13534,G__13535,G__13536,G__13537,G__13538,G__13539,G__13540));
}
} else
{var t4518 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a4499,b4500,c4501,d4502,e4503,f4504,g4505,h4506,i4507,j4508,k4509,l4510,m4511,n4512,o4513,p4514,q4515,r4516,s4517,t4518);
} else
{var G__13541 = a4499;var G__13542 = b4500;var G__13543 = c4501;var G__13544 = d4502;var G__13545 = e4503;var G__13546 = f4504;var G__13547 = g4505;var G__13548 = h4506;var G__13549 = i4507;var G__13550 = j4508;var G__13551 = k4509;var G__13552 = l4510;var G__13553 = m4511;var G__13554 = n4512;var G__13555 = o4513;var G__13556 = p4514;var G__13557 = q4515;var G__13558 = r4516;var G__13559 = s4517;var G__13560 = t4518;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__13541,G__13542,G__13543,G__13544,G__13545,G__13546,G__13547,G__13548,G__13549,G__13550,G__13551,G__13552,G__13553,G__13554,G__13555,G__13556,G__13557,G__13558,G__13559,G__13560) : f.call(null,G__13541,G__13542,G__13543,G__13544,G__13545,G__13546,G__13547,G__13548,G__13549,G__13550,G__13551,G__13552,G__13553,G__13554,G__13555,G__13556,G__13557,G__13558,G__13559,G__13560));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__13561__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__13561 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__13561__delegate.call(this,f,a,b,c,d,args);};
G__13561.cljs$lang$maxFixedArity = 5;
G__13561.cljs$lang$applyTo = (function (arglist__13562){
var f = cljs.core.first(arglist__13562);
arglist__13562 = cljs.core.next(arglist__13562);
var a = cljs.core.first(arglist__13562);
arglist__13562 = cljs.core.next(arglist__13562);
var b = cljs.core.first(arglist__13562);
arglist__13562 = cljs.core.next(arglist__13562);
var c = cljs.core.first(arglist__13562);
arglist__13562 = cljs.core.next(arglist__13562);
var d = cljs.core.first(arglist__13562);
var args = cljs.core.rest(arglist__13562);
return G__13561__delegate(f,a,b,c,d,args);
});
G__13561.cljs$core$IFn$_invoke$arity$variadic = G__13561__delegate;
return G__13561;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__13578 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13578) : f.call(null,G__13578));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__13579 = cljs.core.meta(obj);var G__13580 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13579,G__13580) : f.call(null,G__13579,G__13580));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__13581 = cljs.core.meta(obj);var G__13582 = a;var G__13583 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13581,G__13582,G__13583) : f.call(null,G__13581,G__13582,G__13583));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__13584 = cljs.core.meta(obj);var G__13585 = a;var G__13586 = b;var G__13587 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13584,G__13585,G__13586,G__13587) : f.call(null,G__13584,G__13585,G__13586,G__13587));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__13588 = cljs.core.meta(obj);var G__13589 = a;var G__13590 = b;var G__13591 = c;var G__13592 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13588,G__13589,G__13590,G__13591,G__13592) : f.call(null,G__13588,G__13589,G__13590,G__13591,G__13592));
})());
});
var vary_meta__7 = (function() { 
var G__13593__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__13593 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__13593__delegate.call(this,obj,f,a,b,c,d,args);};
G__13593.cljs$lang$maxFixedArity = 6;
G__13593.cljs$lang$applyTo = (function (arglist__13594){
var obj = cljs.core.first(arglist__13594);
arglist__13594 = cljs.core.next(arglist__13594);
var f = cljs.core.first(arglist__13594);
arglist__13594 = cljs.core.next(arglist__13594);
var a = cljs.core.first(arglist__13594);
arglist__13594 = cljs.core.next(arglist__13594);
var b = cljs.core.first(arglist__13594);
arglist__13594 = cljs.core.next(arglist__13594);
var c = cljs.core.first(arglist__13594);
arglist__13594 = cljs.core.next(arglist__13594);
var d = cljs.core.first(arglist__13594);
var args = cljs.core.rest(arglist__13594);
return G__13593__delegate(obj,f,a,b,c,d,args);
});
G__13593.cljs$core$IFn$_invoke$arity$variadic = G__13593__delegate;
return G__13593;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__13595__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__13595 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13595__delegate.call(this,x,y,more);};
G__13595.cljs$lang$maxFixedArity = 2;
G__13595.cljs$lang$applyTo = (function (arglist__13596){
var x = cljs.core.first(arglist__13596);
arglist__13596 = cljs.core.next(arglist__13596);
var y = cljs.core.first(arglist__13596);
var more = cljs.core.rest(arglist__13596);
return G__13595__delegate(x,y,more);
});
G__13595.cljs$core$IFn$_invoke$arity$variadic = G__13595__delegate;
return G__13595;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t13600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t13600 = (function (nil_iter,meta13601){
this.nil_iter = nil_iter;
this.meta13601 = meta13601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t13600.cljs$lang$type = true;
cljs.core.t13600.cljs$lang$ctorStr = "cljs.core/t13600";
cljs.core.t13600.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/t13600");
});
cljs.core.t13600.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t13600.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t13600.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t13600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13602){var self__ = this;
var _13602__$1 = this;return self__.meta13601;
});
cljs.core.t13600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13602,meta13601__$1){var self__ = this;
var _13602__$1 = this;return (new cljs.core.t13600(self__.nil_iter,meta13601__$1));
});
cljs.core.__GT_t13600 = (function __GT_t13600(nil_iter__$1,meta13601){return (new cljs.core.t13600(nil_iter__$1,meta13601));
});
}
return (new cljs.core.t13600(nil_iter,null));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.cljs$lang$type = true;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/StringIter");
});
cljs.core.StringIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.s.length);
});
cljs.core.StringIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.s.charAt(self__.i);self__.i = (self__.i + (1));
return ret;
});
cljs.core.StringIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){return (new cljs.core.StringIter(s,i));
});
cljs.core.string_iter = (function string_iter(x){return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.cljs$lang$type = true;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ArrayIter");
});
cljs.core.ArrayIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.ArrayIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.ArrayIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){return (new cljs.core.ArrayIter(arr,i));
});
cljs.core.array_iter = (function array_iter(x){return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.cljs$lang$type = true;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/SeqIter");
});
cljs.core.SeqIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__._seq === cljs.core.INIT))
{self__._seq = cljs.core.START;
self__._next = cljs.core.seq(self__._next);
} else
{if((self__._seq === self__._next))
{self__._next = cljs.core.next(self__._seq);
} else
{}
}
return !((self__._next == null));
});
cljs.core.SeqIter.prototype.next = (function (){var self__ = this;
var this$ = this;if(cljs.core.not(this$.hasNext()))
{throw (new Error("No such element"));
} else
{self__._seq = self__._next;
return cljs.core.first(self__._next);
}
});
cljs.core.SeqIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){return (new cljs.core.SeqIter(_seq,_next));
});
cljs.core.seq_iter = (function seq_iter(coll){return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){if((coll == null))
{return cljs.core.nil_iter();
} else
{if(typeof coll === 'string')
{return cljs.core.string_iter(coll);
} else
{if(coll instanceof Array)
{return cljs.core.array_iter(coll);
} else
{if(cljs.core.iterable_QMARK_(coll))
{return cljs.core._iterator(coll);
} else
{if(cljs.core.seqable_QMARK_(coll))
{return cljs.core.seq_iter(coll);
} else
{throw (new Error(("Cannot create iterator from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll))));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.cljs$lang$type = true;
cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3573__auto__ = !((lt.stepper == null));if(and__3573__auto__)
{return self__.iter.hasNext();
} else
{return and__3573__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__13603 = lt;var G__13604 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__13603,G__13604) : self__.xform.call(null,G__13603,G__13604));
})()))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__13605 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13605) : self__.xform.call(null,G__13605));
}
});
cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){return (new cljs.core.Stepper(xform,iter));
});
cljs.core.stepper = (function stepper(xform,iter){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return result;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__13607 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13607) : xform.call(null,G__13607));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.cljs$lang$type = true;
cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__13609 = cljs.core.next(iters__$1);
iters__$1 = G__13609;
continue;
}
}
} else
{return true;
}
break;
}
});
cljs.core.MultiStepper.prototype.next = (function (){var self__ = this;
var _ = this;var n__4455__auto___13610 = self__.iters.length;var i_13611 = (0);while(true){
if((i_13611 < n__4455__auto___13610))
{(self__.nexts[i_13611] = (self__.iters[i_13611]).next());
{
var G__13612 = (i_13611 + (1));
i_13611 = G__13612;
continue;
}
} else
{}
break;
}
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});
cljs.core.MultiStepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3573__auto__ = !((lt.stepper == null));if(and__3573__auto__)
{return this$.hasNext();
} else
{return and__3573__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next()))))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__13608 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13608) : self__.xform.call(null,G__13608));
}
});
cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){return (new cljs.core.MultiStepper(xform,iters,nexts));
});
cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return lt;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__13617 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13617) : xform.call(null,G__13617));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.cljs$lang$type = true;
cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/LazyTransformer");
});
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return self__.first;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{self__.stepper.step(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return this$__$1;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash_ordered_coll(this$__$1);
});
cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;var s = cljs.core._seq(this$__$1);if(!((s == null)))
{return cljs.core.equiv_sequential(this$__$1,other);
} else
{return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,cljs.core._seq(this$__$1));
});
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});
cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});
cljs.core.LazyTransformer.create = (function (xform,coll){return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__13618_13622 = cljs.core.seq(colls);var chunk__13619_13623 = null;var count__13620_13624 = (0);var i__13621_13625 = (0);while(true){
if((i__13621_13625 < count__13620_13624))
{var coll_13626 = chunk__13619_13623.cljs$core$IIndexed$_nth$arity$2(null,i__13621_13625);iters.push(cljs.core.iter(coll_13626));
{
var G__13627 = seq__13618_13622;
var G__13628 = chunk__13619_13623;
var G__13629 = count__13620_13624;
var G__13630 = (i__13621_13625 + (1));
seq__13618_13622 = G__13627;
chunk__13619_13623 = G__13628;
count__13620_13624 = G__13629;
i__13621_13625 = G__13630;
continue;
}
} else
{var temp__4126__auto___13631 = cljs.core.seq(seq__13618_13622);if(temp__4126__auto___13631)
{var seq__13618_13632__$1 = temp__4126__auto___13631;if(cljs.core.chunked_seq_QMARK_(seq__13618_13632__$1))
{var c__4355__auto___13633 = cljs.core.chunk_first(seq__13618_13632__$1);{
var G__13634 = cljs.core.chunk_rest(seq__13618_13632__$1);
var G__13635 = c__4355__auto___13633;
var G__13636 = cljs.core.count(c__4355__auto___13633);
var G__13637 = (0);
seq__13618_13622 = G__13634;
chunk__13619_13623 = G__13635;
count__13620_13624 = G__13636;
i__13621_13625 = G__13637;
continue;
}
} else
{var coll_13638 = cljs.core.first(seq__13618_13632__$1);iters.push(cljs.core.iter(coll_13638));
{
var G__13639 = cljs.core.next(seq__13618_13632__$1);
var G__13640 = null;
var G__13641 = (0);
var G__13642 = (0);
seq__13618_13622 = G__13639;
chunk__13619_13623 = G__13640;
count__13620_13624 = G__13641;
i__13621_13625 = G__13642;
continue;
}
}
} else
{}
}
break;
}
return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3585__auto__ = cljs.core.seq(coll);if(or__3585__auto__)
{return or__3585__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__13643__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__13643 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13643__delegate.call(this,xform,coll,colls);};
G__13643.cljs$lang$maxFixedArity = 2;
G__13643.cljs$lang$applyTo = (function (arglist__13644){
var xform = cljs.core.first(arglist__13644);
arglist__13644 = cljs.core.next(arglist__13644);
var coll = cljs.core.first(arglist__13644);
var colls = cljs.core.rest(arglist__13644);
return G__13643__delegate(xform,coll,colls);
});
G__13643.cljs$core$IFn$_invoke$arity$variadic = G__13643__delegate;
return G__13643;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((function (){var G__13646 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13646) : pred.call(null,G__13646));
})()))
{{
var G__13647 = pred;
var G__13648 = cljs.core.next(coll);
pred = G__13647;
coll = G__13648;
continue;
}
} else
{return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__3585__auto__ = (function (){var G__13652 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13652) : pred.call(null,G__13652));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{{
var G__13653 = pred;
var G__13654 = cljs.core.next(coll);
pred = G__13653;
coll = G__13654;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__13661 = null;
var G__13661__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__13661__1 = (function (x){return cljs.core.not((function (){var G__13658 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13658) : f.call(null,G__13658));
})());
});
var G__13661__2 = (function (x,y){return cljs.core.not((function (){var G__13659 = x;var G__13660 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13659,G__13660) : f.call(null,G__13659,G__13660));
})());
});
var G__13661__3 = (function() { 
var G__13662__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__13662 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13662__delegate.call(this,x,y,zs);};
G__13662.cljs$lang$maxFixedArity = 2;
G__13662.cljs$lang$applyTo = (function (arglist__13663){
var x = cljs.core.first(arglist__13663);
arglist__13663 = cljs.core.next(arglist__13663);
var y = cljs.core.first(arglist__13663);
var zs = cljs.core.rest(arglist__13663);
return G__13662__delegate(x,y,zs);
});
G__13662.cljs$core$IFn$_invoke$arity$variadic = G__13662__delegate;
return G__13662;
})()
;
G__13661 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__13661__0.call(this);
case 1:
return G__13661__1.call(this,x);
case 2:
return G__13661__2.call(this,x,y);
default:
return G__13661__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13661.cljs$lang$maxFixedArity = 2;
G__13661.cljs$lang$applyTo = G__13661__3.cljs$lang$applyTo;
G__13661.cljs$core$IFn$_invoke$arity$0 = G__13661__0;
G__13661.cljs$core$IFn$_invoke$arity$1 = G__13661__1;
G__13661.cljs$core$IFn$_invoke$arity$2 = G__13661__2;
G__13661.cljs$core$IFn$_invoke$arity$variadic = G__13661__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13661;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__13664__delegate = function (args){return x;
};
var G__13664 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13664__delegate.call(this,args);};
G__13664.cljs$lang$maxFixedArity = 0;
G__13664.cljs$lang$applyTo = (function (arglist__13665){
var args = cljs.core.seq(arglist__13665);
return G__13664__delegate(args);
});
G__13664.cljs$core$IFn$_invoke$arity$variadic = G__13664__delegate;
return G__13664;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__13720 = null;
var G__13720__0 = (function (){var G__13693 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13693) : f.call(null,G__13693));
});
var G__13720__1 = (function (x){var G__13694 = (function (){var G__13695 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13695) : g.call(null,G__13695));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13694) : f.call(null,G__13694));
});
var G__13720__2 = (function (x,y){var G__13696 = (function (){var G__13697 = x;var G__13698 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__13697,G__13698) : g.call(null,G__13697,G__13698));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13696) : f.call(null,G__13696));
});
var G__13720__3 = (function (x,y,z){var G__13699 = (function (){var G__13700 = x;var G__13701 = y;var G__13702 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__13700,G__13701,G__13702) : g.call(null,G__13700,G__13701,G__13702));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13699) : f.call(null,G__13699));
});
var G__13720__4 = (function() { 
var G__13721__delegate = function (x,y,z,args){var G__13703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13703) : f.call(null,G__13703));
};
var G__13721 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13721__delegate.call(this,x,y,z,args);};
G__13721.cljs$lang$maxFixedArity = 3;
G__13721.cljs$lang$applyTo = (function (arglist__13722){
var x = cljs.core.first(arglist__13722);
arglist__13722 = cljs.core.next(arglist__13722);
var y = cljs.core.first(arglist__13722);
arglist__13722 = cljs.core.next(arglist__13722);
var z = cljs.core.first(arglist__13722);
var args = cljs.core.rest(arglist__13722);
return G__13721__delegate(x,y,z,args);
});
G__13721.cljs$core$IFn$_invoke$arity$variadic = G__13721__delegate;
return G__13721;
})()
;
G__13720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13720__0.call(this);
case 1:
return G__13720__1.call(this,x);
case 2:
return G__13720__2.call(this,x,y);
case 3:
return G__13720__3.call(this,x,y,z);
default:
return G__13720__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13720.cljs$lang$maxFixedArity = 3;
G__13720.cljs$lang$applyTo = G__13720__4.cljs$lang$applyTo;
G__13720.cljs$core$IFn$_invoke$arity$0 = G__13720__0;
G__13720.cljs$core$IFn$_invoke$arity$1 = G__13720__1;
G__13720.cljs$core$IFn$_invoke$arity$2 = G__13720__2;
G__13720.cljs$core$IFn$_invoke$arity$3 = G__13720__3;
G__13720.cljs$core$IFn$_invoke$arity$variadic = G__13720__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13720;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__13723 = null;
var G__13723__0 = (function (){var G__13704 = (function (){var G__13705 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13705) : g.call(null,G__13705));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13704) : f.call(null,G__13704));
});
var G__13723__1 = (function (x){var G__13706 = (function (){var G__13707 = (function (){var G__13708 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__13708) : h.call(null,G__13708));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13707) : g.call(null,G__13707));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13706) : f.call(null,G__13706));
});
var G__13723__2 = (function (x,y){var G__13709 = (function (){var G__13710 = (function (){var G__13711 = x;var G__13712 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__13711,G__13712) : h.call(null,G__13711,G__13712));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13710) : g.call(null,G__13710));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13709) : f.call(null,G__13709));
});
var G__13723__3 = (function (x,y,z){var G__13713 = (function (){var G__13714 = (function (){var G__13715 = x;var G__13716 = y;var G__13717 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__13715,G__13716,G__13717) : h.call(null,G__13715,G__13716,G__13717));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13714) : g.call(null,G__13714));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13713) : f.call(null,G__13713));
});
var G__13723__4 = (function() { 
var G__13724__delegate = function (x,y,z,args){var G__13718 = (function (){var G__13719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13719) : g.call(null,G__13719));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13718) : f.call(null,G__13718));
};
var G__13724 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13724__delegate.call(this,x,y,z,args);};
G__13724.cljs$lang$maxFixedArity = 3;
G__13724.cljs$lang$applyTo = (function (arglist__13725){
var x = cljs.core.first(arglist__13725);
arglist__13725 = cljs.core.next(arglist__13725);
var y = cljs.core.first(arglist__13725);
arglist__13725 = cljs.core.next(arglist__13725);
var z = cljs.core.first(arglist__13725);
var args = cljs.core.rest(arglist__13725);
return G__13724__delegate(x,y,z,args);
});
G__13724.cljs$core$IFn$_invoke$arity$variadic = G__13724__delegate;
return G__13724;
})()
;
G__13723 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13723__0.call(this);
case 1:
return G__13723__1.call(this,x);
case 2:
return G__13723__2.call(this,x,y);
case 3:
return G__13723__3.call(this,x,y,z);
default:
return G__13723__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13723.cljs$lang$maxFixedArity = 3;
G__13723.cljs$lang$applyTo = G__13723__4.cljs$lang$applyTo;
G__13723.cljs$core$IFn$_invoke$arity$0 = G__13723__0;
G__13723.cljs$core$IFn$_invoke$arity$1 = G__13723__1;
G__13723.cljs$core$IFn$_invoke$arity$2 = G__13723__2;
G__13723.cljs$core$IFn$_invoke$arity$3 = G__13723__3;
G__13723.cljs$core$IFn$_invoke$arity$variadic = G__13723__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13723;
})()
});
var comp__4 = (function() { 
var G__13726__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__13727__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__13728 = cljs.core.first(fs__$2).call(null,ret);
var G__13729 = cljs.core.next(fs__$2);
ret = G__13728;
fs__$2 = G__13729;
continue;
}
} else
{return ret;
}
break;
}
};
var G__13727 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13727__delegate.call(this,args);};
G__13727.cljs$lang$maxFixedArity = 0;
G__13727.cljs$lang$applyTo = (function (arglist__13730){
var args = cljs.core.seq(arglist__13730);
return G__13727__delegate(args);
});
G__13727.cljs$core$IFn$_invoke$arity$variadic = G__13727__delegate;
return G__13727;
})()
;
;})(fs__$1))
};
var G__13726 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13726__delegate.call(this,f1,f2,f3,fs);};
G__13726.cljs$lang$maxFixedArity = 3;
G__13726.cljs$lang$applyTo = (function (arglist__13731){
var f1 = cljs.core.first(arglist__13731);
arglist__13731 = cljs.core.next(arglist__13731);
var f2 = cljs.core.first(arglist__13731);
arglist__13731 = cljs.core.next(arglist__13731);
var f3 = cljs.core.first(arglist__13731);
var fs = cljs.core.rest(arglist__13731);
return G__13726__delegate(f1,f2,f3,fs);
});
G__13726.cljs$core$IFn$_invoke$arity$variadic = G__13726__delegate;
return G__13726;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__13732__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__13732 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13732__delegate.call(this,args);};
G__13732.cljs$lang$maxFixedArity = 0;
G__13732.cljs$lang$applyTo = (function (arglist__13733){
var args = cljs.core.seq(arglist__13733);
return G__13732__delegate(args);
});
G__13732.cljs$core$IFn$_invoke$arity$variadic = G__13732__delegate;
return G__13732;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__13734__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__13734 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13734__delegate.call(this,args);};
G__13734.cljs$lang$maxFixedArity = 0;
G__13734.cljs$lang$applyTo = (function (arglist__13735){
var args = cljs.core.seq(arglist__13735);
return G__13734__delegate(args);
});
G__13734.cljs$core$IFn$_invoke$arity$variadic = G__13734__delegate;
return G__13734;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__13736__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__13736 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13736__delegate.call(this,args);};
G__13736.cljs$lang$maxFixedArity = 0;
G__13736.cljs$lang$applyTo = (function (arglist__13737){
var args = cljs.core.seq(arglist__13737);
return G__13736__delegate(args);
});
G__13736.cljs$core$IFn$_invoke$arity$variadic = G__13736__delegate;
return G__13736;
})()
;
});
var partial__5 = (function() { 
var G__13738__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__13739__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__13739 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13739__delegate.call(this,args);};
G__13739.cljs$lang$maxFixedArity = 0;
G__13739.cljs$lang$applyTo = (function (arglist__13740){
var args = cljs.core.seq(arglist__13740);
return G__13739__delegate(args);
});
G__13739.cljs$core$IFn$_invoke$arity$variadic = G__13739__delegate;
return G__13739;
})()
;
};
var G__13738 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__13738__delegate.call(this,f,arg1,arg2,arg3,more);};
G__13738.cljs$lang$maxFixedArity = 4;
G__13738.cljs$lang$applyTo = (function (arglist__13741){
var f = cljs.core.first(arglist__13741);
arglist__13741 = cljs.core.next(arglist__13741);
var arg1 = cljs.core.first(arglist__13741);
arglist__13741 = cljs.core.next(arglist__13741);
var arg2 = cljs.core.first(arglist__13741);
arglist__13741 = cljs.core.next(arglist__13741);
var arg3 = cljs.core.first(arglist__13741);
var more = cljs.core.rest(arglist__13741);
return G__13738__delegate(f,arg1,arg2,arg3,more);
});
G__13738.cljs$core$IFn$_invoke$arity$variadic = G__13738__delegate;
return G__13738;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__13774 = null;
var G__13774__1 = (function (a){var G__13758 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13758) : f.call(null,G__13758));
});
var G__13774__2 = (function (a,b){var G__13759 = (((a == null))?x:a);var G__13760 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13759,G__13760) : f.call(null,G__13759,G__13760));
});
var G__13774__3 = (function (a,b,c){var G__13761 = (((a == null))?x:a);var G__13762 = b;var G__13763 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13761,G__13762,G__13763) : f.call(null,G__13761,G__13762,G__13763));
});
var G__13774__4 = (function() { 
var G__13775__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__13775 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13775__delegate.call(this,a,b,c,ds);};
G__13775.cljs$lang$maxFixedArity = 3;
G__13775.cljs$lang$applyTo = (function (arglist__13776){
var a = cljs.core.first(arglist__13776);
arglist__13776 = cljs.core.next(arglist__13776);
var b = cljs.core.first(arglist__13776);
arglist__13776 = cljs.core.next(arglist__13776);
var c = cljs.core.first(arglist__13776);
var ds = cljs.core.rest(arglist__13776);
return G__13775__delegate(a,b,c,ds);
});
G__13775.cljs$core$IFn$_invoke$arity$variadic = G__13775__delegate;
return G__13775;
})()
;
G__13774 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__13774__1.call(this,a);
case 2:
return G__13774__2.call(this,a,b);
case 3:
return G__13774__3.call(this,a,b,c);
default:
return G__13774__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13774.cljs$lang$maxFixedArity = 3;
G__13774.cljs$lang$applyTo = G__13774__4.cljs$lang$applyTo;
G__13774.cljs$core$IFn$_invoke$arity$1 = G__13774__1;
G__13774.cljs$core$IFn$_invoke$arity$2 = G__13774__2;
G__13774.cljs$core$IFn$_invoke$arity$3 = G__13774__3;
G__13774.cljs$core$IFn$_invoke$arity$variadic = G__13774__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13774;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__13777 = null;
var G__13777__2 = (function (a,b){var G__13764 = (((a == null))?x:a);var G__13765 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13764,G__13765) : f.call(null,G__13764,G__13765));
});
var G__13777__3 = (function (a,b,c){var G__13766 = (((a == null))?x:a);var G__13767 = (((b == null))?y:b);var G__13768 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13766,G__13767,G__13768) : f.call(null,G__13766,G__13767,G__13768));
});
var G__13777__4 = (function() { 
var G__13778__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__13778 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13778__delegate.call(this,a,b,c,ds);};
G__13778.cljs$lang$maxFixedArity = 3;
G__13778.cljs$lang$applyTo = (function (arglist__13779){
var a = cljs.core.first(arglist__13779);
arglist__13779 = cljs.core.next(arglist__13779);
var b = cljs.core.first(arglist__13779);
arglist__13779 = cljs.core.next(arglist__13779);
var c = cljs.core.first(arglist__13779);
var ds = cljs.core.rest(arglist__13779);
return G__13778__delegate(a,b,c,ds);
});
G__13778.cljs$core$IFn$_invoke$arity$variadic = G__13778__delegate;
return G__13778;
})()
;
G__13777 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13777__2.call(this,a,b);
case 3:
return G__13777__3.call(this,a,b,c);
default:
return G__13777__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13777.cljs$lang$maxFixedArity = 3;
G__13777.cljs$lang$applyTo = G__13777__4.cljs$lang$applyTo;
G__13777.cljs$core$IFn$_invoke$arity$2 = G__13777__2;
G__13777.cljs$core$IFn$_invoke$arity$3 = G__13777__3;
G__13777.cljs$core$IFn$_invoke$arity$variadic = G__13777__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13777;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__13780 = null;
var G__13780__2 = (function (a,b){var G__13769 = (((a == null))?x:a);var G__13770 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13769,G__13770) : f.call(null,G__13769,G__13770));
});
var G__13780__3 = (function (a,b,c){var G__13771 = (((a == null))?x:a);var G__13772 = (((b == null))?y:b);var G__13773 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13771,G__13772,G__13773) : f.call(null,G__13771,G__13772,G__13773));
});
var G__13780__4 = (function() { 
var G__13781__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__13781 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13781__delegate.call(this,a,b,c,ds);};
G__13781.cljs$lang$maxFixedArity = 3;
G__13781.cljs$lang$applyTo = (function (arglist__13782){
var a = cljs.core.first(arglist__13782);
arglist__13782 = cljs.core.next(arglist__13782);
var b = cljs.core.first(arglist__13782);
arglist__13782 = cljs.core.next(arglist__13782);
var c = cljs.core.first(arglist__13782);
var ds = cljs.core.rest(arglist__13782);
return G__13781__delegate(a,b,c,ds);
});
G__13781.cljs$core$IFn$_invoke$arity$variadic = G__13781__delegate;
return G__13781;
})()
;
G__13780 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13780__2.call(this,a,b);
case 3:
return G__13780__3.call(this,a,b,c);
default:
return G__13780__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13780.cljs$lang$maxFixedArity = 3;
G__13780.cljs$lang$applyTo = G__13780__4.cljs$lang$applyTo;
G__13780.cljs$core$IFn$_invoke$arity$2 = G__13780__2;
G__13780.cljs$core$IFn$_invoke$arity$3 = G__13780__3;
G__13780.cljs$core$IFn$_invoke$arity$variadic = G__13780__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13780;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4455__auto___13831 = size;var i_13832 = (0);while(true){
if((i_13832 < n__4455__auto___13831))
{cljs.core.chunk_append(b,(function (){var G__13827 = (idx + i_13832);var G__13828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13832);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13827,G__13828) : f.call(null,G__13827,G__13828));
})());
{
var G__13833 = (i_13832 + (1));
i_13832 = G__13833;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__13829 = idx;var G__13830 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13829,G__13830) : f.call(null,G__13829,G__13830));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){return (function (rf){return (function() {
var G__13852 = null;
var G__13852__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13852__1 = (function (result){var G__13846 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13846) : rf.call(null,G__13846));
});
var G__13852__2 = (function (result,input){var v = (function (){var G__13847 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13847) : f.call(null,G__13847));
})();if((v == null))
{return result;
} else
{var G__13848 = result;var G__13849 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13848,G__13849) : rf.call(null,G__13848,G__13849));
}
});
G__13852 = function(result,input){
switch(arguments.length){
case 0:
return G__13852__0.call(this);
case 1:
return G__13852__1.call(this,result);
case 2:
return G__13852__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13852.cljs$core$IFn$_invoke$arity$0 = G__13852__0;
G__13852.cljs$core$IFn$_invoke$arity$1 = G__13852__1;
G__13852.cljs$core$IFn$_invoke$arity$2 = G__13852__2;
return G__13852;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4455__auto___13853 = size;var i_13854 = (0);while(true){
if((i_13854 < n__4455__auto___13853))
{var x_13855 = (function (){var G__13850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13854);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13850) : f.call(null,G__13850));
})();if((x_13855 == null))
{} else
{cljs.core.chunk_append(b,x_13855);
}
{
var G__13856 = (i_13854 + (1));
i_13854 = G__13856;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__13851 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13851) : f.call(null,G__13851));
})();if((x == null))
{return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__13857 = this$__$1;return goog.getUid(G__13857);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13858 = cljs.core.seq(self__.watches);var chunk__13859 = null;var count__13860 = (0);var i__13861 = (0);while(true){
if((i__13861 < count__13860))
{var vec__13862 = chunk__13859.cljs$core$IIndexed$_nth$arity$2(null,i__13861);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13862,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13862,(1),null);var G__13863_13872 = key;var G__13864_13873 = this$__$1;var G__13865_13874 = oldval;var G__13866_13875 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13863_13872,G__13864_13873,G__13865_13874,G__13866_13875) : f.call(null,G__13863_13872,G__13864_13873,G__13865_13874,G__13866_13875));
{
var G__13876 = seq__13858;
var G__13877 = chunk__13859;
var G__13878 = count__13860;
var G__13879 = (i__13861 + (1));
seq__13858 = G__13876;
chunk__13859 = G__13877;
count__13860 = G__13878;
i__13861 = G__13879;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13858);if(temp__4126__auto__)
{var seq__13858__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13858__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__13858__$1);{
var G__13880 = cljs.core.chunk_rest(seq__13858__$1);
var G__13881 = c__4355__auto__;
var G__13882 = cljs.core.count(c__4355__auto__);
var G__13883 = (0);
seq__13858 = G__13880;
chunk__13859 = G__13881;
count__13860 = G__13882;
i__13861 = G__13883;
continue;
}
} else
{var vec__13867 = cljs.core.first(seq__13858__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13867,(1),null);var G__13868_13884 = key;var G__13869_13885 = this$__$1;var G__13870_13886 = oldval;var G__13871_13887 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13868_13884,G__13869_13885,G__13870_13886,G__13871_13887) : f.call(null,G__13868_13884,G__13869_13885,G__13870_13886,G__13871_13887));
{
var G__13888 = cljs.core.next(seq__13858__$1);
var G__13889 = null;
var G__13890 = (0);
var G__13891 = (0);
seq__13858 = G__13888;
chunk__13859 = G__13889;
count__13860 = G__13890;
i__13861 = G__13891;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.Atom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13895__delegate = function (x,p__13892){var map__13894 = p__13892;var map__13894__$1 = ((cljs.core.seq_QMARK_(map__13894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13894):map__13894);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.constant$keyword$70);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.constant$keyword$65);return (new cljs.core.Atom(x,meta,validator,null));
};
var G__13895 = function (x,var_args){
var p__13892 = null;if (arguments.length > 1) {
  p__13892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13895__delegate.call(this,x,p__13892);};
G__13895.cljs$lang$maxFixedArity = 1;
G__13895.cljs$lang$applyTo = (function (arglist__13896){
var x = cljs.core.first(arglist__13896);
var p__13892 = cljs.core.rest(arglist__13896);
return G__13895__delegate(x,p__13892);
});
G__13895.cljs$core$IFn$_invoke$arity$variadic = G__13895__delegate;
return G__13895;
})()
;
atom = function(x,var_args){
var p__13892 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_((function (){var G__13899 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__13899) : validate.call(null,G__13899));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13900 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__13900) : cljs.core.pr_str.call(null,G__13900));
})()))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13907 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13907) : f.call(null,G__13907));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13908 = a.state;var G__13909 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13908,G__13909) : f.call(null,G__13908,G__13909));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13910 = a.state;var G__13911 = x;var G__13912 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13910,G__13911,G__13912) : f.call(null,G__13910,G__13911,G__13912));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__13913__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__13913 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__13913__delegate.call(this,a,f,x,y,more);};
G__13913.cljs$lang$maxFixedArity = 4;
G__13913.cljs$lang$applyTo = (function (arglist__13914){
var a = cljs.core.first(arglist__13914);
arglist__13914 = cljs.core.next(arglist__13914);
var f = cljs.core.first(arglist__13914);
arglist__13914 = cljs.core.next(arglist__13914);
var x = cljs.core.first(arglist__13914);
arglist__13914 = cljs.core.next(arglist__13914);
var y = cljs.core.first(arglist__13914);
var more = cljs.core.rest(arglist__13914);
return G__13913__delegate(a,f,x,y,more);
});
G__13913.cljs$core$IFn$_invoke$arity$variadic = G__13913__delegate;
return G__13913;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){return (function (rf){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__13981 = null;
var G__13981__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13981__1 = (function (result){var G__13948 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13948) : rf.call(null,G__13948));
});
var G__13981__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__13949 = i;var G__13950 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13949,G__13950) : f.call(null,G__13949,G__13950));
})();if((v == null))
{return result;
} else
{var G__13951 = result;var G__13952 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13951,G__13952) : rf.call(null,G__13951,G__13952));
}
});
G__13981 = function(result,input){
switch(arguments.length){
case 0:
return G__13981__0.call(this);
case 1:
return G__13981__1.call(this,result);
case 2:
return G__13981__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13981.cljs$core$IFn$_invoke$arity$0 = G__13981__0;
G__13981.cljs$core$IFn$_invoke$arity$1 = G__13981__1;
G__13981.cljs$core$IFn$_invoke$arity$2 = G__13981__2;
return G__13981;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4455__auto___13982 = size;var i_13983 = (0);while(true){
if((i_13983 < n__4455__auto___13982))
{var x_13984 = (function (){var G__13977 = (idx + i_13983);var G__13978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13983);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13977,G__13978) : f.call(null,G__13977,G__13978));
})();if((x_13984 == null))
{} else
{cljs.core.chunk_append(b,x_13984);
}
{
var G__13985 = (i_13983 + (1));
i_13983 = G__13985;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__13979 = idx;var G__13980 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13979,G__13980) : f.call(null,G__13979,G__13980));
})();if((x == null))
{return keepi((idx + (1)),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__14199 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14199) : p.call(null,G__14199));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14201 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14201) : p.call(null,G__14201));
})();if(cljs.core.truth_(and__3573__auto__))
{var G__14202 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14202) : p.call(null,G__14202));
} else
{return and__3573__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14204 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14204) : p.call(null,G__14204));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14206 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14206) : p.call(null,G__14206));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var G__14207 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14207) : p.call(null,G__14207));
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__14376__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__14376 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14376__delegate.call(this,x,y,z,args);};
G__14376.cljs$lang$maxFixedArity = 3;
G__14376.cljs$lang$applyTo = (function (arglist__14377){
var x = cljs.core.first(arglist__14377);
arglist__14377 = cljs.core.next(arglist__14377);
var y = cljs.core.first(arglist__14377);
arglist__14377 = cljs.core.next(arglist__14377);
var z = cljs.core.first(arglist__14377);
var args = cljs.core.rest(arglist__14377);
return G__14376__delegate(x,y,z,args);
});
G__14376.cljs$core$IFn$_invoke$arity$variadic = G__14376__delegate;
return G__14376;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14239 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14239) : p1.call(null,G__14239));
})();if(cljs.core.truth_(and__3573__auto__))
{var G__14240 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14240) : p2.call(null,G__14240));
} else
{return and__3573__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14242 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14242) : p1.call(null,G__14242));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14244 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14244) : p1.call(null,G__14244));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var and__3573__auto____$2 = (function (){var G__14246 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14246) : p2.call(null,G__14246));
})();if(cljs.core.truth_(and__3573__auto____$2))
{var G__14247 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14247) : p2.call(null,G__14247));
} else
{return and__3573__auto____$2;
}
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14249 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14249) : p1.call(null,G__14249));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14251 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14251) : p1.call(null,G__14251));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var and__3573__auto____$2 = (function (){var G__14253 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14253) : p1.call(null,G__14253));
})();if(cljs.core.truth_(and__3573__auto____$2))
{var and__3573__auto____$3 = (function (){var G__14255 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14255) : p2.call(null,G__14255));
})();if(cljs.core.truth_(and__3573__auto____$3))
{var and__3573__auto____$4 = (function (){var G__14257 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14257) : p2.call(null,G__14257));
})();if(cljs.core.truth_(and__3573__auto____$4))
{var G__14258 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14258) : p2.call(null,G__14258));
} else
{return and__3573__auto____$4;
}
} else
{return and__3573__auto____$3;
}
} else
{return and__3573__auto____$2;
}
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__14378__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13986_SHARP_){var and__3573__auto__ = (function (){var G__14263 = p1__13986_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14263) : p1.call(null,G__14263));
})();if(cljs.core.truth_(and__3573__auto__))
{var G__14264 = p1__13986_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14264) : p2.call(null,G__14264));
} else
{return and__3573__auto__;
}
}),args)));
};
var G__14378 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14378__delegate.call(this,x,y,z,args);};
G__14378.cljs$lang$maxFixedArity = 3;
G__14378.cljs$lang$applyTo = (function (arglist__14379){
var x = cljs.core.first(arglist__14379);
arglist__14379 = cljs.core.next(arglist__14379);
var y = cljs.core.first(arglist__14379);
arglist__14379 = cljs.core.next(arglist__14379);
var z = cljs.core.first(arglist__14379);
var args = cljs.core.rest(arglist__14379);
return G__14378__delegate(x,y,z,args);
});
G__14378.cljs$core$IFn$_invoke$arity$variadic = G__14378__delegate;
return G__14378;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14310 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14310) : p1.call(null,G__14310));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14312 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14312) : p2.call(null,G__14312));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var G__14313 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14313) : p3.call(null,G__14313));
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14315 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14315) : p1.call(null,G__14315));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14317 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14317) : p2.call(null,G__14317));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var and__3573__auto____$2 = (function (){var G__14319 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14319) : p3.call(null,G__14319));
})();if(cljs.core.truth_(and__3573__auto____$2))
{var and__3573__auto____$3 = (function (){var G__14321 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14321) : p1.call(null,G__14321));
})();if(cljs.core.truth_(and__3573__auto____$3))
{var and__3573__auto____$4 = (function (){var G__14323 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14323) : p2.call(null,G__14323));
})();if(cljs.core.truth_(and__3573__auto____$4))
{var G__14324 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14324) : p3.call(null,G__14324));
} else
{return and__3573__auto____$4;
}
} else
{return and__3573__auto____$3;
}
} else
{return and__3573__auto____$2;
}
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3573__auto__ = (function (){var G__14326 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14326) : p1.call(null,G__14326));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14328 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14328) : p2.call(null,G__14328));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var and__3573__auto____$2 = (function (){var G__14330 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14330) : p3.call(null,G__14330));
})();if(cljs.core.truth_(and__3573__auto____$2))
{var and__3573__auto____$3 = (function (){var G__14332 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14332) : p1.call(null,G__14332));
})();if(cljs.core.truth_(and__3573__auto____$3))
{var and__3573__auto____$4 = (function (){var G__14334 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14334) : p2.call(null,G__14334));
})();if(cljs.core.truth_(and__3573__auto____$4))
{var and__3573__auto____$5 = (function (){var G__14336 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14336) : p3.call(null,G__14336));
})();if(cljs.core.truth_(and__3573__auto____$5))
{var and__3573__auto____$6 = (function (){var G__14338 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14338) : p1.call(null,G__14338));
})();if(cljs.core.truth_(and__3573__auto____$6))
{var and__3573__auto____$7 = (function (){var G__14340 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14340) : p2.call(null,G__14340));
})();if(cljs.core.truth_(and__3573__auto____$7))
{var G__14341 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14341) : p3.call(null,G__14341));
} else
{return and__3573__auto____$7;
}
} else
{return and__3573__auto____$6;
}
} else
{return and__3573__auto____$5;
}
} else
{return and__3573__auto____$4;
}
} else
{return and__3573__auto____$3;
}
} else
{return and__3573__auto____$2;
}
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__14380__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13987_SHARP_){var and__3573__auto__ = (function (){var G__14348 = p1__13987_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14348) : p1.call(null,G__14348));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14350 = p1__13987_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14350) : p2.call(null,G__14350));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var G__14351 = p1__13987_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14351) : p3.call(null,G__14351));
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
}),args)));
};
var G__14380 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14380__delegate.call(this,x,y,z,args);};
G__14380.cljs$lang$maxFixedArity = 3;
G__14380.cljs$lang$applyTo = (function (arglist__14381){
var x = cljs.core.first(arglist__14381);
arglist__14381 = cljs.core.next(arglist__14381);
var y = cljs.core.first(arglist__14381);
arglist__14381 = cljs.core.next(arglist__14381);
var z = cljs.core.first(arglist__14381);
var args = cljs.core.rest(arglist__14381);
return G__14380__delegate(x,y,z,args);
});
G__14380.cljs$core$IFn$_invoke$arity$variadic = G__14380__delegate;
return G__14380;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__14382__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13988_SHARP_){var G__14367 = x;return (p1__13988_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13988_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14367) : p1__13988_SHARP_.call(null,G__14367));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13989_SHARP_){var and__3573__auto__ = (function (){var G__14369 = x;return (p1__13989_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13989_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14369) : p1__13989_SHARP_.call(null,G__14369));
})();if(cljs.core.truth_(and__3573__auto__))
{var G__14370 = y;return (p1__13989_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13989_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14370) : p1__13989_SHARP_.call(null,G__14370));
} else
{return and__3573__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13990_SHARP_){var and__3573__auto__ = (function (){var G__14372 = x;return (p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14372) : p1__13990_SHARP_.call(null,G__14372));
})();if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__14374 = y;return (p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14374) : p1__13990_SHARP_.call(null,G__14374));
})();if(cljs.core.truth_(and__3573__auto____$1))
{var G__14375 = z;return (p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13990_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14375) : p1__13990_SHARP_.call(null,G__14375));
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__14383__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13991_SHARP_){return cljs.core.every_QMARK_(p1__13991_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__14383 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14383__delegate.call(this,x,y,z,args);};
G__14383.cljs$lang$maxFixedArity = 3;
G__14383.cljs$lang$applyTo = (function (arglist__14384){
var x = cljs.core.first(arglist__14384);
arglist__14384 = cljs.core.next(arglist__14384);
var y = cljs.core.first(arglist__14384);
arglist__14384 = cljs.core.next(arglist__14384);
var z = cljs.core.first(arglist__14384);
var args = cljs.core.rest(arglist__14384);
return G__14383__delegate(x,y,z,args);
});
G__14383.cljs$core$IFn$_invoke$arity$variadic = G__14383__delegate;
return G__14383;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__14382 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14382__delegate.call(this,p1,p2,p3,ps);};
G__14382.cljs$lang$maxFixedArity = 3;
G__14382.cljs$lang$applyTo = (function (arglist__14385){
var p1 = cljs.core.first(arglist__14385);
arglist__14385 = cljs.core.next(arglist__14385);
var p2 = cljs.core.first(arglist__14385);
arglist__14385 = cljs.core.next(arglist__14385);
var p3 = cljs.core.first(arglist__14385);
var ps = cljs.core.rest(arglist__14385);
return G__14382__delegate(p1,p2,p3,ps);
});
G__14382.cljs$core$IFn$_invoke$arity$variadic = G__14382__delegate;
return G__14382;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){var G__14591 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14591) : p.call(null,G__14591));
});
var sp1__2 = (function (x,y){var or__3585__auto__ = (function (){var G__14593 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14593) : p.call(null,G__14593));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var G__14594 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14594) : p.call(null,G__14594));
}
});
var sp1__3 = (function (x,y,z){var or__3585__auto__ = (function (){var G__14596 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14596) : p.call(null,G__14596));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14598 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14598) : p.call(null,G__14598));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var G__14599 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14599) : p.call(null,G__14599));
}
}
});
var sp1__4 = (function() { 
var G__14760__delegate = function (x,y,z,args){var or__3585__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__14760 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14760__delegate.call(this,x,y,z,args);};
G__14760.cljs$lang$maxFixedArity = 3;
G__14760.cljs$lang$applyTo = (function (arglist__14761){
var x = cljs.core.first(arglist__14761);
arglist__14761 = cljs.core.next(arglist__14761);
var y = cljs.core.first(arglist__14761);
arglist__14761 = cljs.core.next(arglist__14761);
var z = cljs.core.first(arglist__14761);
var args = cljs.core.rest(arglist__14761);
return G__14760__delegate(x,y,z,args);
});
G__14760.cljs$core$IFn$_invoke$arity$variadic = G__14760__delegate;
return G__14760;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__3585__auto__ = (function (){var G__14631 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14631) : p1.call(null,G__14631));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var G__14632 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14632) : p2.call(null,G__14632));
}
});
var sp2__2 = (function (x,y){var or__3585__auto__ = (function (){var G__14634 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14634) : p1.call(null,G__14634));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14636 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14636) : p1.call(null,G__14636));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var G__14638 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14638) : p2.call(null,G__14638));
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{var G__14639 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14639) : p2.call(null,G__14639));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__3585__auto__ = (function (){var G__14641 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14641) : p1.call(null,G__14641));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14643 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14643) : p1.call(null,G__14643));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var G__14645 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14645) : p1.call(null,G__14645));
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{var or__3585__auto____$3 = (function (){var G__14647 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14647) : p2.call(null,G__14647));
})();if(cljs.core.truth_(or__3585__auto____$3))
{return or__3585__auto____$3;
} else
{var or__3585__auto____$4 = (function (){var G__14649 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14649) : p2.call(null,G__14649));
})();if(cljs.core.truth_(or__3585__auto____$4))
{return or__3585__auto____$4;
} else
{var G__14650 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14650) : p2.call(null,G__14650));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__14762__delegate = function (x,y,z,args){var or__3585__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.some(((function (or__3585__auto__){
return (function (p1__14386_SHARP_){var or__3585__auto____$1 = (function (){var G__14652 = p1__14386_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14652) : p1.call(null,G__14652));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var G__14653 = p1__14386_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14653) : p2.call(null,G__14653));
}
});})(or__3585__auto__))
,args);
}
};
var G__14762 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14762__delegate.call(this,x,y,z,args);};
G__14762.cljs$lang$maxFixedArity = 3;
G__14762.cljs$lang$applyTo = (function (arglist__14763){
var x = cljs.core.first(arglist__14763);
arglist__14763 = cljs.core.next(arglist__14763);
var y = cljs.core.first(arglist__14763);
arglist__14763 = cljs.core.next(arglist__14763);
var z = cljs.core.first(arglist__14763);
var args = cljs.core.rest(arglist__14763);
return G__14762__delegate(x,y,z,args);
});
G__14762.cljs$core$IFn$_invoke$arity$variadic = G__14762__delegate;
return G__14762;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__3585__auto__ = (function (){var G__14699 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14699) : p1.call(null,G__14699));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14701 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14701) : p2.call(null,G__14701));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var G__14702 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14702) : p3.call(null,G__14702));
}
}
});
var sp3__2 = (function (x,y){var or__3585__auto__ = (function (){var G__14704 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14704) : p1.call(null,G__14704));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14706 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14706) : p2.call(null,G__14706));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var G__14708 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14708) : p3.call(null,G__14708));
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{var or__3585__auto____$3 = (function (){var G__14710 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14710) : p1.call(null,G__14710));
})();if(cljs.core.truth_(or__3585__auto____$3))
{return or__3585__auto____$3;
} else
{var or__3585__auto____$4 = (function (){var G__14712 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14712) : p2.call(null,G__14712));
})();if(cljs.core.truth_(or__3585__auto____$4))
{return or__3585__auto____$4;
} else
{var G__14713 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14713) : p3.call(null,G__14713));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__3585__auto__ = (function (){var G__14715 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14715) : p1.call(null,G__14715));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14717 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14717) : p2.call(null,G__14717));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var G__14719 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14719) : p3.call(null,G__14719));
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{var or__3585__auto____$3 = (function (){var G__14721 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14721) : p1.call(null,G__14721));
})();if(cljs.core.truth_(or__3585__auto____$3))
{return or__3585__auto____$3;
} else
{var or__3585__auto____$4 = (function (){var G__14723 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14723) : p2.call(null,G__14723));
})();if(cljs.core.truth_(or__3585__auto____$4))
{return or__3585__auto____$4;
} else
{var or__3585__auto____$5 = (function (){var G__14725 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14725) : p3.call(null,G__14725));
})();if(cljs.core.truth_(or__3585__auto____$5))
{return or__3585__auto____$5;
} else
{var or__3585__auto____$6 = (function (){var G__14727 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14727) : p1.call(null,G__14727));
})();if(cljs.core.truth_(or__3585__auto____$6))
{return or__3585__auto____$6;
} else
{var or__3585__auto____$7 = (function (){var G__14729 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14729) : p2.call(null,G__14729));
})();if(cljs.core.truth_(or__3585__auto____$7))
{return or__3585__auto____$7;
} else
{var G__14730 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14730) : p3.call(null,G__14730));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__14764__delegate = function (x,y,z,args){var or__3585__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.some(((function (or__3585__auto__){
return (function (p1__14387_SHARP_){var or__3585__auto____$1 = (function (){var G__14732 = p1__14387_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14732) : p1.call(null,G__14732));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var G__14734 = p1__14387_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14734) : p2.call(null,G__14734));
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{var G__14735 = p1__14387_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14735) : p3.call(null,G__14735));
}
}
});})(or__3585__auto__))
,args);
}
};
var G__14764 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14764__delegate.call(this,x,y,z,args);};
G__14764.cljs$lang$maxFixedArity = 3;
G__14764.cljs$lang$applyTo = (function (arglist__14765){
var x = cljs.core.first(arglist__14765);
arglist__14765 = cljs.core.next(arglist__14765);
var y = cljs.core.first(arglist__14765);
arglist__14765 = cljs.core.next(arglist__14765);
var z = cljs.core.first(arglist__14765);
var args = cljs.core.rest(arglist__14765);
return G__14764__delegate(x,y,z,args);
});
G__14764.cljs$core$IFn$_invoke$arity$variadic = G__14764__delegate;
return G__14764;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__14766__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__14388_SHARP_){var G__14751 = x;return (p1__14388_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14388_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14751) : p1__14388_SHARP_.call(null,G__14751));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__14389_SHARP_){var or__3585__auto__ = (function (){var G__14753 = x;return (p1__14389_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14389_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14753) : p1__14389_SHARP_.call(null,G__14753));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var G__14754 = y;return (p1__14389_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14389_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14754) : p1__14389_SHARP_.call(null,G__14754));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__14390_SHARP_){var or__3585__auto__ = (function (){var G__14756 = x;return (p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14756) : p1__14390_SHARP_.call(null,G__14756));
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__14758 = y;return (p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14758) : p1__14390_SHARP_.call(null,G__14758));
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var G__14759 = z;return (p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14390_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14759) : p1__14390_SHARP_.call(null,G__14759));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__14767__delegate = function (x,y,z,args){var or__3585__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.some(((function (or__3585__auto__,ps__$1){
return (function (p1__14391_SHARP_){return cljs.core.some(p1__14391_SHARP_,args);
});})(or__3585__auto__,ps__$1))
,ps__$1);
}
};
var G__14767 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14767__delegate.call(this,x,y,z,args);};
G__14767.cljs$lang$maxFixedArity = 3;
G__14767.cljs$lang$applyTo = (function (arglist__14768){
var x = cljs.core.first(arglist__14768);
arglist__14768 = cljs.core.next(arglist__14768);
var y = cljs.core.first(arglist__14768);
arglist__14768 = cljs.core.next(arglist__14768);
var z = cljs.core.first(arglist__14768);
var args = cljs.core.rest(arglist__14768);
return G__14767__delegate(x,y,z,args);
});
G__14767.cljs$core$IFn$_invoke$arity$variadic = G__14767__delegate;
return G__14767;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__14766 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14766__delegate.call(this,p1,p2,p3,ps);};
G__14766.cljs$lang$maxFixedArity = 3;
G__14766.cljs$lang$applyTo = (function (arglist__14769){
var p1 = cljs.core.first(arglist__14769);
arglist__14769 = cljs.core.next(arglist__14769);
var p2 = cljs.core.first(arglist__14769);
arglist__14769 = cljs.core.next(arglist__14769);
var p3 = cljs.core.first(arglist__14769);
var ps = cljs.core.rest(arglist__14769);
return G__14766__delegate(p1,p2,p3,ps);
});
G__14766.cljs$core$IFn$_invoke$arity$variadic = G__14766__delegate;
return G__14766;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){return (function (rf){return (function() {
var G__14824 = null;
var G__14824__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14824__1 = (function (result){var G__14810 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14810) : rf.call(null,G__14810));
});
var G__14824__2 = (function (result,input){var G__14811 = result;var G__14812 = (function (){var G__14813 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14813) : f.call(null,G__14813));
})();return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14811,G__14812) : rf.call(null,G__14811,G__14812));
});
var G__14824__3 = (function() { 
var G__14825__delegate = function (result,input,inputs){var G__14814 = result;var G__14815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14814,G__14815) : rf.call(null,G__14814,G__14815));
};
var G__14825 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14825__delegate.call(this,result,input,inputs);};
G__14825.cljs$lang$maxFixedArity = 2;
G__14825.cljs$lang$applyTo = (function (arglist__14826){
var result = cljs.core.first(arglist__14826);
arglist__14826 = cljs.core.next(arglist__14826);
var input = cljs.core.first(arglist__14826);
var inputs = cljs.core.rest(arglist__14826);
return G__14825__delegate(result,input,inputs);
});
G__14825.cljs$core$IFn$_invoke$arity$variadic = G__14825__delegate;
return G__14825;
})()
;
G__14824 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__14824__0.call(this);
case 1:
return G__14824__1.call(this,result);
case 2:
return G__14824__2.call(this,result,input);
default:
return G__14824__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14824.cljs$lang$maxFixedArity = 2;
G__14824.cljs$lang$applyTo = G__14824__3.cljs$lang$applyTo;
G__14824.cljs$core$IFn$_invoke$arity$0 = G__14824__0;
G__14824.cljs$core$IFn$_invoke$arity$1 = G__14824__1;
G__14824.cljs$core$IFn$_invoke$arity$2 = G__14824__2;
G__14824.cljs$core$IFn$_invoke$arity$variadic = G__14824__3.cljs$core$IFn$_invoke$arity$variadic;
return G__14824;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4455__auto___14827 = size;var i_14828 = (0);while(true){
if((i_14828 < n__4455__auto___14827))
{cljs.core.chunk_append(b,(function (){var G__14816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14828);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14816) : f.call(null,G__14816));
})());
{
var G__14829 = (i_14828 + (1));
i_14828 = G__14829;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__14817 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14817) : f.call(null,G__14817));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__14818 = cljs.core.first(s1);var G__14819 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14818,G__14819) : f.call(null,G__14818,G__14819));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__14820 = cljs.core.first(s1);var G__14821 = cljs.core.first(s2);var G__14822 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14820,G__14821,G__14822) : f.call(null,G__14820,G__14821,G__14822));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__14830__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__14770_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__14770_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__14830 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__14830__delegate.call(this,f,c1,c2,c3,colls);};
G__14830.cljs$lang$maxFixedArity = 4;
G__14830.cljs$lang$applyTo = (function (arglist__14831){
var f = cljs.core.first(arglist__14831);
arglist__14831 = cljs.core.next(arglist__14831);
var c1 = cljs.core.first(arglist__14831);
arglist__14831 = cljs.core.next(arglist__14831);
var c2 = cljs.core.first(arglist__14831);
arglist__14831 = cljs.core.next(arglist__14831);
var c3 = cljs.core.first(arglist__14831);
var colls = cljs.core.rest(arglist__14831);
return G__14830__delegate(f,c1,c2,c3,colls);
});
G__14830.cljs$core$IFn$_invoke$arity$variadic = G__14830__delegate;
return G__14830;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__14840 = null;
var G__14840__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14840__1 = (function (result){var G__14837 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14837) : rf.call(null,G__14837));
});
var G__14840__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__14838 = result;var G__14839 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14838,G__14839) : rf.call(null,G__14838,G__14839));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__14840 = function(result,input){
switch(arguments.length){
case 0:
return G__14840__0.call(this);
case 1:
return G__14840__1.call(this,result);
case 2:
return G__14840__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14840.cljs$core$IFn$_invoke$arity$0 = G__14840__0;
G__14840.cljs$core$IFn$_invoke$arity$1 = G__14840__1;
G__14840.cljs$core$IFn$_invoke$arity$2 = G__14840__2;
return G__14840;
})()
;})(na))
});
});
var take__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__14847 = null;
var G__14847__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14847__1 = (function (result){var G__14844 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14844) : rf.call(null,G__14844));
});
var G__14847__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__14845 = result;var G__14846 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14845,G__14846) : rf.call(null,G__14845,G__14846));
}
});
G__14847 = function(result,input){
switch(arguments.length){
case 0:
return G__14847__0.call(this);
case 1:
return G__14847__1.call(this,result);
case 2:
return G__14847__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14847.cljs$core$IFn$_invoke$arity$0 = G__14847__0;
G__14847.cljs$core$IFn$_invoke$arity$1 = G__14847__1;
G__14847.cljs$core$IFn$_invoke$arity$2 = G__14847__2;
return G__14847;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__14848 = (n__$1 - (1));
var G__14849 = cljs.core.rest(s);
n__$1 = G__14848;
coll__$1 = G__14849;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));while(true){
if(lead)
{{
var G__14852 = cljs.core.next(s);
var G__14853 = cljs.core.next(lead);
s = G__14852;
lead = G__14853;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){return (function (rf){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__14866 = null;
var G__14866__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14866__1 = (function (result){var G__14860 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14860) : rf.call(null,G__14860));
});
var G__14866__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__3573__auto__ = drop_QMARK_;if(cljs.core.truth_(and__3573__auto__))
{var G__14861 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14861) : pred.call(null,G__14861));
} else
{return and__3573__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__14862 = result;var G__14863 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14862,G__14863) : rf.call(null,G__14862,G__14863));
}
});
G__14866 = function(result,input){
switch(arguments.length){
case 0:
return G__14866__0.call(this);
case 1:
return G__14866__1.call(this,result);
case 2:
return G__14866__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14866.cljs$core$IFn$_invoke$arity$0 = G__14866__0;
G__14866.cljs$core$IFn$_invoke$arity$1 = G__14866__1;
G__14866.cljs$core$IFn$_invoke$arity$2 = G__14866__2;
return G__14866;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__3573__auto__ = s;if(and__3573__auto__)
{var G__14865 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__14865) : pred__$1.call(null,G__14865));
} else
{return and__3573__auto__;
}
})()))
{{
var G__14867 = pred__$1;
var G__14868 = cljs.core.rest(s);
pred__$1 = G__14867;
coll__$1 = G__14868;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__14877 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14877) : f.call(null,G__14877));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__14880__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__14880 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14880__delegate.call(this,c1,c2,colls);};
G__14880.cljs$lang$maxFixedArity = 2;
G__14880.cljs$lang$applyTo = (function (arglist__14881){
var c1 = cljs.core.first(arglist__14881);
arglist__14881 = cljs.core.next(arglist__14881);
var c2 = cljs.core.first(arglist__14881);
var colls = cljs.core.rest(arglist__14881);
return G__14880__delegate(c1,c2,colls);
});
G__14880.cljs$core$IFn$_invoke$arity$variadic = G__14880__delegate;
return G__14880;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var coll__$1 = temp__4124__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__14890__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__14890 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14890__delegate.call(this,f,colls);};
G__14890.cljs$lang$maxFixedArity = 1;
G__14890.cljs$lang$applyTo = (function (arglist__14891){
var f = cljs.core.first(arglist__14891);
var colls = cljs.core.rest(arglist__14891);
return G__14890__delegate(f,colls);
});
G__14890.cljs$core$IFn$_invoke$arity$variadic = G__14890__delegate;
return G__14890;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (rf){return (function() {
var G__14910 = null;
var G__14910__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14910__1 = (function (result){var G__14904 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14904) : rf.call(null,G__14904));
});
var G__14910__2 = (function (result,input){if(cljs.core.truth_((function (){var G__14905 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14905) : pred.call(null,G__14905));
})()))
{var G__14906 = result;var G__14907 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14906,G__14907) : rf.call(null,G__14906,G__14907));
} else
{return result;
}
});
G__14910 = function(result,input){
switch(arguments.length){
case 0:
return G__14910__0.call(this);
case 1:
return G__14910__1.call(this,result);
case 2:
return G__14910__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14910.cljs$core$IFn$_invoke$arity$0 = G__14910__0;
G__14910.cljs$core$IFn$_invoke$arity$1 = G__14910__1;
G__14910.cljs$core$IFn$_invoke$arity$2 = G__14910__2;
return G__14910;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4455__auto___14911 = size;var i_14912 = (0);while(true){
if((i_14912 < n__4455__auto___14911))
{if(cljs.core.truth_((function (){var G__14908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14912);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14908) : pred.call(null,G__14908));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14912));
} else
{}
{
var G__14913 = (i_14912 + (1));
i_14912 = G__14913;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__14909 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14909) : pred.call(null,G__14909));
})()))
{return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else
{return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else
{return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__14920 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14920) : branch_QMARK_.call(null,G__14920));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__14921 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__14921) : children.call(null,G__14921));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14922_SHARP_){return !(cljs.core.sequential_QMARK_(p1__14922_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__14925 = to;if(G__14925)
{var bit__4242__auto__ = (G__14925.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4242__auto__) || (G__14925.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){if((function (){var G__14926 = to;if(G__14926)
{var bit__4242__auto__ = (G__14926.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4242__auto__) || (G__14926.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__14928 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14928) : f.call(null,G__14928));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__14929__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__14929 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__14929__delegate.call(this,f,c1,c2,c3,colls);};
G__14929.cljs$lang$maxFixedArity = 4;
G__14929.cljs$lang$applyTo = (function (arglist__14930){
var f = cljs.core.first(arglist__14930);
arglist__14930 = cljs.core.next(arglist__14930);
var c1 = cljs.core.first(arglist__14930);
arglist__14930 = cljs.core.next(arglist__14930);
var c2 = cljs.core.first(arglist__14930);
arglist__14930 = cljs.core.next(arglist__14930);
var c3 = cljs.core.first(arglist__14930);
var colls = cljs.core.rest(arglist__14930);
return G__14929__delegate(f,c1,c2,c3,colls);
});
G__14929.cljs$core$IFn$_invoke$arity$variadic = G__14929__delegate;
return G__14929;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__14932 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14932) : pred.call(null,G__14932));
})()))
{return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__14947 = m__$1;if(G__14947)
{var bit__4249__auto__ = (G__14947.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4249__auto__) || (G__14947.cljs$core$ILookup$))
{return true;
} else
{if((!G__14947.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14947);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__14948 = sentinel;
var G__14949 = m__$2;
var G__14950 = cljs.core.next(ks__$1);
sentinel = G__14948;
m__$1 = G__14949;
ks__$1 = G__14950;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__14951,v){var vec__14956 = p__14951;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14956,(0),null);var ks = cljs.core.nthnext(vec__14956,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__14957,f){var vec__14995 = p__14957;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(0),null);var ks = cljs.core.nthnext(vec__14995,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14996) : f.call(null,G__14996));
})());
}
});
var update_in__4 = (function (m,p__14958,f,a){var vec__14997 = p__14958;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997,(0),null);var ks = cljs.core.nthnext(vec__14997,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__14999 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14998,G__14999) : f.call(null,G__14998,G__14999));
})());
}
});
var update_in__5 = (function (m,p__14959,f,a,b){var vec__15000 = p__14959;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);var ks = cljs.core.nthnext(vec__15000,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__15002 = a;var G__15003 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15001,G__15002,G__15003) : f.call(null,G__15001,G__15002,G__15003));
})());
}
});
var update_in__6 = (function (m,p__14960,f,a,b,c){var vec__15004 = p__14960;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15004,(0),null);var ks = cljs.core.nthnext(vec__15004,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__15006 = a;var G__15007 = b;var G__15008 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15005,G__15006,G__15007,G__15008) : f.call(null,G__15005,G__15006,G__15007,G__15008));
})());
}
});
var update_in__7 = (function() { 
var G__15010__delegate = function (m,p__14961,f,a,b,c,args){var vec__15009 = p__14961;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(0),null);var ks = cljs.core.nthnext(vec__15009,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__15010 = function (m,p__14961,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__15010__delegate.call(this,m,p__14961,f,a,b,c,args);};
G__15010.cljs$lang$maxFixedArity = 6;
G__15010.cljs$lang$applyTo = (function (arglist__15011){
var m = cljs.core.first(arglist__15011);
arglist__15011 = cljs.core.next(arglist__15011);
var p__14961 = cljs.core.first(arglist__15011);
arglist__15011 = cljs.core.next(arglist__15011);
var f = cljs.core.first(arglist__15011);
arglist__15011 = cljs.core.next(arglist__15011);
var a = cljs.core.first(arglist__15011);
arglist__15011 = cljs.core.next(arglist__15011);
var b = cljs.core.first(arglist__15011);
arglist__15011 = cljs.core.next(arglist__15011);
var c = cljs.core.first(arglist__15011);
var args = cljs.core.rest(arglist__15011);
return G__15010__delegate(m,p__14961,f,a,b,c,args);
});
G__15010.cljs$core$IFn$_invoke$arity$variadic = G__15010__delegate;
return G__15010;
})()
;
update_in = function(m,p__14961,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__14961,f);
case 4:
return update_in__4.call(this,m,p__14961,f,a);
case 5:
return update_in__5.call(this,m,p__14961,f,a,b);
case 6:
return update_in__6.call(this,m,p__14961,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__14961,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4165__auto__,writer__4166__auto__,opts__4167__auto__){return cljs.core._write(writer__4166__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,(0),embed);{
var G__15012 = (ll - (5));
var G__15013 = r;
ll = G__15012;
ret = G__15013;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__15018 = cljs.core.pv_aget(node,(0));
var G__15019 = (level - (5));
node = G__15018;
level = G__15019;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__15020 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__15021 = (level - (5));
node = G__15020;
level = G__15021;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for(pv,i);
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === (0)))
{cljs.core.pv_aset(ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.cljs$lang$type = true;
cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/RangedIterator");
});
cljs.core.RangedIterator.prototype.hasNext = (function (){var self__ = this;
var this$ = this;return (self__.i < self__.end);
});
cljs.core.RangedIterator.prototype.next = (function (){var self__ = this;
var this$ = this;if(((self__.i - self__.base) === (32)))
{self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);
self__.base = (self__.base + (32));
} else
{}
var ret = (self__.arr[(self__.i & (31))]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});
cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){var i = start;return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__15031 = init__$2;var G__15032 = (j + i);var G__15033 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15031,G__15032,G__15033) : f.call(null,G__15031,G__15032,G__15033));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__15044 = (j + (1));
var G__15045 = init__$3;
j = G__15044;
init__$2 = G__15045;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15034 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15034) : cljs.core.deref.call(null,G__15034));
} else
{{
var G__15046 = (i + len);
var G__15047 = init__$2;
i = G__15046;
init__$1 = G__15047;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= n))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj(coll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((other instanceof cljs.core.PersistentVector))
{if((self__.cnt === cljs.core.count(other)))
{var me_iter = cljs.core._iterator(coll__$1);var you_iter = cljs.core._iterator(other);while(true){
if(cljs.core.truth_(me_iter.hasNext()))
{var x = me_iter.next();var y = you_iter.next();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{{
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_sequential(coll__$1,other);
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__15035 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__15035) : cljs.core.tv_editable_root.call(null,G__15035));
})(),(function (){var G__15036 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__15036) : cljs.core.tv_editable_tail.call(null,G__15036));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__15037 = init__$2;var G__15038 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15037,G__15038) : f.call(null,G__15037,G__15038));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__15048 = (j + (1));
var G__15049 = init__$3;
j = G__15048;
init__$2 = G__15049;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15039 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15039) : cljs.core.deref.call(null,G__15039));
} else
{{
var G__15050 = (i + len);
var G__15051 = init__$2;
i = G__15050;
init__$1 = G__15051;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n(coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{var G__15040 = coll__$1;var G__15041 = cljs.core.first_array_for_longvec(coll__$1);var G__15042 = (0);var G__15043 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15040,G__15041,G__15042,G__15043) : cljs.core.chunked_seq.call(null,G__15040,G__15041,G__15042,G__15043));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__4455__auto___15052 = len;var i_15053 = (0);while(true){
if((i_15053 < n__4455__auto___15052))
{(new_tail[i_15053] = (self__.tail[i_15053]));
{
var G__15054 = (i_15053 + (1));
i_15053 = G__15054;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,(0),self__.root);
cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__15055 = null;
var G__15055__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__15055__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__15055 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15055__2.call(this,self__,k);
case 3:
return G__15055__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15055.cljs$core$IFn$_invoke$arity$2 = G__15055__2;
G__15055.cljs$core$IFn$_invoke$arity$3 = G__15055__3;
return G__15055;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args15030){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15030)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__15056 = (i + (1));
var G__15057 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__15056;
out = G__15057;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray(args.arr,true);
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__15058){
var args = cljs.core.seq(arglist__15058);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__15059 = self__.vec;var G__15060 = self__.node;var G__15061 = self__.i;var G__15062 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15059,G__15060,G__15061,G__15062) : cljs.core.chunked_seq.call(null,G__15059,G__15060,G__15061,G__15062));
})();if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__15063 = self__.vec;var G__15064 = (self__.i + self__.off);var G__15065 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__15063,G__15064,G__15065) : cljs.core.subvec.call(null,G__15063,G__15064,G__15065));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__15066 = self__.vec;var G__15067 = (self__.i + self__.off);var G__15068 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__15066,G__15067,G__15068) : cljs.core.subvec.call(null,G__15066,G__15067,G__15068));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__15069 = self__.vec;var G__15070 = self__.node;var G__15071 = self__.i;var G__15072 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15069,G__15070,G__15071,G__15072) : cljs.core.chunked_seq.call(null,G__15069,G__15070,G__15071,G__15072));
})();if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__15073 = self__.vec;var G__15074 = cljs.core.unchecked_array_for(self__.vec,end);var G__15075 = end;var G__15076 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15073,G__15074,G__15075,G__15076) : cljs.core.chunked_seq.call(null,G__15073,G__15074,G__15075,G__15076));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__15077 = self__.vec;var G__15078 = self__.node;var G__15079 = self__.i;var G__15080 = self__.off;var G__15081 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__15077,G__15078,G__15079,G__15080,G__15081) : cljs.core.chunked_seq.call(null,G__15077,G__15078,G__15079,G__15080,G__15081));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__15082 = self__.vec;var G__15083 = cljs.core.unchecked_array_for(self__.vec,end);var G__15084 = end;var G__15085 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15082,G__15083,G__15084,G__15085) : cljs.core.chunked_seq.call(null,G__15082,G__15083,G__15084,G__15085));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);var G__15087 = self__.meta;var G__15088 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__15089 = self__.start;var G__15090 = (function (){var x__3892__auto__ = self__.end;var y__3893__auto__ = (v_pos + (1));return ((x__3892__auto__ > y__3893__auto__) ? x__3892__auto__ : y__3893__auto__);
})();var G__15091 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__15087,G__15088,G__15089,G__15090,G__15091) : cljs.core.build_subvec.call(null,G__15087,G__15088,G__15089,G__15090,G__15091));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{var G__15092 = self__.meta;var G__15093 = self__.v;var G__15094 = self__.start;var G__15095 = (self__.end - (1));var G__15096 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__15092,G__15093,G__15094,G__15095,G__15096) : cljs.core.build_subvec.call(null,G__15092,G__15093,G__15094,G__15095,G__15096));
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n(coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;var G__15098 = meta__$1;var G__15099 = self__.v;var G__15100 = self__.start;var G__15101 = self__.end;var G__15102 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__15098,G__15099,G__15100,G__15101,G__15102) : cljs.core.build_subvec.call(null,G__15098,G__15099,G__15100,G__15101,G__15102));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__15103 = self__.meta;var G__15104 = cljs.core._assoc_n(self__.v,self__.end,o);var G__15105 = self__.start;var G__15106 = (self__.end + (1));var G__15107 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__15103,G__15104,G__15105,G__15106,G__15107) : cljs.core.build_subvec.call(null,G__15103,G__15104,G__15105,G__15106,G__15107));
});
cljs.core.Subvec.prototype.call = (function() {
var G__15108 = null;
var G__15108__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__15108__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__15108 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15108__2.call(this,self__,k);
case 3:
return G__15108__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15108.cljs$core$IFn$_invoke$arity$2 = G__15108__2;
G__15108.cljs$core$IFn$_invoke$arity$3 = G__15108__3;
return G__15108;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args15086){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15086)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__15109 = meta;
var G__15110 = v.v;
var G__15111 = (v.start + start);
var G__15112 = (v.start + end);
var G__15113 = __hash;
meta = G__15109;
v = G__15110;
start = G__15111;
end = G__15112;
__hash = G__15113;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj15120 = {};return obj15120;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__15128 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__15129 = (level - (5));
node = G__15128;
level = G__15129;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__15133 = null;
var G__15133__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15133__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15133 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15133__2.call(this,self__,k);
case 3:
return G__15133__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15133.cljs$core$IFn$_invoke$arity$2 = G__15133__2;
G__15133.cljs$core$IFn$_invoke$arity$3 = G__15133__3;
return G__15133;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args15130){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15130)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset(node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));

}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}

}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__3585__auto__ = self__.front;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3585__auto__ = self__.rear;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.NeverEquiv.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__15134 = (i + incr);
i = G__15134;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__15135 = (i + (1));
var G__15136 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__15135;
out = G__15136;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj15140 = {};return obj15140;
})();var l = ks.length;var i_15141 = (0);while(true){
if((i_15141 < l))
{var k_15142 = (ks[i_15141]);(new_obj[k_15142] = (obj[k_15142]));
{
var G__15143 = (i_15141 + (1));
i_15141 = G__15143;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3573__auto__ = (function (){var G__15147 = k;return goog.isString(G__15147);
})();if(cljs.core.truth_(and__3573__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3573__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__15148 = init__$1;var G__15149 = k;var G__15150 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15148,G__15149,G__15150) : f.call(null,G__15148,G__15149,G__15150));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15151 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15151) : cljs.core.deref.call(null,G__15151));
} else
{{
var G__15157 = cljs.core.rest(keys__$1);
var G__15158 = init__$2;
keys__$1 = G__15157;
init__$1 = G__15158;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3573__auto__ = (function (){var G__15153 = k;return goog.isString(G__15153);
})();if(cljs.core.truth_(and__3573__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3573__auto__;
}
})()))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var G__15154 = k;return goog.isString(G__15154);
})()))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array((1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3573__auto__ = (function (){var G__15156 = k;return goog.isString(G__15156);
})();if(cljs.core.truth_(and__3573__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3573__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__15144_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15144_SHARP_,(self__.strobj[p1__15144_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__15159 = null;
var G__15159__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15159__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15159 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15159__2.call(this,self__,k);
case 3:
return G__15159__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15159.cljs$core$IFn$_invoke$arity$2 = G__15159__2;
G__15159.cljs$core$IFn$_invoke$arity$3 = G__15159__3;
return G__15159;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args15145){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15145)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj15161 = {};return obj15161;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.cljs$lang$type = true;
cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ES6Iterator");
});
cljs.core.ES6Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){return (new cljs.core.ES6Iterator(s));
});
cljs.core.es6_iterator = (function es6_iterator(coll){return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.cljs$lang$type = true;
cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ES6EntriesIterator");
});
cljs.core.ES6EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__15162 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){return (new cljs.core.ES6EntriesIterator(s));
});
cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ES6SetEntriesIterator");
});
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){return (new cljs.core.ES6SetEntriesIterator(s));
});
cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__15163 = (i + (2));
i = G__15163;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{{
var G__15164 = (i + (2));
i = G__15164;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{{
var G__15165 = (i + (2));
i = G__15165;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{{
var G__15166 = (i + (2));
i = G__15166;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{{
var G__15167 = (i + (2));
i = G__15167;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if(cljs.core.truth_((function (){var or__3585__auto__ = (function (){var G__15171 = k;return goog.isString(G__15171);
})();if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return typeof k === 'number';
}
})()))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_15172 = (0);while(true){
if((i_15172 < l))
{(narr[i_15172] = (arr[i_15172]));
{
var G__15173 = (i_15172 + (1));
i_15172 = G__15173;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentArrayMapIterator");
});
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.cnt);
});
cljs.core.PersistentArrayMapIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);self__.i = (self__.i + (2));
return ret;
});
cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15175 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15175) : cljs.core.keys.call(null,G__15175));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15176 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15176) : cljs.core.vals.call(null,G__15176));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15177 = cljs.core.seq(coll);var chunk__15178 = null;var count__15179 = (0);var i__15180 = (0);while(true){
if((i__15180 < count__15179))
{var vec__15181 = chunk__15178.cljs$core$IIndexed$_nth$arity$2(null,i__15180);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);var G__15182_15195 = v;var G__15183_15196 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15182_15195,G__15183_15196) : f.call(null,G__15182_15195,G__15183_15196));
{
var G__15197 = seq__15177;
var G__15198 = chunk__15178;
var G__15199 = count__15179;
var G__15200 = (i__15180 + (1));
seq__15177 = G__15197;
chunk__15178 = G__15198;
count__15179 = G__15199;
i__15180 = G__15200;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15177);if(temp__4126__auto__)
{var seq__15177__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15177__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15177__$1);{
var G__15201 = cljs.core.chunk_rest(seq__15177__$1);
var G__15202 = c__4355__auto__;
var G__15203 = cljs.core.count(c__4355__auto__);
var G__15204 = (0);
seq__15177 = G__15201;
chunk__15178 = G__15202;
count__15179 = G__15203;
i__15180 = G__15204;
continue;
}
} else
{var vec__15184 = cljs.core.first(seq__15177__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15184,(1),null);var G__15185_15205 = v;var G__15186_15206 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15185_15205,G__15186_15206) : f.call(null,G__15185_15205,G__15186_15206));
{
var G__15207 = cljs.core.next(seq__15177__$1);
var G__15208 = null;
var G__15209 = (0);
var G__15210 = (0);
seq__15177 = G__15207;
chunk__15178 = G__15208;
count__15179 = G__15209;
i__15180 = G__15210;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var G__15187 = init__$1;var G__15188 = (self__.arr[i]);var G__15189 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15187,G__15188,G__15189) : f.call(null,G__15187,G__15188,G__15189));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15190 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15190) : cljs.core.deref.call(null,G__15190));
} else
{{
var G__15211 = (i + (2));
var G__15212 = init__$2;
i = G__15211;
init__$1 = G__15212;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((function (){var G__15191 = other;if(G__15191)
{var bit__4242__auto__ = (G__15191.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4242__auto__) || (G__15191.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var alen = self__.arr.length;var other__$1 = other;if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null)))
{var i = (0);while(true){
if((i < alen))
{var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);if(!((v === cljs.core.lookup_sentinel)))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v))
{{
var G__15213 = (i + (2));
i = G__15213;
continue;
}
} else
{return false;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_map(coll__$1,other);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj15193 = {};return obj15193;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__15214 = (s + (2));
var G__15215 = d;
s = G__15214;
d = G__15215;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__15216 = (s + (2));
var G__15217 = (d + (2));
s = G__15216;
d = G__15217;
continue;
}

}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{var arr__$1 = (function (){var G__15194 = cljs.core.aclone(self__.arr);(G__15194[(idx + (1))] = v);
return G__15194;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__15218 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15219 = cljs.core.next(es);
ret = G__15218;
es = G__15219;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__15220 = null;
var G__15220__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15220__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15220 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15220__2.call(this,self__,k);
case 3:
return G__15220__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15220.cljs$core$IFn$_invoke$arity$2 = G__15220__2;
G__15220.cljs$core$IFn$_invoke$arity$3 = G__15220__3;
return G__15220;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args15174){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15174)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__15221 = (i + (2));
var G__15222 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__15221;
ret = G__15222;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__15223_15231 = self__.arr;G__15223_15231.pop();
G__15223_15231.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__15224 = self__.len;var G__15225 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__15224,G__15225) : cljs.core.array__GT_transient_hash_map.call(null,G__15224,G__15225));
})(),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__15226 = o;if(G__15226)
{var bit__4249__auto__ = (G__15226.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4249__auto__) || (G__15226.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__15226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15226);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__15227 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15227) : cljs.core.key.call(null,G__15227));
})(),(function (){var G__15228 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15228) : cljs.core.val.call(null,G__15228));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__15232 = cljs.core.next(es);
var G__15233 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__15229 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15229) : cljs.core.key.call(null,G__15229));
})(),(function (){var G__15230 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15230) : cljs.core.val.call(null,G__15230));
})());
es = G__15232;
tcoll__$2 = G__15233;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__15234 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__15235 = (i + (2));
out = G__15234;
i = G__15235;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4165__auto__,writer__4166__auto__,opts__4167__auto__){return cljs.core._write(writer__4166__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__15238 = cljs.core.aclone(arr);(G__15238[i] = a);
return G__15238;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__15239 = cljs.core.aclone(arr);(G__15239[i] = a);
(G__15239[j] = b);
return G__15239;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{var G__15244 = init__$1;var G__15245 = k;var G__15246 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15244,G__15245,G__15246) : f.call(null,G__15244,G__15245,G__15246));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15247 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15247) : cljs.core.deref.call(null,G__15247));
} else
{{
var G__15248 = (i + (2));
var G__15249 = init__$2;
i = G__15248;
init__$1 = G__15249;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return inode;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__15250 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__15250) : cljs.core.create_inode_seq.call(null,G__15250));
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_15264 = (0);var j_15265 = (0);while(true){
if((i_15264 < (32)))
{if((((self__.bitmap >>> i_15264) & (1)) === (0)))
{{
var G__15266 = (i_15264 + (1));
var G__15267 = j_15265;
i_15264 = G__15266;
j_15265 = G__15267;
continue;
}
} else
{(nodes[i_15264] = ((!(((self__.arr[j_15265]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_15265])),(self__.arr[j_15265]),(self__.arr[(j_15265 + (1))]),added_leaf_QMARK_):(self__.arr[(j_15265 + (1))])));
{
var G__15268 = (i_15264 + (1));
var G__15269 = (j_15265 + (2));
i_15264 = G__15268;
j_15265 = G__15269;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;

}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__15251 = edit__$1;var G__15252 = (shift + (5));var G__15253 = key_or_nil;var G__15254 = val_or_node;var G__15255 = hash;var G__15256 = key;var G__15257 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__15251,G__15252,G__15253,G__15254,G__15255,G__15256,G__15257) : cljs.core.create_node.call(null,G__15251,G__15252,G__15253,G__15254,G__15255,G__15256,G__15257));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_15270 = (0);var j_15271 = (0);while(true){
if((i_15270 < (32)))
{if((((self__.bitmap >>> i_15270) & (1)) === (0)))
{{
var G__15272 = (i_15270 + (1));
var G__15273 = j_15271;
i_15270 = G__15272;
j_15271 = G__15273;
continue;
}
} else
{(nodes[i_15270] = ((!(((self__.arr[j_15271]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_15271])),(self__.arr[j_15271]),(self__.arr[(j_15271 + (1))]),added_leaf_QMARK_):(self__.arr[(j_15271 + (1))])));
{
var G__15274 = (i_15270 + (1));
var G__15275 = (j_15271 + (2));
i_15270 = G__15274;
j_15271 = G__15275;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__15258 = (shift + (5));var G__15259 = key_or_nil;var G__15260 = val_or_node;var G__15261 = hash;var G__15262 = key;var G__15263 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__15258,G__15259,G__15260,G__15261,G__15262,G__15263) : cljs.core.create_node.call(null,G__15258,G__15259,G__15260,G__15261,G__15262,G__15263));
})())));

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return inode;

}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = arr.length;var new_arr = (new Array(((2) * (array_node.cnt - (1)))));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__15276 = (i + (1));
var G__15277 = (j + (2));
var G__15278 = (bitmap | ((1) << i));
i = G__15276;
j = G__15277;
bitmap = G__15278;
continue;
}
} else
{{
var G__15279 = (i + (1));
var G__15280 = j;
var G__15281 = bitmap;
i = G__15279;
j = G__15280;
bitmap = G__15281;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__15282 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__15282) : cljs.core.create_array_node_seq.call(null,G__15282));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__15283 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15283) : cljs.core.deref.call(null,G__15283));
} else
{{
var G__15284 = (i + (1));
var G__15285 = init__$2;
i = G__15284;
init__$1 = G__15285;
continue;
}
}
} else
{{
var G__15286 = (i + (1));
var G__15287 = init__$1;
i = G__15286;
init__$1 = G__15287;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__15288 = (i + (2));
i = G__15288;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__15289 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__15289) : cljs.core.create_inode_seq.call(null,G__15289));
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{var G__15290 = self__.nodes;var G__15291 = (self__.i + (2));var G__15292 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__15290,G__15291,G__15292) : cljs.core.create_inode_seq.call(null,G__15290,G__15291,G__15292));
} else
{var G__15293 = self__.nodes;var G__15294 = self__.i;var G__15295 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__15293,G__15294,G__15295) : cljs.core.create_inode_seq.call(null,G__15293,G__15294,G__15295));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4124__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;var temp__4124__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var node_seq = temp__4124__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__15299 = (j + (2));
j = G__15299;
continue;
}
}
} else
{{
var G__15300 = (j + (2));
j = G__15300;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__15301 = null;var G__15302 = self__.nodes;var G__15303 = self__.i;var G__15304 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__15301,G__15302,G__15303,G__15304) : cljs.core.create_array_node_seq.call(null,G__15301,G__15302,G__15303,G__15304));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4124__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4124__auto__))
{var nj = temp__4124__auto__;var temp__4124__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var ns = temp__4124__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__15309 = (j + (1));
j = G__15309;
continue;
}
}
} else
{{
var G__15310 = (j + (1));
j = G__15310;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15312 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15312) : cljs.core.keys.call(null,G__15312));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15313 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15313) : cljs.core.vals.call(null,G__15313));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15314 = cljs.core.seq(coll);var chunk__15315 = null;var count__15316 = (0);var i__15317 = (0);while(true){
if((i__15317 < count__15316))
{var vec__15318 = chunk__15315.cljs$core$IIndexed$_nth$arity$2(null,i__15317);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(1),null);var G__15319_15330 = v;var G__15320_15331 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15319_15330,G__15320_15331) : f.call(null,G__15319_15330,G__15320_15331));
{
var G__15332 = seq__15314;
var G__15333 = chunk__15315;
var G__15334 = count__15316;
var G__15335 = (i__15317 + (1));
seq__15314 = G__15332;
chunk__15315 = G__15333;
count__15316 = G__15334;
i__15317 = G__15335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15314);if(temp__4126__auto__)
{var seq__15314__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15314__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15314__$1);{
var G__15336 = cljs.core.chunk_rest(seq__15314__$1);
var G__15337 = c__4355__auto__;
var G__15338 = cljs.core.count(c__4355__auto__);
var G__15339 = (0);
seq__15314 = G__15336;
chunk__15315 = G__15337;
count__15316 = G__15338;
i__15317 = G__15339;
continue;
}
} else
{var vec__15321 = cljs.core.first(seq__15314__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15321,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15321,(1),null);var G__15322_15340 = v;var G__15323_15341 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15322_15340,G__15323_15341) : f.call(null,G__15322_15340,G__15323_15341));
{
var G__15342 = cljs.core.next(seq__15314__$1);
var G__15343 = null;
var G__15344 = (0);
var G__15345 = (0);
seq__15314 = G__15342;
chunk__15315 = G__15343;
count__15316 = G__15344;
i__15317 = G__15345;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__15324 = init;var G__15325 = null;var G__15326 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15324,G__15325,G__15326) : f.call(null,G__15324,G__15325,G__15326));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__15327 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15327) : cljs.core.deref.call(null,G__15327));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{return init__$1;

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj15329 = {};return obj15329;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__15346 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15347 = cljs.core.next(es);
ret = G__15346;
es = G__15347;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__15348 = null;
var G__15348__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15348__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15348 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15348__2.call(this,self__,k);
case 3:
return G__15348__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15348.cljs$core$IFn$_invoke$arity$2 = G__15348__2;
G__15348.cljs$core$IFn$_invoke$arity$3 = G__15348__3;
return G__15348;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args15311){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15311)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__15349 = (i + (1));
var G__15350 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__15349;
out = G__15350;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__15351 = o;if(G__15351)
{var bit__4249__auto__ = (G__15351.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4249__auto__) || (G__15351.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__15351.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__15351);
}
})())
{return tcoll.assoc_BANG_((function (){var G__15352 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15352) : cljs.core.key.call(null,G__15352));
})(),(function (){var G__15353 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15353) : cljs.core.val.call(null,G__15353));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__15356 = cljs.core.next(es);
var G__15357 = tcoll__$1.assoc_BANG_((function (){var G__15354 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15354) : cljs.core.key.call(null,G__15354));
})(),(function (){var G__15355 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__15355) : cljs.core.val.call(null,G__15355));
})());
es = G__15356;
tcoll__$1 = G__15357;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__15358 = ((ascending_QMARK_)?t.left:t.right);
var G__15359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__15358;
stack__$1 = G__15359;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__15372 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15372) : cljs.core.deref.call(null,G__15372));
} else
{var init__$2 = (function (){var G__15373 = init__$1;var G__15374 = node.key;var G__15375 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15373,G__15374,G__15375) : f.call(null,G__15373,G__15374,G__15375));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__15376 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15376) : cljs.core.deref.call(null,G__15376));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__15377 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15377) : cljs.core.deref.call(null,G__15377));
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__15379 = null;
var G__15379__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15379__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15379 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15379__2.call(this,self__,k);
case 3:
return G__15379__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15379.cljs$core$IFn$_invoke$arity$2 = G__15379__2;
G__15379.cljs$core$IFn$_invoke$arity$3 = G__15379__3;
return G__15379;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args15378){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15378)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__15381 = null;
var G__15381__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15381__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15381 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15381__2.call(this,self__,k);
case 3:
return G__15381__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15381.cljs$core$IFn$_invoke$arity$2 = G__15381__2;
G__15381.cljs$core$IFn$_invoke$arity$3 = G__15381__3;
return G__15381;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args15380){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15380)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (function (){var G__15394 = k;var G__15395 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15394,G__15395) : comp.call(null,G__15394,G__15395));
})();if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = (function (){var G__15414 = k;var G__15415 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15414,G__15415) : comp.call(null,G__15414,G__15415));
})();if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}

}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__15426 = k;var G__15427 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15426,G__15427) : comp.call(null,G__15426,G__15427));
})();if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15429 = cljs.core.seq(coll);var chunk__15430 = null;var count__15431 = (0);var i__15432 = (0);while(true){
if((i__15432 < count__15431))
{var vec__15433 = chunk__15430.cljs$core$IIndexed$_nth$arity$2(null,i__15432);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);var G__15434_15446 = v;var G__15435_15447 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15434_15446,G__15435_15447) : f.call(null,G__15434_15446,G__15435_15447));
{
var G__15448 = seq__15429;
var G__15449 = chunk__15430;
var G__15450 = count__15431;
var G__15451 = (i__15432 + (1));
seq__15429 = G__15448;
chunk__15430 = G__15449;
count__15431 = G__15450;
i__15432 = G__15451;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15429);if(temp__4126__auto__)
{var seq__15429__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15429__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15429__$1);{
var G__15452 = cljs.core.chunk_rest(seq__15429__$1);
var G__15453 = c__4355__auto__;
var G__15454 = cljs.core.count(c__4355__auto__);
var G__15455 = (0);
seq__15429 = G__15452;
chunk__15430 = G__15453;
count__15431 = G__15454;
i__15432 = G__15455;
continue;
}
} else
{var vec__15436 = cljs.core.first(seq__15429__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15436,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15436,(1),null);var G__15437_15456 = v;var G__15438_15457 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15437_15456,G__15438_15457) : f.call(null,G__15437_15456,G__15438_15457));
{
var G__15458 = cljs.core.next(seq__15429__$1);
var G__15459 = null;
var G__15460 = (0);
var G__15461 = (0);
seq__15429 = G__15458;
chunk__15430 = G__15459;
count__15431 = G__15460;
i__15432 = G__15461;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15439 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__15439) : cljs.core.keys.call(null,G__15439));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__15440 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__15440) : cljs.core.vals.call(null,G__15440));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__15441 = k;var G__15442 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__15441,G__15442) : self__.comp.call(null,G__15441,G__15442));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__15462 = t.left;
t = G__15462;
continue;
}
} else
{{
var G__15463 = t.right;
t = G__15463;
continue;
}

}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__15464 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15465 = cljs.core.next(es);
ret = G__15464;
es = G__15465;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__15466 = null;
var G__15466__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15466__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15466 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15466__2.call(this,self__,k);
case 3:
return G__15466__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15466.cljs$core$IFn$_invoke$arity$2 = G__15466__2;
G__15466.cljs$core$IFn$_invoke$arity$3 = G__15466__3;
return G__15466;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args15428){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15428)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__15443 = k;var G__15444 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__15443,G__15444) : self__.comp.call(null,G__15443,G__15444));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__15467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15468 = t.left;
stack = G__15467;
t = G__15468;
continue;
}
} else
{{
var G__15469 = stack;
var G__15470 = t.right;
stack = G__15469;
t = G__15470;
continue;
}
}
} else
{if((c > (0)))
{{
var G__15471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15472 = t.right;
stack = G__15471;
t = G__15472;
continue;
}
} else
{{
var G__15473 = stack;
var G__15474 = t.left;
stack = G__15473;
t = G__15474;
continue;
}
}

}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;var G__15445 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__15445) : cljs.core.key.call(null,G__15445));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__15475 = cljs.core.nnext(in$);
var G__15476 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15475;
out = G__15476;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__15477){
var keyvals = cljs.core.seq(arglist__15477);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),(2)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__15478){
var keyvals = cljs.core.seq(arglist__15478);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj15482 = {};return obj15482;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__15483 = cljs.core.nnext(kvs);
kvs = G__15483;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__15484){
var keyvals = cljs.core.seq(arglist__15484);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__15485 = cljs.core.nnext(in$);
var G__15486 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15485;
out = G__15486;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__15487){
var keyvals = cljs.core.seq(arglist__15487);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__15488 = cljs.core.nnext(in$);
var G__15489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15488;
out = G__15489;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__15490){
var comparator = cljs.core.first(arglist__15490);
var keyvals = cljs.core.rest(arglist__15490);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15491 = self__.mseq;if(G__15491)
{var bit__4249__auto__ = (G__15491.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4249__auto__) || (G__15491.cljs$core$INext$))
{return true;
} else
{if((!G__15491.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15491);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15491);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15492 = self__.mseq;if(G__15492)
{var bit__4249__auto__ = (G__15492.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4249__auto__) || (G__15492.cljs$core$INext$))
{return true;
} else
{if((!G__15492.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15492);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15493 = self__.mseq;if(G__15493)
{var bit__4249__auto__ = (G__15493.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4249__auto__) || (G__15493.cljs$core$INext$))
{return true;
} else
{if((!G__15493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15493);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15494 = self__.mseq;if(G__15494)
{var bit__4249__auto__ = (G__15494.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4249__auto__) || (G__15494.cljs$core$INext$))
{return true;
} else
{if((!G__15494.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15494);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15494);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15495_SHARP_,p2__15496_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3585__auto__ = p1__15495_SHARP_;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__15496_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__15497){
var maps = cljs.core.seq(arglist__15497);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__15501 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15500,G__15501) : f.call(null,G__15500,G__15501));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3585__auto__ = m1;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__15502){
var f = cljs.core.first(arglist__15502);
var maps = cljs.core.rest(arglist__15502);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$71);{
var G__15503 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$71))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__15504 = cljs.core.next(keys);
ret = G__15503;
keys = G__15504;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15507 = cljs.core.seq(coll);var chunk__15508 = null;var count__15509 = (0);var i__15510 = (0);while(true){
if((i__15510 < count__15509))
{var vec__15511 = chunk__15508.cljs$core$IIndexed$_nth$arity$2(null,i__15510);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15511,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15511,(1),null);var G__15512_15517 = v;var G__15513_15518 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15512_15517,G__15513_15518) : f.call(null,G__15512_15517,G__15513_15518));
{
var G__15519 = seq__15507;
var G__15520 = chunk__15508;
var G__15521 = count__15509;
var G__15522 = (i__15510 + (1));
seq__15507 = G__15519;
chunk__15508 = G__15520;
count__15509 = G__15521;
i__15510 = G__15522;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15507);if(temp__4126__auto__)
{var seq__15507__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15507__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15507__$1);{
var G__15523 = cljs.core.chunk_rest(seq__15507__$1);
var G__15524 = c__4355__auto__;
var G__15525 = cljs.core.count(c__4355__auto__);
var G__15526 = (0);
seq__15507 = G__15523;
chunk__15508 = G__15524;
count__15509 = G__15525;
i__15510 = G__15526;
continue;
}
} else
{var vec__15514 = cljs.core.first(seq__15507__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514,(1),null);var G__15515_15527 = v;var G__15516_15528 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15515_15527,G__15516_15528) : f.call(null,G__15515_15527,G__15516_15528));
{
var G__15529 = cljs.core.next(seq__15507__$1);
var G__15530 = null;
var G__15531 = (0);
var G__15532 = (0);
seq__15507 = G__15529;
chunk__15508 = G__15530;
count__15509 = G__15531;
i__15510 = G__15532;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15505_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__15505_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__15533 = null;
var G__15533__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15533__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15533 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15533__2.call(this,self__,k);
case 3:
return G__15533__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15533.cljs$core$IFn$_invoke$arity$2 = G__15533__2;
G__15533.cljs$core$IFn$_invoke$arity$3 = G__15533__3;
return G__15533;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args15506){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15506)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = (0);var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__15534 = (i + (1));
var G__15535 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__15534;
out = G__15535;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__15536 = (i + (1));
var G__15537 = cljs.core._conj_BANG_(out,(items[i]));
i = G__15536;
out = G__15537;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__15539 = null;
var G__15539__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__15539__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__15539 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15539__2.call(this,self__,k);
case 3:
return G__15539__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15539.cljs$core$IFn$_invoke$arity$2 = G__15539__2;
G__15539.cljs$core$IFn$_invoke$arity$3 = G__15539__3;
return G__15539;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args15538){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15538)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15542 = cljs.core.seq(coll);var chunk__15543 = null;var count__15544 = (0);var i__15545 = (0);while(true){
if((i__15545 < count__15544))
{var vec__15546 = chunk__15543.cljs$core$IIndexed$_nth$arity$2(null,i__15545);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(1),null);var G__15547_15552 = v;var G__15548_15553 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15547_15552,G__15548_15553) : f.call(null,G__15547_15552,G__15548_15553));
{
var G__15554 = seq__15542;
var G__15555 = chunk__15543;
var G__15556 = count__15544;
var G__15557 = (i__15545 + (1));
seq__15542 = G__15554;
chunk__15543 = G__15555;
count__15544 = G__15556;
i__15545 = G__15557;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15542);if(temp__4126__auto__)
{var seq__15542__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15542__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15542__$1);{
var G__15558 = cljs.core.chunk_rest(seq__15542__$1);
var G__15559 = c__4355__auto__;
var G__15560 = cljs.core.count(c__4355__auto__);
var G__15561 = (0);
seq__15542 = G__15558;
chunk__15543 = G__15559;
count__15544 = G__15560;
i__15545 = G__15561;
continue;
}
} else
{var vec__15549 = cljs.core.first(seq__15542__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549,(1),null);var G__15550_15562 = v;var G__15551_15563 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15550_15562,G__15551_15563) : f.call(null,G__15550_15562,G__15551_15563));
{
var G__15564 = cljs.core.next(seq__15542__$1);
var G__15565 = null;
var G__15566 = (0);
var G__15567 = (0);
seq__15542 = G__15564;
chunk__15543 = G__15565;
count__15544 = G__15566;
i__15545 = G__15567;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15540_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__15540_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__15568 = null;
var G__15568__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15568__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15568 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15568__2.call(this,self__,k);
case 3:
return G__15568__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15568.cljs$core$IFn$_invoke$arity$2 = G__15568__2;
G__15568.cljs$core$IFn$_invoke$arity$3 = G__15568__3;
return G__15568;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args15541){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15541)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__4449__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__4449__auto__.length))
{{
var G__15569 = (i + (1));
var G__15570 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__15569;
res = G__15570;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq(in$);
} else
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__15571 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__15572 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__15571;
out = G__15572;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__15573__delegate = function (keys){return cljs.core.set(keys);
};
var G__15573 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15573__delegate.call(this,keys);};
G__15573.cljs$lang$maxFixedArity = 0;
G__15573.cljs$lang$applyTo = (function (arglist__15574){
var keys = cljs.core.seq(arglist__15574);
return G__15573__delegate(keys);
});
G__15573.cljs$core$IFn$_invoke$arity$variadic = G__15573__delegate;
return G__15573;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__15575){
var keys = cljs.core.seq(arglist__15575);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__15576){
var comparator = cljs.core.first(arglist__15576);
var keys = cljs.core.rest(arglist__15576);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15577_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__15577_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__15577_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15578_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__15578_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__15578_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__15589,seen__$1){while(true){
var vec__15590 = p__15589;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(0),null);var xs__$1 = vec__15590;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__15591 = cljs.core.rest(s);
var G__15592 = seen__$1;
p__15589 = G__15591;
seen__$1 = G__15592;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__15593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__15594 = cljs.core.next(s__$1);
ret = G__15593;
s__$1 = G__15594;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__15596 = x;if(G__15596)
{var bit__4242__auto__ = (G__15596.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4242__auto__) || (G__15596.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__15597 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__15598 = cljs.core.next(ks);
var G__15599 = cljs.core.next(vs);
map = G__15597;
ks = G__15598;
vs = G__15599;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if(((function (){var G__15610 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15610) : k.call(null,G__15610));
})() > (function (){var G__15611 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15611) : k.call(null,G__15611));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__15612__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15600_SHARP_,p2__15601_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__15600_SHARP_,p2__15601_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15612 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15612__delegate.call(this,k,x,y,more);};
G__15612.cljs$lang$maxFixedArity = 3;
G__15612.cljs$lang$applyTo = (function (arglist__15613){
var k = cljs.core.first(arglist__15613);
arglist__15613 = cljs.core.next(arglist__15613);
var x = cljs.core.first(arglist__15613);
arglist__15613 = cljs.core.next(arglist__15613);
var y = cljs.core.first(arglist__15613);
var more = cljs.core.rest(arglist__15613);
return G__15612__delegate(k,x,y,more);
});
G__15612.cljs$core$IFn$_invoke$arity$variadic = G__15612__delegate;
return G__15612;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if(((function (){var G__15624 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15624) : k.call(null,G__15624));
})() < (function (){var G__15625 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15625) : k.call(null,G__15625));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__15626__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15614_SHARP_,p2__15615_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__15614_SHARP_,p2__15615_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15626 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15626__delegate.call(this,k,x,y,more);};
G__15626.cljs$lang$maxFixedArity = 3;
G__15626.cljs$lang$applyTo = (function (arglist__15627){
var k = cljs.core.first(arglist__15627);
arglist__15627 = cljs.core.next(arglist__15627);
var x = cljs.core.first(arglist__15627);
arglist__15627 = cljs.core.next(arglist__15627);
var y = cljs.core.first(arglist__15627);
var more = cljs.core.rest(arglist__15627);
return G__15626__delegate(k,x,y,more);
});
G__15626.cljs$core$IFn$_invoke$arity$variadic = G__15626__delegate;
return G__15626;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.cljs$lang$type = true;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/ArrayList");
});
cljs.core.ArrayList.prototype.add = (function (x){var self__ = this;
var _ = this;return self__.arr.push(x);
});
cljs.core.ArrayList.prototype.size = (function (){var self__ = this;
var _ = this;return self__.arr.length;
});
cljs.core.ArrayList.prototype.clear = (function (){var self__ = this;
var _ = this;return self__.arr = [];
});
cljs.core.ArrayList.prototype.isEmpty = (function (){var self__ = this;
var _ = this;return (self__.arr.length === (0));
});
cljs.core.ArrayList.prototype.toArray = (function (){var self__ = this;
var _ = this;return self__.arr;
});
cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){return (new cljs.core.ArrayList(arr));
});
cljs.core.array_list = (function array_list(){return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){return (function (rf){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__15644 = null;
var G__15644__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15644__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__15639 = result;var G__15640 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15639,G__15640) : rf.call(null,G__15639,G__15640));
})());var G__15641 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15641) : rf.call(null,G__15641));
});
var G__15644__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__15642 = result;var G__15643 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15642,G__15643) : rf.call(null,G__15642,G__15643));
} else
{return result;
}
});
G__15644 = function(result,input){
switch(arguments.length){
case 0:
return G__15644__0.call(this);
case 1:
return G__15644__1.call(this,result);
case 2:
return G__15644__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15644.cljs$core$IFn$_invoke$arity$0 = G__15644__0;
G__15644.cljs$core$IFn$_invoke$arity$1 = G__15644__1;
G__15644.cljs$core$IFn$_invoke$arity$2 = G__15644__2;
return G__15644;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (rf){return (function() {
var G__15657 = null;
var G__15657__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15657__1 = (function (result){var G__15652 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15652) : rf.call(null,G__15652));
});
var G__15657__2 = (function (result,input){if(cljs.core.truth_((function (){var G__15653 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15653) : pred.call(null,G__15653));
})()))
{var G__15654 = result;var G__15655 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15654,G__15655) : rf.call(null,G__15654,G__15655));
} else
{return cljs.core.reduced(result);
}
});
G__15657 = function(result,input){
switch(arguments.length){
case 0:
return G__15657__0.call(this);
case 1:
return G__15657__1.call(this,result);
case 2:
return G__15657__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15657.cljs$core$IFn$_invoke$arity$0 = G__15657__0;
G__15657.cljs$core$IFn$_invoke$arity$1 = G__15657__1;
G__15657.cljs$core$IFn$_invoke$arity$2 = G__15657__2;
return G__15657;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__15656 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15656) : pred.call(null,G__15656));
})()))
{return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__15662 = (function (){var G__15664 = cljs.core._entry_key(sc,e);var G__15665 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15664,G__15665) : comp.call(null,G__15664,G__15665));
})();var G__15663 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__15662,G__15663) : test.call(null,G__15662,G__15663));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15669 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669,(0),null);var s = vec__15669;if(cljs.core.truth_((function (){var G__15670 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15670) : include.call(null,G__15670));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15671 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671,(0),null);var s = vec__15671;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15675 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15675,(0),null);var s = vec__15675;if(cljs.core.truth_((function (){var G__15676 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15676) : include.call(null,G__15676));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15677 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(0),null);var s = vec__15677;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.cljs$lang$type = true;
cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/RangeIterator");
});
cljs.core.RangeIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__.step > (0)))
{return (self__.i < self__.end);
} else
{return (self__.i > self__.end);
}
});
cljs.core.RangeIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.i;self__.i = (self__.i + self__.step);
return ret;
});
cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){return (new cljs.core.RangeIterator(i,end,step));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IIterable$ = true;
cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return (0);
} else
{var G__15678 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__15678) : Math.ceil.call(null,G__15678));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__3996__auto__ = self__.__hash;if(!((h__3996__auto__ == null)))
{return h__3996__auto__;
} else
{var h__3996__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__3996__auto____$1;
return h__3996__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){var self__ = this;
var rng__$1 = this;var i = self__.start;var ret = init;while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end)))
{var ret__$1 = (function (){var G__15679 = ret;var G__15680 = i;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15679,G__15680) : f.call(null,G__15679,G__15680));
})();if(cljs.core.reduced_QMARK_(ret__$1))
{var G__15681 = ret__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15681) : cljs.core.deref.call(null,G__15681));
} else
{{
var G__15682 = (i + self__.step);
var G__15683 = ret__$1;
i = G__15682;
ret = G__15683;
continue;
}
}
} else
{return ret;
}
break;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){return (function (rf){var ia = (function (){var G__15699 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15699) : cljs.core.atom.call(null,G__15699));
})();return ((function (ia){
return (function() {
var G__15703 = null;
var G__15703__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15703__1 = (function (result){var G__15700 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15700) : rf.call(null,G__15700));
});
var G__15703__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__15701 = result;var G__15702 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15701,G__15702) : rf.call(null,G__15701,G__15702));
} else
{return result;
}
});
G__15703 = function(result,input){
switch(arguments.length){
case 0:
return G__15703__0.call(this);
case 1:
return G__15703__1.call(this,result);
case 2:
return G__15703__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15703.cljs$core$IFn$_invoke$arity$0 = G__15703__0;
G__15703.cljs$core$IFn$_invoke$arity$1 = G__15703__1;
G__15703.cljs$core$IFn$_invoke$arity$2 = G__15703__2;
return G__15703;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else
{return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){return (function (rf){var a = cljs.core.array_list();var pa = (function (){var G__15719 = cljs.core.constant$keyword$72;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15719) : cljs.core.atom.call(null,G__15719));
})();return ((function (a,pa){
return (function() {
var G__15731 = null;
var G__15731__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15731__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__15720 = result;var G__15721 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15720,G__15721) : rf.call(null,G__15720,G__15721));
})());var G__15722 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15722) : rf.call(null,G__15722));
});
var G__15731__2 = (function (result,input){var pval = (function (){var G__15723 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15723) : cljs.core.deref.call(null,G__15723));
})();var val = (function (){var G__15724 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15724) : f.call(null,G__15724));
})();var G__15725_15732 = pa;var G__15726_15733 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15725_15732,G__15726_15733) : cljs.core.reset_BANG_.call(null,G__15725_15732,G__15726_15733));
if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$72)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__15727 = result;var G__15728 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15727,G__15728) : rf.call(null,G__15727,G__15728));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__15731 = function(result,input){
switch(arguments.length){
case 0:
return G__15731__0.call(this);
case 1:
return G__15731__1.call(this,result);
case 2:
return G__15731__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15731.cljs$core$IFn$_invoke$arity$0 = G__15731__0;
G__15731.cljs$core$IFn$_invoke$arity$1 = G__15731__1;
G__15731.cljs$core$IFn$_invoke$arity$2 = G__15731__2;
return G__15731;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__15729 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15729) : f.call(null,G__15729));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__15704_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__15730 = p1__15704_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15730) : f.call(null,G__15730));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__15742 = init;var G__15743 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15742,G__15743) : f.call(null,G__15742,G__15743));
})(),cljs.core.rest(s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__15838 = null;
var G__15838__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__15838__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15796 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15796) : f.call(null,G__15796));
})()],null));
});
var G__15838__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15797 = x;var G__15798 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15797,G__15798) : f.call(null,G__15797,G__15798));
})()],null));
});
var G__15838__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15799 = x;var G__15800 = y;var G__15801 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15799,G__15800,G__15801) : f.call(null,G__15799,G__15800,G__15801));
})()],null));
});
var G__15838__4 = (function() { 
var G__15839__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__15839 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15839__delegate.call(this,x,y,z,args);};
G__15839.cljs$lang$maxFixedArity = 3;
G__15839.cljs$lang$applyTo = (function (arglist__15840){
var x = cljs.core.first(arglist__15840);
arglist__15840 = cljs.core.next(arglist__15840);
var y = cljs.core.first(arglist__15840);
arglist__15840 = cljs.core.next(arglist__15840);
var z = cljs.core.first(arglist__15840);
var args = cljs.core.rest(arglist__15840);
return G__15839__delegate(x,y,z,args);
});
G__15839.cljs$core$IFn$_invoke$arity$variadic = G__15839__delegate;
return G__15839;
})()
;
G__15838 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15838__0.call(this);
case 1:
return G__15838__1.call(this,x);
case 2:
return G__15838__2.call(this,x,y);
case 3:
return G__15838__3.call(this,x,y,z);
default:
return G__15838__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15838.cljs$lang$maxFixedArity = 3;
G__15838.cljs$lang$applyTo = G__15838__4.cljs$lang$applyTo;
G__15838.cljs$core$IFn$_invoke$arity$0 = G__15838__0;
G__15838.cljs$core$IFn$_invoke$arity$1 = G__15838__1;
G__15838.cljs$core$IFn$_invoke$arity$2 = G__15838__2;
G__15838.cljs$core$IFn$_invoke$arity$3 = G__15838__3;
G__15838.cljs$core$IFn$_invoke$arity$variadic = G__15838__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15838;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__15841 = null;
var G__15841__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__15841__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15802 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15802) : f.call(null,G__15802));
})(),(function (){var G__15803 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15803) : g.call(null,G__15803));
})()],null));
});
var G__15841__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15804 = x;var G__15805 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15804,G__15805) : f.call(null,G__15804,G__15805));
})(),(function (){var G__15806 = x;var G__15807 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15806,G__15807) : g.call(null,G__15806,G__15807));
})()],null));
});
var G__15841__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15808 = x;var G__15809 = y;var G__15810 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15808,G__15809,G__15810) : f.call(null,G__15808,G__15809,G__15810));
})(),(function (){var G__15811 = x;var G__15812 = y;var G__15813 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15811,G__15812,G__15813) : g.call(null,G__15811,G__15812,G__15813));
})()],null));
});
var G__15841__4 = (function() { 
var G__15842__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__15842 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15842__delegate.call(this,x,y,z,args);};
G__15842.cljs$lang$maxFixedArity = 3;
G__15842.cljs$lang$applyTo = (function (arglist__15843){
var x = cljs.core.first(arglist__15843);
arglist__15843 = cljs.core.next(arglist__15843);
var y = cljs.core.first(arglist__15843);
arglist__15843 = cljs.core.next(arglist__15843);
var z = cljs.core.first(arglist__15843);
var args = cljs.core.rest(arglist__15843);
return G__15842__delegate(x,y,z,args);
});
G__15842.cljs$core$IFn$_invoke$arity$variadic = G__15842__delegate;
return G__15842;
})()
;
G__15841 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15841__0.call(this);
case 1:
return G__15841__1.call(this,x);
case 2:
return G__15841__2.call(this,x,y);
case 3:
return G__15841__3.call(this,x,y,z);
default:
return G__15841__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15841.cljs$lang$maxFixedArity = 3;
G__15841.cljs$lang$applyTo = G__15841__4.cljs$lang$applyTo;
G__15841.cljs$core$IFn$_invoke$arity$0 = G__15841__0;
G__15841.cljs$core$IFn$_invoke$arity$1 = G__15841__1;
G__15841.cljs$core$IFn$_invoke$arity$2 = G__15841__2;
G__15841.cljs$core$IFn$_invoke$arity$3 = G__15841__3;
G__15841.cljs$core$IFn$_invoke$arity$variadic = G__15841__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15841;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__15844 = null;
var G__15844__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__15844__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15814 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15814) : f.call(null,G__15814));
})(),(function (){var G__15815 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15815) : g.call(null,G__15815));
})(),(function (){var G__15816 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__15816) : h.call(null,G__15816));
})()],null));
});
var G__15844__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15817 = x;var G__15818 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15817,G__15818) : f.call(null,G__15817,G__15818));
})(),(function (){var G__15819 = x;var G__15820 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15819,G__15820) : g.call(null,G__15819,G__15820));
})(),(function (){var G__15821 = x;var G__15822 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__15821,G__15822) : h.call(null,G__15821,G__15822));
})()],null));
});
var G__15844__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15823 = x;var G__15824 = y;var G__15825 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15823,G__15824,G__15825) : f.call(null,G__15823,G__15824,G__15825));
})(),(function (){var G__15826 = x;var G__15827 = y;var G__15828 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15826,G__15827,G__15828) : g.call(null,G__15826,G__15827,G__15828));
})(),(function (){var G__15829 = x;var G__15830 = y;var G__15831 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__15829,G__15830,G__15831) : h.call(null,G__15829,G__15830,G__15831));
})()],null));
});
var G__15844__4 = (function() { 
var G__15845__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__15845 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15845__delegate.call(this,x,y,z,args);};
G__15845.cljs$lang$maxFixedArity = 3;
G__15845.cljs$lang$applyTo = (function (arglist__15846){
var x = cljs.core.first(arglist__15846);
arglist__15846 = cljs.core.next(arglist__15846);
var y = cljs.core.first(arglist__15846);
arglist__15846 = cljs.core.next(arglist__15846);
var z = cljs.core.first(arglist__15846);
var args = cljs.core.rest(arglist__15846);
return G__15845__delegate(x,y,z,args);
});
G__15845.cljs$core$IFn$_invoke$arity$variadic = G__15845__delegate;
return G__15845;
})()
;
G__15844 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15844__0.call(this);
case 1:
return G__15844__1.call(this,x);
case 2:
return G__15844__2.call(this,x,y);
case 3:
return G__15844__3.call(this,x,y,z);
default:
return G__15844__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15844.cljs$lang$maxFixedArity = 3;
G__15844.cljs$lang$applyTo = G__15844__4.cljs$lang$applyTo;
G__15844.cljs$core$IFn$_invoke$arity$0 = G__15844__0;
G__15844.cljs$core$IFn$_invoke$arity$1 = G__15844__1;
G__15844.cljs$core$IFn$_invoke$arity$2 = G__15844__2;
G__15844.cljs$core$IFn$_invoke$arity$3 = G__15844__3;
G__15844.cljs$core$IFn$_invoke$arity$variadic = G__15844__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15844;
})()
});
var juxt__4 = (function() { 
var G__15847__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__15848 = null;
var G__15848__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15744_SHARP_,p2__15745_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15744_SHARP_,(function (){return (p2__15745_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__15745_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__15745_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15848__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15746_SHARP_,p2__15747_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15746_SHARP_,(function (){var G__15832 = x;return (p2__15747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__15747_SHARP_.cljs$core$IFn$_invoke$arity$1(G__15832) : p2__15747_SHARP_.call(null,G__15832));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15848__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15748_SHARP_,p2__15749_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15748_SHARP_,(function (){var G__15833 = x;var G__15834 = y;return (p2__15749_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__15749_SHARP_.cljs$core$IFn$_invoke$arity$2(G__15833,G__15834) : p2__15749_SHARP_.call(null,G__15833,G__15834));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15848__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15750_SHARP_,p2__15751_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15750_SHARP_,(function (){var G__15835 = x;var G__15836 = y;var G__15837 = z;return (p2__15751_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__15751_SHARP_.cljs$core$IFn$_invoke$arity$3(G__15835,G__15836,G__15837) : p2__15751_SHARP_.call(null,G__15835,G__15836,G__15837));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15848__4 = (function() { 
var G__15849__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15752_SHARP_,p2__15753_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15752_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__15753_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__15849 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15849__delegate.call(this,x,y,z,args);};
G__15849.cljs$lang$maxFixedArity = 3;
G__15849.cljs$lang$applyTo = (function (arglist__15850){
var x = cljs.core.first(arglist__15850);
arglist__15850 = cljs.core.next(arglist__15850);
var y = cljs.core.first(arglist__15850);
arglist__15850 = cljs.core.next(arglist__15850);
var z = cljs.core.first(arglist__15850);
var args = cljs.core.rest(arglist__15850);
return G__15849__delegate(x,y,z,args);
});
G__15849.cljs$core$IFn$_invoke$arity$variadic = G__15849__delegate;
return G__15849;
})()
;
G__15848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15848__0.call(this);
case 1:
return G__15848__1.call(this,x);
case 2:
return G__15848__2.call(this,x,y);
case 3:
return G__15848__3.call(this,x,y,z);
default:
return G__15848__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15848.cljs$lang$maxFixedArity = 3;
G__15848.cljs$lang$applyTo = G__15848__4.cljs$lang$applyTo;
G__15848.cljs$core$IFn$_invoke$arity$0 = G__15848__0;
G__15848.cljs$core$IFn$_invoke$arity$1 = G__15848__1;
G__15848.cljs$core$IFn$_invoke$arity$2 = G__15848__2;
G__15848.cljs$core$IFn$_invoke$arity$3 = G__15848__3;
G__15848.cljs$core$IFn$_invoke$arity$variadic = G__15848__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15848;
})()
;})(fs__$1))
};
var G__15847 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15847__delegate.call(this,f,g,h,fs);};
G__15847.cljs$lang$maxFixedArity = 3;
G__15847.cljs$lang$applyTo = (function (arglist__15851){
var f = cljs.core.first(arglist__15851);
arglist__15851 = cljs.core.next(arglist__15851);
var g = cljs.core.first(arglist__15851);
arglist__15851 = cljs.core.next(arglist__15851);
var h = cljs.core.first(arglist__15851);
var fs = cljs.core.rest(arglist__15851);
return G__15847__delegate(f,g,h,fs);
});
G__15847.cljs$core$IFn$_invoke$arity$variadic = G__15847__delegate;
return G__15847;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq(coll))
{{
var G__15852 = cljs.core.next(coll);
coll = G__15852;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > (0))))
{{
var G__15853 = (n - (1));
var G__15854 = cljs.core.next(coll);
n = G__15853;
coll = G__15854;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
} else
{throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
} else
{throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){if((s instanceof RegExp))
{return s;
} else
{var vec__15858 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858,(2),null);return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_15866 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__15867_15873 = cljs.core.first(coll);var G__15868_15874 = writer;var G__15869_15875 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15867_15873,G__15868_15874,G__15869_15875) : print_one.call(null,G__15867_15873,G__15868_15874,G__15869_15875));
} else
{}
var coll_15876__$1 = cljs.core.next(coll);var n_15877 = (cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_15876__$1) && (((n_15877 == null)) || (!((n_15877 === (0))))))
{cljs.core._write(writer,sep);
var G__15870_15878 = cljs.core.first(coll_15876__$1);var G__15871_15879 = writer;var G__15872_15880 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15870_15878,G__15871_15879,G__15872_15880) : print_one.call(null,G__15870_15878,G__15871_15879,G__15872_15880));
{
var G__15881 = cljs.core.next(coll_15876__$1);
var G__15882 = (n_15877 - (1));
coll_15876__$1 = G__15881;
n_15877 = G__15882;
continue;
}
} else
{if((cljs.core.seq(coll_15876__$1)) && ((n_15877 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15866;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__15887 = cljs.core.seq(ss);var chunk__15888 = null;var count__15889 = (0);var i__15890 = (0);while(true){
if((i__15890 < count__15889))
{var s = chunk__15888.cljs$core$IIndexed$_nth$arity$2(null,i__15890);cljs.core._write(writer,s);
{
var G__15891 = seq__15887;
var G__15892 = chunk__15888;
var G__15893 = count__15889;
var G__15894 = (i__15890 + (1));
seq__15887 = G__15891;
chunk__15888 = G__15892;
count__15889 = G__15893;
i__15890 = G__15894;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15887);if(temp__4126__auto__)
{var seq__15887__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15887__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15887__$1);{
var G__15895 = cljs.core.chunk_rest(seq__15887__$1);
var G__15896 = c__4355__auto__;
var G__15897 = cljs.core.count(c__4355__auto__);
var G__15898 = (0);
seq__15887 = G__15895;
chunk__15888 = G__15896;
count__15889 = G__15897;
i__15890 = G__15898;
continue;
}
} else
{var s = cljs.core.first(seq__15887__$1);cljs.core._write(writer,s);
{
var G__15899 = cljs.core.next(seq__15887__$1);
var G__15900 = null;
var G__15901 = (0);
var G__15902 = (0);
seq__15887 = G__15899;
chunk__15888 = G__15900;
count__15889 = G__15901;
i__15890 = G__15902;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__15903){
var writer = cljs.core.first(arglist__15903);
var ss = cljs.core.rest(arglist__15903);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj15905 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj15905;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__15908 = "[\\\\\"\b\f\n\r\t]";var G__15909 = "g";return RegExp(G__15908,G__15909);
})(),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$65);if(cljs.core.truth_(and__3573__auto__))
{var and__3573__auto____$1 = (function (){var G__15923 = obj;if(G__15923)
{var bit__4249__auto__ = (G__15923.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4249__auto__) || (G__15923.cljs$core$IMeta$))
{return true;
} else
{if((!G__15923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15923);
}
})();if(and__3573__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__15924 = obj;if(G__15924)
{var bit__4242__auto__ = (G__15924.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4242__auto__) || (G__15924.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
var G__15925 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__15926 = pr_writer;var G__15927 = writer;var G__15928 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__15925,G__15926,G__15927,G__15928) : cljs.core.print_map.call(null,G__15925,G__15926,G__15927,G__15928));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__15929 = obj;return goog.isString(G__15929);
})()))
{if(cljs.core.truth_(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count(ns) < len))
{{
var G__15931 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__15931;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__15930 = obj;if(G__15930)
{var bit__4249__auto__ = (G__15930.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4249__auto__) || (G__15930.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__15930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15930);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));

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
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__15936 = cljs.core.seq(cljs.core.next(objs));var chunk__15937 = null;var count__15938 = (0);var i__15939 = (0);while(true){
if((i__15939 < count__15938))
{var obj = chunk__15937.cljs$core$IIndexed$_nth$arity$2(null,i__15939);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__15940 = seq__15936;
var G__15941 = chunk__15937;
var G__15942 = count__15938;
var G__15943 = (i__15939 + (1));
seq__15936 = G__15940;
chunk__15937 = G__15941;
count__15938 = G__15942;
i__15939 = G__15943;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15936);if(temp__4126__auto__)
{var seq__15936__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15936__$1))
{var c__4355__auto__ = cljs.core.chunk_first(seq__15936__$1);{
var G__15944 = cljs.core.chunk_rest(seq__15936__$1);
var G__15945 = c__4355__auto__;
var G__15946 = cljs.core.count(c__4355__auto__);
var G__15947 = (0);
seq__15936 = G__15944;
chunk__15937 = G__15945;
count__15938 = G__15946;
i__15939 = G__15947;
continue;
}
} else
{var obj = cljs.core.first(seq__15936__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__15948 = cljs.core.next(seq__15936__$1);
var G__15949 = null;
var G__15950 = (0);
var G__15951 = (0);
seq__15936 = G__15948;
chunk__15937 = G__15949;
count__15938 = G__15950;
i__15939 = G__15951;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$63)))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__15952){
var objs = cljs.core.seq(arglist__15952);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__15953){
var objs = cljs.core.seq(arglist__15953);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__15954){
var objs = cljs.core.seq(arglist__15954);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$64,false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__15955){
var objs = cljs.core.seq(arglist__15955);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$64,false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__15956){
var objs = cljs.core.seq(arglist__15956);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$64,false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__15957){
var objs = cljs.core.seq(arglist__15957);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$64,false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__15958){
var objs = cljs.core.seq(arglist__15958);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__15959){
var objs = cljs.core.seq(arglist__15959);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__15966_15972 = cljs.core.key(e);var G__15967_15973 = w;var G__15968_15974 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15966_15972,G__15967_15973,G__15968_15974) : print_one.call(null,G__15966_15972,G__15967_15973,G__15968_15974));
cljs.core._write(w," ");
var G__15969 = cljs.core.val(e);var G__15970 = w;var G__15971 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15969,G__15970,G__15971) : print_one.call(null,G__15969,G__15970,G__15971));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(a__$1.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15975){
var iref = cljs.core.first(arglist__15975);
arglist__15975 = cljs.core.next(arglist__15975);
var f = cljs.core.first(arglist__15975);
var args = cljs.core.rest(arglist__15975);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = (function (){var G__15978 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15978) : cljs.core.atom.call(null,G__15978));
})();
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not(self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{var G__15980 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15980) : cljs.core.deref.call(null,G__15980));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){return (function (p1__15981_SHARP_,p2__15982_SHARP_){var ret = (function (){var G__15985 = p1__15981_SHARP_;var G__15986 = p2__15982_SHARP_;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15985,G__15986) : rf.call(null,G__15985,G__15986));
})();if(cljs.core.reduced_QMARK_(ret))
{return cljs.core.reduced(ret);
} else
{return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){var rf1 = cljs.core.preserving_reduced(rf);return ((function (rf1){
return (function() {
var G__15989 = null;
var G__15989__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15989__1 = (function (result){var G__15988 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15988) : rf.call(null,G__15988));
});
var G__15989__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__15989 = function(result,input){
switch(arguments.length){
case 0:
return G__15989__0.call(this);
case 1:
return G__15989__1.call(this,result);
case 2:
return G__15989__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15989.cljs$core$IFn$_invoke$arity$0 = G__15989__0;
G__15989.cljs$core$IFn$_invoke$arity$1 = G__15989__1;
G__15989.cljs$core$IFn$_invoke$arity$2 = G__15989__2;
return G__15989;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (rf){var pa = (function (){var G__15997 = cljs.core.constant$keyword$72;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15997) : cljs.core.atom.call(null,G__15997));
})();return ((function (pa){
return (function() {
var G__16004 = null;
var G__16004__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__16004__1 = (function (result){var G__15998 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15998) : rf.call(null,G__15998));
});
var G__16004__2 = (function (result,input){var prior = (function (){var G__15999 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15999) : cljs.core.deref.call(null,G__15999));
})();var G__16000_16005 = pa;var G__16001_16006 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16000_16005,G__16001_16006) : cljs.core.reset_BANG_.call(null,G__16000_16005,G__16001_16006));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__16002 = result;var G__16003 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__16002,G__16003) : rf.call(null,G__16002,G__16003));
}
});
G__16004 = function(result,input){
switch(arguments.length){
case 0:
return G__16004__0.call(this);
case 1:
return G__16004__1.call(this,result);
case 2:
return G__16004__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16004.cljs$core$IFn$_invoke$arity$0 = G__16004__0;
G__16004.cljs$core$IFn$_invoke$arity$1 = G__16004__1;
G__16004.cljs$core$IFn$_invoke$arity$2 = G__16004__2;
return G__16004;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.cljs$lang$type = true;
cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";
cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/Eduction");
});
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16008_SHARP_,p2__16007_SHARP_){var G__16010 = p2__16007_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__16010) : proc.call(null,G__16010));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj16012 = {};return obj16012;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._clj__GT_js[(function (){var G__16016 = x__4222__auto__;return goog.typeOf(G__16016);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._key__GT_js[(function (){var G__16020 = x__4222__auto__;return goog.typeOf(G__16020);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__16023 = k;if(G__16023)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__16023.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__16023.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__16023);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__16023);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__16024 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__16024) : cljs.core.clj__GT_js.call(null,G__16024));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__16040 = x;if(G__16040)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__16040.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__16040.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__16040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__16040);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj16042 = {};return obj16042;
})();var seq__16043_16053 = cljs.core.seq(x);var chunk__16044_16054 = null;var count__16045_16055 = (0);var i__16046_16056 = (0);while(true){
if((i__16046_16056 < count__16045_16055))
{var vec__16047_16057 = chunk__16044_16054.cljs$core$IIndexed$_nth$arity$2(null,i__16046_16056);var k_16058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047_16057,(0),null);var v_16059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047_16057,(1),null);(m[cljs.core.key__GT_js(k_16058)] = clj__GT_js(v_16059));
{
var G__16060 = seq__16043_16053;
var G__16061 = chunk__16044_16054;
var G__16062 = count__16045_16055;
var G__16063 = (i__16046_16056 + (1));
seq__16043_16053 = G__16060;
chunk__16044_16054 = G__16061;
count__16045_16055 = G__16062;
i__16046_16056 = G__16063;
continue;
}
} else
{var temp__4126__auto___16064 = cljs.core.seq(seq__16043_16053);if(temp__4126__auto___16064)
{var seq__16043_16065__$1 = temp__4126__auto___16064;if(cljs.core.chunked_seq_QMARK_(seq__16043_16065__$1))
{var c__4355__auto___16066 = cljs.core.chunk_first(seq__16043_16065__$1);{
var G__16067 = cljs.core.chunk_rest(seq__16043_16065__$1);
var G__16068 = c__4355__auto___16066;
var G__16069 = cljs.core.count(c__4355__auto___16066);
var G__16070 = (0);
seq__16043_16053 = G__16067;
chunk__16044_16054 = G__16068;
count__16045_16055 = G__16069;
i__16046_16056 = G__16070;
continue;
}
} else
{var vec__16048_16071 = cljs.core.first(seq__16043_16065__$1);var k_16072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048_16071,(0),null);var v_16073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048_16071,(1),null);(m[cljs.core.key__GT_js(k_16072)] = clj__GT_js(v_16073));
{
var G__16074 = cljs.core.next(seq__16043_16065__$1);
var G__16075 = null;
var G__16076 = (0);
var G__16077 = (0);
seq__16043_16053 = G__16074;
chunk__16044_16054 = G__16075;
count__16045_16055 = G__16076;
i__16046_16056 = G__16077;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__16049_16078 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__16050_16079 = null;var count__16051_16080 = (0);var i__16052_16081 = (0);while(true){
if((i__16052_16081 < count__16051_16080))
{var x_16082__$1 = chunk__16050_16079.cljs$core$IIndexed$_nth$arity$2(null,i__16052_16081);arr.push(x_16082__$1);
{
var G__16083 = seq__16049_16078;
var G__16084 = chunk__16050_16079;
var G__16085 = count__16051_16080;
var G__16086 = (i__16052_16081 + (1));
seq__16049_16078 = G__16083;
chunk__16050_16079 = G__16084;
count__16051_16080 = G__16085;
i__16052_16081 = G__16086;
continue;
}
} else
{var temp__4126__auto___16087 = cljs.core.seq(seq__16049_16078);if(temp__4126__auto___16087)
{var seq__16049_16088__$1 = temp__4126__auto___16087;if(cljs.core.chunked_seq_QMARK_(seq__16049_16088__$1))
{var c__4355__auto___16089 = cljs.core.chunk_first(seq__16049_16088__$1);{
var G__16090 = cljs.core.chunk_rest(seq__16049_16088__$1);
var G__16091 = c__4355__auto___16089;
var G__16092 = cljs.core.count(c__4355__auto___16089);
var G__16093 = (0);
seq__16049_16078 = G__16090;
chunk__16050_16079 = G__16091;
count__16051_16080 = G__16092;
i__16052_16081 = G__16093;
continue;
}
} else
{var x_16094__$1 = cljs.core.first(seq__16049_16088__$1);arr.push(x_16094__$1);
{
var G__16095 = cljs.core.next(seq__16049_16088__$1);
var G__16096 = null;
var G__16097 = (0);
var G__16098 = (0);
seq__16049_16078 = G__16095;
chunk__16050_16079 = G__16096;
count__16051_16080 = G__16097;
i__16052_16081 = G__16098;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{return x;

}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj16100 = {};return obj16100;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3573__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (cljs.core._js__GT_clj[(function (){var G__16104 = x__4222__auto__;return goog.typeOf(G__16104);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__16159__delegate = function (x,opts){if((function (){var G__16133 = x;if(G__16133)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__16133.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__16133.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__16133);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__16133);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__16134 = opts;var map__16134__$1 = ((cljs.core.seq_QMARK_(map__16134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16134):map__16134);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16134__$1,cljs.core.constant$keyword$73);var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__16134,map__16134__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = ((function (map__16134,map__16134__$1,keywordize_keys,keyfn){
return (function iter__16149(s__16150){return (new cljs.core.LazySeq(null,((function (map__16134,map__16134__$1,keywordize_keys,keyfn){
return (function (){var s__16150__$1 = s__16150;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16150__$1);if(temp__4126__auto__)
{var s__16150__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16150__$2))
{var c__4322__auto__ = cljs.core.chunk_first(s__16150__$2);var size__4323__auto__ = cljs.core.count(c__4322__auto__);var b__16152 = cljs.core.chunk_buffer(size__4323__auto__);if((function (){var i__16151 = (0);while(true){
if((i__16151 < size__4323__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__16151);cljs.core.chunk_append(b__16152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16157 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16157) : keyfn.call(null,G__16157));
})(),thisfn((x__$1[k]))], null));
{
var G__16160 = (i__16151 + (1));
i__16151 = G__16160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16152),iter__16149(cljs.core.chunk_rest(s__16150__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16152),null);
}
} else
{var k = cljs.core.first(s__16150__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16158 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16158) : keyfn.call(null,G__16158));
})(),thisfn((x__$1[k]))], null),iter__16149(cljs.core.rest(s__16150__$2)));
}
} else
{return null;
}
break;
}
});})(map__16134,map__16134__$1,keywordize_keys,keyfn))
,null,null));
});})(map__16134,map__16134__$1,keywordize_keys,keyfn))
;return iter__4324__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__16134,map__16134__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__16159 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__16159__delegate.call(this,x,opts);};
G__16159.cljs$lang$maxFixedArity = 1;
G__16159.cljs$lang$applyTo = (function (arglist__16161){
var x = cljs.core.first(arglist__16161);
var opts = cljs.core.rest(arglist__16161);
return G__16159__delegate(x,opts);
});
G__16159.cljs$core$IFn$_invoke$arity$variadic = G__16159__delegate;
return G__16159;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__16164 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16164) : cljs.core.atom.call(null,G__16164));
})();return ((function (mem){
return (function() { 
var G__16166__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__16165 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16165) : cljs.core.deref.call(null,G__16165));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__16166 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16166__delegate.call(this,args);};
G__16166.cljs$lang$maxFixedArity = 0;
G__16166.cljs$lang$applyTo = (function (arglist__16167){
var args = cljs.core.seq(arglist__16167);
return G__16166__delegate(args);
});
G__16166.cljs$core$IFn$_invoke$arity$variadic = G__16166__delegate;
return G__16166;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();if(cljs.core.fn_QMARK_(ret))
{{
var G__16169 = ret;
f = G__16169;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__16170__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__16170 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__16170__delegate.call(this,f,args);};
G__16170.cljs$lang$maxFixedArity = 1;
G__16170.cljs$lang$applyTo = (function (arglist__16171){
var f = cljs.core.first(arglist__16171);
var args = cljs.core.rest(arglist__16171);
return G__16170__delegate(f,args);
});
G__16170.cljs$core$IFn$_invoke$arity$variadic = G__16170__delegate;
return G__16170;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){var G__16174 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__16174) : Math.floor.call(null,G__16174));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__16176 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16176) : f.call(null,G__16176));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$74,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$75,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$76,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = (function (){var G__16178 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16178) : cljs.core.atom.call(null,G__16178));
})();
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__16179){
var f = cljs.core.first(arglist__16179);
var args = cljs.core.rest(arglist__16179);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__16244 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16244) : cljs.core.deref.call(null,G__16244));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__3585__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{var and__3573__auto__ = cljs.core.vector_QMARK_(parent);if(and__3573__auto__)
{var and__3573__auto____$1 = cljs.core.vector_QMARK_(child);if(and__3573__auto____$1)
{var and__3573__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__3573__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__16269 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__16267 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__16267) : child.call(null,G__16267));
})(),(function (){var G__16268 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__16268) : parent.call(null,G__16268));
})());
var G__16270 = (i + (1));
ret = G__16269;
i = G__16270;
continue;
}
}
break;
}
} else
{return and__3573__auto____$2;
}
} else
{return and__3573__auto____$1;
}
} else
{return and__3573__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__16274 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16274) : cljs.core.deref.call(null,G__16274));
})(),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__16278 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16278) : cljs.core.deref.call(null,G__16278));
})(),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__16282 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16282) : cljs.core.deref.call(null,G__16282));
})(),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
var tp = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(h);var td = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(h);var ta = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__16291 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__16291) : targets.call(null,G__16291));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__16292 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__16292) : sources.call(null,G__16292));
})()));
});})(tp,td,ta))
;var or__3585__auto__ = ((cljs.core.contains_QMARK_((function (){var G__16296 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__16296) : tp.call(null,G__16296));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__16297 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__16297) : ta.call(null,G__16297));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__16298 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__16298) : ta.call(null,G__16298));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$74,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$76,tf(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$75,tf(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__16305 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16305) : parentMap.call(null,G__16305));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__16306 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16306) : parentMap.call(null,G__16306));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__16299_SHARP_){return cljs.core.cons(cljs.core.first(p1__16299_SHARP_),cljs.core.interpose(cljs.core.first(p1__16299_SHARP_),cljs.core.second(p1__16299_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__16307 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__16307) : parentMap.call(null,G__16307));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__16300_SHARP_,p2__16301_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__16300_SHARP_,p2__16301_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__16310 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16310) : cljs.core.deref.call(null,G__16310));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__16311 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16311) : cljs.core.deref.call(null,G__16311));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__16327 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16327) : cljs.core.deref.call(null,G__16327));
})().call(null,x);var or__3585__auto__ = (cljs.core.truth_((function (){var and__3573__auto__ = xprefs;if(cljs.core.truth_(and__3573__auto__))
{var G__16329 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__16329) : xprefs.call(null,G__16329));
} else
{return and__3573__auto__;
}
})())?true:null);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__16330 = cljs.core.rest(ps);
ps = G__16330;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{var or__3585__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__16331 = cljs.core.rest(ps);
ps = G__16331;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__3585__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__16345){var vec__16346 = p__16345;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(1),null);var e = vec__16346;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__16347 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16347) : cljs.core.deref.call(null,G__16347));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3585__auto__ = (be == null);if(or__3585__auto__)
{return or__3585__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,(function (){var G__16348 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16348) : cljs.core.deref.call(null,G__16348));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__16349 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16349) : cljs.core.deref.call(null,G__16349));
})(),(function (){var G__16350 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16350) : cljs.core.deref.call(null,G__16350));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj16352 = {};return obj16352;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._reset[(function (){var G__16356 = x__4222__auto__;return goog.typeOf(G__16356);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._reset["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._add_method[(function (){var G__16360 = x__4222__auto__;return goog.typeOf(G__16360);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._add_method["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._remove_method[(function (){var G__16364 = x__4222__auto__;return goog.typeOf(G__16364);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._remove_method["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._prefer_method[(function (){var G__16368 = x__4222__auto__;return goog.typeOf(G__16368);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._prefer_method["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._get_method[(function (){var G__16372 = x__4222__auto__;return goog.typeOf(G__16372);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._get_method["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._methods[(function (){var G__16376 = x__4222__auto__;return goog.typeOf(G__16376);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._methods["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__3573__auto__ = mf;if(and__3573__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3573__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__4222__auto__ = (((mf == null))?null:mf);return (function (){var or__3585__auto__ = (cljs.core._prefers[(function (){var G__16380 = x__4222__auto__;return goog.typeOf(G__16380);
})()]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core._prefers["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16382 = this$__$1;return goog.getUid(G__16382);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__16383 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16383) : cljs.core.deref.call(null,G__16383));
})(),(function (){var G__16384 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16384) : cljs.core.deref.call(null,G__16384));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__16385 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16385) : cljs.core.deref.call(null,G__16385));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__16386 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16386) : cljs.core.deref.call(null,G__16386));
})().call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__16387 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16387) : cljs.core.deref.call(null,G__16387));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__16388 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16388) : cljs.core.deref.call(null,G__16388));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__17229 = null;
var G__17229__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16389 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__16389) : self__.dispatch_fn.call(null,G__16389));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16390 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__16390) : target_fn.call(null,G__16390));
});
var G__17229__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16391 = a;var G__16392 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__16391,G__16392) : self__.dispatch_fn.call(null,G__16391,G__16392));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16393 = a;var G__16394 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__16393,G__16394) : target_fn.call(null,G__16393,G__16394));
});
var G__17229__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16395 = a;var G__16396 = b;var G__16397 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__16395,G__16396,G__16397) : self__.dispatch_fn.call(null,G__16395,G__16396,G__16397));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16398 = a;var G__16399 = b;var G__16400 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__16398,G__16399,G__16400) : target_fn.call(null,G__16398,G__16399,G__16400));
});
var G__17229__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16401 = a;var G__16402 = b;var G__16403 = c;var G__16404 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__16401,G__16402,G__16403,G__16404) : self__.dispatch_fn.call(null,G__16401,G__16402,G__16403,G__16404));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16405 = a;var G__16406 = b;var G__16407 = c;var G__16408 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__16405,G__16406,G__16407,G__16408) : target_fn.call(null,G__16405,G__16406,G__16407,G__16408));
});
var G__17229__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16409 = a;var G__16410 = b;var G__16411 = c;var G__16412 = d;var G__16413 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__16409,G__16410,G__16411,G__16412,G__16413) : self__.dispatch_fn.call(null,G__16409,G__16410,G__16411,G__16412,G__16413));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16414 = a;var G__16415 = b;var G__16416 = c;var G__16417 = d;var G__16418 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__16414,G__16415,G__16416,G__16417,G__16418) : target_fn.call(null,G__16414,G__16415,G__16416,G__16417,G__16418));
});
var G__17229__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16419 = a;var G__16420 = b;var G__16421 = c;var G__16422 = d;var G__16423 = e;var G__16424 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__16419,G__16420,G__16421,G__16422,G__16423,G__16424) : self__.dispatch_fn.call(null,G__16419,G__16420,G__16421,G__16422,G__16423,G__16424));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16425 = a;var G__16426 = b;var G__16427 = c;var G__16428 = d;var G__16429 = e;var G__16430 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__16425,G__16426,G__16427,G__16428,G__16429,G__16430) : target_fn.call(null,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430));
});
var G__17229__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16431 = a;var G__16432 = b;var G__16433 = c;var G__16434 = d;var G__16435 = e;var G__16436 = f;var G__16437 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__16431,G__16432,G__16433,G__16434,G__16435,G__16436,G__16437) : self__.dispatch_fn.call(null,G__16431,G__16432,G__16433,G__16434,G__16435,G__16436,G__16437));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16438 = a;var G__16439 = b;var G__16440 = c;var G__16441 = d;var G__16442 = e;var G__16443 = f;var G__16444 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__16438,G__16439,G__16440,G__16441,G__16442,G__16443,G__16444) : target_fn.call(null,G__16438,G__16439,G__16440,G__16441,G__16442,G__16443,G__16444));
});
var G__17229__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16445 = a;var G__16446 = b;var G__16447 = c;var G__16448 = d;var G__16449 = e;var G__16450 = f;var G__16451 = g;var G__16452 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451,G__16452) : self__.dispatch_fn.call(null,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451,G__16452));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16453 = a;var G__16454 = b;var G__16455 = c;var G__16456 = d;var G__16457 = e;var G__16458 = f;var G__16459 = g;var G__16460 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460) : target_fn.call(null,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460));
});
var G__17229__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16461 = a;var G__16462 = b;var G__16463 = c;var G__16464 = d;var G__16465 = e;var G__16466 = f;var G__16467 = g;var G__16468 = h;var G__16469 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16461,G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469) : self__.dispatch_fn.call(null,G__16461,G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16470 = a;var G__16471 = b;var G__16472 = c;var G__16473 = d;var G__16474 = e;var G__16475 = f;var G__16476 = g;var G__16477 = h;var G__16478 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477,G__16478) : target_fn.call(null,G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477,G__16478));
});
var G__17229__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16479 = a;var G__16480 = b;var G__16481 = c;var G__16482 = d;var G__16483 = e;var G__16484 = f;var G__16485 = g;var G__16486 = h;var G__16487 = i;var G__16488 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16479,G__16480,G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488) : self__.dispatch_fn.call(null,G__16479,G__16480,G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16489 = a;var G__16490 = b;var G__16491 = c;var G__16492 = d;var G__16493 = e;var G__16494 = f;var G__16495 = g;var G__16496 = h;var G__16497 = i;var G__16498 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498) : target_fn.call(null,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498));
});
var G__17229__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16499 = a;var G__16500 = b;var G__16501 = c;var G__16502 = d;var G__16503 = e;var G__16504 = f;var G__16505 = g;var G__16506 = h;var G__16507 = i;var G__16508 = j;var G__16509 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509) : self__.dispatch_fn.call(null,G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16510 = a;var G__16511 = b;var G__16512 = c;var G__16513 = d;var G__16514 = e;var G__16515 = f;var G__16516 = g;var G__16517 = h;var G__16518 = i;var G__16519 = j;var G__16520 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519,G__16520) : target_fn.call(null,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519,G__16520));
});
var G__17229__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16521 = a;var G__16522 = b;var G__16523 = c;var G__16524 = d;var G__16525 = e;var G__16526 = f;var G__16527 = g;var G__16528 = h;var G__16529 = i;var G__16530 = j;var G__16531 = k;var G__16532 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532) : self__.dispatch_fn.call(null,G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16533 = a;var G__16534 = b;var G__16535 = c;var G__16536 = d;var G__16537 = e;var G__16538 = f;var G__16539 = g;var G__16540 = h;var G__16541 = i;var G__16542 = j;var G__16543 = k;var G__16544 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16533,G__16534,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544) : target_fn.call(null,G__16533,G__16534,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544));
});
var G__17229__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16545 = a;var G__16546 = b;var G__16547 = c;var G__16548 = d;var G__16549 = e;var G__16550 = f;var G__16551 = g;var G__16552 = h;var G__16553 = i;var G__16554 = j;var G__16555 = k;var G__16556 = l;var G__16557 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16545,G__16546,G__16547,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557) : self__.dispatch_fn.call(null,G__16545,G__16546,G__16547,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16558 = a;var G__16559 = b;var G__16560 = c;var G__16561 = d;var G__16562 = e;var G__16563 = f;var G__16564 = g;var G__16565 = h;var G__16566 = i;var G__16567 = j;var G__16568 = k;var G__16569 = l;var G__16570 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570) : target_fn.call(null,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570));
});
var G__17229__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16571 = a;var G__16572 = b;var G__16573 = c;var G__16574 = d;var G__16575 = e;var G__16576 = f;var G__16577 = g;var G__16578 = h;var G__16579 = i;var G__16580 = j;var G__16581 = k;var G__16582 = l;var G__16583 = m;var G__16584 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16571,G__16572,G__16573,G__16574,G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584) : self__.dispatch_fn.call(null,G__16571,G__16572,G__16573,G__16574,G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16585 = a;var G__16586 = b;var G__16587 = c;var G__16588 = d;var G__16589 = e;var G__16590 = f;var G__16591 = g;var G__16592 = h;var G__16593 = i;var G__16594 = j;var G__16595 = k;var G__16596 = l;var G__16597 = m;var G__16598 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598) : target_fn.call(null,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598));
});
var G__17229__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16599 = a;var G__16600 = b;var G__16601 = c;var G__16602 = d;var G__16603 = e;var G__16604 = f;var G__16605 = g;var G__16606 = h;var G__16607 = i;var G__16608 = j;var G__16609 = k;var G__16610 = l;var G__16611 = m;var G__16612 = n;var G__16613 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610,G__16611,G__16612,G__16613) : self__.dispatch_fn.call(null,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610,G__16611,G__16612,G__16613));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16614 = a;var G__16615 = b;var G__16616 = c;var G__16617 = d;var G__16618 = e;var G__16619 = f;var G__16620 = g;var G__16621 = h;var G__16622 = i;var G__16623 = j;var G__16624 = k;var G__16625 = l;var G__16626 = m;var G__16627 = n;var G__16628 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628) : target_fn.call(null,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628));
});
var G__17229__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16629 = a;var G__16630 = b;var G__16631 = c;var G__16632 = d;var G__16633 = e;var G__16634 = f;var G__16635 = g;var G__16636 = h;var G__16637 = i;var G__16638 = j;var G__16639 = k;var G__16640 = l;var G__16641 = m;var G__16642 = n;var G__16643 = o;var G__16644 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639,G__16640,G__16641,G__16642,G__16643,G__16644) : self__.dispatch_fn.call(null,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639,G__16640,G__16641,G__16642,G__16643,G__16644));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16645 = a;var G__16646 = b;var G__16647 = c;var G__16648 = d;var G__16649 = e;var G__16650 = f;var G__16651 = g;var G__16652 = h;var G__16653 = i;var G__16654 = j;var G__16655 = k;var G__16656 = l;var G__16657 = m;var G__16658 = n;var G__16659 = o;var G__16660 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655,G__16656,G__16657,G__16658,G__16659,G__16660) : target_fn.call(null,G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655,G__16656,G__16657,G__16658,G__16659,G__16660));
});
var G__17229__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16661 = a;var G__16662 = b;var G__16663 = c;var G__16664 = d;var G__16665 = e;var G__16666 = f;var G__16667 = g;var G__16668 = h;var G__16669 = i;var G__16670 = j;var G__16671 = k;var G__16672 = l;var G__16673 = m;var G__16674 = n;var G__16675 = o;var G__16676 = p;var G__16677 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672,G__16673,G__16674,G__16675,G__16676,G__16677) : self__.dispatch_fn.call(null,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672,G__16673,G__16674,G__16675,G__16676,G__16677));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16678 = a;var G__16679 = b;var G__16680 = c;var G__16681 = d;var G__16682 = e;var G__16683 = f;var G__16684 = g;var G__16685 = h;var G__16686 = i;var G__16687 = j;var G__16688 = k;var G__16689 = l;var G__16690 = m;var G__16691 = n;var G__16692 = o;var G__16693 = p;var G__16694 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694) : target_fn.call(null,G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694));
});
var G__17229__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16695 = a;var G__16696 = b;var G__16697 = c;var G__16698 = d;var G__16699 = e;var G__16700 = f;var G__16701 = g;var G__16702 = h;var G__16703 = i;var G__16704 = j;var G__16705 = k;var G__16706 = l;var G__16707 = m;var G__16708 = n;var G__16709 = o;var G__16710 = p;var G__16711 = q;var G__16712 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711,G__16712) : self__.dispatch_fn.call(null,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711,G__16712));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16713 = a;var G__16714 = b;var G__16715 = c;var G__16716 = d;var G__16717 = e;var G__16718 = f;var G__16719 = g;var G__16720 = h;var G__16721 = i;var G__16722 = j;var G__16723 = k;var G__16724 = l;var G__16725 = m;var G__16726 = n;var G__16727 = o;var G__16728 = p;var G__16729 = q;var G__16730 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730) : target_fn.call(null,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730));
});
var G__17229__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16731 = a;var G__16732 = b;var G__16733 = c;var G__16734 = d;var G__16735 = e;var G__16736 = f;var G__16737 = g;var G__16738 = h;var G__16739 = i;var G__16740 = j;var G__16741 = k;var G__16742 = l;var G__16743 = m;var G__16744 = n;var G__16745 = o;var G__16746 = p;var G__16747 = q;var G__16748 = r;var G__16749 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749) : self__.dispatch_fn.call(null,G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16750 = a;var G__16751 = b;var G__16752 = c;var G__16753 = d;var G__16754 = e;var G__16755 = f;var G__16756 = g;var G__16757 = h;var G__16758 = i;var G__16759 = j;var G__16760 = k;var G__16761 = l;var G__16762 = m;var G__16763 = n;var G__16764 = o;var G__16765 = p;var G__16766 = q;var G__16767 = r;var G__16768 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16750,G__16751,G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762,G__16763,G__16764,G__16765,G__16766,G__16767,G__16768) : target_fn.call(null,G__16750,G__16751,G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762,G__16763,G__16764,G__16765,G__16766,G__16767,G__16768));
});
var G__17229__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16769 = a;var G__16770 = b;var G__16771 = c;var G__16772 = d;var G__16773 = e;var G__16774 = f;var G__16775 = g;var G__16776 = h;var G__16777 = i;var G__16778 = j;var G__16779 = k;var G__16780 = l;var G__16781 = m;var G__16782 = n;var G__16783 = o;var G__16784 = p;var G__16785 = q;var G__16786 = r;var G__16787 = s;var G__16788 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16769,G__16770,G__16771,G__16772,G__16773,G__16774,G__16775,G__16776,G__16777,G__16778,G__16779,G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786,G__16787,G__16788) : self__.dispatch_fn.call(null,G__16769,G__16770,G__16771,G__16772,G__16773,G__16774,G__16775,G__16776,G__16777,G__16778,G__16779,G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786,G__16787,G__16788));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16789 = a;var G__16790 = b;var G__16791 = c;var G__16792 = d;var G__16793 = e;var G__16794 = f;var G__16795 = g;var G__16796 = h;var G__16797 = i;var G__16798 = j;var G__16799 = k;var G__16800 = l;var G__16801 = m;var G__16802 = n;var G__16803 = o;var G__16804 = p;var G__16805 = q;var G__16806 = r;var G__16807 = s;var G__16808 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795,G__16796,G__16797,G__16798,G__16799,G__16800,G__16801,G__16802,G__16803,G__16804,G__16805,G__16806,G__16807,G__16808) : target_fn.call(null,G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795,G__16796,G__16797,G__16798,G__16799,G__16800,G__16801,G__16802,G__16803,G__16804,G__16805,G__16806,G__16807,G__16808));
});
var G__17229__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__17229 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__17229__2.call(this,self__,a);
case 3:
return G__17229__3.call(this,self__,a,b);
case 4:
return G__17229__4.call(this,self__,a,b,c);
case 5:
return G__17229__5.call(this,self__,a,b,c,d);
case 6:
return G__17229__6.call(this,self__,a,b,c,d,e);
case 7:
return G__17229__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__17229__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__17229__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__17229__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__17229__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__17229__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__17229__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__17229__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__17229__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__17229__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__17229__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__17229__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__17229__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__17229__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__17229__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__17229__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17229.cljs$core$IFn$_invoke$arity$2 = G__17229__2;
G__17229.cljs$core$IFn$_invoke$arity$3 = G__17229__3;
G__17229.cljs$core$IFn$_invoke$arity$4 = G__17229__4;
G__17229.cljs$core$IFn$_invoke$arity$5 = G__17229__5;
G__17229.cljs$core$IFn$_invoke$arity$6 = G__17229__6;
G__17229.cljs$core$IFn$_invoke$arity$7 = G__17229__7;
G__17229.cljs$core$IFn$_invoke$arity$8 = G__17229__8;
G__17229.cljs$core$IFn$_invoke$arity$9 = G__17229__9;
G__17229.cljs$core$IFn$_invoke$arity$10 = G__17229__10;
G__17229.cljs$core$IFn$_invoke$arity$11 = G__17229__11;
G__17229.cljs$core$IFn$_invoke$arity$12 = G__17229__12;
G__17229.cljs$core$IFn$_invoke$arity$13 = G__17229__13;
G__17229.cljs$core$IFn$_invoke$arity$14 = G__17229__14;
G__17229.cljs$core$IFn$_invoke$arity$15 = G__17229__15;
G__17229.cljs$core$IFn$_invoke$arity$16 = G__17229__16;
G__17229.cljs$core$IFn$_invoke$arity$17 = G__17229__17;
G__17229.cljs$core$IFn$_invoke$arity$18 = G__17229__18;
G__17229.cljs$core$IFn$_invoke$arity$19 = G__17229__19;
G__17229.cljs$core$IFn$_invoke$arity$20 = G__17229__20;
G__17229.cljs$core$IFn$_invoke$arity$21 = G__17229__21;
G__17229.cljs$core$IFn$_invoke$arity$22 = G__17229__22;
return G__17229;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args16381){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16381)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16809 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__16809) : self__.dispatch_fn.call(null,G__16809));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16810 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__16810) : target_fn.call(null,G__16810));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16811 = a;var G__16812 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__16811,G__16812) : self__.dispatch_fn.call(null,G__16811,G__16812));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16813 = a;var G__16814 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__16813,G__16814) : target_fn.call(null,G__16813,G__16814));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16815 = a;var G__16816 = b;var G__16817 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__16815,G__16816,G__16817) : self__.dispatch_fn.call(null,G__16815,G__16816,G__16817));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16818 = a;var G__16819 = b;var G__16820 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__16818,G__16819,G__16820) : target_fn.call(null,G__16818,G__16819,G__16820));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16821 = a;var G__16822 = b;var G__16823 = c;var G__16824 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__16821,G__16822,G__16823,G__16824) : self__.dispatch_fn.call(null,G__16821,G__16822,G__16823,G__16824));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16825 = a;var G__16826 = b;var G__16827 = c;var G__16828 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__16825,G__16826,G__16827,G__16828) : target_fn.call(null,G__16825,G__16826,G__16827,G__16828));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16829 = a;var G__16830 = b;var G__16831 = c;var G__16832 = d;var G__16833 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__16829,G__16830,G__16831,G__16832,G__16833) : self__.dispatch_fn.call(null,G__16829,G__16830,G__16831,G__16832,G__16833));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16834 = a;var G__16835 = b;var G__16836 = c;var G__16837 = d;var G__16838 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__16834,G__16835,G__16836,G__16837,G__16838) : target_fn.call(null,G__16834,G__16835,G__16836,G__16837,G__16838));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16839 = a;var G__16840 = b;var G__16841 = c;var G__16842 = d;var G__16843 = e;var G__16844 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__16839,G__16840,G__16841,G__16842,G__16843,G__16844) : self__.dispatch_fn.call(null,G__16839,G__16840,G__16841,G__16842,G__16843,G__16844));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16845 = a;var G__16846 = b;var G__16847 = c;var G__16848 = d;var G__16849 = e;var G__16850 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__16845,G__16846,G__16847,G__16848,G__16849,G__16850) : target_fn.call(null,G__16845,G__16846,G__16847,G__16848,G__16849,G__16850));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16851 = a;var G__16852 = b;var G__16853 = c;var G__16854 = d;var G__16855 = e;var G__16856 = f;var G__16857 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__16851,G__16852,G__16853,G__16854,G__16855,G__16856,G__16857) : self__.dispatch_fn.call(null,G__16851,G__16852,G__16853,G__16854,G__16855,G__16856,G__16857));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16858 = a;var G__16859 = b;var G__16860 = c;var G__16861 = d;var G__16862 = e;var G__16863 = f;var G__16864 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__16858,G__16859,G__16860,G__16861,G__16862,G__16863,G__16864) : target_fn.call(null,G__16858,G__16859,G__16860,G__16861,G__16862,G__16863,G__16864));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16865 = a;var G__16866 = b;var G__16867 = c;var G__16868 = d;var G__16869 = e;var G__16870 = f;var G__16871 = g;var G__16872 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__16865,G__16866,G__16867,G__16868,G__16869,G__16870,G__16871,G__16872) : self__.dispatch_fn.call(null,G__16865,G__16866,G__16867,G__16868,G__16869,G__16870,G__16871,G__16872));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16873 = a;var G__16874 = b;var G__16875 = c;var G__16876 = d;var G__16877 = e;var G__16878 = f;var G__16879 = g;var G__16880 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__16873,G__16874,G__16875,G__16876,G__16877,G__16878,G__16879,G__16880) : target_fn.call(null,G__16873,G__16874,G__16875,G__16876,G__16877,G__16878,G__16879,G__16880));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16881 = a;var G__16882 = b;var G__16883 = c;var G__16884 = d;var G__16885 = e;var G__16886 = f;var G__16887 = g;var G__16888 = h;var G__16889 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16881,G__16882,G__16883,G__16884,G__16885,G__16886,G__16887,G__16888,G__16889) : self__.dispatch_fn.call(null,G__16881,G__16882,G__16883,G__16884,G__16885,G__16886,G__16887,G__16888,G__16889));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16890 = a;var G__16891 = b;var G__16892 = c;var G__16893 = d;var G__16894 = e;var G__16895 = f;var G__16896 = g;var G__16897 = h;var G__16898 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16890,G__16891,G__16892,G__16893,G__16894,G__16895,G__16896,G__16897,G__16898) : target_fn.call(null,G__16890,G__16891,G__16892,G__16893,G__16894,G__16895,G__16896,G__16897,G__16898));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16899 = a;var G__16900 = b;var G__16901 = c;var G__16902 = d;var G__16903 = e;var G__16904 = f;var G__16905 = g;var G__16906 = h;var G__16907 = i;var G__16908 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16899,G__16900,G__16901,G__16902,G__16903,G__16904,G__16905,G__16906,G__16907,G__16908) : self__.dispatch_fn.call(null,G__16899,G__16900,G__16901,G__16902,G__16903,G__16904,G__16905,G__16906,G__16907,G__16908));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16909 = a;var G__16910 = b;var G__16911 = c;var G__16912 = d;var G__16913 = e;var G__16914 = f;var G__16915 = g;var G__16916 = h;var G__16917 = i;var G__16918 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917,G__16918) : target_fn.call(null,G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917,G__16918));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16919 = a;var G__16920 = b;var G__16921 = c;var G__16922 = d;var G__16923 = e;var G__16924 = f;var G__16925 = g;var G__16926 = h;var G__16927 = i;var G__16928 = j;var G__16929 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16919,G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927,G__16928,G__16929) : self__.dispatch_fn.call(null,G__16919,G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927,G__16928,G__16929));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16930 = a;var G__16931 = b;var G__16932 = c;var G__16933 = d;var G__16934 = e;var G__16935 = f;var G__16936 = g;var G__16937 = h;var G__16938 = i;var G__16939 = j;var G__16940 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938,G__16939,G__16940) : target_fn.call(null,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938,G__16939,G__16940));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16941 = a;var G__16942 = b;var G__16943 = c;var G__16944 = d;var G__16945 = e;var G__16946 = f;var G__16947 = g;var G__16948 = h;var G__16949 = i;var G__16950 = j;var G__16951 = k;var G__16952 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950,G__16951,G__16952) : self__.dispatch_fn.call(null,G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950,G__16951,G__16952));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16953 = a;var G__16954 = b;var G__16955 = c;var G__16956 = d;var G__16957 = e;var G__16958 = f;var G__16959 = g;var G__16960 = h;var G__16961 = i;var G__16962 = j;var G__16963 = k;var G__16964 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16953,G__16954,G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963,G__16964) : target_fn.call(null,G__16953,G__16954,G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963,G__16964));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16965 = a;var G__16966 = b;var G__16967 = c;var G__16968 = d;var G__16969 = e;var G__16970 = f;var G__16971 = g;var G__16972 = h;var G__16973 = i;var G__16974 = j;var G__16975 = k;var G__16976 = l;var G__16977 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972,G__16973,G__16974,G__16975,G__16976,G__16977) : self__.dispatch_fn.call(null,G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972,G__16973,G__16974,G__16975,G__16976,G__16977));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16978 = a;var G__16979 = b;var G__16980 = c;var G__16981 = d;var G__16982 = e;var G__16983 = f;var G__16984 = g;var G__16985 = h;var G__16986 = i;var G__16987 = j;var G__16988 = k;var G__16989 = l;var G__16990 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990) : target_fn.call(null,G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16991 = a;var G__16992 = b;var G__16993 = c;var G__16994 = d;var G__16995 = e;var G__16996 = f;var G__16997 = g;var G__16998 = h;var G__16999 = i;var G__17000 = j;var G__17001 = k;var G__17002 = l;var G__17003 = m;var G__17004 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16991,G__16992,G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004) : self__.dispatch_fn.call(null,G__16991,G__16992,G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17005 = a;var G__17006 = b;var G__17007 = c;var G__17008 = d;var G__17009 = e;var G__17010 = f;var G__17011 = g;var G__17012 = h;var G__17013 = i;var G__17014 = j;var G__17015 = k;var G__17016 = l;var G__17017 = m;var G__17018 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__17005,G__17006,G__17007,G__17008,G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018) : target_fn.call(null,G__17005,G__17006,G__17007,G__17008,G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17019 = a;var G__17020 = b;var G__17021 = c;var G__17022 = d;var G__17023 = e;var G__17024 = f;var G__17025 = g;var G__17026 = h;var G__17027 = i;var G__17028 = j;var G__17029 = k;var G__17030 = l;var G__17031 = m;var G__17032 = n;var G__17033 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025,G__17026,G__17027,G__17028,G__17029,G__17030,G__17031,G__17032,G__17033) : self__.dispatch_fn.call(null,G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025,G__17026,G__17027,G__17028,G__17029,G__17030,G__17031,G__17032,G__17033));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17034 = a;var G__17035 = b;var G__17036 = c;var G__17037 = d;var G__17038 = e;var G__17039 = f;var G__17040 = g;var G__17041 = h;var G__17042 = i;var G__17043 = j;var G__17044 = k;var G__17045 = l;var G__17046 = m;var G__17047 = n;var G__17048 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043,G__17044,G__17045,G__17046,G__17047,G__17048) : target_fn.call(null,G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043,G__17044,G__17045,G__17046,G__17047,G__17048));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17049 = a;var G__17050 = b;var G__17051 = c;var G__17052 = d;var G__17053 = e;var G__17054 = f;var G__17055 = g;var G__17056 = h;var G__17057 = i;var G__17058 = j;var G__17059 = k;var G__17060 = l;var G__17061 = m;var G__17062 = n;var G__17063 = o;var G__17064 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__17049,G__17050,G__17051,G__17052,G__17053,G__17054,G__17055,G__17056,G__17057,G__17058,G__17059,G__17060,G__17061,G__17062,G__17063,G__17064) : self__.dispatch_fn.call(null,G__17049,G__17050,G__17051,G__17052,G__17053,G__17054,G__17055,G__17056,G__17057,G__17058,G__17059,G__17060,G__17061,G__17062,G__17063,G__17064));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17065 = a;var G__17066 = b;var G__17067 = c;var G__17068 = d;var G__17069 = e;var G__17070 = f;var G__17071 = g;var G__17072 = h;var G__17073 = i;var G__17074 = j;var G__17075 = k;var G__17076 = l;var G__17077 = m;var G__17078 = n;var G__17079 = o;var G__17080 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__17065,G__17066,G__17067,G__17068,G__17069,G__17070,G__17071,G__17072,G__17073,G__17074,G__17075,G__17076,G__17077,G__17078,G__17079,G__17080) : target_fn.call(null,G__17065,G__17066,G__17067,G__17068,G__17069,G__17070,G__17071,G__17072,G__17073,G__17074,G__17075,G__17076,G__17077,G__17078,G__17079,G__17080));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17081 = a;var G__17082 = b;var G__17083 = c;var G__17084 = d;var G__17085 = e;var G__17086 = f;var G__17087 = g;var G__17088 = h;var G__17089 = i;var G__17090 = j;var G__17091 = k;var G__17092 = l;var G__17093 = m;var G__17094 = n;var G__17095 = o;var G__17096 = p;var G__17097 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__17081,G__17082,G__17083,G__17084,G__17085,G__17086,G__17087,G__17088,G__17089,G__17090,G__17091,G__17092,G__17093,G__17094,G__17095,G__17096,G__17097) : self__.dispatch_fn.call(null,G__17081,G__17082,G__17083,G__17084,G__17085,G__17086,G__17087,G__17088,G__17089,G__17090,G__17091,G__17092,G__17093,G__17094,G__17095,G__17096,G__17097));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17098 = a;var G__17099 = b;var G__17100 = c;var G__17101 = d;var G__17102 = e;var G__17103 = f;var G__17104 = g;var G__17105 = h;var G__17106 = i;var G__17107 = j;var G__17108 = k;var G__17109 = l;var G__17110 = m;var G__17111 = n;var G__17112 = o;var G__17113 = p;var G__17114 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__17098,G__17099,G__17100,G__17101,G__17102,G__17103,G__17104,G__17105,G__17106,G__17107,G__17108,G__17109,G__17110,G__17111,G__17112,G__17113,G__17114) : target_fn.call(null,G__17098,G__17099,G__17100,G__17101,G__17102,G__17103,G__17104,G__17105,G__17106,G__17107,G__17108,G__17109,G__17110,G__17111,G__17112,G__17113,G__17114));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17115 = a;var G__17116 = b;var G__17117 = c;var G__17118 = d;var G__17119 = e;var G__17120 = f;var G__17121 = g;var G__17122 = h;var G__17123 = i;var G__17124 = j;var G__17125 = k;var G__17126 = l;var G__17127 = m;var G__17128 = n;var G__17129 = o;var G__17130 = p;var G__17131 = q;var G__17132 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__17115,G__17116,G__17117,G__17118,G__17119,G__17120,G__17121,G__17122,G__17123,G__17124,G__17125,G__17126,G__17127,G__17128,G__17129,G__17130,G__17131,G__17132) : self__.dispatch_fn.call(null,G__17115,G__17116,G__17117,G__17118,G__17119,G__17120,G__17121,G__17122,G__17123,G__17124,G__17125,G__17126,G__17127,G__17128,G__17129,G__17130,G__17131,G__17132));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17133 = a;var G__17134 = b;var G__17135 = c;var G__17136 = d;var G__17137 = e;var G__17138 = f;var G__17139 = g;var G__17140 = h;var G__17141 = i;var G__17142 = j;var G__17143 = k;var G__17144 = l;var G__17145 = m;var G__17146 = n;var G__17147 = o;var G__17148 = p;var G__17149 = q;var G__17150 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__17133,G__17134,G__17135,G__17136,G__17137,G__17138,G__17139,G__17140,G__17141,G__17142,G__17143,G__17144,G__17145,G__17146,G__17147,G__17148,G__17149,G__17150) : target_fn.call(null,G__17133,G__17134,G__17135,G__17136,G__17137,G__17138,G__17139,G__17140,G__17141,G__17142,G__17143,G__17144,G__17145,G__17146,G__17147,G__17148,G__17149,G__17150));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17151 = a;var G__17152 = b;var G__17153 = c;var G__17154 = d;var G__17155 = e;var G__17156 = f;var G__17157 = g;var G__17158 = h;var G__17159 = i;var G__17160 = j;var G__17161 = k;var G__17162 = l;var G__17163 = m;var G__17164 = n;var G__17165 = o;var G__17166 = p;var G__17167 = q;var G__17168 = r;var G__17169 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__17151,G__17152,G__17153,G__17154,G__17155,G__17156,G__17157,G__17158,G__17159,G__17160,G__17161,G__17162,G__17163,G__17164,G__17165,G__17166,G__17167,G__17168,G__17169) : self__.dispatch_fn.call(null,G__17151,G__17152,G__17153,G__17154,G__17155,G__17156,G__17157,G__17158,G__17159,G__17160,G__17161,G__17162,G__17163,G__17164,G__17165,G__17166,G__17167,G__17168,G__17169));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17170 = a;var G__17171 = b;var G__17172 = c;var G__17173 = d;var G__17174 = e;var G__17175 = f;var G__17176 = g;var G__17177 = h;var G__17178 = i;var G__17179 = j;var G__17180 = k;var G__17181 = l;var G__17182 = m;var G__17183 = n;var G__17184 = o;var G__17185 = p;var G__17186 = q;var G__17187 = r;var G__17188 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__17170,G__17171,G__17172,G__17173,G__17174,G__17175,G__17176,G__17177,G__17178,G__17179,G__17180,G__17181,G__17182,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188) : target_fn.call(null,G__17170,G__17171,G__17172,G__17173,G__17174,G__17175,G__17176,G__17177,G__17178,G__17179,G__17180,G__17181,G__17182,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__17189 = a;var G__17190 = b;var G__17191 = c;var G__17192 = d;var G__17193 = e;var G__17194 = f;var G__17195 = g;var G__17196 = h;var G__17197 = i;var G__17198 = j;var G__17199 = k;var G__17200 = l;var G__17201 = m;var G__17202 = n;var G__17203 = o;var G__17204 = p;var G__17205 = q;var G__17206 = r;var G__17207 = s;var G__17208 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__17189,G__17190,G__17191,G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198,G__17199,G__17200,G__17201,G__17202,G__17203,G__17204,G__17205,G__17206,G__17207,G__17208) : self__.dispatch_fn.call(null,G__17189,G__17190,G__17191,G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198,G__17199,G__17200,G__17201,G__17202,G__17203,G__17204,G__17205,G__17206,G__17207,G__17208));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__17209 = a;var G__17210 = b;var G__17211 = c;var G__17212 = d;var G__17213 = e;var G__17214 = f;var G__17215 = g;var G__17216 = h;var G__17217 = i;var G__17218 = j;var G__17219 = k;var G__17220 = l;var G__17221 = m;var G__17222 = n;var G__17223 = o;var G__17224 = p;var G__17225 = q;var G__17226 = r;var G__17227 = s;var G__17228 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__17209,G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226,G__17227,G__17228) : target_fn.call(null,G__17209,G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226,G__17227,G__17228));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write(writer__4163__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__17230 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__17230);
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.UUID.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4165__auto__,writer__4166__auto__,opts__4167__auto__){return cljs.core._write(writer__4166__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__17235 = x;var G__17236 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__17235,G__17236) : pred.call(null,G__17235,G__17236));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__17237 = y;var G__17238 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__17237,G__17238) : pred.call(null,G__17237,G__17238));
})()))
{return (1);
} else
{return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
