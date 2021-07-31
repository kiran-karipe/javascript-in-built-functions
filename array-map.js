
// A map is a built-in function of Arrays in javascript which helps us iterate over 
// each individual element of the array (can also apply a transform function on each element)
// and returns a brand new array.



Array.prototype.mymap = function(callback) {

	const resultArray = [];
  
  for (let index = 0; index < this.length; index++) {
  	resultArray.push(callback(this[index]));
  }

	return resultArray;
}

const arr = [1,2,3];

console.log(arr.mymap((val) => {
	return val * 2;
}));
