// constructor fn
class User {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
}

let user1 = new User("John", "Smith", 26, "male");
let user200 = new User("Jill", "Robinson", 25, "female");

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain
}