let currentId = 1;


const contactList = [
    {
        id: currentId++,
        firstName: 'Paulina',
        lastName: 'Goldenvur',
        phoneNumber: '828-493-123',
        emailAddress: 'sunflower@gmail.com'
    },
    {
        id: currentId++,
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
            id: currentId++,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress
        }
    );
}

// Calling this function allows to create a new contact by passing new arguments in it
addNewContact('Iryna', 'Predborska', '843-901-372', 'malabiedronka@gmail.com');
addNewContact('Yuraska', 'Bunya', '142-735-823', 'shini@gmail.com');
addNewContact('Klaudia', 'Busyona', '466-822-858', 'bunbunmeow@gmail.com');
addNewContact('Klaudia', 'Deletovana', '758-336-123', 'kla@deleted.com');

// console.log(contactList);

// Function finds and returns contact (array element/elements) by searching for it in the list and using determined parameter.
function filterContacts(filterContact) {
    return contactList.filter((contact) => contact.firstName[0] === filterContact || contact.lastName[0] === filterContact)
}

// console.log(filterContacts('K'));

// Function finds contact`s index in the contact list
function findLocation(firstLetter){
    return contactList.findIndex(function(contact) {
            return contact.firstName.startsWith(firstLetter);
        }
    );
}

// Function deletes a needed contact from the contact list. Calling the function while logging returns a deleted contact.
function deleteContact(index) {
    return contactList.splice(index, 1);
}
// console.log('deleted: ', deleteContact(findLocation('K')));


// Function finds location of a contact by id.
function findIdLocation(idNumber){
    return contactList.findIndex((contact) => contact.id === idNumber);
}

// Function deletes a contact by id.
function deleteIdContact(index) {
    return contactList.splice(index, 1);
}
console.log('deleted by id: ', deleteIdContact(findIdLocation(5)));


// Functions allow to sort the contact list by alphabet, e-mail alphabet and increasing phone numbers.
function sortElements(fieldName){
    return contactList.sort((left, right) => left[fieldName] > right[fieldName] ? 1 : -1);
}

