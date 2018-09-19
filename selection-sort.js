function selectionSort(array) {
  // change code below this line
  var size = array.length;
  for (var i = 0; i < size - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < size; ++j) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    var tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp; 
  }
  // change code above this line
  return array;
}
