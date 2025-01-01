# JavaScript ES6 Features

## 1. Let and Const
### Let
- Block-scoped variable declaration.
- Cannot be redeclared in the same scope.
```javascript
let x = 10;
if (true) {
    let x = 20; // Different scope
    console.log(x); // 20
}
console.log(x); // 10
```

### Const
- Block-scoped constant declaration.
- Must be initialized during declaration.
- Cannot be reassigned.
```javascript
const PI = 3.14;
// PI = 3.15; // Error
```

## 2. Arrow Functions
- Concise syntax for writing functions.
- Does not have its own `this` context.
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

## 3. Template Literals
- Multiline strings and string interpolation using backticks (`).
```javascript
const name = "John";
const message = `Hello, ${name}!`;
console.log(message); // Hello, John!
```

## 4. Default Parameters
- Set default values for function parameters.
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
```

## 5. Destructuring Assignment
### Array Destructuring
- Extract values from arrays.
```javascript
const [a, b] = [1, 2];
console.log(a, b); // 1, 2
```

### Object Destructuring
- Extract values from objects.
```javascript
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice, 25
```

## 6. Rest and Spread Operators
### Rest Operator
- Collects remaining elements into an array.
```javascript
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 6
```

### Spread Operator
- Expands an array or object.
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

## 7. Classes
- Syntactic sugar for prototypes.
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

## 8. Modules
- Export and import code between files.
### Export
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### Import
```javascript
// main.js
import { add, subtract } from './math.js';
console.log(add(2, 3)); // 5
```

## 9. Promises
- Handle asynchronous operations.
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});
fetchData.then(data => console.log(data));
```

## 10. Async/Await
- Simplifies working with promises.
```javascript
async function fetchData() {
    const data = await new Promise(resolve => setTimeout(() => resolve("Data fetched"), 1000));
    console.log(data);
}
fetchData();
```

## 11. Enhanced Object Literals
- Shorthand for properties and methods.
```javascript
const name = "Alice";
const user = {
    name,
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
user.greet();
```

## 12. Map and Set
### Map
- Key-value pairs.
```javascript
const map = new Map();
map.set('a', 1);
console.log(map.get('a')); // 1
```

### Set
- Unique values.
```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
```

## 13. Iterators and Generators
### Iterators
- Define custom iteration behavior.
```javascript
const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) return { value: 'Hello', done: false };
                if (step === 2) return { value: 'World', done: false };
                return { value: undefined, done: true };
            }
        };
    }
};
for (const value of iterable) {
    console.log(value);
}
```

### Generators
- Functions that yield values.
```javascript
function* generator() {
    yield 'Hello';
    yield 'World';
}
const gen = generator();
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World
```

## 14. Symbol
- Unique and immutable values.
```javascript
const sym1 = Symbol('desc');
const sym2 = Symbol('desc');
console.log(sym1 === sym2); // false
```

## 15. for...of Loop
- Iterates over iterable objects.
```javascript
const arr = [10, 20, 30];
for (const num of arr) {
    console.log(num);
}
```

## 16. New String Methods
```javascript
console.log('hello'.startsWith('he')); // true
console.log('hello'.endsWith('lo')); // true
console.log('hello'.includes('ll')); // true
```

## 17. New Array Methods
```javascript
const arr = [1, 2, 3, 4];
console.log(arr.find(x => x > 2)); // 3
console.log(arr.findIndex(x => x > 2)); // 2
```

## 18. Object.assign()
- Copies properties from one or more source objects to a target object.
```javascript
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }
```

## 19. Trailing Commas
- Trailing commas in function arguments and array elements.
```javascript
const arr = [1, 2, 3, ];
function foo(a, b,) {
    console.log(a, b);
}
foo(1, 2,);
```
- **Advantages:**
  - Helps in version control by reducing the number of changes when adding new elements or arguments.
  - Simplifies editing of code, especially when rearranging or appending items.

- **Usage:**
  - Works in arrays, objects, and function parameters.
  - It is ignored by the interpreter, so it does not affect the program's execution.

```javascript
const obj = {
    key1: 'value1',
    key2: 'value2',
}; // No error, the trailing comma is allowed

const numbers = [1, 2, 3, ]; // Trailing comma in arrays
function example(a, b, c,) {
    console.log(a, b, c);
} // Trailing comma in function parameters
```

- **Important:**
  - Ensure compatibility with older environments, as some might not support trailing commas in function arguments.

## 20. Conclusion
ES6 introduced a wide range of features that simplify coding, improve readability, and offer new capabilities. Mastering these features allows developers to write modern and efficient JavaScript code.
