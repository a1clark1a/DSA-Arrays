/* 3. Exploring the pop() method
What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
*/
const Array = require("./ArrayClass");

function main() {
  let arr = new Array();

  console.log("pushing 3");
  arr.push(3);
  console.log("pushing 5");
  arr.push(5);
  console.log("pushing 15");
  arr.push(15);
  console.log("pushing 19");
  arr.push(19);
  console.log("pushing 45");
  arr.push(45);
  console.log("pushing 10");
  arr.push(10);

  console.log("Array before popping", arr);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  /*What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
  length 3, capacity, 12, ptr 3
  
  length is 3 because we removed an element in the array 3 times.
  capacity is still 12 since removing an element doesn't call for a decrease in size nor does cause it to increase in capacity 
  memory is still at 3 since no memory management was needed when removing elements
  */
}

main();
