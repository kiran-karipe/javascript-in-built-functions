// filter function is often used to loop through an array and extract the elements that pass a certain condition specified in a callback function


Array.prototype.myFilter = function(callback, filterValue) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], filterValue)) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}

const filterArray = (arrayValue, filterValue) => {
    return arrayValue === filterValue;
}

const arr = [1, 2, 2, 1, 3, 4, 1, 2, 1];
console.log(arr.myFilter(filterArray, 2)); // [2, 2, 2]
console.log(arr.myFilter(filterArray, 1)); // [1, 1, 1, 1]
console.log(arr.myFilter(filterArray, 6)); // []