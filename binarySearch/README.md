# **Binary Search Algorithm**

A simple npm package for performing binary search on sorted arrays.

## **Installation**

```bash
npm install binary-search-js-util
```

## **Usage**

```javascript
const binarySearch = require('binary-search-js-util');

const arr = [1, 3, 5, 7, 9];
const target = 7;

const index = binarySearch(arr, target);

if (index === -1) {
  console.log('Target not found');
} else {
  console.log('Target found at index', index);
}
```