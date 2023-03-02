/*

        1. Create array
            - How to create arrays?
            - How to use?
            - Check datatypes

        2. Array Access
            - Array length
            - Get the trial by index

        3. How to work
            - To String
            - Join
            - Pop
            - Push
            - Shift
            - Unshift
            - Splicing
            - Concat
            - Slicing
*/

// 1.   Create Array
var languages = [
    'JavaScript', // an element of array
    'Laravel',
    'PHP',
    'HTML',
]

console.log(languages)

// Check array
console.log(Array.isArray(languages))


// 2.   Array Access
var languages = [
    'JavaScript', // an element of array
    'Laravel',
    'PHP',
    'HTML',
];

console.log(languages.length); // Get Length of array
console.log(languages[i]); // Get index of array - location - i


// 3.    How to work with array?
var languages = [
    'JavaScript', 
    'Laravel',
    'PHP',
    'HTML',
];

console.log(languages.toString()); // Convert array to string
console.log(languages.join(' ')); // Add space

// Pop (Remove last element)
console.log(languages.pop()); // Remove the last element  ---> [JavaScript, Laravel, PHP]

// Push (Add element)
console.log(languages.push('CSS')); // Add the last element  ---> [JavaScript, Laravel, PHP, HTML, CSS]

// Shift (Remove 1st element)
console.log(languages.shift()); // Remove the first element  ---> [Laravel, PHP, HTML]

// UnShift (Add 1st element)
console.log(languages.unshift('CSS')); // Add the first element  ---> [CSS, JavaScript, Laravel, PHP, HTML]

// Splicing
languages.splice(2, 1);  // Start Index = 2; and remove 1 element
languages.splice(1, 2);  // Start Index = 1; and remove 2 element

languages.splice(1,0,'NodeJS'); // Start Index = 1; No remove - Insert element "NodeJS" after index 1 

languages.splice(1,1,'NodeJS'); // Start Index = 1; remove 1 element after index - Insert element "NodeJS" after index 1 


// Concat --> connect 2 array
var languages2 = [
    'Java',
    'Ruby' 
];
console.log(languages.concat(languages2));

// Slice === cut
console.log(languages.slice(0));  // Copy array
console.log(languages.slice(1,2));  // Cut 1 element with index = 1 to index = 2 --> get 1 element
console.log(languages.slice(1)); // Cut full array start index = 1 to end --> get all element
