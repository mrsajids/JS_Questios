/*
🧩 Level 1: Substrings (Strings)
🧠 Problem 1: Print all substrings of a string
*order and continuity is very important.

Example:

Input: "abc"
Output: "a", "ab", "abc", "b", "bc", "c"  

[0,0] [0,1] [0,2]
[1,1] [1,2]
[2,2]
*/

// function getSubStrings(str) {
//   let substring = [];
//   for (let i = 0; i < str.length; i++) {
//     let s = "";
//     for (let j = i; j < str.length; j++) {
//       s = s + str[j];
//       substring.push(s)
      
//     }
//   }
//   return substring
// }
// console.log(getSubStrings("abc"));

//  we use different way with substring function because substring(start,end) end exclusive
/* Using substring function
[0,1] [0,2] [0,3]
[1,2] [1,3]
[2,3]
 */
// function getSubStrings(str) {
//   let substring = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j <= str.length; j++) {
//       substring.push(str.substring(i,j))
//     }
//   }
//   return substring
// }
// console.log(getSubStrings("abc"));

/*
🧠 Problem 2: Count total number of substrings
For a string of length n, the number of substrings is
Total = 𝑛 × ( 𝑛 + 1 ) / 2 
*/

// function getPossibleSubStrings(str) {
//     const possibleSubStrins = str.length * (str.length + 1)/2
//     return possibleSubStrins
//   }
//   console.log(getPossibleSubStrings("abc"));
