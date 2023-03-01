// Built in function

/**
    1. alert
    2. console
    3. confirm
    4. prompt
    5. set timeout 
    6. set interval
*/


// 1. Alert
alert("Quach Cong Tuan");


// 2. Console
console.log("This is console log");


// or
var fullname = "Tunnie";
console.log(fullname);

// 3. Confirm
confirm("Please confirm age!") // This here the box show 2 button OK or Cancel

// 4. Prompt
prompt("Please confirm age")  // This here the box show a input and you can enter your age or something ...

// 5. Set timeout
setTimeout(function()   //Set timeout will run 1 times
    {
        alert("Notification")
    }, 1000 // 1000 = 1s
)

// 6. Set interval
setInterval(function()  //Set interval will run unlimitted
    {
        alert("Notification")
    }, 1000
)