/*
🔹============Linear Search============
Concept: Scan each element until found.
Use case: Unsorted data.
Complexity: O(n)

🔹 ============Binary Search============
Concept: Divide and conquer — works on sorted arrays.
Use case: Efficient lookups.
Complexity: O(log n)

🔹Practice variations:
Find first/last occurrence
Search in rotated sorted array
Find element insert position
*/
const arr = [1, 2, 6, 9, 0, -5];
// function linearSearch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
// }
// return -1;
// }
// console.log(linearSearch(arr, 1));

// // indexOf exactly do the same 
// console.log(arr.indexOf(-5))

// // return true if found
// console.log(arr.includes(-5));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr2, 3));
