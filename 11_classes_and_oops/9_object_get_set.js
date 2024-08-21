const user = {
    _email :  "adiya@123",
    _password : "1223",

    get email(){
return this._email.toUpperCase()
    },

    set email(value){
    this._email = value
    }

}
const addy = user.email ;
console.log(addy);

const tea = Object.create(user);
console.log(tea.email);