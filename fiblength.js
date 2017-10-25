var fiblength = function fiblength(nth) {
  var fib = [1, 1];
  var count = 2;
  while(count !== nth){
      fib.push(fib[0] + fib[1]);
      fib.shift();
      count++;
  }
  fib[1] = fib[1].toString();
  if(fib[1].includes('e')){
    var index = fib[1].indexOf('e'); //find exponent in string
    var exponent = fib[1].substring(index + 1, fib[1].length); //find the number
    return +exponent + 1; //return that number + 1
  }else{
    return fib[1].length;
  }
};

a = fiblength(500);
console.log(a);
