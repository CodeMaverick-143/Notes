
# TypeScript Notes

## 1. What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing, interfaces, and other advanced features to JavaScript. It is designed to improve the development process by providing better tooling, code quality, and maintainability. TypeScript is compiled into plain JavaScript and runs wherever JavaScript can run.

### Key Features:
- **Static Typing**: TypeScript provides type annotations, helping catch errors during development rather than at runtime.
- **Interfaces**: You can define the shape of objects, classes, and function types.
- **Advanced OOP Features**: It supports classes, inheritance, and access modifiers (public, private, protected).
- **Generics**: TypeScript supports generic types, which allow functions and classes to work with any data type in a type-safe way.
- **Type Inference**: TypeScript can infer types in many cases without explicit annotations.
- **Tooling Support**: Excellent editor support with autocomplete, type checking, and refactoring tools.

---

## 2. What are the basic types in TypeScript?

TypeScript provides a number of basic types that allow developers to define variables more precisely.

### a. **Primitive Types**:
- **`number`**: Represents all numbers, both integers and floating point.
  ```typescript
  let age: number = 30;
  ```
- **`string`**: Represents text data.
  ```typescript
  let name: string = "Alice";
  ```
- **`boolean`**: Represents true/false values.
  ```typescript
  let isActive: boolean = true;
  ```
- **`void`**: Represents the absence of any type, commonly used for functions that don’t return a value.
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```
- **`null` and `undefined`**: Represent empty or uninitialized values.
  ```typescript
  let n: null = null;
  let u: undefined = undefined;
  ```

### b. **Object Types**:
- **Object Type**: Represents a non-primitive type. It can be an array, a function, or an object.
  ```typescript
  let obj: object = { name: "John", age: 30 };
  ```

### c. **Arrays**:
```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

---

## 3. What is Type Annotations and Type Inference in TypeScript?

### a. **Explicit Type Annotations**:
TypeScript allows you to explicitly specify the types of variables.
```typescript
let message: string = "Hello, World!";
```

### b. **Type Inference**:
TypeScript can automatically infer the type of a variable when not explicitly annotated.
```typescript
let num = 10; // TypeScript infers the type to be 'number'
```

---

## 4. How do Functions work in TypeScript?

### a. **Function with Parameters and Return Types**:
```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

### b. **Optional Parameters**:
You can mark parameters as optional by using `?`.
```typescript
function greet(name: string, age?: number): string {
  return `Hello, ${name}, Age: ${age || "Not provided"}`;
}
```

### c. **Default Parameters**:
You can specify default values for parameters.
```typescript
function multiply(x: number, y: number = 1): number {
  return x * y;
}
```

---

## 5. What are Interfaces in TypeScript?

Interfaces define the shape of objects, ensuring that objects follow a particular structure.

### a. **Basic Interface**:
```typescript
interface Person {
  name: string;
  age: number;
}

let user: Person = { name: "Alice", age: 30 };
```

### b. **Optional Properties in Interfaces**:
```typescript
interface Person {
  name: string;
  age?: number;  // age is optional
}
```

### c. **Readonly Properties**:
```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
```

---

## 6. How do Classes work in TypeScript?

TypeScript supports classes and object-oriented programming (OOP) concepts.

### a. **Basic Class Syntax**:
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());
```

### b. **Access Modifiers**:
- **`public`**: Default visibility (accessible everywhere).
- **`private`**: Accessible only within the class.
- **`protected`**: Accessible within the class and its subclasses.

```typescript
class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }
}
```

---

## 7. What are Generics in TypeScript?

Generics allow you to create reusable components and functions that can work with any data type while still enforcing type safety.

### a. **Generic Function**:
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<number>(10); // T is inferred as number
```

### b. **Generic Interface**:
```typescript
interface Box<T> {
  value: T;
}

let box: Box<string> = { value: "Hello" };
```

### c. **Generic Constraints**:
You can constrain the type parameters to certain types using `extends`.
```typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello")); // 5
```

---

## 8. What are Enums in TypeScript?

Enums allow you to define named constants, making code more readable.

### a. **Numeric Enum**:
```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Up;
```

### b. **String Enum**:
```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

---

## 9. What are Type Aliases?

A type alias allows you to create a new name for a type.

```typescript
type Point = { x: number; y: number };
let point: Point = { x: 1, y: 2 };
```

---

## 10. What are Type Assertions?

Type assertions allow you to tell TypeScript that you are confident about the type of a value.

```typescript
let someValue: any = "Hello World";
let strLength: number = (someValue as string).length;
```

---

## 11. How do Modules work in TypeScript?

TypeScript allows you to organize code into modules.

### a. **Exporting**:
```typescript
export class Person {
  constructor(public name: string) {}
}
```

### b. **Importing**:
```typescript
import { Person } from "./Person";

let person = new Person("Alice");
```

---

## 12. What are Advanced Types in TypeScript?

### a. **Union Types**:
A variable can hold more than one type by using the `|` (OR) operator.
```typescript
let value: string | number = "Hello";
value = 42;
```

### b. **Intersection Types**:
Intersection types allow combining multiple types into one.
```typescript
interface Person {
  name: string;
}

interface Worker {
  job: string;
}

type Employee = Person & Worker;

let employee: Employee = { name: "Alice", job: "Developer" };
```

### c. **Literal Types**:
Literal types allow you to specify the exact value a variable can take.
```typescript
let direction: "up" | "down" = "up"; // Only "up" or "down" are allowed
```

---

## 13. What are Type Guards in TypeScript?

Type guards are used to narrow down the type of a variable within a conditional block.

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

let something: any = "Hello";
if (isString(something)) {
  console.log(something.toUpperCase()); // TypeScript knows it's a string here
}
```

---

## 14. What is Declaration Merging in TypeScript?

When the same interface or type is declared multiple times, TypeScript merges them together.

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

let person: Person = { name: "Alice", age: 30 };
```

---

## Conclusion

TypeScript is a powerful, statically typed superset of JavaScript that enhances the developer experience by providing better tooling, type safety, and maintainability. By incorporating features like interfaces, classes, and generics, TypeScript makes large-scale application development more manageable and less error-prone.
