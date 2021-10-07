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
        let phoneRegex = RegExp("^[0-9]{1,2}\\s{1}[0-9]{10}$");
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
try{
let contact = new Contact('Shruthi','Gowda','Jaynagar','Bangalore','Karnataka',560076,'9110884694','shru@gmail.com');
console.log("Contact: "+contact)
}
catch(e)
{
    console.error(e);
}