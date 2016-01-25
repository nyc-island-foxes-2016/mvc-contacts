function Controller(contactList, view) {
  this.view = view;
  this.contactList = contactList;
}

Controller.prototype.showList = function(){
  this.view.drawList(this.contactList);
}

Controller.prototype.showDetail = function(id){
  var p = this.contactList.findPerson(id);
  console.log(p);
  this.view.drawPerson(p);
}

