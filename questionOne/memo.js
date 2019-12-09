// Write a function called memoize that takes any other function as input
// and returns a memoized version of that function

function memoize(func) {
    let cache = {};
    return function(n) {
        if (cache[n] != undefined) {
            return cache[n]
        } else {
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}