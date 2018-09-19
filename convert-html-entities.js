function convertHTML(str) {
  // &colon;&rpar;
  let dict = new Map([
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ["\"", "&quot;"],
    ["'", "&apos;"],
  ]);
  let res = "";
  for (let i = 0; i < str.length; ++i) {
    if (!dict.get(str[i])) {
      res += str[i];
    } else {
      res += dict.get(str[i]);
    }
  }
  return res;
}

convertHTML("Dolce & Gabbana");
