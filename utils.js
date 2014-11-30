function createRequest() {
		 try {
		 	 request = new XMLHttpRequest();
		 }catch (tryMS) {
		 		try {
					request = new ActiveXObject("Msxml2.XMLHTTP");
				}catch (otherMS) {
					   try {
					   	   request = new ActiveXObject("Microsoft.XMLHTTP");
					   }catch (failed) {
					   		  request = null;
					   }
				}
		 }
		 return request;
}

function getActivatedObject(e) {
  var obj;
  if (!e) {
    // early version of IE
    obj = window.event.srcElement;
  } else if (e.srcElement) {
    // IE 7 or later
    obj = e.srcElement;
  } else {
    // DOM Level 2 browser
    obj = e.target;
  }
  return obj;
}

function addEventHandler(obj, eventName, handler) {
  if (document.attachEvent) {
    obj.attachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
    obj.addEventListener(eventName, handler, false);
  }
}

function disableEventHandler(obj, eventName, handler) {
  if (document.attachEvent) {
    obj.detachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
    obj.removeEventListener(eventName, handler, false);
  }
}

function sendRequest(passvar) {
		 var url = passvar;
		 request = createRequest();
		 if (request == null) {
		 	 alert("Unable to create request");
			 return;
		 }
		 request.open("GET",url,true);
		 request.onreadystatechange = getImages;
		 request.send(null);		
}

function isArray(arg) {
		 if (typeof arg == 'object') {
		 	var criteria = arg.constructor.toString().match(/array/i);
			return (criteria != null);
		 }
		 return false;
}

function changeOpacity(obj,value) {
	if (!document.attachEvent) {
		obj.style.opacity = value;		//Mozilla Browsers
	}else{
		obj.style.filter = "alpha(opacity="+value*100+")";  //IE Browsers
	}
}
