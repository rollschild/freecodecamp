function quickSort(array) {
  // change code below this line
  function partition(array, left, right) {
    var trailer = left - 1;
    for (var pioneer = left; pioneer <= right - 1; pioneer++) {
      if (array[pioneer] <= array[right]) {
        trailer++;
        var tmp = array[trailer];
        array[trailer] = array[pioneer];
        array[pioneer] = tmp;
      }
    }
    trailer++;
    var tmp = array[trailer];
    array[trailer] = array[right];
    array[right] = tmp;
    return trailer;
  }

  function sortFunc(array, left, right) {
    if (left >= right) return;
    var pivot = partition(array, left, right);
    sortFunc(array, left, pivot - 1);
    sortFunc(array, pivot + 1, right);
  }

  sortFunc(array, 0, array.length - 1);
  // change code above this line
  return array;
}
