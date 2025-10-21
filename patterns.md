# Common DSA Patterns for Frontend Developers

## 1. **Two Pointers Pattern** 👉👈
**When to Use:**    
- Sorted arrays
- Palindrome problems
- Finding pairs with a target sum
- Removing duplicates
- Reversing

**Key Idea:** Use two pointers moving towards each other or in same direction

**Common Problems:**
- Two Sum (sorted array)
- Valid Palindrome
- Remove Duplicates
- Container With Most Water
- 3Sum

---

## 2. **Sliding Window Pattern** 🪟
**When to Use:**
- Finding subarrays/substrings
- Consecutive elements
- Min/Max of K elements
- Longest/shortest substring problems

**Key Idea:** Maintain a window and expand/shrink it based on conditions

**Common Problems:**
- Maximum Sum Subarray of Size K
- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Fruits Into Baskets
- Permutation in String

---

## 3. **Hash Map/Object Pattern** 🗺️
**When to Use:**
- Fast lookups (O(1))
- Counting frequencies
- Storing key-value pairs
- Checking existence

**Key Idea:** Trade space for time - store data for quick access

**Common Problems:**
- Two Sum
- Group Anagrams
- First Non-Repeating Character
-Find Duplicates in an Array
-Character Frequency Counter
-Longest Substring Without Repeating Characters
- Subarray Sum Equals K
- Longest Consecutive Sequence

---

## 4. **Frequency Counter Pattern** 📊
**When to Use:**
- Comparing frequencies
- Anagram detection
- Pattern matching
- Subset checks

**Key Idea:** Count occurrences and compare

**Common Problems:**
- Valid Anagram
- Find All Anagrams in String
- Same Frequency Arrays
- Character Replacement

---

## 5. **Fast & Slow Pointers (Floyd's Cycle)** 🐢🐰
**When to Use:**
- Linked lists
- Cycle detection
- Finding middle element
- Palindrome linked list

**Key Idea:** Two pointers moving at different speeds

**Common Problems:**
- Detect Cycle in Linked List
- Find Middle of Linked List
- Happy Number
- Find Duplicate Number

---

## 6. **Binary Search Pattern** 🔍
**When to Use:**
- Sorted arrays
- Finding target in O(log n)
- First/last occurrence
- Search in rotated array

**Key Idea:** Divide search space in half repeatedly

**Common Problems:**
- Binary Search
- Search Insert Position
- First and Last Position in Sorted Array
- Search in Rotated Sorted Array
- Square Root

---

## 7. **Recursion & Backtracking** 🔄
**When to Use:**
- Tree/graph traversal
- Permutations/combinations
- Generating all possible solutions
- Decision trees

**Key Idea:** Break problem into smaller subproblems

**Common Problems:**
- Factorial
- Fibonacci
- Power of Number
- Generate Parentheses
- Subsets/Combinations

---

## 8. **BFS (Breadth-First Search)** 📏
**When to Use:**
- Level-order traversal
- Shortest path
- Tree/graph problems
- Connected components

**Key Idea:** Explore level by level using queue

**Common Problems:**
- Level Order Traversal
- Minimum Depth of Tree
- Rotting Oranges
- Word Ladder

---

## 9. **DFS (Depth-First Search)** 🏊
**When to Use:**
- Tree/graph traversal
- Path finding
- Connected components
- Cycle detection

**Key Idea:** Go deep first, then backtrack

**Common Problems:**
- Tree Traversals (Inorder, Preorder, Postorder)
- Number of Islands
- Path Sum
- Clone Graph

---

## 10. **Dynamic Programming (DP)** 💾
**When to Use:**
- Optimization problems
- Overlapping subproblems
- Optimal substructure
- Count ways/combinations

**Key Idea:** Store results of subproblems to avoid recomputation

**Common Problems:**
- Fibonacci
- Climbing Stairs
- Coin Change
- Longest Common Subsequence
- House Robber

---

## 11. **Greedy Algorithm** 🎯
**When to Use:**
- Optimization with local choices
- Activity selection
- Interval problems

**Key Idea:** Make locally optimal choice at each step

**Common Problems:**
- Jump Game
- Meeting Rooms
- Gas Station
- Activity Selection

---

## 12. **Stack Pattern** 📚
**When to Use:**
- Matching brackets
- Next greater/smaller element
- Expression evaluation
- Undo operations

**Key Idea:** LIFO (Last In First Out)

**Common Problems:**
- Valid Parentheses
- Next Greater Element
- Min Stack
- Daily Temperatures
- Decode String

---

## 13. **Queue Pattern** 🚶‍♂️🚶‍♀️
**When to Use:**
- BFS
- Level order processing
- Sliding window max/min
- First come first serve

**Key Idea:** FIFO (First In First Out)

**Common Problems:**
- Implement Queue using Stacks
- Recent Counter
- Number of Recent Calls
- Task Scheduler

---

## 14. **Merge Intervals Pattern** 📊
**When to Use:**
- Overlapping intervals
- Meeting rooms
- Range problems

**Key Idea:** Sort by start time, then merge overlapping

**Common Problems:**
- Merge Intervals
- Insert Interval
- Meeting Rooms
- Employee Free Time

---

## 15. **Top K Elements Pattern** 🏆
**When to Use:**
- Finding K largest/smallest
- Frequency-based sorting
- Priority-based problems

**Key Idea:** Use heap/priority queue or sorting

**Common Problems:**
- Kth Largest Element
- Top K Frequent Elements
- K Closest Points to Origin
- Sort Characters by Frequency

---

## 16. **Modified Binary Search** 🔄🔍
**When to Use:**
- Rotated sorted arrays
- Find peak element
- Search in matrix

**Key Idea:** Adapt binary search for specific conditions

**Common Problems:**
- Search in Rotated Sorted Array
- Find Peak Element
- Search 2D Matrix
- Find Minimum in Rotated Array

---

## **Frontend-Specific Patterns** ⚛️

### 17. **Debouncing Pattern**
- Delay execution until user stops typing
- Use timeout, clear on each keystroke

### 18. **Throttling Pattern**
- Execute at fixed intervals
- Ignore extra calls within interval

### 19. **Memoization/Caching**
- Store expensive function results
- Return cached result for same inputs

### 20. **Array Methods Implementation**
- Implement map, filter, reduce from scratch
- Understand higher-order functions

---

## **How to Identify Pattern:**

| Problem Keywords | Pattern to Use |
|-----------------|----------------|
| "sorted array" | Binary Search / Two Pointers |
| "subarray/substring" | Sliding Window |
| "frequency/count" | Hash Map / Frequency Counter |
| "pairs/triplets with sum" | Two Pointers / Hash Map |
| "palindrome" | Two Pointers |
| "longest/shortest" | Sliding Window / DP |
| "all combinations" | Backtracking |
| "k largest/smallest" | Top K / Heap |
| "connected/islands" | DFS/BFS |
| "intervals/overlapping" | Merge Intervals |
| "next greater/smaller" | Stack |
| "level order" | BFS / Queue |

---

## **Practice Strategy:**

1. **Week 1:** Two Pointers + Sliding Window
2. **Week 2:** Hash Map + Frequency Counter
3. **Week 3:** Recursion + Binary Search
4. **Week 4:** Stack + Queue + BFS/DFS
5. **Week 5:** Frontend Patterns (Debounce, Throttle, etc.)
6. **Week 6:** Mix of all patterns

**Tip:** Solve 2-3 problems per pattern before moving to next!