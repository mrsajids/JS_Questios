// Lets learn shift, unshift, push, pop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift(); // removes the first element from the array


// fruits.unshift('new-item1');  // add the element at the begining of the array
// fruits.unshift('new-item2');

// fruits.push('new-fruit') // add the element at the end of array

// fruits.pop() // remove the element from elemnt

// console.log(fruits);


// ===================================================================

// shift charcter of a string 
// "abc" → "bca"
// let str = "abc";
// function shiftString(str) {
//    const result = str.slice(1)+str[0]
//    console.log(result);
   
// }
// shiftString(str)
// ===================================================================

// shift charcter of a string 
// "abc" → "bca" → "cab" 
// let str = "abc";
// function shiftString(str) {
//     let s =str
//     for (let i = 0; i < str.length-1; i++) {
//         s =s.slice(1)+s[0]
//         console.log(s); 
         
//     }
// //    c(or s.slice(1)) → removes the first character.
// // + s[0] → adds that first character at the end.
// } 
// shiftString(str)

// ===================================================================
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
 
// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

let str = "abcde";
function shiftString(str,goal = "cdeab") {
    if(str.length!==goal.length)
        return false; // Since their lengths are different, no number of shifts can ever make s equal to goal
    let s = str
    for (let i = 0; i < str.length; i++) {
        s = s.slice(1)+s[0]
        if(goal.includes(s))
            return true;
    }
    return false;
} 
console.log(shiftString(str));

