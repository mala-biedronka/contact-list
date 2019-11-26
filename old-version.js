
function newContactFunction(firstName, lastName, phoneNumber, emailAddress) {
    return {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress
    }
}

// newContact variable will return a new object/a new contact with parameters that passed while calling newContactFunction
const newContact = newContactFunction('Yuraska', 'Buska', 45556677, 'kwkjwksj@uhsh');

// Add a new line to the object
newContact.note = 'note';

// Delete a certain line in the object
delete newContact.note;
//console.log(newContact);

// contactList - object of contacts that already exist
const contactList = {
    contact1: {
        firstName: 'Kevin',
        lastName: 'Varderfuv',
        phoneNumber: 56428765,
        emailAddress: 'vfdjhgjh@gkl'
    },
    contact2: {
        firstName: 'Jastin',
        lastName: 'Burner',
        phoneNumber: 62487921,
        emailAddress: 'wrweewwr@gpl'
    }
};

contactList.contact3 = newContact;
console.log(contactList);




// Create a list of contacts that already exist with details
// for(let contactName in contactList){
//     console.log(contactList[contactName].firstName + ' ' + contactList[contactName].lastName + ', ' + contactList[contactName].phoneNumber + ', ' + contactList[contactName].emailAddress);
// };

// This function searches for a contact by first name and returns a contact with all details
for(let contactName in contactList){
    if(contactList[contactName].firstName === 'Yuraska'){
        console.log(contactList[contactName]);
    }
}
