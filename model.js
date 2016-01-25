function Person(args) {
  args = args || {};
  this.firstName = args.firstName;
  this.lastName = args.lastName;
  this.address = args.address;
  this.phone = args.phone;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

function ContactList(list) {
  this.list = list || [];
}

ContactList.prototype.currentMax = function() {
  var highest = 0;
  for (var i = 0; i < this.list.length; i++) {
    var person = this.list[i];
    if (person.id && person.id > highest) {
      highest = person.id;
    }
  }
  return highest;
};

ContactList.prototype.addPerson = function(person) {
  this.list.push(person);
  person.id = 1 + this.currentMax();
};

ContactList.prototype.removePerson = function(id) {
  this.list = this.list.filter(function(person){
    return person.id != id;
  });
};

ContactList.prototype.findPerson = function(id) {
  var arr = this.list.filter(function(person){
    return person.id == id;
  });
  return arr[0];

}

