/* 9. Remove characters
Write an algorithm that deletes given characters from a string. 
For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou",
 the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
 Do not use Javascript's filter, split, or join methods. */

const charRemover = (word, charsToRemove) => {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    for (let j = 0; j < charsToRemove.length; j++) {
      if (word[i] === charsToRemove[j]) {
        letter = "";
      }
    }
    newWord += letter;
  }
  return newWord;
};

console.log(charRemover("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));
