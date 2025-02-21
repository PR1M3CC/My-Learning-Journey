function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
// In this code, the SetUsername function is being called normally inside the CreateUser function but there is a problem that the value of this inside SetUsername function is not being held inside the CreateUser funtion that's why we are using the call method which holds the value of this for the function but we need to pass an optional argument this which tells the call to use the value of this from the CreateUser function and not the SetUsername function