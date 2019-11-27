let currentId = 1;

// let newId = 1;
// const idFirst = newId++;
// const idSecond = newId++;
// const idThird = newId++;
// console.log(idThird);


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
addNewContact('Bunka', 'Busyona', '466-822-858', 'bunbunmeow@gmail.com');
addNewContact('Klaudia', 'Deletovana', '758-336-123', 'kla@deleted.com');

// Function finds and returns contact (array element) by searching for it in the list and using determined parameter.
const foundContacts = contactList.filter(function (contact) {
    return contact.firstName[0] === 'K' || contact.lastName[0] === 'B';
});

// Finds contact`s index in the contact list
function findLocation(firstLetter){
    return contactList.findIndex(function(contact) {
            return contact.firstName[0] === firstLetter;
        }
    );
}

// Function deletes a needed contact from the contact list. Calling the function while logging returns a deleted contact.
function deleteContact(index) {
    return contactList.splice(index, 1);
}
console.log('deleted: ', deleteContact(findLocation('K')));


