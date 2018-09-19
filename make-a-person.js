var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let lastName = "";
  let firstName = "";
  this.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    firstName = arr[0];
    lastName = arr[1];
  }
  this.setFullName(firstAndLast);
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  
  // return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
