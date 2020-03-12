/*7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence. */

const maxSum = input => {
  let currentSum = 0;
  let max = input[0];
  input.forEach(elem => {
    currentSum += elem;
    if (currentSum > max) {
      max = currentSum;
    }
  });

  return max;
};

console.log(maxSum([4, 6, -3, 5, -2, 1]));
