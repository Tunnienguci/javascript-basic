// Object Constructor

function User(firstName, lastName, avatar)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Tunnie','Nguci','Avatar');
var user = new User('Ashley','Nguci','Avatar');

author.title = "Software Engineer | Vietnam";
user.comment = "Software Engineer | Finland";

console.log(author);
console.log(user);

