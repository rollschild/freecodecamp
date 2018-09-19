function insertionSort(array) {
  // change code below this line
  var size = array.length;
  for ( var i = 1; i < size; i++) {
    var key = array[i]
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j+1] = key;
  }
  // change code above this line
  return array;
}
