// O(1)
let constantArr1 = [1, 2, 3, 4, 5];
let constantArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const constantLogArr = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

// O(n)

let linearArr1 = [1, 2, 3, 4, 5];
let linearArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearLogArr = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
};

// O(n^2)
let exponentialArr1 = ["A", "B", "C"]; // 9 pairs logged out
let exponentialArr2 = ["A", "B", "C", "D"]; // 16 pairs logged out
let exponentialArr3 = ["A", "B", "C", "D", "E"]; // 25 pairs logged out

const exponentialLogAndAdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
};

// O(log n)
const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let element;

  while (low < high) {
    mid = Math.floor((low + high) / 2, 10);
    element = arr[mid];

    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high + mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};
