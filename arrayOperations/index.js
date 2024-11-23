/**
 * The `removeDuplicates` function takes an array as input and returns a new array with duplicate
 * elements removed using the Set data structure in JavaScript.
 * @param arr - An array that may contain duplicate elements.
 * @returns The function `removeDuplicates` is returning an array with duplicate elements removed.
 */
const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

/**
 * The `arraySum` function calculates the sum of all numbers in an array.
 * @param arr - An array of numbers that you want to calculate the sum of.
 * @returns The function `arraySum` is returning the sum of all the numbers in the input array `arr`.
 */
const arraySum = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
};

/**
 * The `capitalizeString` function takes a string as input, capitalizes the first letter of each word,
 * and returns the modified string.
 * @param string - The `capitalizeString` function takes a string as input and capitalizes the first
 * letter of each word in the string.
 * @returns The `capitalizeString` function takes a string as input, capitalizes the first letter of
 * each word in the string, and returns the modified string with capitalized words.
 */
const capitalizeString = (string) => {
  const strArr = string.split(" ");
  const capArr = strArr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  return capArr.join(" ");
};

/**
 * The function `getUniqueElements` takes an array as input and returns a new array containing only the
 * unique elements from the input array.
 * @param arr - An array containing elements that may or may not be unique.
 * @returns The function `getUniqueElements` returns an array containing only the unique elements from
 * the input array `arr`.
 */
const getUniqueElements = (arr) => {
  const uniqueEle = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueEle;
};

/**
 * The `findUnion` function takes multiple arrays as arguments and returns a new array containing the
 * unique elements from all the input arrays.
 * @param arrays - An array of arrays containing elements that you want to find the union of.
 * @returns The `findUnion` function returns an array that contains the union of all elements from the
 * input arrays, with duplicates removed.
 */
const findUnion = (...arrays) => {
  const unionArr = [...new Set(arrays.flat())];
  return unionArr;
};

/**
 * The `chunkArray` function takes an array and a size as input, and returns a new array with the
 * original array split into chunks of the specified size.
 * @param arr - An array that you want to split into chunks.
 * @param size - The `size` parameter in the `chunkArray` function represents the number of elements
 * you want to include in each chunk or subarray when splitting the original array `arr`.
 * @returns The `chunkArray` function returns an array of arrays, where each sub-array contains `size`
 * number of elements from the input `arr` array.
 */
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

module.exports = {
  removeDuplicates,
  arraySum,
  capitalizeString,
  getUniqueElements,
  findUnion,
  chunkArray,
};
