class Usman{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}@`
    }

    changeEmail(){
        return `${this.email}@gmail.com`
    }
}
const me = new Usman('Usman Khan', 'primekk3', '82f5712a')

console.log(me);

// if we want to do the same task without using classes:

function createUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

createUser.prototype.encryptPassword = function(){
    return `${this.password}@`
}

createUser.prototype.changeEmail = function(){
    return `${this.email}@gmail.com`
}

const me2 = new createUser('Usman Khan', 'primekk3', '82f5712a')

console.log(me2);