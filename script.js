//your JS code here. If required.
// Define the student object
const student = {
  name: "John",
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ['name']

