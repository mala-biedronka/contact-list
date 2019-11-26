const contactList = [
    {
        firstName: 'Paulina',
        lastName: 'Goldenvur',
        phoneNumber: '828-493-123',
        emailAddress: 'sunflower@gmail.com'
    },
    {
        firstName: 'Matiusz',
        lastName: 'Pochevsky',
        phoneNumber: '382-032-419',
        emailAddress: 'code@gmail.com'
    }
];

// Function creates new contact and adds it to the contact list
function addNewContact(firstName, lastName, phoneNumber, emailAddress) {
        contactList.push(
        {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress
        }
        );
}

// Calling this function allows to create new contact by passing new arguments in it
addNewContact('Iryna', 'Predborska', '843-901-372', 'malabiedronka@gmail.com');
addNewContact('Yuraska', 'Bunya', '142-735-823', 'shini@gmail.com');
addNewContact('Bunka', 'Busyona', '466-822-858', 'bunbunmeow@gmail.com');

// Function deletes a needed contact from the contact list. Logging the calling function returns a deleted contact.
function deleteContact(index) {
    return contactList.splice(index, 1);
}
// console.log('deleted: ', deleteContact(3));

console.log();

// Function finds and returns contact (array element) by searching for it in the list and using determined parameter.
let findContact = contactList.filter(function(eachContact) {
            return eachContact.firstName === 'Klavdia' || eachContact.lastName === 'Busyona';
        }
    );

console.log(findContact);











