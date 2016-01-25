document.addEventListener('DOMContentLoaded', function(){

window.cl = new ContactList();

/* In a real app we wouldn't have this test data setup */
cl.addPerson(new Person({firstName: 'Jeff', lastName:'George', address: '48 Wall St NY NY 10005', phone: '212 555 1212'}));
cl.addPerson(new Person({firstName: 'Steven', lastName:'Cassidy', address: '48 Wall St NY NY 10005', phone: '212 555 9999'}));  

window.view = new View(document.getElementById('contact-list'),
document.getElementById('contact-detail'));
window.controller = new Controller(cl, view);
view.controller = controller;
controller.showList();
});

