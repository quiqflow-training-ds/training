// example.js

// 1. Variables
let name = "Fares";
const age = 25;
var isDeveloper = true;

// 2. Function
function greet(userName) {
    return `Hello, ${userName}! Welcome to JavaScript.`;
}

// 3. Object
const user = {
    name: "Fares",
    age: 25,
    skills: ["JavaScript", "Node.js", "React"],
    greet: function() {
        console.log(`Hi, I'm ${this.name} and I know ${this.skills.join(", ")}.`);
    }
};

// 4. Loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5. Conditional
if (isDeveloper) {
    console.log(greet(name));
} else {
    console.log("You should learn JavaScript!");
}

// 6. Using the object method
user.greet();
