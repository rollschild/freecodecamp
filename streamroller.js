function steamrollArray(arr) {
  // I'm a steamroller, baby
  let combine = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        combine(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  return combine(arr, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
