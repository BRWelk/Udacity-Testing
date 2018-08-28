function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);//pushing a 'contact(name)' to the array when added (.addContact)
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];//function to create index var in the contacts array. It puts a var to the list of contacts, so they might be
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);/*using splice of an array to move the element. Index is the items in the contacts [] array (from line 2). index is set in line 9 at the .getContact function and returns index to line 2, this.contacts*/
}
