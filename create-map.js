var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = function(item) {
    // let key = item[0];
    // let value = item[1];
    // this.collection = {...this.collection, ...item};
    this.collection.push(item);
    // Object.assign(this.collection, ...item);
    // return this.collection;
  }
  this.remove = function(key) {
    delete this.collection.key;
  }
  this.get = function(key) {
    return this.collection.key;
  }
  this.has = function(key) {
    if (this.get(key)) return true;
    else return false;
  }
  this.values = function() {
    let arr = [];
    for (var [key, value] of this.collection) {
      arr.push(value);
    }
    return arr;
  }
  this.size = function() {
    return this.collection.length;
  }
  this.clear = function() {
    for (var [key, value] of this.collection) {
      delete this.collection.key;
    }
  }
  // return this.collection;
  // change code above this line
};
