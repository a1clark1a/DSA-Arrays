/* 8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.*/

const merge = (array1, array2) => {
  let mergedArr = array1.concat(array2);
  return mergedArr.sort(function(a, b) {
    return a - b;
  });
};

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
