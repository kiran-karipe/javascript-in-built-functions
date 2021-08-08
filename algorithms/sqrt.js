// Implement a square root function (if not a perfect square gives you the nearest squateRoot number).

function squareRoot(num) {
    let i = 1;
    let result = i;
    while ((i * i) <= num) {
      result = i;
      i++;
    }
      return result;
  }
  
  console.log(squareRoot(9)); // 3
  console.log(squareRoot(16)); // 4
  console.log(squareRoot(256)); // 16
  console.log(squareRoot(49)); // 7
  console.log(squareRoot(8)); // 2
  console.log(squareRoot(33)); // 5