// Simple JavaScript file with several print/examples

console.log('Hello! This is a simple print line.');

const name = 'Ayah';
console.log('My name:', name);

const age = 27;
console.log(`My age: ${age} years`);

console.log('Line 1\nLine 2\nLine 3');

const a = 5, b = 7;
console.log('5 + 7 =', a + b);

const pi = Math.PI;
console.log('Approximate value of Pi:', pi.toFixed(4));

console.log('Quote: "This is text inside quotes"');

// Function examples
function greet(who) {
  return `Hello, ${who}!`;
}
console.log(greet(name));

const add = (x, y) => x + y;
console.log('3 + 4 =', add(3, 4));

// Async example (demonstration)
async function fakeFetch() {
  return new Promise((resolve) => setTimeout(() => resolve('fetched data'), 500));
}

(async () => {
  const data = await fakeFetch();
  console.log('Async result:', data);
})();

// Array and object
const items = [1, 2, 3];
items.forEach((it, idx) => console.log(`item ${idx}:`, it));

const person = { id: 1, name: 'Ayah', roles: ['dev', 'admin'] };
console.log('Person:', person);

console.log('End of examples.');
