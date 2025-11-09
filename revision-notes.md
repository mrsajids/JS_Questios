# DSA Revision Notes

## Table of Contents
1. [Array Methods & Manipulation](#array-methods--manipulation)
2. [String Manipulation](#string-manipulation)
3. [HashMap/Map Pattern](#hashmapmap-pattern)
4. [Two Pointers Pattern](#two-pointers-pattern)
5. [Substring & Subarray Pattern](#substring--subarray-pattern)
6. [Sliding Window Pattern](#sliding-window-pattern)
7. [Regular Expressions](#regular-expressions)
8. [Common Algorithms](#common-algorithms)


---

## Array Methods & Manipulation

### Key Methods
- **find()**: Returns first element that matches condition
- **filter()**: Returns new array with elements that match condition
- **map()**: Transforms each element and returns new array
- **reduce()**: Accumulates values into a single result
- **sort()**: Sorts array (modifies original)
- **every()**: Checks if all elements pass test
- **some()**: Checks if any element passes test

**Array Manipulation:**
- `shift()`: Remove first element
- `unshift()`: Add element at beginning
- `push()`: Add element at end
- `pop()`: Remove last element
- `slice(start, end)`: Extract subarray (end exclusive)
- `substring(start, end)`: Extract substring (end exclusive)

---

## String Manipulation
## Quesions
1. [Reversing a string](#reversing-a-string)
2. Reverse Words in Sentence
3. Check Palindrome
4. Count Character Frequencies:
5. Shift String Characters
6. Merge Strings Alternately
7. Remove Multiple Spaces
8. Find First Occurrence (Needle in Haystack)

### Basic Operations
### Reversing a string
**Reverse String:**
```javascript
// Method 1: Built-in
str.split('').reverse().join('')

// Method 2: Custom
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
```

**Reverse Words in Sentence:**
```javascript
sentence.split(' ').reverse().join(' ')
```

**Check Palindrome:**
```javascript
function checkPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

**Count Character Frequencies:**
```javascript
const count = {};
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  count[char] = count[char] ? count[char] + 1 : 1;
}
```

**Shift String Characters:**
```javascript
// Shift left: "abc" → "bca"
function shiftString(str) {
  return str.slice(1) + str[0];
}

// Multiple shifts
function shiftString(str, goal) {
  if (str.length !== goal.length) return false;
  let s = str;
  for (let i = 0; i < str.length; i++) {
    s = s.slice(1) + s[0];
    if (s === goal) return true;
  }
  return false;
}
```

**Merge Strings Alternately:**
```javascript
function mergeAlternately(word1, word2) {
  const length = Math.max(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += (word1[i] || "") + (word2[i] || "");
  }
  return result;
}
```

**Remove Multiple Spaces:**
```javascript
word.replace(/\s+/g, ' ')  // Regex approach
```

**Find First Occurrence (Needle in Haystack):**
```javascript
// Built-in
haystack.indexOf(needle)

// Manual
function findFirstOccurrence(haystack, needle) {
  let start = 0, end = needle.length - 1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(start, end + 1) === needle) {
      return start;
    }
    start++;
    end++;
  }
  return -1;
}
```

---

## HashMap/Map Pattern

### When to Use
- Fast lookups (O(1) average)
- Counting frequencies
- Tracking seen elements
- Two Sum problems
- Grouping/Anagram problems

## Questions 
1. Two Sum (HashMap):
2. Count Letter Frequencies:
3. Group Anagrams:
4. Word Pattern:

### Map vs Object

**Map (ES6) - maintains insertion order:**
```javascript
const map = new Map();

map.set('key', 'value');
map.get('key');           // 'value'
map.has('key');           // true
map.delete('key');
map.size;                 // number of entries

// Iterate
for (const [key, value] of map) {
  console.log(key, value);
}
```

**Object - traditional approach:**
```javascript
const obj = {};

obj['key'] = 'value';
obj['key'];               // 'value'
'key' in obj;             // true
delete obj['key'];

// Iterate
for (const key in obj) {
  console.log(key, obj[key]);
}
```

### Common Patterns

**Two Sum (HashMap):**
```javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```

**Count Letter Frequencies:**
```javascript
function countLetters(str) {
  const count = {};
  for (const letter of str) {
    count[letter] = (count[letter] || 0) + 1;
  }
  return count;
}
```

**Group Anagrams:**
```javascript
function groupAnagrams(words) {
  const map = new Map();
  for (const word of words) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
}
```

**Word Pattern:**
```javascript
function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  
  const patternToWord = {};
  const wordToPattern = {};
  
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    
    if (patternToWord[char] && patternToWord[char] !== word) return false;
    if (wordToPattern[word] && wordToPattern[word] !== char) return false;
    
    patternToWord[char] = word;
    wordToPattern[word] = char;
  }
  return true;
}
```

---

## Two Pointers Pattern

### When to Use
- Sorted arrays (pair sum, removing duplicates)
- Palindrome checking
- Reversing arrays/strings
- Moving elements (zeros, partitioning)
- Fast/slow pointer (linked lists, cycles)

## Questions
1. Reversing a string
2. Two Sum (Sorted Array)
3. Remove duplicates
4. Valid Palindrome

### Patterns

**Two Pointers from Ends (Left/Right):**
```javascript
// Reverse String
function reverseString(str) {
  let s = str.split('');
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s.join('');
}

// Two Sum (Sorted Array)
function twoSumSorted(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}
```

**Fast/Slow Pointers:**
```javascript
// Remove duplicates
function removeDuplicates(nums) {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
```

**Valid Palindrome:**
```javascript
function validPalindrome(s) {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

---

## Substring & Subarray Pattern

### Key Concept
- **Substring**: Contiguous characters in a string
- **Subarray**: Contiguous elements in an array
- Order and continuity are important!

### Generate All Substrings:
```javascript
function getSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.substring(i, j));
    }
  }
  return substrings;
}
// "abc" → ["a", "ab", "abc", "b", "bc", "c"]

// Formula: Total substrings = n × (n + 1) / 2
```

### Generate All Subarrays:
```javascript
function getSubarrays(arr) {
  let subarrays = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      subarrays.push(arr.slice(i, j));
    }
  }
  return subarrays;
}
// [1, 2, 3] → [[1], [1,2], [1,2,3], [2], [2,3], [3]]
```

### Important Notes
- `substring(start, end)`: end is exclusive
- `slice(start, end)`: end is exclusive
- Time complexity: O(n²) to generate all
- Common for: pattern matching, maximum subarray problems

---

## Sliding Window Pattern

### When to Use
- Maximum/minimum/average of subarray/substring
- Longest/shortest substring with properties
- Problems involving contiguous elements

### Concept
Instead of recalculating for each window (O(n²)), slide a window and update in O(1) → overall O(n).

### Pattern Template
```javascript
function slidingWindow(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // Initialize first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];  // Remove left, add right
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

---

## Regular Expressions

### Basic Syntax

**Character Classes:**
- `\d` - digit (0-9)
- `\D` - non-digit
- `\w` - word character (a-z, A-Z, 0-9, _)
- `\s` - whitespace
- `.` - any character
- `[abc]` - a, b, or c
- `[a-z]` - lowercase letter
- `[^abc]` - NOT a, b, or c

**Quantifiers:**
- `*` - 0 or more
- `+` - 1 or more
- `?` - 0 or 1
- `{n}` - exactly n times
- `{n,}` - n or more
- `{n,m}` - n to m times

**Anchors:**
- `^` - start of line
- `$` - end of line
- `\b` - word boundary

**Groups:**
- `(abc)` - capture group
- `a|b` - alternation (a OR b)

### Common Patterns

```javascript
// Remove non-alphanumeric
str.replace(/[^a-zA-Z0-9]/g, '')

// Remove multiple spaces
str.replace(/\s+/g, ' ')

// Email validation
/^[\w.-]+@[\w.-]+\.\w+$/

// Phone number (XXX-XXX-XXXX)
/\d{3}-\d{3}-\d{4}/

// Only letters
/^[A-Za-z]+$/

// Only digits
/^\d+$/
```

---

## Common Algorithms

### FizzBuzz
```javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
}
```

### Find Largest Number
```javascript
function largestNumber(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### Remove Duplicates
```javascript
// Method 1: Using Set
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Method 2: Using Map
function removeDuplicates(arr) {
  const map = new Map();
  arr.forEach(el => map.set(el, el));
  return Array.from(map.keys());
}

// Method 3: Custom (new array)
function removeDuplicates(arr) {
  const result = [];
  for (const el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
```

### Count Vowels
```javascript
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
```

### Valid Anagram
```javascript
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}
```

### Reverse Vowels
```javascript
function reverseVowels(s) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  const temp = [];
  let str = '';
  
  // Extract vowels and mark positions
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      temp.push(s[i]);
      str += '&';
    } else {
      str += s[i];
    }
  }
  
  // Replace markers with reversed vowels
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '&') {
      result += temp.pop();
    } else {
      result += str[i];
    }
  }
  return result;
}
```

### Length of Last Word
```javascript
function lengthOfLastWord(s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
}
```

---

## Time Complexity Reference

| Pattern | Time Complexity | Space Complexity |
|---------|----------------|------------------|
| HashMap lookup | O(1) avg | O(n) |
| Two Pointers | O(n) | O(1) |
| Sliding Window | O(n) | O(1) |
| All Substrings/Subarrays | O(n²) | O(n²) |
| Brute Force Two Sum | O(n²) | O(1) |
| HashMap Two Sum | O(n) | O(n) |

---

## Quick Tips

1. **For sorted arrays**: Consider Two Pointers
2. **For frequency/counting**: Use HashMap
3. **For contiguous subarrays/substrings**: Consider Sliding Window
4. **For pattern matching**: Regular Expressions or Two Pointers
5. **Always check edge cases**: Empty arrays/strings, single element, etc.

---

## Problem Categories by Day

- **Day 1**: Array methods (find, filter, map, reduce, sort, every)
- **Day 2**: String basics (reverse, count, palindrome)
- **Day 3**: Arrays & Two Sum (FizzBuzz, largest, duplicates, two sum, vowels)
- **Day 4**: String problems (anagram, reverse vowels, last word)
- **Day 5**: Array manipulation (shift, unshift, string shifting)
- **Day 6**: String operations (merge, remove spaces, needle in haystack)

---

*Last updated: Based on questions from day1.js through day6.js*
