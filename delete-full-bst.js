var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children = (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      }
      else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child
    else if (children == 1) {
      var newChild = (target.left !== null) ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
    else {
      // target has two children
      // the technique we use here is to find the 
      // smallest node in the right subtree
      // then replace the target node
      /*
      if (target === this.root) {
        target.right
        this.root = target.right;
      }
      */
      if (target.right.left) {
        let node = target.right;
        let p = target;
        while (node.left !== null) {
          p = node;
          node = node.left;
        }
        if (target === this.root) {
          node.left = target.left;
          node.right = target.right;
          p.left = null;
          this.root = node;
        } else if (parent.left === target) {
          node.left = target.left;
          node.right = target.right;
          p.left = null;
          parent.left = node;
        } else {
          node.left = target.left;
          node.right = target.right;
          p.left = null;
          parent.right = node;
        }
      } else {
        let node = target.right;
        node.left = target.left;
        if (this.root === target) {
          // node.left = target.left;
          this.root = node;
        } else if (parent.left === target) {
          parent.left = node;
        } else {
          parent.right = node;
        }
      }
      
    }
  };

}
