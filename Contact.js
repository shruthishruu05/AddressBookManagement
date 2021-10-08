class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];


    }

    //getters
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get address() {
        return this._address;
    }
    get city() {
        return this._city;
    }
    get state() {
        return this._state;
    }
    get zip() {
        return this._zip;
    }
    get phone() {
        return this._phone;
    }
    get email() {
        return this._email;
    }

    //setters
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else throw 'firstname is incorrect'
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw 'lastname is incorrect'
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Z|a-z]{4,}$');
        if(addressRegex.test(address))
        this._address = address;
        else throw 'address is incorrect'
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Z|a-z]{4,}$');
        if(cityRegex.test(city))
        this._city = city;
        else throw 'city is incorrect';
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Z|a-z]{4,}$');
        if(stateRegex.test(state))
        this._state = state;
        else throw 'state is incorrect';
    }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else throw 'zip is incorrect'
    }
    set phone(phone) {
        let phoneRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
        if(phoneRegex.test(phone))
        this._phone = phone;
        else throw 'phone number is incorrect'
    }
    set email(email) {
        let emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if(emailRegex.test(email))
        this._email = email;
        else throw 'email is incorrect'
    }
    toString() {
        return "firstName=" +this.firstName+ ", lastName=" +this.lastName+ ", address=" +this.address+ ", city=" +this.address+ ", state=" +this.state+ ", zip=" +this.zip+ ", phone=" +this.phone+ ", email=" +this.email;
    }

}
// try{
// let contact = new Contact('Shruthi','Gowda','Jaynagar','Bangalore','Karnataka',560076,'91 9110884694','shru@gmail.com');
// console.log("Contact: "+contact)
// }
// catch(e)
// {
//     console.error(e);
// }

let addressBookArray = new Array();
try{
    addressBookArray.push(new Contact('Shruthi','Gowda','Jaynagar','Bangalore','Karnataka',560076,'91 9110884694','shru@gmail.com'));
}
catch(e){
    console.log(e);
}
try{
    addressBookArray.push(new Contact("Mahesh", "Kumar", "jaynagar", "Bangalore", "Karnataka", "560070", "91 7899387072", "mahesh@gmail.com"));
}catch(e){
    console.error(e);
}
try{
    addressBookArray.push(new Contact("Chinmai", "Kanth", "RrNagar", "Bangalore", "Karnataka", "560072", "91 9535082363", "chins@gmail.com"));
}catch(e){
    console.error(e);
}
console.log(addressBookArray);
findByNameAndEdit("Shruthi","email","shruthi.hp@perfios.com");
console.log("\n after editing data in addressBook:")
console.log(addressBookArray);

 addressBookArray = new Array();

 function findByNameAndEdit(firstName,attribute, value){
    let contact = addressBookArray.find(contact => contact._firstName == firstName);
    if(contact == null) console.log("name not found");
    switch(attribute){
        case "firstName":
            contact._firstName = value;
            break;
        case "lastName":
            contact._lastName = value;
            break;
        case "address":
            contact._address = value;
            break;
        case "city":
            contact._city = value;
            break;
        case "state":
            contact._state = value;
            break;
        case "zip":
            contact._zip = value;
            break;
        case "phone":
            contact._phone = value;
            break;
        case "email":
            contact._email = value;
            break;
        default:
            console.log("wrong attribute is specified");
    }
}


function deleteByName(firstName,lastName){
    let index  = addressBookArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
    addressBookArray.splice(index,1);
}

deleteByName("Chinmai","Kanth");
console.log("\n after deleting contact in addressBook:")
console.log(addressBookArray);

function getCount(){
    let numberOfContacts = addressBookArray.reduce((numberOfContacts,contact) => numberOfContacts +=1,0);
    return numberOfContacts;
}

console.log("number of contacts : "+getCount());

function checkDuplicatedAndAdd(contact){
    let duplicate = addressBookArray.find(currentContact => currentContact._firstName == contact._firstName && currentContact._lastName == contact._lastName);
    if(duplicate == null){
        addressBookArray.push(contact);
    }
    else console.log("the contact already exists");
}

checkDuplicatedAndAdd(new Contact("Mahesh", "Kumar", "jaynagar", "Bangalore", "Karnataka", "560070", "91 7899387072", "mahesh@gmail.com"));