/*
 * Programming Quiz: Inline (5-6)
 */

// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Your code goes here:
// Call the emotions() function with a string and an inline function expression
emotions("happy", function(num) {
    let sound = "";
    for (let i = 0; i < num; i++) {
        sound += "ha";
    }
    return sound + "!";
});