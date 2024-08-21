class user {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        // return this._email.toUpperCase();
        return `${this._email} + _ hitesh`;
    }

    set email(value){
        this._email = value.toUpperCase();
    }
}

const aditya = new user("adityachintu.ai",12345);
console.log(aditya.email);

