// Break and Continue


//Break
for (var i = 1; i < 10; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}


for (var i = 1; i < 50; i++)
{
    if(i % 2 !== 0)
    {
        continue;  // Skip
    }
    console.log(i); //Print an even number
}
