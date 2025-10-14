// ### 3. FizzBuzz
// - Print numbers 1 to 100
// function printFizzBuzz(limit) {
//   for (let number = 1; number <= limit; number++) {
//     if (number % 3 == 0 && number % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (number % 5 == 0) {
//       console.log("Buzz");
//     } else if (number % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(number);
//     }
//   }
// }
// printFizzBuzz(100);

// ### 4. Find Largest Number in Array
// - **Input:** `[3, 7, 2, 9, 1]`
// - **Output:** `9`
// const arr = [];
// function largestNumber(arr) {
//   let large = arr.length ? arr[0] : 0;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element > large) large = element;
//   }
//   return large;
// }
// console.log(largestNumber(arr));


// ### 5. Remove Duplicates from Array
// - **Input:** `[1, 2, 2, 3, 3, 4]`
// - **Output:** `[1, 2, 3, 4]`
// const arr = [1, 2, 2, 3, 3, 4];
// -- inbuilt solution
// function removeDuplicates(arr) {
//   let map = new Map();
//   // inserting in map an iterater
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     map.set(element, element);
//   }
//   // convert to array
//   return Array.from(map.keys());
// }

// -- custom solution 1(by creating new array)
// function removeDuplicates(arr) {
//   const newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (!newarr.includes(element)) {
//       newarr.push(element);
//     }
//   }
//   return newarr;
// }

// -- custom solution 2(without creating new array)
// function removeDuplicates(arr) {
//   const newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (!newarr.includes(element)) {
//       newarr.push(element);
//     }
//   }
//   return newarr;
// }
// console.log(removeDuplicates(arr));

// ### 6. Two Sum 
// You need to find two different numbers in the array that add up to the target. Then, return their indices.
// - **Input:** `arr = [2, 7, 11, 15], target = 9`
// - **Output:** `[0, 1]` (indices of numbers that add to target)
const arr = [2, 7, 11, 15];
const target = 13;
// solution 1: by brute force 
// function findTwoSum(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     const outer_element = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const inner_element = arr[j];
//       if (inner_element + outer_element == target) return [i, j];
//     }
//   }
// }

// solution 2: by hashing 
// function findTwoSum(arr) {
  
// }
// console.log(findTwoSum(arr));

// ### 7. Count Vowels in String
// - **Input:** `"hello world"`
// - **Output:** `3`
// const str = "hello world";
// function countVowel(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     switch (element) {
//       case "a":
//         count++;
//         break;
//       case "e":
//         count++;
//         break;
//       case "i":
//         count++;
//         break;
//       case "o":
//         count++;
//         break;
//       case "u":
//         count++;
//         break;

//       default:
//         break;
//     }
//   }
//   return count;
// }
// console.log(countVowel(str));
