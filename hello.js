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

// Function creates a new contact and adds it to the contact list
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
addNewContact('Iryna', 'Predborska', '843-901-372', 'malabiedronka@gmail.com');

console.log(contactList);

addNewContact('Yuraska', 'Bunya', '142-735-823', 'shini@gmail.com');

console.log(contactList);