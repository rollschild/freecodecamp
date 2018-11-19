// Singly Linked List
let LinkedList = function() {
  this.head = null;
  this.length = 0;

  let Node = function(val) {
    this.value = val;
    this.next = null;
  };

  this.size = function() {
    return this.length;
  };

  this.add = function(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
    return;
  };

  this.remove = function(val) {
    if (this.head === null) {
      console.log('Empty list!');
    } else {
      if (this.head.value === val) {
        this.head = this.head.next;
      } else {
        let currentNode = this.head;
        let prevNode = currentNode;

        while (currentNode !== null && currentNode.value !== val) {
          prevNode = currentNode;
          currentNode = currentNode.next;
        }

        if (currentNode === null) {
          console.log('No such node ${val} exists!');
        } else {
          prevNode.next = currentNode.next;
          currentNode = null;
        }
      }

      this.length--;
    }

    return;
  };

  this.indexOf = function(val) {
    // return index of a node
    if (this.head === null) {
      console.log('List empty!');
    } else {
      let currentNode = this.head;
      let counter = 0;

      while (currentNode !== null && currentNode.value !== val) {
        currentNode = currentNode.next;
        counter++;
      }

      if (currentNode === null) {
        console.log('Node ${val} does not exist!');
      } else {
        return counter;
      }
    }
  };

  this.nodeAt = function(pos) {
    if (pos >= this.length) {
      console.log('Overflow!');
    } else {
      let counter = 0;
      let currNode = this.head;

      while (counter !== pos) {
        counter++;
        currNode = currNode.next;
      }

      return currNode.value;
    }
  };
  
  this.print = function() {
    let currNode = this.head;
    let nodes = [];
    while (currNode !== null) {
      nodes.push(currNode.value);
      currNode = currNode.next;
    }

    console.log(nodes);
    return;
  }
};

module.exports = LinkedList;
