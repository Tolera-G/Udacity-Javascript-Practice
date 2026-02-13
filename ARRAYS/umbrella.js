/*
 * Programming Quiz: Umbrella
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

// Umbrella object
var umbrella = {
  color: "blue",
  isOpen: false,

  open: function() {
    if (!this.isOpen) {
      this.isOpen = true;
      return "The umbrella is now open!";
    } else {
      return "The umbrella is already open.";
    }
  },

  close: function() {
    if (this.isOpen) {
      this.isOpen = false;
      return "The umbrella is now closed!";
    } else {
      return "The umbrella is already closed.";
    }
  }
};

// Example usage:
console.log(umbrella.open());   // The umbrella is now open!
console.log(umbrella.close());  // The umbrella is now closed!