/**
    Strings in JavaScript

    1. Create Chain
        - Ways to create chains
        - How should I use it?
        - Check data type
    2. Some cases use backslash
    3. See string length
    4. Pay attention to the string length when coding
    5. Template string ES6

 */

// 1. Create Chain

var fullName = 'Tunnienguci';  // Recommend   ---> Type: String

var fullName = new String('Cong Tuan');   // ---> Type: Object

var fullName = "tunnienguci is \"handsome\"" // or var fullName = "tunnienguci is 'handsome' "


// 2. Use Backslash: Recommend max: 80 words/line
var text = "tunnienguci is a software engineer, u know, I'm studying Javascript very hard work."
+ "But my English is not good, I'll try hard everyday to improve it";


// See String length: 80 words

// Template String ES6
var firstName = "Tunnie";
var lastName = "Nguci";

console.log(`I'm ${firstName} ${lastName}`); // ---> Template String ES6



/**
    How do work with String?

    Javascript string methods
    1. Length
    2. Find Index
    3. Cut String
    4. Replace
    5. Convert to uppercase
    6. Convert to lowercase
    7. Trim
    8. Split
    9. Get a character by index

 */


    var myString = "I'm Tunnienguci, I'm a software engineer";

    // 1. Length
    console.log(myString.length);

    // 2. Find Index
    console.log(myString.indexOf("Tunnie")); // ----> Return 04 [Index of first character]
    console.log(myString.indexOf("Tunnie",2)); // ----> Return 04 [Index of second character]
    console.log(myString.lastIndexOf("Tunnie")); // ----> Return 04 [Index of last character]

    //Search
    console.log(myString.search('Tunnie'));

    // 3. Cut String
    console.log(myString.slice(4,6))  // 4 is start and 6 is end

    // 4. Replace
    console.log(myString.replace('Tunnie','CongTuan')) // Only change the first word
    console.log(myString.replace(/Tunnie/g,'CongTuan')) // Change all  /Word/g

    // 5 - 6. Convert to lowercase/ uppercase
    console.log(myString.toLowerCase());
    console.log(myString.toUpperCase());

    // 7. Trim
    console.log(myString.trim()); // Clean empty space

    // 8. Split
    var languages = "JavaScript, PHP, Ruby";
    console.log(languages.split(', '));

    //9. Get a character by index
    const myString2 = "Tunnie Nguci";
    console.log(myString2.charAt(10));

