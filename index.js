function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split("").reverse().join("");
  if (reverse === word) {
    return true;
  }
  return false;
}

console.log(isPalindrome("robot"));
/* 
  word.split("") => splits the strings into an array of elements ["r", "o", "b", "o", "t"]
  .reverse() => reverse the split array of strings ["t", "o", "b", "o", "r"];
  .join("") => joins all of the elements in the array to form a string: "tobor"

  assign an if statement that if the reverse word does NOT equal the word passed in as an argument, the return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;