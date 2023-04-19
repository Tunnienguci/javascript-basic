# JavaScript Basics

> JavaScript is the most widely used programming language in the world, and it has become the de facto language of the web. Despite being originally designed for creating dynamic web pages, it is now used for everything from server-side applications to mobile app development. With its easy-to-learn syntax and powerful capabilities, JavaScript has become an essential tool for any programmer looking to build web-based applications. In addition, the language has a large and supportive community, with countless resources available online to help programmers of all levels improve their skills and build better applications. Whether you're just getting started with programming or you're a seasoned pro, JavaScript is a language that you'll definitely want to have in your toolkit.
> 

**Table of Content**

# The way to use JavaScript in IDE/EditorText

We can use JavaScript in HTML with script tag, this is Internal in HTML

```jsx
<script>
		function sum(a,b)
		{
			return a + b;
		}
</script>
```

And External, we can link a JavaScript Files.

# Linking a JavaScript Files

To link a JavaScript file to an HTML document, you can use the `<script>` tag in the HTML code. Within the tag, you can specify the source of the JavaScript file using the `src` attribute. For example, `<script src="myscripts.js"></script>` would link to a JavaScript file named "myscripts.js" in the same directory as the HTML document.

# How JavaScript work?

JavaScript is an interpreted language, meaning that code is executed by an interpreter at runtime rather than being compiled ahead of time. When a web page that includes JavaScript is loaded in a browser, the browser's JavaScript engine reads the code and executes it, making changes to the page as necessary. JavaScript code can interact with HTML and CSS to dynamically modify the contents and appearance of a web page, and it can also communicate with servers to fetch or send data. In addition, JavaScript can be used to create standalone applications, either in a web browser or on a server using tools like Node.js.

# What is the function?

Function has declared to reused and function is an object in JavaScript.

**Function divided into 2 types: Function Declaration and Function Express**

> *People often mistakenly believe that there are 3 types of functions and Arrow function is also one of them, but in fact arrow function is a function, also known as an abbreviation for Express Function.*
> 

There are 2 types of function, this is function do something and process data

- With function do something such as: alert, onClick, … (Action)
- With function process data such as: a+b, a%b, … all of these actions will *return a value*.

## Function Declaration

The way to declare:

```jsx
Function sum(a,b)
{
		Return a + b;
}
```

## Function Express

```jsx
var firstName = "Tunnienguci";
```

Function Express create a value.

- **Arrow Function:** `let myFunction = (a,b) ⇒ a*b;`

# Values & Variables

```jsx
let firstName = “Tunnienguci”;
```

`“Tunnienguci”` is a value.

`firstName` is variable.

- To set a name for a variable we use camelCase for identifier names (variables and functions).
- Variable names can only contain numbers of letters, underscores (_) or the dollar sign ($)
- So that’s the only two symbols that are allowed besides letters and numbers this is an underscore and a dollar sign.

With some function/variable names to a convention of writing it in all upper case (`let PI = 3.1415;`) and VS Code actually marks this variable name with a different color because it knows about this convention that we use.

# Data Types

| Type | The primitive types | Reference types |
| --- | --- | --- |
| Data Types | 1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Big Int (ES2020)
7. Symbol (ES6) | 1. Object
2. Array |

## The primitive types

1. **Number**: Used for decimals and integers.
2. **String**: Used for text.
3. **Boolean**: Logical type that can only be true or false for taking decisions.
4. **Undefined**: Value taken by a variable that is not yet defined (” Empty value”).
5. **Null**: Also means ‘empty value’.
6. **Symbol** (ES6): Value that is unique and cannot be changed.
7. **BigInt**: Value largest than Integer.

**Integer Range:** $*-2^a$  to $-2^b$    | (a = **1074** and b = **1024**)*

Check type of data we can use:

```jsx
console.log(typeof ${nameVariable})
```

Here's how we can use it to check what type the variable we're using is, and note that, when `typeof null`, the return value will be an **Object.**

# Value Data & Reference Data

In JavaScript, there are two main types of data: value data and reference data.

Value data refers to data that is stored directly in a variable, such as numbers, strings, and Booleans.

Reference data, on the other hand, refers to data that is stored by reference to an object. This includes arrays, objects, and functions.

When you copy a value data variable to another variable, the new variable gets its own copy of the data. This means that changes to one variable do not affect the other variable.

When you copy a reference data variable to another variable, the new variable gets a reference to the same object. This means that changes to one variable will affect the other variable, since they both reference the same object.

