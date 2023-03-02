// Object in JavaScript

var emailKey = 'email';
var myInfo = {
    name: 'Tunnie',  // This is Property / Key
    age: 21,
    address: "Hanoi",
    [emailKey]:'tuanqc@gmail.com',
    getName: function()  // This is not key --- method
    {
        return this.name; // "this" is myInfo  
    }
};

// Add new key value
myInfo.email = 'tuanqc0712@gmail.com'; // or myInfo['my-email'] = 'tuanqc0712@gmail.com'; 

console.log(myInfo);  // Return all data
console.log(myInfo.name);  // Return key data

// Remove key value
delete myInfo.age;
delete myInfo.name;

// Save function
console.log(myInfo.getName());
