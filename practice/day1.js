// Given a sorted array, find if there exist two numbers whose sum equals a target.
// // [2, 5, 4, 5, 8, 9] target = 9
// const arr = [2, 5, 4, 5, 8, 9];
// function findTwoNumberSum(arr, target) {
//   let l = 0,
//     csum = 0;
//   for (let r = 0; r < arr.length; r++) {
//     // console.log(csum);
//     if (csum < target) {
//       csum = csum + arr[r];
//     } else if (csum > target) {
//       csum = csum - arr[l];
//       l++;
//     }
//     if (csum == target) {
//       return [l, r];
//     }
//   }
//   return [];
// }
// console.log(findTwoNumberSum(arr, 9));

/*
🟡 Problem 3: Count Subarrays With Sum ≤ K
You are given an array of positive integers nums and an integer k.
Return the total number of contiguous subarrays whose sum is less than or equal to k.
Example
Input: nums = [1,2,3]
k = 4  */


// function countMaxSum(arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0,
//       j = i;
//     while (sum <= k && j < arr.length) {
//       sum += arr[j];
//       j++;
//       if (sum <= k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(countMaxSum([1,2,3],3))
/* 
🟡 Problem 2: Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring that contains no repeated characters.
Example
Input: s = "abcabcbb"
Output: 3
a:1, b:1 c:1 
*/
function LongestSubString(str) {
  for (let i = 0; i < str.length; i++) {
    j = i
    const map = new Map()
    while (j < str.length - 1) {
      if (map.has(str[j])) {
        map.set(str[j], map.get(str[j]) + 1)
      } else {
        map.set(str[j], 1)
      }
      j++
    }
    console.log(map)
  }
  return str;

}
console.log(LongestSubString("abcabcbb"))
