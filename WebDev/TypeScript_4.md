# Advanced TypeScript

TypeScript is a powerful, statically typed superset of JavaScript. As you grow more familiar with the basics, TypeScript provides several advanced features to help you write robust and scalable applications. In this guide, we will explore advanced TypeScript concepts that take your knowledge to the next level.

## 1. Advanced Types

### 1.1. Intersection Types (`&`)

Intersection types allow you to combine multiple types into one. A value of an intersection type must satisfy all of the types involved.

#### Example:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John",
  age: 30,
  street: "123 Main St",
  city: "Anytown"
};
```

Here, `PersonWithAddress` is an intersection of `Person` and `Address`, requiring both `name`, `age`, `street`, and `city`.

### 1.2. Union Types (`|`)

Union types allow a variable to be one of several types. The variable can hold values of any of the types in the union.

#### Example:

```typescript
function printId(id: number | string): void {
  console.log(`ID is: ${id}`);
}

printId(101);  // Works
printId("ABC123");  // Works
```

In this case, the `id` can be either a `number` or a `string`.

### 1.3. Literal Types

Literal types allow you to specify exact values for variables. Instead of just declaring a variable as a type (like `string`), you can specify that it can only be one of a limited set of values.

#### Example:

```typescript
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

move("up");  // Works
move("down");  // Works
move("north");  // Error: Argument of type '"north"' is not assignable to parameter of type 'Direction'.
```

### 1.4. Mapped Types

Mapped types allow you to create new types by transforming properties of an existing type. This is useful for transforming a structure based on certain conditions.

#### Example:

```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  name: string;
  age: number;
}

const person: ReadOnly<Person> = { name: "John", age: 30 };

// person.age = 31;  // Error: Cannot assign to 'age' because it is a read-only property.
```

### 1.5. Conditional Types

Conditional types allow you to define types based on a condition, similar to an `if-else` statement.

#### Example:

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"
```

## 2. Advanced Functions

### 2.1. Function Overloading

TypeScript supports function overloading, which allows you to define multiple function signatures for the same function name.

#### Example:

```typescript
function greet(person: string): string;
function greet(person: string, age: number): string;

function greet(person: string, age?: number): string {
  return age ? `Hello, ${person}. You are ${age} years old.` : `Hello, ${person}.`;
}

console.log(greet("Alice"));  // Hello, Alice.
console.log(greet("Bob", 30));  // Hello, Bob. You are 30 years old.
```

### 2.2. Rest Parameters and Tuple Types

Rest parameters allow you to pass a variable number of arguments to a function. Combined with tuple types, you can define a flexible set of inputs.

#### Example:

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4);  // 10
```

### 2.3. Function Generics

You can apply generics to functions to allow them to accept and return values of various types.

#### Example:

```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity(123);  // Type is number
const str = identity("hello");  // Type is string
```

## 3. Advanced Classes

### 3.1. Class Inheritance and Mixins

TypeScript supports class inheritance, but you can also combine multiple classes using **mixins** to compose behaviors in a class.

#### Example:

```typescript
class Person {
  constructor(public name: string) {}
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

class Worker {
  constructor(public job: string) {}
  work() {
    console.log(`Working as a ${this.job}`);
  }
}

function mixinClass<T extends new (...args: any[]) => {}>(base: T) {
  return class extends base {
    mixinMethod() {
      console.log("Mixin method executed!");
    }
  };
}

const MixedPerson = mixinClass(Person);
const personWithMixin = new MixedPerson("Alice");
personWithMixin.greet();
personWithMixin.mixinMethod();
```

Here, a **mixin** function is used to add additional methods to the `Person` class.

### 3.2. Abstract Classes

Abstract classes allow you to define base classes that cannot be instantiated directly, but can be extended by other classes.

#### Example:

```typescript
abstract class Animal {
  abstract sound(): void;

  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.sound();  // Woof!
dog.move();   // Moving...
```

### 3.3. Static Members in Classes

You can define static properties or methods that are attached to the class itself rather than to instances of the class.

#### Example:

```typescript
class MathUtil {
  static PI = 3.14;

  static calculateCircleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}

console.log(MathUtil.PI);  // 3.14
console.log(MathUtil.calculateCircleArea(5));  // 78.5
```

## 4. TypeScript Decorators

Decorators are special functions that allow you to modify or extend classes, methods, properties, or parameters at runtime. They are commonly used in frameworks like Angular.

### 4.1. Class Decorators

Class decorators are used to modify or enhance a class. They are invoked with the class constructor as an argument.

#### Example:

```typescript
function Logger(constructor: Function) {
  console.log(`${constructor.name} class created`);
}

@Logger
class Person {
  constructor(public name: string) {}
}

const person = new Person("Alice");  // Output: Person class created
```

### 4.2. Method Decorators

Method decorators are used to modify the behavior of methods.

#### Example:

```typescript
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Calling method: ${key}`);
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

class Example {
  @LogMethod
  sayHello() {
    console.log("Hello!");
  }
}

const example = new Example();
example.sayHello();  // Output: Calling method: sayHello
```

## 5. Advanced Utility Types

TypeScript offers several utility types that can be helpful in advanced scenarios.

### 5.1. `Pick<T, K>`

`Pick` allows you to create a new type by selecting specific properties from another type.

#### Example:

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonNameAndAge = Pick<Person, "name" | "age">;

const person: PersonNameAndAge = {
  name: "John",
  age: 30
};
```

### 5.2. `Partial<T>`

`Partial` makes all properties of a type optional.

#### Example:

```typescript
interface Person {
  name: string;
  age: number;
}

const partialPerson: Partial<Person> = { name: "John" };
```

### 5.3. `Record<K, T>`

`Record` creates an object type with keys of type `K` and values of type `T`.

#### Example:

```typescript
type PersonRoles = Record<string, string>;

const roles: PersonRoles = {
  admin: "Alice",
  user: "Bob"
};
```

### 5.4. `ReturnType<T>`

`ReturnType` extracts the return type of a function.

#### Example:

```typescript
function getName(): string {
  return "Alice";
}

type NameReturnType = ReturnType<typeof getName>;  // string
```

## 6. Conclusion

Advanced TypeScript provides a wealth of features that allow you to write more robust, flexible, and maintainable code. By mastering concepts such as generics, advanced types, decorators, and utility types, you can fully leverage TypeScript’s power and create scalable applications.

### Key Takeaways:
- **Intersection Types** and **Union Types** help you combine and work with multiple types.
- **Mapped Types** and **Conditional Types** provide advanced manipulation of types.
- **Function Overloading**, **Rest Parameters**, and **Generics** provide flexibility and reusability.
- **Mixins** and **Abstract Classes** enable complex class designs and inheritance patterns.
- **Decorators** offer runtime customization of classes and methods.
- **Utility Types** like `Pick`, `Partial`, and `Record` help you work with complex types in a concise and flexible manner.

With these advanced concepts, TypeScript becomes an even more powerful tool for developing large-scale applications with strong type safety and flexibility.
```

This **Advanced TypeScript** guide provides an in-depth exploration of some of the most powerful features in TypeScript. The topics covered are ideal for developers who want to take their TypeScript skills to the next level. You can use this Markdown content in any Markdown-compatible platform to view it in a well-organized format.
