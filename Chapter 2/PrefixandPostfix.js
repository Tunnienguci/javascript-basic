// Prefix and Postfix
// ++ Increment 1 numeric value
// -- Decrease by 1 numeric value

// Prefix
    var a = 6;
    var output = ++a;
    console.log(output);

/**
    Step 1: a = a + 1 => 7
    Step 2: return a AFTER + 1
 */


//Postfix
    var a = 6;
    var output = a--;
    console.log(output);
/**
    Step 1: Variable a copy a = 6
    Step 2: - 1 of a , a = a - 1 => a = 5
    Step 3: Return a copy (a = 6)
 */

