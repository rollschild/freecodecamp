function smallestCommons(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let smallestCommon = min;
  while (min < max) {
    smallestCommon = lcm(smallestCommon, min+1);
    min++;
  }

  function lcm(lhs, rhs) {
    return lhs * rhs / gcd(lhs, rhs);
  }

  function gcd(lhs, rhs) {
    if (rhs === 0) return lhs;
    return gcd(rhs, lhs % rhs);
  }

  return smallestCommon;
}


console.log(smallestCommons([23,18]));
