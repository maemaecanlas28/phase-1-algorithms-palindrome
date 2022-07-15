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
