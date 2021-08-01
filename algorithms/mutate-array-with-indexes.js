/* Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index.  */

const arr = [1,2,3,4,5];
const arrIndexes = [2,0,4,1,3];

const visited = [];

for (let i = 0; i < arrIndexes.length; i++) {
	if (visited.indexOf(i) < 0) {
  	const temp = arr[arrIndexes[i]];
    arr[arrIndexes[i]] = arr[i];
    arr[i] = temp;
    visited.push(arrIndexes[i]);
  }
}

console.log(arr);