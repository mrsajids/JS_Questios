// 1. Count how many times each letter appears
// const str = "sajeed" // out:{ s: 1, a: 1, j: 1, e: 2, d: 1 }
// const count = {}

// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     // console.log(count[element]);
//     if(count[element])
//         count[element]= count[element]+1;
//     else 
//         count[element]= 1;
// }
// console.warn(count);



// 2. Reverse a String
// - **Input:** `"hello"`
// - **Output:** `"olleh"`
// -- with inbuilt functions solution
// const str = "hello" 
// const result = str.split('').reverse().join('')
// console.log(result);

// -- custom solution
export function reserveString(str) {
  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    result = result + element;
  }
  return result;
}

// console.log(reserveString(str));

// 3. Reverse the Words in a Sentence
// Input: "The sky is blue"
// Output: "blue is sky The"
// const sentence = "The sky is blue";
// function reverseSentence(sentence) {
  //  --with inbuilt functions
  // const result = sentence.split(' ').reverse().join(' ');
  // return result;

  // --custom
  //   -- Reverse the whole sentence.
  // -- Then reverse each word individually.
//   const resversed_sentence = reserveString(sentence);

//   let word = "";
//   let result = "";
//   for (let index = 0; index < resversed_sentence.length; index++) {
//     const element = resversed_sentence[index];

//     if (element === " " || index === resversed_sentence.length - 1) {
//       result = result +" "+ reserveString(word);
//       word = "";
//     } else word += resversed_sentence[index];
//   }
//   return result;
// }
// console.log(reverseSentence(sentence));

// 4. Check if String is Palindrome
// - **Input:** `"racecar"`
// - **Output:** `true`
// const str = "racecar";
// function checkPalindrome(str) {
//     const result = str.split('').reverse().join('');
//     return result===str;
// }
// console.log(checkPalindrome(str));



