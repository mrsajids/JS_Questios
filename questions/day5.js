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
let str = "abc";
function shiftString(str) {
    let s =str
    for (let i = 0; i < str.length-1; i++) {
        s =s.slice(1)+s[0]
        console.log(s);
         
    }
//    c(or s.slice(1)) → removes the first character.
// + s[0] → adds that first character at the end.
} 
shiftString(str)