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
  	var $element = $(element);
  	console.log($element);
  	  // Check if current element has class, if so add to array
      if ($element.hasClass(className)) {
      	classElements.push($element[0]/*.localName + "." + className*/);
      }
      // If current element has nested, call getElementsByClassName on those nested elements
      for (var i = 0; i < $element.children().length; i++) {
      	checkClass($element.children()[i], className);
      }
  }
  // Initiate recursive call
  checkClass(document, className);
  return classElements;
};