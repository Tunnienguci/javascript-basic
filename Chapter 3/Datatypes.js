/**
        Data Types

        1.  Primitive Data
            - Number
            - String
            - Boolean
            - Undefined
            - Null
            - Symbol

        2.  Complex Data
            - Function
            - Object

 */

// Number
var a = 1;

// String
var fullName = "Tunnienguci";

// Boolean
var isSuccess = true;

// Undefined
var age;

// Null;
var isNull = null;

// Symbol
var id = Symbol('id'); // unique 
var id2 = Symbol('id2'); // unique

console.log(id == id2);  // ===> False because Symbol is unique


// Function
var myFunction = function()
{
    alert('Hi, Tunnienguci');
}

// When call to function --> the function will run

// Object Types
var myObject = {
    name: 'Tunnie',
    age: 21,
    address: 'Hanoi',
    myFunction: function()
    {

    }
};


var myArray = [
    'JavaScript',
    'PHP',
    'HTML'
];



// ================================ CHECK TYPE =============================== //
console.log(typeof [varname])

//Example:
console.log(typeof myArray)


//Special typeof Null === object
console.log(typeof isNull) // ==> Object
