const binarySearch = require("./index");

// Test case
const arr = [1, 3, 5, 7, 9, 11];
const target = 1;

const index = binarySearch(arr, target);

if (index === -1) {
  console.log(`Target ${target} not found.`);
} else {
  console.log(`Target ${target} found at index ${index}.`);
}
