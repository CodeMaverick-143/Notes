
# JavaScript Notes

## 1. Variables and Scopes

### Variable Declarations:
- `let`: Block-scoped. Preferred for variables that may change.
- `const`: Immutable reference; cannot be reassigned.
- `var`: Function-scoped; avoid due to hoisting issues.

Example:
```javascript
if (true) {
  let blockScoped = "I'm in the block";
  var functionScoped = "I'm in the function";
}
console.log(functionScoped); // Works
// console.log(blockScoped); // Error: blockScoped is not defined
```

### Hoisting:
```javascript
console.log(a); // Undefined due to hoisting
var a = 10;
```

---

## 2. Data Types

### Primitive Types:
Immutable, changing one variable doesn't affect others.
```javascript
let a = "hello";
let b = a;
b = "world";
console.log(a); // "hello"
```

### Reference Types:
Mutable, objects and arrays are passed by reference.
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob"
```

### Type Conversion:
```javascript
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
```

---

## 3. Operators

### Logical Operators:
```javascript
let result = false || "fallback"; // "fallback"
```

### Ternary Operator:
```javascript
let isEven = (num % 2 === 0) ? "Even" : "Odd";
```

---

## 4. Functions

### Closures:
A function can access variables from its lexical scope even after the scope has closed.
```javascript
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

### IIFE (Immediately Invoked Function Expressions):
```javascript
(function() {
  console.log("Runs immediately!");
})();
```

---

## 5. Objects

### Shallow Copy:
```javascript
let copy = { ...original };
```

### Deep Copy:
```javascript
let deepCopy = JSON.parse(JSON.stringify(original));
```

### Prototypes:
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, ${this.name}`);
};
let person = new Person("Alice");
person.greet();
```

---

## 6. Arrays

### Important Methods:
- **Mutating:** `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`.
- **Non-Mutating:** `.slice()`, `.concat()`, `.filter()`, `.map()`.

Example:
```javascript
let nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]
let doubled = nums.map(num => num * 2); // [2, 4, 6, 8]
```

---

## 7. ES6+ Features

### Template Literals:
```javascript
let name = "Alice";
console.log(`Welcome, ${name}!`);
```

### Destructuring:
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
```

### Spread and Rest Operators:
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

---

## 8. Asynchronous JavaScript

### Promises:
```javascript
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Async/Await:
```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
```

---

## 9. DOM Manipulation

### Creating and Appending Elements:
```javascript
let div = document.createElement("div");
div.textContent = "Hello, World!";
document.body.appendChild(div);
```

### Event Delegation:
```javascript
document.body.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

---

## 10. Error Handling

### Try-Catch-Finally:
```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("Cleanup code runs here.");
}
```

---

## 11. Modules

### Example:
```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```
