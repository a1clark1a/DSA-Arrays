/*10. Products
Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index. */

const product = arr => {
  return arr.map((elem, i) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (elem !== arr[i]) {
        product *= arr[i];
      }
    }
    return product;
  });
};
console.log(product([1, 3, 9, 4]));
