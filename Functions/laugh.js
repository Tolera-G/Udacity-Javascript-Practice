/*
 * Programming Quiz: Laugh
 */

const laugh = function(num) {
    let sound = "";
    for (let i = 0; i < num; i++) {
        sound += "ha";
    }
    return sound + "!";
};

// Test your code
console.log(laugh(3)); // Output: hahaha!