/*
A HashMap is a key-value data structure that offers:
# Fast lookup, insertion, and deletion (average time complexity: O(1)).
# Each key maps to a value.
# Internally uses hashing to determine where to store values.

In JavaScript, a HashMap-like data structure is typically implemented using either:
1. Objects ({})
2. Map (ES6 Map object)

1. Map (ES6 Map object) (insertion order)
    const map = new Map();

    // Add values
    map.set('name', 'Alice');
    map.set('age', 25);

    // Get values
    console.log(map.get('name')); // "Alice"

    // Check if a key exists
    console.log(map.has('age')); // true

    // Remove a key
    map.delete('age');

    // Size of map
    console.log(map.size); // 1

    // Iterate through map
    for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
    }

2. Objects ({})
    const obj = {};

    // Add values
    obj['name'] = 'Alice';
    obj['age'] = 25;

    // Get values
    console.log(obj['name']); // "Alice"

    // Check if key exists
    console.log('age' in obj); // true

    // Delete key
    delete obj['age'];

    // Iterate keys
    for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
    }


*/
// 1. Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// function twoSum(nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const compliment = target-nums[i];
//         if (map.has(compliment)) {
//             return [map.get(compliment), i];
//         }
//         map.set(nums[i],i)
//     }
//     return [];
// }

// console.log(twoSum([2, 7, 11, 15], 17+3));

//2. Group Anagrams
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// There is no string in strs that can be rearranged to form "bat".

// function groupAnagram(words) {
//   const map = new Map();
//   for (let i = 0; i < words.length; i++) {
//     const key = words[i].split("").sort().join("");
//     if (!map.has(key)) {
//       map.set(key, [words[i]]);
//     } else {
//       map.get(key).push(words[i]);
//     }
//   }
//   return Array.from(map.values());
// }

// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));


// function counterLetters(words) {
//   let obj = {};
//   for (const letter of words) {
//     if (obj[letter]) {
//       obj[letter] = obj[letter] + 1;
//     } else {
//       obj[letter] = 1;
//     }
//   }
//   return obj;
// }

// console.log(counterLetters("sajeed"));

// 4. Word Pattern
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".

function counterLetters(pattern, s) {
  let obj = Object.create(null); // letter -> word
  let reverseObj=Object.create(null); // word -> letter

  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {

      const letter = pattern[i];
      const word = words[i];

    // letter -> word
    if (!obj[letter]) {
      obj[letter] = words[i];
    } else if (obj[letter] !== words[i]) {
      return false;
    } 

    // word -> letter
    if (!reverseObj[word]) {
      reverseObj[word] = letter;
    } else if (reverseObj[word] !== letter) {
      return false;
    } 

  }
  
  return true;
}

console.log(counterLetters("abba","dog constructor constructor dog"));

