// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
 
  //instantiate empty array for results
  var matchedElements = [];
  //instantiate variable for current element
  var node = $(this);
  console.log(node.childNodes)
  //define function for checking if element has className
  var hasClass = function(element) {
   //iterate through class list and push element to matchedElements if there is a match
    if (element.classList) {
      for (var i = 0; i < element.classList.length; i++) {
        if (element.classList[i] === className) {
    	  return true;
        }
      }
    }
    return false;
  }

  if (hasClass(node)) {
  	matchedElements.push(node);
  }
  
  //BASE CASE: if node.childNodes.length === 0, return matched elements
  if (!node.childNodes) {
  	return matchedElements;
  }
  
  //else iterate over node.childNodes
  for (var i = 0; i < node.childNodes.length; i++) {
    matchedElements = matchedElements.concat(getElementsByClassName.call(node.childNodes[i], className))
  }
 
};
