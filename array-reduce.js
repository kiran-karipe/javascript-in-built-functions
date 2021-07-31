// The reduce() method executes a reducer function (that you provide) on each member of the array
// resulting in a single output value.



Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;

    for (let index = 0; index < this.length; index++) {
        result = callback(result, this[index]);
    }

    return result;
} 

const arr = [1,2,3];
const arr1 = ['kiran', 'kiran', 'kiran', 'karipe','karipe'];

const add = (total, val) => {
    return total + val;
}

const wordCount = (acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}
arr.myReduce(add, 0);
arr1.myReduce(wordCount, {});