function sumPrimes(num) {
  let sum = 0;
  let ele = 2;
  let arr = new Array(num + 1);
  arr.fill(false, 0, 2);
  arr.fill(true, 2);

  while (ele <= num) {
    if (arr[ele] === false) {
      ele++;
      continue;
    }
    for (let i = 0; i <= num; i++) {
      if (ele*(ele+i) <= num)
        arr[ele*(ele+i)] = false;
      else break;
    }
    ele++;
  }
  /*
  for (let j = 2; j <= num; j++) {
    if (arr[j]) sum += j;
  }
  */
  return arr.reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + (currentValue ? currentIndex : 0);
  });
}

console.log(sumPrimes(977));
