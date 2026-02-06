/*
 * Programming Quiz: Laugh it Off 2
 */

function laugh(num) {
    let message = "";
    
    for (let i = 0; i < num; i++) {
        message += "ha";
    }
    
    return message + "!";
}

// Test the function
console.log(laugh(3));