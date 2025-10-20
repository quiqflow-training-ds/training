// example.js

// 1) Variables
const name = "Zaid";
let age = 25;
const isDeveloper = true;

// 2) Functions
function greet(person) {
    return `Hi, I'm ${person}!`;
}

const add = (a, b) => a + b;

// 3) Object
const user = {
    name,
    age,
    skills: ["TypeScript", "Node.js", "React"],
    greet() {
        console.log(`Hi, I'm ${this.name} and I know ${this.skills.join(", ")}.`);
    },
};

// 4) Array basics
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const sum = nums.reduce((acc, n) => acc + n, 0);

// 5) Loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 6) Conditional
if (isDeveloper) {
    console.log(greet(name));
} else {
    console.log("You should learn JavaScript!");
}

// 7) Using the object method
user.greet();

// 8) A tiny utility and its use
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
console.log("clamp(120, 0, 100) ->", clamp(120, 0, 100));

// 9) Show array results
console.log("doubled:", doubled);
console.log("sum:", sum);

// 10) Try/catch example (no network needed)
try {
    const result = add(10, 5);
    if (result !== 15) throw new Error("Math is broken 😅");
    console.log("add(10, 5) =", result);
} catch (err) {
    console.error("Error:", err.message);
}

console.log("Done ✅");
