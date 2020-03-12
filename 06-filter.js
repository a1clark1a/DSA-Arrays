/*6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
DO NOT use Array's built-in .filter() method here; write the algorithm from scratch. */

const filter = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(filter([10, 6, 4, 5]));
