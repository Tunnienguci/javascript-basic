// While

var myArray = [
    'JavaScript',
    'PHP',
    'Java'
]

while (i < myArray.length)
{
    console.log(myArray[i]);
    i++;
}


// Do/While
var i = 0;

do {
    i++;
    console.log(i)
}
while( i < 10)

// Other example:
var isSuccess = false;

do {
    console.log("Input Data " + i + "Time")
    if(true)
    {
        isSuccess = true;
    }
}
while(!isSuccess && i < 3)