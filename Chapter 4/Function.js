/*
    Function same name
    Create variable
    Define variable

*/

function showMessages()
{
    console.log('Messages 1')
}


function showMessages()
{
    console.log('Messages 2')
}

// When run code althought same name but the system will show the last function.   --> messages 2

// Private
function showDialog()
{
    var name = "Tunnie Ngu Nghech";
    console.log(name);
}

// Variable name cannot create out function