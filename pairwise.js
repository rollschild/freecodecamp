function pairwise(arr, arg) {
  var sum = 0;
  var dict = new Array(arr.length);
  dict.fill(0, dict.length, false);
  for (var i = 0; i < arr.length - 1; i++) {
    if (!dict[i]) {
      for (var j = i + 1; j < arr.length; j++) {
        if (!dict[j] && arr[i] + arr[j] === arg) {
          dict[i] = true;
          dict[j] = true;
          sum += i;
          sum += j;
          break;
        }
      }
    }
  }
  return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
