// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //instantiate variable to hold data type of obj
  //BASE CASE: if data type is string, return obj

  //if data type is number, return obj.toString()

  //if data type is array, iterate over elements of obj
    //instantiate var stringifiedArray '['
    //for each element
      //stringifiedArray.concat(stringifyJSON(element) + ',')
    //return stringifiedArray.concat(']')

  //else iterate over properties of obj
    //instantiate var stringifiedObj '{'
    //for each prop
      //stringifiedObj.concat(prop + ':' + stringifyJSON(obj[prop]) + ',')
};
