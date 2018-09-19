function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(arrOne, arrTwo) {
    return arrOne.filter(item => arrTwo.indexOf(item) === -1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
