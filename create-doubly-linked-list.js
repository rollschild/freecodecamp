var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function (element) {
    if (this.head === null) {
      let node = new Node(element, null);
      this.head = node;
      this.tail = node;
    } else {
      let node = new Node(element, this.tail);
      this.tail.next = node;
      this.tail = node;
    }
  }
  this.remove = function (element) {
    if (this.tail === this.head) {
      if (this.head === null) {
        return null;
      } else {
        if (this.head.data === element) {
          this.head = null;
          this.tail = null;
        }
        return;
      }
    }
    if (this.head.data === element) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail.data === element) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      let node = this.head;
      while (node !== this.tail) {
        if (node.data === element) {
          node.prev.next = node.next;
        }
        node = node.next;
      }
    }
  }
  // change code above this line
};
