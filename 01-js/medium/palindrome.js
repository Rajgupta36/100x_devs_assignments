/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const arr = str.toLowerCase().replace(/\s/g, "").replace(/[^\w\s]|_/g, '').split('');
  console.log(arr);
  let i = 0, j = arr.length - 1;
  console.log(j)
  while (i <= j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++; j--;
  }
  console.log('yes');
  return true;
}


isPalindrome('A! man a plan a canal Panama');

module.exports = isPalindrome;
