function isPalindrome(word) {
  // Remove any non-alphanumeric characters and convert the string to lowercase
  var cleanedStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Remove any non-alphanumeric characters from the input string and convert it to lowercase.
  2. Reverse the cleaned string.
  3. Compare the cleaned string with its reversed version.
  4. If they are the same, return true (the input string is a palindrome).
  5. Otherwise, return false (the input string is not a palindrome).
*/

/*
  Explanation:
  The function first cleans the input string by removing any characters that are not letters or numbers and converts the string to lowercase. This ensures that the comparison is case-insensitive and ignores any non-alphanumeric characters. Then, it compares the cleaned string with its reverse. If both are identical, it means the original input string is a palindrome and the function returns true. Otherwise, it returns false.
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
