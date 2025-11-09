/*
The Sliding Window Pattern is a technique used to reduce time complexity in problems that involve contiguous sequences — like subarrays or substrings.

Instead of recomputing results from scratch for every possible window (which gives you an O(n²) solution), you “slide” a window (a range of elements) over the data, updating the result in O(1) each time → overall O(n).

⚙️ When to Use Sliding Window
Use it when you are asked for:
✅ The maximum / minimum / average / sum of a subarray or substring.
✅ The longest / shortest substring with certain properties.
✅ Any problem involving contiguous elements (not random access).

Identification:
  ---Fixed-Size---                        ---Dynamic---
  substring/subarray                      substring/subarray
  widow size                              condition/fix
                                          window size to find

  we use sum<, sum=                       we use sum<, sum=, sum>

VIDEO LINK: https://youtu.be/TfQPoaRDeMQ?si=aWE4OsOYAPDFzWZm

# Types 
1️⃣ Fixed-Size Sliding Window
2️⃣ Dynamic Sliding Window

1️⃣ Fixed-Size Sliding Window:- 
    Window size is known (e.g., size = K).
Add the new right element
Remove the old left element
Slide window forward
✅ Used for:
max sum / avg / count / any condition with constant size


2️⃣ Dynamic Sliding Window:- 
    Window expands until a condition breaks, then shrinks.
Move right pointer to expand
Move left pointer to shrink
Maintain validity of the window
✅ Used for:
Longest substring, smallest subarray, frequency constraints, distinct characters, etc.
 
### TYPE I ###
1) Given an array of integers nums and an integer k, find the sum of every contiguous subarray of size k.
Input: nums = [1, 2, 3, 4, 5, 6], k = 3
Output: [6, 9, 12, 15]


function sumOfSubarray(arr, k) {
  let left = 0;
  let windowSum = 0;
  let result = [];

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    if (right - left + 1 === k) {
      result.push(windowSum);
      windowSum -= arr[left];
      left++;
    }
  }

  return result;
}
console.log(sumOfSubarray([1, 2, 3, 4, 5, 6], 3));
*/
/*
[1, 2, 3, 4, 5, 6]
 ^  ^  ^         
 left       right

 [1, 2, 3, 4, 5, 6]
    ^  ^  ^
    left  right

[1, 2, 3, 4, 5, 6]
       ^  ^  ^
       left  right
 [1, 2, 3, 4, 5, 6]
           ^  ^  ^
          left  right
*/

/*
2)Given an array arr and an integer k, find the maximum sum among all subarrays of size k.
arr = [2, 1, 5, 1, 3, 2], k = 3, ans = 9

function maxSumOfSizeK(nums, k) {
  let left = 0,
    windowSum = 0,
    result = nums[0];

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right - left + 1 == k) {
      // if window is of size k=3
      if (windowSum > result) {
        result = windowSum;
      }
      windowSum -= nums[left];
      left++;
    }
  }
  return result;
}

console.log(maxSumOfSizeK([2, 1, 5, 1, 3, 2], 3));
*/

/*
### TYPE II ###
1) Smallest Subarray with Given Sum
Given an array of positive integers arr[] and a positive integer S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S.

Input:  arr = [2, 1, 5, 2, 3, 2], S = 7
Output: 2
Explanation: The smallest subarray with sum ≥ 7 is [5, 2].



 */
// function smallestSubArrayWithGivenSum(nums, target) {
//   let left = 0,
//     window_sum = 0,
//     min = Infinity;

//   for (let right = 0; right < nums.length; right++) {
//     window_sum += nums[right];

//     while (window_sum >= target) {
//       min = Math.min(right - left + 1, min);
//       window_sum -= nums[left];
//       left++;
//     }
//   }
//   return min === Infinity ? 0 : min;
// }
// console.log(smallestSubArrayWithGivenSum([2, 1, 5, 2, 3, 2], 7));

/*  Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/
function maxAvgSumArray(nums, k) {
  let left = 0,
    window_sum = 0,
    max = 0;

  for (let right = 0; right < nums.length; right++) {
    window_sum += nums[right];

    if(right-left+1==k) {
      max = Math.max(max,window_sum/k);
     console.log( nums.slice(left,right+1))

     window_sum -= nums[left];

      left++;
    }
  }
  return max
}
console.log(maxAvgSumArray([1,12,-5,-6,50,3],4));