For example, consider the following code:

```
let a = 5;
let b = a;
a = 10;
console.log(b); // Output: 5
```

In this code, `a` is a value data variable that is set to `5`. When `b` is set to `a`, `b` gets its own copy of the data in `a`. When `a` is then set to `10`, `b` is not affected, since it has its own copy of the original data.

Now consider the following code:

```
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]

```

In this code, `arr1` is a reference data variable that is set to an array. When `arr2` is set to `arr1`, `arr2` gets a reference to the same array that `arr1` is referencing. When `arr1` is then modified by pushing the value `4` onto the end of the array, `arr2` is also affected, since it is referencing the same array.

# Numbers, Dates, Timers

**Numbers**

In JavaScript, numbers are used to represent both integers and floating-point values. You can use arithmetic operators like `+`, `-`, `*`, and `/` to perform mathematical operations on numbers. Here are some examples:

```
let x = 5;
let y = 3;
console.log(x + y); // Output: 8
console.log(x - y); // Output: 2
console.log(x * y); // Output: 15
console.log(x / y); // Output: 1.6666666666666667

```

You can also use the `Math` object to perform more complex mathematical operations. For example:

```
console.log(Math.sqrt(25)); // Output: 5
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.floor(3.14)); // Output: 3
console.log(Math.ceil(3.14)); // Output: 4

```

**Dates**

In JavaScript, dates are represented using the `Date` object. You can create a new `Date` object by calling the `Date()` constructor. Here are some examples:

```
let date1 = new Date();
console.log(date1); // Output: current date and time

let date2 = new Date('2022-12-25');
console.log(date2); // Output: December 25, 2022

let date3 = new Date(2022, 11, 25);
console.log(date3); // Output: December 25, 2022

```

You can also perform various operations on dates using methods like `getFullYear()`, `getMonth()`, `getDate()`, and so on. For example:

```
let date = new Date('2022-12-25');
console.log(date.getFullYear()); // Output: 2022
console.log(date.getMonth()); // Output: 11 (December is month 11)
console.log(date.getDate()); // Output: 25

```

**Timers**

In JavaScript, you can use timers to execute code at specified intervals or after a specified amount of time has passed. There are two main types of timers: `setTimeout()` and `setInterval()`. `setTimeout()` executes a piece of code once, after a specified amount of time has passed. `setInterval()` executes a piece of code repeatedly, with a specified amount of time between each execution. Here are some examples:

```
// setTimeout()
setTimeout(function() {
  console.log('Hello, world!');
}, 5000); // Output: 'Hello, world!' after 5 seconds

// setInterval()
let count = 0;
let intervalId = setInterval(function() {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000); // Output: 0, 1, 2, 3, 4, 5 with a 1-second delay between each

```

These are just a few examples of what you can do with numbers, dates, and timers in JavaScript. There are many other methods and properties available for these objects, so be sure to consult the documentation for more information.

# Arrays

```jsx
let arr = [’a’,’b’,’c’,’d’,’e’];
```

We start with `**slice` : Reference value and return a new array**

```jsx
console.log(arr.slice(2));                 //Output: 'c' , 'd ', 'e'
console.log(arr.slice(2, 4));              //Output: 'c' , 'd' 
console.log(arr.slice(-3,-1));             //Output: 'c' , 'd' 
console.log(arr.slice(1,-2));              //Output: 'b' , 'c'
console.log([...arr]);                     //Output: copy array [’a’,’b’,’c’,’d’,’e’]
```

We start with `**splice` : Create a new array**

```jsx
console.log(arr.splice(2));              //Output: 'c' ,'d','e'
console.log(arr);                        //Output: 'a' ,'b'
```

In other words, the splice here will be used to delete the elements in the original array.

`arr.splice(-1)  //Output: a,b,c,d`

`arr.splice(1,2)     //Output: a,d,e`

We start with `**Reverse**` : **Reverse array**

```jsx
console.log(arr.reverse());   //Output: 'e', 'd', 'c', 'b', 'a'
```

We start with **`concat`** : **Used to concatenate arrays or concatenate objects.**

```jsx
let arr2 = ['j','h','k']
let letters = arr.concat(arr2);
console.log(letters); 

//Output: ’a’,’b’,’c’,’d’,’e’,'j','h','k'
//Other case;

console.log([...arr,...arr2]);
//Output: ’a’,’b’,’c’,’d’,’e’,'j','h','k'
```

We start with **`join`**: **Add an element between the elements in the array and turn the array into a string.**

