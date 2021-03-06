/* 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters.
 A solution that developers can use to solve this problem is to replace any spaces with a %20. 
 Write a method that takes in a string and replaces all its empty spaces with a %20. 
 Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be*/

const URLify = word => {
  return word.replace(/\s/g, "%20");
};

console.log(URLify("www.thinkful.com /tauh ida parv een"));
