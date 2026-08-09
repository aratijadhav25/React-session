// ==========================================
// Q1: let, const, var (Block Scope)
// ==========================================
// Goal: Understand what happens when you use let and const inside { curly braces }.
// 
// Step 1: Inside the `if` block below, create `var name1 = "John"`.
// Step 2: Inside the same block, create `let name2 = "Ravi"`.
// Step 3: Outside the block, console log BOTH variables.
// Step 4: Notice that `name1` prints out, but `name2` throws a ReferenceError 
//         because `let` is trapped inside the block! 
//         (Comment out the name2 log after testing so your code doesn't crash).

if (true) {
 var name1 ="john";
 let name2 ="Ravi"
  
}

console.log (name1);
console.log(name2);



// ==========================================
// Q2: Arrow Functions (Syntax)
// ==========================================
// Goal: Convert a traditional function into an ES6 Arrow Function.
// 
// Step 1: Look at this traditional function:
//         function add(a, b) { return a + b; }
// Step 2: Rewrite it below as a `const` variable named `addArrow`.
// Step 3: Use the arrow `=>` syntax.
// Step 4: Console log `addArrow(5, 5)`.
// 
// Expected output: 10

// Your code here:
function add(a,b){
  return a+b;
}
const addArrow =(a,b) => a+b;
console.log(addArrow(5,5))

// ==========================================
// Q3: Arrow Functions (Implicit Return)
// ==========================================
// Goal: Make an arrow function even shorter by removing the `{ }` and the word `return`.
// 
// Step 1: Create an arrow function called `multiply` that takes `(a, b)`.
// Step 2: Do NOT use curly braces `{ }`. Do NOT use the word `return`.
// Step 3: Just put `=> a * b` right after the parameters.
// Step 4: Console log `multiply(4, 3)`.
// 
// Expected output: 12

// Your code here:
const multiply = (a,b)=> a*b;
console.log( multiply(4,3));


// ==========================================
// Q4: Default Parameters
// ==========================================
// Goal: Give a function parameter a fallback value if nothing is passed in.
// 
// Step 1: Write an arrow function called `greetUser`.
// Step 2: It should take one parameter, but set a default value of "Guest" like this: `(name = "Guest")`.
// Step 3: Inside the function, return the name.
// Step 4: Console log `greetUser("John")` and then console log `greetUser()` with nothing inside.
// 
// Expected output: 
// "John"
// "Guest"

// Your code here:

const greetUser = (name = "Guest") =>name;
console.log(greetUser("john"));
console.log(greetUser());

// ==========================================
// Q5: Template Literals (String Interpolation)
// ==========================================
// Goal: Combine strings and variables cleanly using backticks ` ` and ${}.
// 
// Step 1: Create a variable `tech = "React"`.
// Step 2: Create a variable `role = "Developer"`.
// Step 3: Create a `sentence` variable. Use backticks (the key above Tab on your keyboard).
// Step 4: Write: `John is a ${tech} ${role}.` inside the backticks.
// Step 5: Console log `sentence`.
// 
// Expected output: "John is a React Developer."

// Your code here:
const tech ="React";
const role ="Developer";
const sentence = `John is a ${tech} ${role}`
console.log (sentence)

// ==========================================
// Q6: Modules (Export & Import)
// ==========================================
// Goal: Learn the syntax to share code between different files. 
// Note: This won't actually run in a single file script, but practice the syntax!
// 
// Step 1: Imagine you have an arrow function `const calculateTax = () => {}`.
// Step 2: Write the ES6 syntax to export it (Named Export) at the bottom of the file:
//         `export { calculateTax };`
// Step 3: Imagine you are in a completely new file. Write the ES6 syntax to import it:
//         `import { calculateTax } from "./mathUtils.js";`
// 
// Write your practice syntax below:

// Your code here:
const calculateTax = (amount) => amount *0.18;
export{calculateTax};
 

import { calculateTax } from "./mathUtils.js";
console.log(calculateTax(1000));