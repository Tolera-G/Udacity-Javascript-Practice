/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(teamArray) {
    // Check if the array length is 7 or more
    if (teamArray.length >= 7) {
        return true;
    } else {
        return false;
    }
}

// Test code
const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];

console.log(hasEnoughPlayers(team1)); // true
console.log(hasEnoughPlayers(team2)); // false
console.log(hasEnoughPlayers(team3)); // false
console.log(hasEnoughPlayers(team4)); // true
