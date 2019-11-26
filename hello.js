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
    return contactList.push(
        {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress
        }
    );
}
addNewContact('Iryna', 'Predborska', '843-901-372', 'malabiedronka@gmail.com');
addNewContact('Yuraska', 'Bunya', '142-735-823', 'shini@gmail.com');

// Calling this function allows to create new contact by passing new arguments
addNewContact('Bunka', 'Busyona', '466-822-858', 'bunbunmeow@gmail.com');

function deleteContact(index) {
    return contactList.splice(index, 1);
}
console.log('deleted: ', deleteContact(3));

console.log(contactList);