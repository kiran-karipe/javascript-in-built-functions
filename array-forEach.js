// The forEach() method executes a provided function once for each array element


Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const arr = [1, 2, 3];

function printArray(value, index, array) {
    console.log('this is value: ' + value);
    console.log('this is index: ' + index);
    console.log('this is array: ' + array);
}

function squareArray(value, index, array) {
    array[index] = value * value;
}

arr.myForEach(printArray);
arr.myForEach(squareArray);

console.log(arr); // [1, 4, 9]