/*
Pattern 2: Two Pointers Pattern
## The Two Pointers pattern involves using two variables (pointers) that iterate through a data structure (like an array or string) from different directions (or with different speeds) to solve problems efficiently — often in O(n) time instead of O(n²) ##
These pointers can:
Start from both ends (left/right)
Move in the same direction
Move at different speeds (fast/slow)

| Problem Type               | Example                                 |
| -------------------------- | --------------------------------------- |
| Pair sum                   | Find if two numbers add up to a target  |
| Removing duplicates        | From sorted arrays or strings           |
| Reverse / Palindrome check | Reverse string or check palindrome      |
| Move elements              | Move zeros, partition array, Dutch flag |
| Linked list cycles         | Detect cycle using slow/fast pointers   |
*/
// function reserveString(str) {
//   let left = 0,
//     right = str.length - 1;
//   for (let i = 0; i < array.length; i++) {
//     const letter = array[i];
    
//   }
//   return str;
// }
// console.log(reserveString("sajid"));

// | Find if two numbers add up to a target
function twoSum(nums, target) {
  let left = 0,
    right = left + 1;
  let sum = 0;
  for (let i = 0; i < nums.length-1; i++) {
    sum = nums[left] + nums[right];
    if (sum == target) {
        return [left,right]
    }
    console.log(sum);
    
    right++
  }
  return [-1];
}
console.log(twoSum([2, 7, 11, 15], 26));

  