function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){ // {1} 
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        let currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = function() {
    return head === null;
  }
  this.indexOf = function(element) {
    let counter = 0;
    let pointer = head;
    while (pointer !== null) {
      if (pointer.element === element) {
        return counter;
      } else {
        counter++;
        pointer = pointer.next;
      }
    }
    return -1;
  }
  this.elementAt = function(index) {
    let counter = 0;
    let pointer = head;
    while (counter !== index) {
      ++counter;
      pointer = pointer.next;
    }
    return pointer.element;
  }
  // Only change code above this line
}
