// Valid Anagram ⏳⏳
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// anagaram means Both strings use the exact same characters Order doesn't matter
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false ⏳
// let s = "rat",
//   t = "car";

// function checkAnagram(s, t) {
//   if (s.length === t.length) {
//     const str1 = s.split("");
//     const str2 = t.split("");
//     console.log(str1, str2);

//     for (let i = 0; i < t.length; i++) {
//       const element = t[i];
//     //   console.log(str1.includes(element));

//       if (!str2.includes(element)) {
//         break
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAnagram(s, t));


// Reverse Vowels of a String ⏳⏳
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 
// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// let s = "IceCreAm";
// const vowels =['a','e','i','o','u','A','E','I','O','U'];
// function reverseVowels(s='') {
//     const temp =[]
//     let str=''
//     for (let i = 0; i < s.length; i++) {
//         const letter = s[i];
//         if(vowels.includes(letter)){
//             temp.push(letter);
//             str=str+'&';
//         }else
//         str=str+letter;
        
//     }
//     // console.log(str);
//     let finalstr = ''
//     for (let i = 0; i < str.length; i++) {
       
//         if(str[i]=='&'){
//             finalstr=finalstr+temp[temp.length-1];
//             temp.pop()
//         }else{
//             finalstr=finalstr+str[i]
//         }
        
//     }
//     return finalstr;
// }
// console.log(reverseVowels(s));

// reverseVowels(s);



// Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// let s = "   fly me   to   the moon  "
// function lengthOfLastWord(s='') {
//     const lastWord = s.trim().split(' ').slice(-1);
//    return lastWord.toString().length
// }
// console.log(lengthOfLastWord(s));
