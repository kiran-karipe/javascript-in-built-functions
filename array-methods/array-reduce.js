Array.prototype.myReduce = function(callback, initialValue) {
	let result = initialValue;
  for (let i = 0; i < this.length; i++) {
  	result = callback(result, this[i], i, this);
  }

  console.log(result);
}

const arr = [1,2,3,4,5];

// Product
arr.myReduce(function(total, acc) {
	return total * acc; // 120
}, 1)

// Sum
arr.myReduce(function(total, acc) {
	return total + acc; // 16
}, 1)

// Average
arr.myReduce(function(total, acc, index, array) {
	total += acc;
  if (index === array.length - 1) {
    return total / array.length; // 3.2
  } else {
    return total;
  }
}, 0)
  
  
// We can perform map and filter operations of array using array
// multiply by 2 for each element and return new array (Array Map method)
arr.myReduce(function(total, acc) {
  total.push(acc * 2);
  return total;
}, [])

// filter array with values greather than 2 (Array Filter method)
arr.myReduce(function(total, acc) {
	if (acc > 2) {
  	total.push(acc);
  }
  return total;
}, [])

// creating a tally (Similar to hashamp)
const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

fruits.myReduce(function(total, acc) {
	total[acc] = (total[acc] || 0) + 1;
  return total;
}, {})