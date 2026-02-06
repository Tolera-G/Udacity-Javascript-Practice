/*
 * Programming Quiz: Inline Functions
 */

// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function
emotions("happy", function(num) {
    let sound = "";
    for (let i = 0; i < num; i++) {
        sound += "ha";
    }
    return sound + "!";
});