/* Sorting in DSA (Data Structures & Algorithms) refers to arranging data in a particular order—usually ascending or descending. Sorting is fundamental because it makes searching, organizing, and processing data much more efficient.
⭐ Types of Sorting Algorithms

1. Bubble Sort
Method: Repeatedly swaps adjacent elements if they are in the wrong order.
Best case: O(n)
Average/Worst case: O(n²)
Space: O(1)
Stable: Yes

Use when: Teaching/learning—simple but inefficient.


2. Selection Sort
Method: Repeatedly selects the smallest (or largest) element and puts it in the correct position.
Best/Average/Worst: O(n²)
Space: O(1)
Stable: No
Use when: Memory is very limited (in-place and minimal swaps).


3. Insertion Sort
Method: Builds the sorted list one element at a time like sorting playing cards.
Best: O(n) (already sorted)
Worst/Average: O(n²)
Space: O(1)
Stable: Yes

Use when: Data is almost sorted or size is small.


4. Merge Sort
Method: Divide-and-conquer → divides, sorts, merges.
Best/Average/Worst: O(n log n)
Space: O(n)
Stable: Yes
Use when: Stability and consistent O(n log n) are needed.


5. Quick Sort
Method: Partition around a pivot; recursively sort subarrays.
Best/Average: O(n log n)
Worst: O(n²) (rare with good pivot strategy)
Space: O(log n)
Stable: No

Use when: Fastest in practice for large datasets (in-place).


6. Heap Sort
Method: Uses a binary heap to repeatedly extract the maximum/minimum.
Best/Average/Worst: O(n log n)
Space: O(1)
Stable: No
Use when: Need guaranteed O(n log n) without extra memory.


7. Counting Sort
Method: Counts occurrences of each value.
Best/Average/Worst: O(n + k)
Space: O(k)
Stable: Yes
Use when: Numbers are in a small range.


8. Radix Sort
Method: Sorts numbers digit by digit using counting sort.
Time: O(d × (n + k))
Space: O(n + k)
Stable: Yes
Use when: Sorting integers, long numbers, or strings.


9. Bucket Sort
Method: Distributes elements into buckets; sorts each bucket.
Time (avg): O(n)
Worst: O(n²)
Use when: Input is uniformly distributed (like floating numbers in [0,1)).

*/