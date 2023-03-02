/*
    1. Parameters
        - Type of data
        - 1 parameter
        - Many parameters

    2. Parametric transmission
        - 1 parameter
        - Many parameters

    3. The argument
        - Object object
        - Give the loop for

*/

// 1. Parameter
function writeLog(messages)
{
    console.log(messages);  // Messages is parameter
}
writeLog('Test');
// 2. Data --> unlimited

// 3. Arguments
function arguments()
{
    console.log(argument);
}

arguments('Test'); // Test is argument

// Arguments is only define in function

// 4. For
function writeLog()
{
    for (var param of arguments)
    {
        console.log(param); // param is run / arguments. And arguments is total length of all param
    }
}

writeLog('Test','Test 2','Test 3','This is Param');
