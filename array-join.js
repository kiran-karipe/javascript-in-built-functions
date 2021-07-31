// join() Joins all elements of an array into a string.

Array.prototype.myJoin = function() {
    let result = '';

    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
}


const arr = [1, 2, 2, 1, 3, 4, 1, 2, 1];
console.log(arr.myJoin()); // "122134121"
