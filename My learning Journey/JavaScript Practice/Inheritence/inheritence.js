class user {
    constructor(username) {
        this.username = username
    }
}
// declaring another class object such that it can access the above class's properties
class details extends user {
    constructor(username, age, city) {
        super(username)
        this.age = age
        this.city = city
    }
    printMe(){
        console.log(`${this.username} is ${this.age} years old and lives in ${this.city}`)
    }
}

const me = new details('Usman', 18, 'Mardan')

me.printMe()