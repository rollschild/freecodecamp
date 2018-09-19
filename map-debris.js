function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let res = [];
  arr.forEach(function(obj, index, array) {
    let element = {};
    element["name"] = obj["name"];
    let alt = obj["avgAlt"];
    let a = alt + earthRadius;
    let op = Math.round(Math.sqrt(a * a * a / GM) * 2 * Math.PI);
    element["orbitalPeriod"] = op;
    console.log(element["orbitalPeriod"]);
    res.push(element);
  })
  return res;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log({name : "sputnik", avgAlt : 35873.5553});
