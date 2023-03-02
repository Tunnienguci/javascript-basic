// For Loop

// Case 1:
for (var i = 0; i <= 1000; i++) {
    //Coding here
    console.log(i);
}

// Case 2:
var i = 0;
for (; i <= 1000; i++) {
    //Coding here
    console.log(i);
}


// Case 3:
var myArray = [
    'Java',
    'JavaScript',
    'PHP',
    'Dart',
];

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++)
{
    console.log(myArray[i]);
}


// For/in Loop
var myInfo = {
    name: 'Tuan',
    age: 21,
    address: 'Hanoi'
};

for (var key in myInfo)
{
    console.log(myInfo[key]); //OUTPUT: name: 'Tuan', age: 21, address: 'Hanoi'
}


// For/of Loop

var languages = [
    'Java',
    'JavaScript',
    'PHP'
]

for (var value of languages )
{
    console.log(value); // OUTPUT:     'Java', 'JavaScript', 'PHP'
}


// Other example:
var name = "Tunnienguci";
for (var i of name)
{
    console.log(i);
}

// For of is only loop array
// To convert object to array
var myInfo = {
    name: 'Tunnie',
    age: 21
}

Object.values(myInfo); // ---> This is convert from object to array
