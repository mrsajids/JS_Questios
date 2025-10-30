// 1. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.

// const mergeAlternately = (word1, word2) => {
//   const length = word1.length > word2.length ? word1.length : word2.length;
//   let s = "";
//   for (let i = 0; i < length; i++) {
//     const letter1 = word1[i] ? word1[i] : "";
//     const letter2 = word2[i] ? word2[i] : "";
//     s = s + letter1 + letter2;
//   }
//   return s;
// };

// console.log(mergeAlternately("ab", "pqrs"));

const removeMultiSpaces = (word) => {
  let s = "";
//   for (let i = 0; i < word.length; i++) {
   
//   }
  return word.replace(/\s+/g,' ');
};

console.log(removeMultiSpaces("  my  is    "));
