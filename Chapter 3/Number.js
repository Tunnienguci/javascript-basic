/*
    Number Type in JavaScript

    1.  Create number values
        - Ways to create number values.
        - How and why?
        - Check data type

    2.  Working with numbers
        - To String
        - To Fixed

*/


// 1.   Create number values
// Way 1: Recommend  -----> Data Type: Number
var age = 18;
var PI = 3.14;


// Way 2: Data Type: Object
var otherNumber = new Number(9);


// Example:
var result = 20 / 'ABC';
console.log(result); // ---> OUTPUT: NaN


// 2.   Working with numbers
var age = 19;
var PI = 3.14;

// To fixed ---> 3.14 = 3  || 3.50 = 4
console.log(PI.toFixed())

// To String
console.log(age.toString());  // OUTPUT: 19 but data type is string