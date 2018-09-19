function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current) {
        if (current.next === null) {
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
    length++;
    // Only change code above this line
  };
}
