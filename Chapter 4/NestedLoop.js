// Nested Loop


var myArray = [
    [1,2],
    [3,4],
    [6,8],
];

for (var i = 0; i < myArray.length; i++)   // Loop 1 times
{
    for(var j = 0; j < myArray[i].length; j++)  // Loop 2 time
    {
        console.log(myArray[i][j]);
    }
}


for (var i = 0; i <= 50; i += 2)
{
    console.log(i);
}