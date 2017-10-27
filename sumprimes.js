// Find the sum of the first 100 prime numbers. Your code should be able to do this in less than 10 seconds.

// After you are done, copy the code to either http://labs.codecademy.com or post it in the Challenge forum.

// Note: Labs is no longer officially supported but works fine for now.
var sumprimes = function sumprimes(howmany) {
    var sum = 0;
    count = 0;
    number = 2;
    while(count !== howmany){ //keep looping until the count = the first 100
        if(isPrime(number)){
            sum += number;
            count++;
        }
        number++;
    }
    function isPrime(number){ //function to determine if number is a prime number
        for(var i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
    return sum;
};

var a = sumprimes(100);
console.log(a);
