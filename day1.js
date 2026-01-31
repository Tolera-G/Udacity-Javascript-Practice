// Day 1 - JavaScript basics

let name = "Kibow";
let age = 19;

console.log("Name:", name);
console.log("Age:", age);
/*Else if Statements */
const weather="sunny";
if(weather==="snow"){
    console.log("Bring a coat.");
}else if(weather==="rain"){
    console.log("Bring a rain jacket.");
}else{
    console.log("wear what you have on.");
}
/*question about if else statement
 */
const money=100.50;
const price=100.50;

if(money>price){
    console.log("you paid exra, here is your change.");
}else if (money===price){
    console.log("You paid the exact amount, have a nice day!");
} else {
    console.log("That is not enough, you still owe me money.");
}