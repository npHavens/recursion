// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //instantiate empty array for results
  var matchedElements = [];
  //instantiate var body
  var body = document.body;
  //define function iterateNodes(node) to iterate over body
  var iterateNode = function(node) {
  	console.log(node);
    if (node.classList && node.classList.contains(className)) {
      matchedElements.push(node);
    }
    if (node.childNodes) {
      //iterate over childNodes
        //for each childNode
      for (var i = 0; i < node.childNodes.length; i++) {
        iterateNode(node.childNodes[i]);
      }
    }
    // } else {//BASE CASE: else stop iteration
    //   return;
    // }
  }
  iterateNode(body);
  return matchedElements;
};
