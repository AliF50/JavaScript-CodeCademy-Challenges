// Write a method that finds the sum of the ASCII values of a string. (The string is hidden behind the SCT. Your code will run with the input of a string.)
var asciisum = function asciisum(string) {
  var sum = 0;
  for(var i = 0; i < string.length; i++){
      sum += string[i].charCodeAt(0);
  }
  return sum;
};
