// bubble sort
// SORT ARRAY IN ASCENDING ORDER
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([12, 18, 13, 11, 15, 20]));

// selection sort
// SORT ARRAY IN ASCENDING ORDER
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     let small = i;
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[j] < arr[small]) {
//         small = j;
//       }
//     }
//     [arr[i], arr[small]] = [arr[small], arr[i]];
//   }
//   return arr;
// }

// console.log(selectionSort([12, 18, 13, 11, 15, 20]));

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i-1; j >=0; j--) {
//       if (arr[j+1] < arr[j]) {
//         [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
//       }
//     }
   
//   }
//   return arr;
// }

// console.log(insertionSort([12, 18, 13, 11, 15, 20]));

/*
Merge sort is a classic, efficient, comparison-based divide-and-conquer sorting algorithm. 
Original:      [38, 27, 43, 3]

Divide:        [38, 27]          [43, 3]
               /      \          /      \
             [38]    [27]      [43]     [3]

Merge:         [27, 38]         [3, 43]

Final Merge:   [3, 27, 38, 43]
*/

let arr = [12, 18, 13, 11, 15, 20];

function mergeSort(arr) {
  // base condition (recursion)
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let leftPart = mergeSort(arr.slice(0, mid));
  let rightPart = mergeSort(arr.slice(mid));
  return merge(leftPart, rightPart);
}

function merge(left, right) {
  // create temparary array
  let temp = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }

  // store left remaining
  while (i < left.length) {
    temp.push(left[i]);
    i++;
  }

  // store right remaining
  while (j < right.length) {
    temp.push(right[j]);
    j++;
  }

  return temp;
}
console.log(mergeSort(arr));