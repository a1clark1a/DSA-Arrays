/*2. Explore the push() method
What is the length, capacity and memory address of your array?

Add the following in the main function and then print the array: */

const Array = require("./ArrayClass");

function main() {
  let arr = new Array();

  arr.push(3);
  //What is the length, capactiy and memory address of your array?
  //length 1, capacity, 3, ptr = 0;

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
  /*What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code. 
    length 6, capactiy, 12, ptr 3
    
    length is 6 because we pushed 6 items into the array
    
    capacity is 12 because in order to accomodate pushing the 4th value(19) 
    we needed to resize the array by calling this._resize((this.length(3) + 1) * Array.SIZE_RATIO(3))
    
    ptr //memory address is changed to 3 to accomodate the resizing
  */

  console.log(arr);
}

main();
