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