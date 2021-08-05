/* You are given an array of N elements in the form "property1: value1; property2: value2;...;propertyX: valueX;" for some N and any X. There is also another array of M elements of the form "property: value". You are supposed to write an algorithm to remove every element in the N length array that has a "property: value" pair in the M length array.

The trick is that the most intuitive solution of iterating through the M array and filtering the N array at each element is already written. You must come up with a solution that solves the problem in less than O(NM) time. */


// O(n) solution

const arrN = [{prop1: "value1"}, {prop2: "value2"}, {prop3: "value3"}, {prop4: "value4"}];

const arrM = [{prop3: "value3"}, {prop4: "value1"}, {prop6: "value6"}, {prop7: "value7"}];

const mapM = new Map();

for (let i = 0; i < arrM.length; i++) {
  const key = Object.keys(arrM[i])[0];
  mapM.set(key, arrM[i][key]);
}

const resultArray = [];

for (let i = 0; i < arrN.length; i++) {
  const key = Object.keys(arrN[i])[0];
  const value = arrN[i][key];
  if (mapM.has(key)) {
    const mValue = mapM.get(key);
    if (mValue !== value) {
      resultArray.push({key, value});
    }
  } else {
    resultArray.push({key, value});
  }
}

console.log(resultArray);
