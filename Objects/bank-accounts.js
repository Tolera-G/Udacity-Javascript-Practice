/*
 * Programming Quiz: Bank Accounts 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message.
  * - Be careful about the punctuation, spacing, and spelling of the printed message.
 */


/* 
 * Programming Quiz: Bank Accounts 1
 */

const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = this.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            this.balance -= amount;
        }
    },
    printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());
