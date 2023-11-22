import mergeSort, { removeDuplicates } from "./sortArray";

const test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
removeDuplicates(test);
mergeSort(test);
console.log(test);