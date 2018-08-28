describe('Address Book', function () {
    var addressBook,
        thisContact; //declaring variables for the suite. Inner scopes have access to outer scopes.

    beforeEach(function() {
        var addressBook = new AddressBook(); //instantiate addressBook and thisContact variables
        thisContact = new Contact();
    });

    beforeEach();
    
    it('should be able to add a contact', function() {

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete contact', function() {

        addressBook.addContact(thisContact);//add contact to address book so...
        addressBook.deleteContact(0);//...it can be deleted

        expect(addressBook.getContact(0)).not.toBeDefined(); /*(THE TEST)I expect to get contact from address book and for it not to be defined.*/
    });
});
