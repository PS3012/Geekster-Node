/**
 * The `binarySearch` function implements binary search algorithm to find the index of a target element
 * in a sorted array.
 * @param arr - The `arr` parameter in the `binarySearch` function is the array in which you want to
 * search for the `target` value using binary search algorithm.
 * @param target - The `target` parameter in the `binarySearch` function represents the value that you
 * are searching for within the `arr` array using the binary search algorithm. The function will return
 * the index of the `target` value in the array if it is found, or -1 if the `target`
 * @returns The `binarySearch` function is being exported and returned as the module.exports value.
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
