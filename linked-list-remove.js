function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){ 
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
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
    // Only change code below this line
    let prev = head;
    let current = prev.next;
    if (prev.element === element) {
      prev.next = null;
      head = current;
      length--;
      return;
    }
    while (current !== null) {
      if (current.element === element) {
        prev.next = current.next;
        current.next = null;
        length--;
        return;
      } else {
        prev = current;
        current = current.next;
      }
    }
    // Only change code above this line
  };
}
