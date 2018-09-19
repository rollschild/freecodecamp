function addTogether(args) {
  console.log(arguments[1]);
  if (arguments.length === 2) {
    if (typeof(arguments[0]) !== "number" || typeof(arguments[1]) !== "number") {
      return undefined;
    }
    return arguments[0] + arguments[1];
  } else {
    if (typeof(arguments[0]) !== "number") return undefined;
    let sumTwoAnd = (ele) => {
      return addTogether(arguments[0], ele);
    }
    return sumTwoAnd;
  }
}

console.log(addTogether(2)(3));
