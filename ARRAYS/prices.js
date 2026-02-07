/*
 * Programming Quiz: The Price is Right (6-3)
 */

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// Double the 1st, 3rd, and 7th elements
// Indexing starts at 0, so: 1st -> [0], 3rd -> [2], 7th -> [6]
prices[0] *= 2;
prices[2] *= 2;
prices[6] *= 2;

// Print the array to the console
console.log(prices);