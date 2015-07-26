// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var classElements = [];
  // Define a function for testing className
  var checkClass = function(element, className) {
  	// Check if the current element is text, if so, ignore
	if (element.nodeName !== "#text") {
	  // Check if current element has class, if so add to array
	  if (element.classList.contains(className)) {
  	    classElements.push(element/*.localName + "." + className*/);
  	  }
  	  // If current element has nested, call getElementsByClassName on those nested elements
	  for (var i = 0; i < element.childNodes.length; i++) {
        checkClass(element.childNodes[i], className);
      }
    }
  }
  // Initiate recursive call
  checkClass(document.body, className);
  return classElements;
};