```jsx
console.log(letters.join(” - “));
//Output: a - b - c - d - e - j - h - k
//Typeof: String
```

# for - forEach

Initialize sample data:

```jsx
const arr = [200, 123, -441, -512, -59, 13, 5, 19, 220];
```

We start with **`for`**

```jsx
for (const index of arr)
{
		if(index > 0)
		{
				console.log('You deposited ${index}');
		}
		else {
				console.log('You withdrew ${Math.abs(index)}');
		}
}
```

We start with `**forEach**`

```jsx
arr.forEach(function(index))
{
		if(index > 0)
		{
				console.log('You deposited ${index}');
		}
		else {
				console.log('You withdrew ${Math.abs(index)}');
		}
}
```

# Methods

## Methods

### **Number Methods**

### toFixed()

The `toFixed()` method is used to format a number with a fixed number of digits after the decimal point. For example:

```
let num = 123.456;
console.log(num.toFixed(2)); // Output: "123.46"

```

In this example, the `toFixed()` method is used to format the `num` variable with two digits after the decimal point.

### toPrecision()

The `toPrecision()` method is used to format a number to a specified length. For example:

```
let num = 123.456;
console.log(num.toPrecision(5)); // Output: "123.46"

```

In this example, the `toPrecision()` method is used to format the `num` variable to a length of five.

### toString()

The `toString()` method is used to convert a number to a string. For example:

```
let num = 123;
console.log(num.toString()); // Output: "123"

```

In this example, the `toString()` method is used to convert the `num` variable from a number to a string.

### Array Methods

### push()

The `push()` method is used to add an element to the end of an array. For example:

```
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

```

In this example, the `push()` method is used to add the number `4` to the end of the `arr` array.

### pop()

The `pop()` method is used to remove the last element from an array. For example:

```
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // Output: [1, 2]

```

In this example, the `pop()` method is used to remove the last element (`3`) from the `arr` array.

### shift()

The `shift()` method is used to remove the first element from an array. For example:

```
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // Output: [2, 3]

```

In this example, the `shift()` method is used to remove the first element (`1`) from the `arr` array.

### unshift()

The `unshift()` method is used to add an element to the beginning of an array. For example:

```
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]

```

In this example, the `unshift()` method is used to add the number `0` to the beginning of the `arr` array.

### slice()

The `slice()` method is used to create a new array from a portion of an existing array. For example:

```
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);
console.log(newArr); // Output: [2, 3, 4]

```

In this example, the `slice()` method is used to create a new array (`newArr`) from the portion of the `arr` array that starts at index `1` and ends at index `4` (excluding the element at index `4`).

### splice()

The `splice()` method is used to add or remove elements from an array. For example:

```
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr); // Output: [1, 2, 4, 5]

```

In this example, the `splice()` method is used to remove one element (starting at index `2`) from the `arr` array.

# JavaScript Basics: String Methods

Strings are used to represent text in JavaScript. Here are some common string methods and examples of their usage.

## length

The `length` property is used to get the length of a string. For example:

```
let str = "hello world";
console.log(str.length); // Output: 11

```

## toUpperCase

The `toUpperCase` method is used to convert a string to uppercase. For example:

```
let str = "hello world";
console.log(str.toUpperCase()); // Output: "HELLO WORLD"

```

## toLowerCase

The `toLowerCase` method is used to convert a string to lowercase. For example:

```
let str = "Hello World";
console.log(str.toLowerCase()); // Output: "hello world"

```

## concat

The `concat` method is used to concatenate two or more strings. For example:

```
let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2)); // Output: "hello world"

```

## indexOf

The `indexOf` method is used to find the index of a substring within a string. For example:

```
let str = "hello world";
console.log(str.indexOf("world")); // Output: 6

```

## slice

The `slice` method is used to extract a portion of a string. For example:

```
let str = "hello world";
console.log(str.slice(6)); // Output: "world"

```

## replace

The `replace` method is used to replace a substring within a string. For example:

```
let str = "hello world";
console.log(str.replace("world", "universe")); // Output: "hello universe"

```

These are just a few examples of the many string methods available in JavaScript. For more information, consult the documentation or a reference book on the language.

# Conditionals

## if statement

The `if` statement is used to execute a block of code if a certain condition is true. For example:

```
if (x > 10) {
  console.log("x is greater than 10");
}
```

## if-else statement

The `if-else` statement is used to execute one block of code if a certain condition is true, and another block of code if the condition is false. For example:

```
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal to 10");
}

```

