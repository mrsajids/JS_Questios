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
function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let small = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    [arr[i], arr[small]] = [arr[small], arr[i]];
  }
  return arr;
}

console.log(selectionSort([12, 18, 13, 11, 15, 20]));
