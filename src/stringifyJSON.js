// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // If null, return stringed version of null
  if (obj === null) {
  	return String(obj);
  }
  // If undefined or is function, just return
  if (obj === undefined || obj.constructor === Function) {
  	return;
  }
  // If number, boolean, or string, return with specific format
  if (obj.constructor !== Object && obj.constructor !== Array) {
  	if (obj.constructor === String) {
  	  return "\"" + obj + "\"";
    }
    if (obj.constructor === Number) {
      return obj.toString();
    }
    return String(obj);
  }
  // If array, make recursive calls to each member
  if (obj.constructor === Array) {
  	var stringArray = new Array();
  	for (var i = 0; i < obj.length; i++) {
  		stringArray.push(stringifyJSON(obj[i]));
  	}
  	return "[" + stringArray.join(",") + "]";
  }
  // If object, make recursive calls to each key/value pair
  if (obj.constructor === Object) {
  	var stringArray = new Array();
  	for (var key in obj) {
  	  if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
  	  	stringArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  	  }
  	}
  	return "{" + stringArray.join(",") + "}";
  }
};