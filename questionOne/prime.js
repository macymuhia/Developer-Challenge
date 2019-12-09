// Write a function is Prime that returns true if a number is prime.

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}