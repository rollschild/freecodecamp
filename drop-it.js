function dropElements(arr, func) {
  /*
  arr.forEach(function(value, index, array) {
    console.log(index);
    if (func(value)) {
      return array;
    }
    array.splice(index, 1);
  })
  // Drop them elements.
  */
  /*
  arr.some(function(ele) {
    if (func(ele)) return arr;
    arr.splice(arr.indexOf(ele), 1);
  })
  */

  let pos = 0;
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) );
