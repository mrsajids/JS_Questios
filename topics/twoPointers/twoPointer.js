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
function reserveString(str) {
  let s = str.split('');
  let left = 0,
    right = s.length - 1;

    while (left<right) {
    [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }

  return s.join('');
}
console.log(reserveString("sajid"));

// | Find if two numbers add up to a target
// function twoSum(nums, target) {
//   let left=0, right = nums.length-1;
//   for (let i = 0; i < nums.length; i++) {
//     const sum = nums[left]+nums[right]
//     console.log(sum);
    
//     if(sum<target)
//       left++;
//     else if(sum>target)
//       right--;
//     else 
//       return [left,right]
    
//   }
//   return [0]
// }
// console.log(twoSum([2,3,4], 6));

// | Find if two numbers add up to a target(by brute force)
// function twoSumUnsorted(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//           const sum = nums[i]+nums[j]
//           if(sum==target)
//          return [i,j]
//     }
    
//   }
// }
// console.log(twoSumUnsorted([2,3,4], 6));
// | Find if two numbers add up to a target(by hasing)
// function twoSumUnsorted(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if(map.has(complement)){
//       return [map.get(complement),i]
//     }
//     map.set(nums[i],i)
//   }
 
// }
// console.log(twoSumUnsorted([2,1,5,4], 6));

// function removeDuplicates(nums) {
//   let left = 0,
//     right = left + 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[left] == nums[right]) nums.shift();
//     console.log(nums);
//   }
//   return nums;
// }
// console.log(removeDuplicates([1,1,4,5,5,6]));

function removeNonAlphanumeric(inputString) {
  return inputString.replace(/[^a-zA-Z]/g, "");
}
function validPalindrom(s) {
  let originalString = removeNonAlphanumeric(s).toLowerCase();
  let reversedString = removeNonAlphanumeric(s).toLowerCase().split('').reverse().join('');
  return originalString===reversedString;
}                                                                                                                                                                                               
console.log(validPalindrom("A man, a plan, a canal: Panama"));


  