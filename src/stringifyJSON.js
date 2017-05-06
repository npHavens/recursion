// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //instantiate variable to hold data type of obj
  var type =  typeof obj;

  if (obj === null) {
  	return 'null';
  }

  //BASE CASE: if data type is string, return obj
  if (type === 'string') {
  	return obj;
  }

  //if data type is number, return obj.toString()
  if (type === 'number') {
  	return obj.toString();
  }

  //if data type is array, iterate over elements of obj
  if (Array.isArray(obj)) {
    //instantiate var stringifiedArray '['
    var stringifiedArray = '[';
    //for each element
    obj.forEach(function(element) {
      stringifiedArray.concat(stringifyJSON(element) + ',');
    });
    return stringifiedArray.concat(']');
  }

  //else iterate over properties of obj
  //instantiate var stringifiedObj '{'
  var stringifiedObj = '{';
  for (var prop in obj) {
    //for each prop
    stringifiedObj.concat(prop + ':' + stringifyJSON(obj[prop]) + ',');
  }
  return stringifiedObj.concat('}');
};
