/**
 * Logical
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b > 0)
{
    console.log("Congratulation");
}
else if(b != 2)
{
    console.log("Fail");
}
else if(a > 1 || c < 3)
{
    console.log("Fail");
}