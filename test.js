// Function that filters active users and formats their names
function getActiveUserNames(users) {
  return users
    .filter(user => user.isActive)                  // keep only active users
    .map(user => `${user.firstName} ${user.lastName}`) // format names
    .sort();                                        // sort alphabetically
}

// Example usage
const users = [
  { firstName: 'Alice', lastName: 'Smith', isActive: true },
  { firstName: 'Bob', lastName: 'Brown', isActive: false },
  { firstName: 'Charlie', lastName: 'Davis', isActive: true }
];

console.log(getActiveUserNames(users));
// Output: ["Alice Smith", "Charlie Davis"]
