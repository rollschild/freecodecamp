let BST = function() {
  this.root = null;

  let Node = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  };

  this.add = function(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let currNode = this.root;
      while (currNode !== null) {
        if (val < currNode.value) {
          if (currNode.left === null) {
            currNode.left = node;
            return;
          } else {
            currNode = currNode.left;
          }
        } else if (val > currNode.value) {
          if (currNode.right === null) {
            currNode.right = node;
            return;
          } else {
            currNode = currNode.right;
          }
        } else {
          console.log('Node with value ${val} already exists!');
        }
      }
    }

    return;
  };

  this.printLevelOrder = function() {
    let que = [];
    let nodes = [];

    if (this.root === null) {
      console.log('Empty tree');
    } else {
      que.push(this.root);
      // nodes.push(this.root.value);

      while (que.length > 0) {
        let node = que.shift();
        nodes.push(node.value);
        if (node.left) {
          que.push(node.left);
        }
        if (node.right) {
          que.push(node.right);
        }
      }

      console.log(nodes);
    }
    return;
  };
};

module.exports = BST;
