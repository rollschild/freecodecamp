function sumFibs(num) {
  if (num < 1) return 0;
  if (num === 1) return 2;
  let sum = 2;
  let arr = [];
  arr.push(1);
  arr.push(1);
  let value = 2;
  while (value <= num) {
    if (value % 2 !== 0) sum += value;
    value = arr[arr.length-1] + arr[arr.length-2];
    arr.push(value);

  }
  return sum;
}

sumFibs(4);
