// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //instantiate variable to hold data type of obj
  if (obj === null) {
  	return 'null';
  }

  var type =  typeof obj;

  //BASE CASE: if data type is string, return obj
  if (type === 'string') {
  	return '"' + obj + '"';
  }
  //if data type is number, return obj.toString()
  if (type === 'number' || type === 'boolean') {
  	return obj.toString();
  }

  //if data type is array, iterate over elements of obj
  if (Array.isArray(obj)) {
    //instantiate var stringifiedArray '['
    var stringifiedArray = '[';
    //for each element
    obj.forEach(function(element, i) {
      stringifiedArray += stringifyJSON(element) + (i < obj.length - 1 ? ',' : '');
    });
    return stringifiedArray.concat(']');
  }

  //else iterate over properties of obj
  //instantiate var stringifiedObj '{'
  var stringifiedObj = '{';
  for (var prop in obj) {
    //for each prop
    stringifiedObj += prop + ':' + stringifyJSON(obj[prop]) + ',';
  }
  return stringifiedObj.concat('}');
};
