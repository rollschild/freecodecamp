function mergeSort(array) {
  // change code below this line
  function merge(array, left, middle, right) {
    var arrLeft = array.slice(left, middle+1);
    var arrRight = array.slice(middle+1, right+1);
    var indexLeft = 0;
    var indexRight = 0;
    for (var i = left; i <= right; i++) {
      if (indexLeft > middle-left) {
        array[i] = arrRight[indexRight];
        indexRight++;
        continue;
      }
      if (indexRight > right-middle-1) {
        array[i] = arrLeft[indexLeft];
        indexLeft++;
        continue;
      }
      if (arrLeft[indexLeft] <= arrRight[indexRight]) {
        array[i] = arrLeft[indexLeft];
        indexLeft++;
      } else {
        array[i] = arrRight[indexRight];
        indexRight++;
      }
    }
  }

  function sort(array, left, right) {
    if (left >= right) return;
    var p = left;
    var r = right;
    var q = Math.floor((p + r)/2);
    sort(array, p, q);
    sort(array, q+1, r);
    merge(array, p, q, r);
  }

  sort(array, 0, array.length - 1);
  // change code above this line
  return array;
}
