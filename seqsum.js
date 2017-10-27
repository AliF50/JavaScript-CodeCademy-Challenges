// Find the sum of the terms of the following sequence:

// f_n = (-1)^n * (n*(n-1) + n ^ 3)
// for 0<=n<=50
var seqsum = function seqsum(n) {
  var sum = 0;
  for(var i = 0; i <= n; i++){
    sum += Math.pow(-1, i)*(i*(i - 1) + Math.pow(i, 3));
  }
  return sum;
};

a = seqsum(50);
console.log(a);
