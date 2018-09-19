function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let arr = [];
  let begin = 0;
  let end = 0;
  while (end < str.length) {
    if (end !== begin) {
      if (str[end] >= 'A' && str[end] <= 'Z') {
        let sub = str.slice(begin, end).toLowerCase(); 
        arr.push(sub);
        begin = end;
        end++;
        continue;
      }
      if (str[end] < 'a' || str[end] > 'z') {
        let sub = str.slice(begin, end).toLowerCase();
        arr.push(sub);
        end++;
        begin = end;
        continue;
      }
    }
    if (end === str.length - 1) {
      let sub = str.slice(begin, end+1).toLowerCase();
      arr.push(sub);
    }
    end++;
  }
  let res = arr.join('-');
  console.log(res);
  return res;

}

spinalCase('This Is Spinal Tap');