## switch statement

The `switch` statement is used to execute different blocks of code depending on the value of an expression. For example:

```
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is not Monday, Tuesday, or Wednesday");
    break;
}

```

In this example, the value of the `day` variable is compared to different cases using the `case` keyword. If the value matches one of the cases, the corresponding block of code is executed. If none of the cases match, the `default` block of code is executed.

## Example

```
let age = 18;

if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not yet old enough to vote.");
}

```

In this example, we are using an `if-else` statement to determine whether a person is old enough to vote. If the person's age is greater than or equal to 18, the first block of code is executed. Otherwise, the second block of code is executed.

## Ternary

**The ternary** operator is a shorthand way of writing an `if-else` statement. It has the following syntax:

```
condition ? expression1 : expression2;

```

If the condition is true, `expression1` is executed. If the condition is false, `expression2` is executed. For example:

```
let age = 19;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"

```

In this example, the ternary operator is used to check whether the `age` variable is greater than or equal to 18. If it is, the message "You are an adult" is assigned to the `message` variable. If it is not, the message "You are not an adult" is assigned to the `message` variable.

# Loop

### for loop

The `for` loop is one of the most common types of loops in JavaScript. It allows you to repeat a block of code a specified number of times. Here's the basic syntax:

```
for (let i = 0; i < 10; i++) {
  console.log(i);
}

```

In this example, the `for` loop will run 10 times, with the value of `i` starting at 0 and increasing by 1 each time through the loop. The loop will stop running when `i` is no longer less than 10.

### while loop

The `while` loop is another type of loop that allows you to repeat a block of code while a certain condition is true. Here's the basic syntax:

```
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

```

In this example, the `while` loop will run as long as `i` is less than 10. The value of `i` starts at 0 and increases by 1 each time through the loop.

### do-while loop

The `do-while` loop is similar to the `while` loop, but it will always run at least once, even if the condition is false. Here's the basic syntax:

```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

```

In this example, the loop will run at least once, since the value of `i` starts at 0, and it will continue to run as long as `i` is less than 10.

### for...in loop

The `for...in` loop is used to iterate over the properties of an object. Here's the basic syntax:

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

```

In this example, the loop will iterate over the properties of the `person` object, logging each property name and value to the console.

### for...of loop

The `for...of` loop is used to iterate over the values of an iterable object, such as an array. Here's the basic syntax:

```
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

```

In this example, the loop will iterate over the values of the `numbers` array, logging each value to the console.

## Example

```
for (let i = 0; i < 5; i++) {
  console.log(`The current value of i is ${i}`);
}

```

This loop will run 5 times, logging the value of `i` to the console each time.

```
let i = 0;
while (i < 5) {
  console.log(`The current value of i is ${i}`);
  i++;
}

```

This loop will also run 5 times, but it uses a `while` loop instead of a `for` loop.

```
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(`The current number is ${number}`);
}

```

This loop will iterate over each value in the `numbers` array, logging each value to the console.

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

```

This loop will iterate over each property in the `person` object, logging each property name and value to the console.

# DOM in JavaScript

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can interact with the page.

**There are 12 nodes used in the DOM Tree:**

1. Document
2. Element (HTML tags)
3. Attribute
4. Text
5. Comment
6. DocumentFragment
7. CDATASection
8. ProcessingInstruction
9. EntityReference
10. Entity
11. Notation
12. XMLDeclaration

**There are two main sets of DOM methods:**

1. `getElementby…` (gets only one element)
2. `querySelector …` (gets multiple elements)

For example, to get each paragraph element on a page:

```jsx
let paragraphs = document.querySelectorAll("p");
```

To log the properties of an element in the console:

```jsx
console.dir(element);
```

Here's an example of how you can use the DOM in JavaScript:

```jsx
// Get the button element from the DOM
const button = document.querySelector("#myButton");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Get the input element from the DOM
  const input = document.querySelector("#myInput");

  // Get the value from the input element
  const value = input.value;

  // Display the value in a paragraph element on the page
  const output = document.querySelector("#myOutput");
  output.textContent = value;
});
```

[HTML & CSS Basics](https://www.notion.so/HTML-CSS-Basics-7b3cacd3ae9b45f2a81a8b883ea29b5d)
[JavaScript Basics](https://www.notion.so/tunnienguci/2419c17c58574ecfb4d22484e25661f6?v=67a76b5a9b01473fb3e49916b09174ef#f72e428934c04f22aded461ff1597566)

**Author**: Tunnienguci
