/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/**
 * Creates a single line of asterisks followed by a newline.
 * @param {number} length - The number of stars in the line.
 */
function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

/**
 * Builds a multi-line triangle string.
 * @param {number} height - The total number of rows in the triangle.
 */
function buildTriangle(height) {
    let triangle = "";
    
    for (let i = 1; i <= height; i++) {
        triangle += makeLine(i);
    }
    
    return triangle;
}

// Test the function
console.log(buildTriangle(10));