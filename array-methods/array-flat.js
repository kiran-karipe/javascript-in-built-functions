/* In JavaScript, write a function that takes an array as input that can contain both ints and more arrays (which can also contain an array or int) and return the flattened array.

ex. [1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6] */


const givenArr = [1, [2, [ [3, 4], 5], 6]];


const flattenArray = (arr) => {	
  if (arr instanceof Array) {
       return arr.length === 0 ? [] : flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
  }

  return [arr];
}
console.log(flattenArray(givenArr));  // deep flatten array (best solution)

console.log(givenArr.reduce((acc, curVal) => {
	return acc.concat(curVal)
}, [])); // it does only one level of flatten

console.log([].concat.apply([], givenArr)); // it does only one level of flatten



var input = [1, [2, [ [3, 4], 5], 6]];
function flatten(input) {
    var i, placeHolder = [input], lastIndex = [-1], out = [];
    while (placeHolder.length) {
        input = placeHolder.pop();
        i = lastIndex.pop() + 1;
        for (; i < input.length; ++i) {
            if (Array.isArray(input[i])) {
                placeHolder.push(input);
                lastIndex.push(i);
                input = input[i];
                i = -1;
            } else out.push(input[i]);
        }
    }
    return out;
}
console.log(flatten(input));