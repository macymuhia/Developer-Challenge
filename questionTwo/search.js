// Write a function search that accepts 2 arguments:
// 1. a collection of values
// 2. a value to find in the collection
// The function search should implement a binary search on the collection.
// If the value isn’t found in the collection, then the search function
// should return -1. If the value is found in the collection, then the
// function should return the first index of the value in the array.
// For example, asked to find the value 2 in the list [1,3,2,0], your
// function should return 2.

function search(value, ...values) {
    values.sort();
    let begin = 0;
    let end = values.length - 1;
    while (begin <= end) {
        const mid = begin + Math.floor((end - begin) / 2);
        if (values[mid] === value) {
            return mid;
        }
        if (values[mid] < value) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}