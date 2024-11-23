# **Utility Functions Library**

This library provides a collection of utility functions for array operations, string manipulation, and other common programming tasks. Each function is designed to be reusable, efficient, and easy to integrate into your projects.

## **Installation**

Install the package via NPM:

```bash
npm install utility-functions-library
```

## **Features**
     
1. **removeDuplicates**

     Removes duplicate elements from an array.
     
2. **arraySum**

     Calculates the sum of all numbers in an array.
     
3. **capitalizeString**

     Capitalizes the first letter of each word in a string.
     
4. **getUniqueElements**

     Returns unique elements from an array, maintaining their first occurrence order.
     
5. **findUnion**

     Finds the union of multiple arrays.
     
6. **chunkArray**

     Splits an array into smaller chunks of a specified size.

## **Usage**

Import the functions into your project:

```javascript
const {
  removeDuplicates,
  arraySum,
  capitalizeString,
  getUniqueElements,
  findUnion,
  chunkArray,
} = require("utility-functions-library");

```


## **Examples**


1. **Remove Duplicates**

     ```javascript
     const numbers = [1, 2, 2, 3, 4, 4, 5];
     console.log(removeDuplicates(numbers)); 
     // Output: [1, 2, 3, 4, 5]
     ```


2. **Calculate Array Sum**

     ```javascript
     const numbers = [10, 20, 30, 40];
     console.log(arraySum(numbers)); 
     // Output: 100
     ```


3. **Capitalize String**

     ```javascript
     const sentence = "hello world from javascript!";
     console.log(capitalizeString(sentence)); 
     // Output: "Hello World From Javascript!"
     ```


4. **Get Unique Elements**

     ```javascript
     const items = [5, 1, 3, 5, 2, 3, 6];
     console.log(getUniqueElements(items)); 
     // Output: [5, 1, 3, 2, 6]
     ```


5. **Find Union**

     ```javascript
     const array1 = [1, 2, 3];
     const array2 = [3, 4, 5];
     const array3 = [5, 6, 7];
     console.log(findUnion(array1, array2, array3)); 
     // Output: [1, 2, 3, 4, 5, 6, 7]
     ```


6. **Chunk Array**

     ```javascript
     const numbers = [1, 2, 3, 4, 5, 6, 7];
     console.log(chunkArray(numbers, 3)); 
     // Output: [[1, 2, 3], [4, 5, 6], [7]]
     ```