class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const me = new User('Usman', '82f5712a')
console.log(me.password);

// Older Syntax based on define property method for functions (before ES6 and the introduction of classes):
function User1(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User1("chai@chai.com", "chai")

console.log(chai.email);

// Object based syntax(barely used):
const User2 = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User2)
console.log(tea.email);