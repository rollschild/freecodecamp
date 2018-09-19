function sym(args) {
  let results = [];
  let arrLeft;
  let arrRight;
  let len = arguments.length;
  for (let i = 0; i < len-1; i++) {
    if (i < 1) {
      arrLeft = arguments[i];
      arrRight = arguments[i+1];
    } else {
      // i >= 1
      arrLeft = results;
      results = [];
      arrRight = arguments[i+1];
    }
    
    let lenLeft = arrLeft.length;
    let lenRight = arrRight.length;
    let l = Math.min(lenLeft, lenRight);
    for (let j = 0; j < l; j++) {
      let eleLeft = arrLeft[j];
      let eleRight = arrRight[j];
      if (!arrRight.includes(eleLeft) && !results.includes(eleLeft)) {
        results.push(eleLeft);
      }
      if (!arrLeft.includes(eleRight) && !results.includes(eleRight)) {
        results.push(eleRight);
      }
    }
    if (l < arrLeft.length) {
      for (let p = l; p < arrLeft.length; ++p) {
        if (!results.includes(arrLeft[p]) && !arrRight.includes(arrLeft[p])) {results.push(arrLeft[p]);}
      }
    }
    if (l < arrRight.length) {
      for (let q = l; q < arrRight.length; ++q) {
        if (!results.includes(arrRight[q]) && !arrLeft.includes(arrRight[q])) {results.push(arrRight[q]);}
      }
    }
  }

  return results;
}

