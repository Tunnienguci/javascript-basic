/**
 * IF - ELSE
 */

if(condition) // Condition is true 
{
    //Code here
}
else // condition is false
{
    //Code here
}



// Other example
var a = 3;

if(a == 3) // Condition is true 
{
    console.log('True');
}
else // condition is false
{
    console.log('False');
}


/**
    Math with &&

    When there are 06 characters in the variable, the system will automatically return False.

    " "
    0
    null
    undefined
    NaN
    false

 */
    var result = "A" && "B" && "C";         //When the system checks the values one by one and the above 6 values are not encountered, the system returns the last value.
    console.log(result) // Output: C

    // Other Example
    var result = "A" && " " && "C";         
    console.log(result) // Output: False


    /**
        With Or || when the system finds that the first value is different from the above 6 values, the system will take the first value.
        In case the first value belongs to 06 special values above, the system will automatically ignore that value and move to the next value.
     */
    var result = "A" || "B" || "C";     
    console.log(result) // Output: A    

    // Other example
    var result = null || " " || "C";     
    console.log(result) // Output: C    