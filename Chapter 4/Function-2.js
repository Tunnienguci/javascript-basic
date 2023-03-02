/* Functions

    1. Declaration function
    2. Expression function
    3. Arrow function

*/

function showMessages()
{
    // This is declaration function ---- Callable before defined
    console.log("This is declaration function");
}

var showMessages2 = function()
{
    // This is expression function   ---- Cannot be called before defined
}

setTimeout(function()
{
    // This is expression function
    console.log("This is expression function");
});

var myObject = {
    myFunction: function()
    {
        // This is expression function
        console.log("This is expression function");
    }
}

