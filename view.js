function View(listElement, detailElement) {
  this.listElement = listElement;
  this.detailElement = detailElement;
  console.log(this);  
}

View.prototype.handleClick = function(event) {
  console.log(event.target.dataset.id);
  console.log(this);
  this.controller.showDetail(event.target.dataset.id);
}

View.prototype.drawPerson = function(person) {
  this.detailElement.innerHTML = '<h2>Details</h2>' +
   JSON.stringify(person);
}

View.prototype.drawList = function(contactList) {
   var html = '<h2>Contacts</h2><ul>';
   contactList.list.forEach(function(person){
    html += '<li data-id="' + person.id + '" class="person">' + person.fullName() + '</li>';
   });
   this.listElement.innerHTML = html;
   var coll = document.querySelectorAll('li.person');
   for (var i=0; i < coll.length; i++) {
      coll[i].addEventListener('click', this.handleClick.bind(this));
   }

}