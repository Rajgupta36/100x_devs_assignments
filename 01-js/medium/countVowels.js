/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  let j = 0;
  const arr = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
      j++;
    }
  }
  return j;
}

module.exports = countVowels;