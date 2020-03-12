/* 4. Understanding more about how arrays work
Print the 1st item in the array arr.

Empty the array and add just 1 item: arr.push("tauhida");

Print this 1 item that you just added. What is the result? Can you explain your result?

What is the purpose of the _resize() function in your Array class?*/

const Array = require("./ArrayClass");

function main() {
  let arr = new Array();

  arr.push(3);
  arr.push(4);

  console.log("1st item in the arr", arr.get(0));

  console.log("Emptying array");

  arr.pop();
  arr.pop();

  console.log("adding tauhida");
  arr.push("tauhida");
  console.log("printing :", arr.get(0));
  // it prints NaN, because the ptr only stores a number type and tauhida is not a number

  console.log(arr);
  /* What is the purpose of the _resize() function in your Array class?
    for increasing the capacity/length of the array
  */
}

main();
