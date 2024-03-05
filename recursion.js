/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case
  if (nums.length === 0) return 1;
  
  // Normal Case
  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, biggest = 0) {
  // Base Case
  if (words.length === 0) return biggest;

  // Normal Case
  if (words[0].length > biggest) biggest = words[0].length;
  return longest(words.slice(1), biggest)


}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base Case
  if (str.length === 0) return '';

  // Normal Case

  return str.charAt(0) + everyOther(str.slice(2))

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (str.length <=1 ) return true;

  // Compare the first and last characters
  if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
      return false;
  }

  // Normal Case
  return isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0) {
  //Base Case
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;

  // Normal Case
  return findIndex(arr, val, index + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, newStr = "") {
  // Base Case 
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  // Normal Case
  return revString(str, idx + 1, newStr);
}



/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length -1) {
  if (start > end) {
    return -1; // Base case: element not found
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
      return mid; // Base case: element found at mid index
  } else if (arr[mid] < val) {
      return binarySearch(arr, val, mid + 1, end); // Search in the right half
  } else {
      return binarySearch(arr, val, start, mid - 1); // Search in the left half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
