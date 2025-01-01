# TypeScript Generics

Generics in TypeScript provide a way to create reusable and flexible components that work with any data type while maintaining type safety. They allow you to define functions, classes, and interfaces that can work with any data type but still preserve the type information.

## 1. What are Generics?

Generics allow you to define the shape of a function, class, or interface while deferring the exact types to be used until the function, class, or interface is instantiated or called. This means you can create more flexible code without losing the benefits of TypeScript's type system.

### Benefits of Generics:
- **Reusability**: Generics allow you to write code that works with any data type.
- **Type Safety**: Generics preserve type information, ensuring that the types are consistent across the code.
- **Flexibility**: You can define complex, type-safe structures that work with different types without having to rewrite code.

## 2. Syntax of Generics

Generics are written using angle brackets `<>`, with a type variable inside, typically named `T`, `U`, `V`, etc. The most common name is `T` for "Type", but you can use any name you like.

### Syntax Example:

```typescript
function identity<T>(value: T): T {
  return value;
}
```

In this example, the generic `T` is used to specify that the `identity` function accepts and returns a value of the same type.

## 3. Using Generics with Functions

Functions that use generics are defined with a type parameter enclosed in angle brackets `<>`.

### Example:

```typescript
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity(42);  // type is number
const stringValue = identity("Hello");  // type is string
```

Here, `identity` is a generic function that can accept a value of any type and return that value with the same type.

### Specifying Types Explicitly:

You can specify the type explicitly when calling the function:

```typescript
const numberValue = identity<number>(42);  // type is number
const stringValue = identity<string>("Hello");  // type is string
```

## 4. Generics with Multiple Type Parameters

Generics can accept multiple type parameters. You just separate the type variables with commas.

### Example:

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const stringNumberPair = pair<string, number>("Hello", 42);  // [string, number]
const booleanDatePair = pair<boolean, Date>(true, new Date());  // [boolean, Date]
```

In this example, the `pair` function uses two type parameters `T` and `U` to work with two values of different types.

## 5. Generic Interfaces

You can use generics in interfaces as well. This allows you to define interfaces that can work with any type while still maintaining type safety.

### Example:

```typescript
interface Box<T> {
  value: T;
  getValue(): T;
}

const stringBox: Box<string> = {
  value: "Hello, TypeScript",
  getValue() {
    return this.value;
  }
};

const numberBox: Box<number> = {
  value: 42,
  getValue() {
    return this.value;
  }
};
```

In this example, the `Box` interface is generic and can hold a `value` of any type. When you create a `Box` instance, you specify the type (`string`, `number`, etc.).

## 6. Generic Classes

Just like functions and interfaces, classes can also be made generic.

### Example:

```typescript
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue());  // Output: 42

const stringContainer = new Container<string>("Hello, world!");
console.log(stringContainer.getValue());  // Output: Hello, world!
```

In this example, the `Container` class is a generic class that can hold any type of value and return it through the `getValue` method.

## 7. Generic Constraints

Sometimes, you might want to restrict the types that can be used with generics. This can be done using constraints. Constraints are defined using the `extends` keyword.

### Example:

```typescript
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello, World!");  // 13
logLength([1, 2, 3]);  // 3

// Error: Property 'length' does not exist on type 'number'.
// logLength(123);
```

In this example, the `logLength` function is restricted to types that have a `length` property, like `string` and `array`. If you try to call `logLength` with a type that doesn’t have a `length` property (like `number`), TypeScript will show an error.

## 8. Default Type Parameters

You can also provide default types for generics. If the type parameter is not specified, the default type will be used.

### Example:

```typescript
function wrap<T = string>(value: T): T {
  return value;
}

const wrappedString = wrap("Hello, World!");  // type is string (default)
const wrappedNumber = wrap(42);  // type is number
```

In this example, `T` has a default type of `string`. If no type is provided when calling `wrap`, it will default to `string`.

## 9. Using `keyof` with Generics

You can combine generics with `keyof` to create more powerful and flexible code. The `keyof` type operator takes an object type and returns a union of its keys.

### Example:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Alice",
  age: 30,
};

const name = getProperty(person, "name");  // type is string
const age = getProperty(person, "age");  // type is number
```

In this example, the `getProperty` function is a generic function that retrieves the value of a property from an object. The second type parameter `K` ensures that `key` must be a valid property name of `T`.

## 10. Generic Utility Types

TypeScript provides several built-in utility types that work with generics. These utility types help with common operations like partial updates, making properties optional, etc.

### Example of `Partial`:

```typescript
interface Person {
  name: string;
  age: number;
}

const partialPerson: Partial<Person> = {
  name: "John",
};
```

The `Partial<T>` utility type makes all properties of type `T` optional.

### Example of `Record`:

```typescript
type PersonRoles = Record<string, string>;

const roles: PersonRoles = {
  admin: "John",
  user: "Jane",
};
```

The `Record<K, T>` utility type creates an object type with keys of type `K` and values of type `T`.

## 11. Conclusion

Generics in TypeScript provide a powerful way to write reusable and type-safe code. They allow you to define functions, classes, and interfaces that work with any data type while maintaining the integrity of type checking. By using generics, you can create flexible and highly reusable components, ensuring type safety without sacrificing flexibility.

### Key Takeaways:
- Generics allow functions, classes, and interfaces to work with any data type.
- They preserve type safety, ensuring consistency throughout the code.
- Generics can have multiple type parameters and constraints to add more flexibility.
- TypeScript provides utility types like `Partial`, `Record`, and others that work with generics for common operations.

Generics make TypeScript a more powerful and scalable language, allowing developers to create code that can adapt to various types while retaining type safety.
```

This Markdown document provides a comprehensive explanation of **TypeScript Generics**, including the syntax, usage, and various examples. You can use this content on any Markdown-compatible platform to view it in a well-organized format.
