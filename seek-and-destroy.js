function destroyer(arr) {
  // Remove all the values
  let vec = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    vec = vec.filter(item => item !== arguments[i]);
  }
  return vec;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
