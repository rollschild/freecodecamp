var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  // change code below this line
  this.root = null;
  this.add = (word) => {
    if (this.root === null) {
      this.root = new Node();
      this.root.keys.set("", []);
    }
    let rootNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let key;
      let value;
      let exist = false;
      for (let [k, v] of rootNode.keys) {
        // there should only be one *key*
        key = k;
        value = v;
      }
      for (let j = 0; j < value.length; ++j) {
        if (value[j].keys.has(word[i])) {
          rootNode = value[j];
          exist = true;
          break;
        }
      }
      // construct new node
      if (!exist) {
        let node = new Node();
        node.keys.set(word[i], []);
        node.end = false;
        value.push(node);
        rootNode = node;
      }
    }
    rootNode.setEnd();
  };
  this.print = () => {
    let arr = [];
    let prefix = "";
    this.traverse = (node, word) => {
      if (node === null) return;
      for (let [key, value] of node.keys) {
        word += key;
        if (node.isEnd()) {
          arr.push(word);
        }
        for (let i = 0; i < value.length; i++) {
          this.traverse(value[i], word);
        }
      }
    }
    let rootNode = this.root;
    this.traverse(rootNode, prefix);
    return arr;
  }
  this.isWord = (word) => {
    let rootNode = this.root;
    if (rootNode === null) return false;
    let exist = false;
    let key;
    let value;
    for (let i = 0; i < word.length; i++) {
      exist = false;
      for (let [k, v] of rootNode.keys) {
        key = k;
        value = v;
      }
      for (let j = 0; j < value.length; j++) {
        if (value[j].keys.has(word[i])) {
          exist = true;
          rootNode = value[j];
          break;
        }
      }
      if (!exist) return false;
    }
    if (rootNode !== null && rootNode.isEnd()) return true;
    else return false;
  }

  // change code above this line
};
