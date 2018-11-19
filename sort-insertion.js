// Insertion sort

function sort(arr) {
  for (let pioneer = 1; pioneer < arr.length; pioneer++) {
    let trailer = pioneer - 1;
    let key = arr[pioneer];
    while (trailer >= 0) {
      if (arr[trailer] > key) {
        arr[trailer + 1] = arr[trailer];
        trailer--;
      } else {
        break;
      }
    }
    arr[trailer + 1] = key;
  }
  return arr;
}

console.log(sort([2037, -1, 0, 12, 9, 100]));
