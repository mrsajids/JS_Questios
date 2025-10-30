/*
🧩 Level 1: Subarrays (Arrays)
🧠 Problem 3: Print all subarrays

Example:
Input: [1, 2, 3]
Output:
[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]
*/
function getSubArrays(arr) {
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
        subArray.push(arr.slice(i,j));
    }
    
  }
  return subArray;
}
console.log(getSubArrays([1, 2, 3]));