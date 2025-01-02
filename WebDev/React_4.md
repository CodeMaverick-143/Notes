# React Hooks

React Hooks are functions that allow you to use React features (like state and lifecycle methods) in functional components. Introduced in React 16.8, Hooks enable developers to write cleaner, more modular, and reusable code.

---

## 1. Why Hooks?

Before Hooks, managing state and lifecycle methods was only possible in class components. Hooks bring these features to functional components, making them simpler and more powerful.

### Benefits of Hooks:
1. Simplifies components by removing the need for classes.
2. Encourages code reuse through custom hooks.
3. Makes components easier to test and understand.
4. Provides better separation of concerns.

---

## 2. Rules of Hooks

To use hooks effectively, follow these rules:
1. **Call Hooks at the Top Level**:
   - Do not call hooks inside loops, conditions, or nested functions.
   - Always call hooks at the top level of your React function.
2. **Only Call Hooks in React Functions**:
   - Use hooks in functional components or custom hooks.

---

## 3. Built-in React Hooks

### 3.1. `useState`

The `useState` hook allows you to add state to functional components.

#### Example:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 3.2. `useEffect`

The `useEffect` hook lets you perform side effects like data fetching, subscriptions, or DOM updates.

#### Example:

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID); // Cleanup on unmount
  }, []); // Empty dependency array means it runs only once

  return <h1>Current Time: {time.toLocaleTimeString()}</h1>;
}
```

### 3.3. `useContext`

The `useContext` hook provides access to the React Context API for sharing state globally without prop drilling.

#### Example:

```javascript
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <p>The current theme is {theme}</p>;
}
```

### 3.4. `useReducer`

The `useReducer` hook is an alternative to `useState` for managing complex state logic.

#### Example:

```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### 3.5. `useRef`

The `useRef` hook allows you to persist values across renders or directly interact with DOM elements.

#### Example:

```javascript
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 3.6. `useMemo`

The `useMemo` hook memoizes the result of a calculation, avoiding re-computation on every render.

#### Example:

```javascript
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  console.log("Calculating...");
  return num * 2;
}

function App() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => ExpensiveCalculation({ num: count }), [count]);

  return (
    <div>
      <p>Result: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 3.7. `useCallback`

The `useCallback` hook memoizes a function, ensuring it doesn’t change unless its dependencies do.

#### Example:

```javascript
import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Child onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
}
```

---

## 4. Custom Hooks

Custom hooks are user-defined functions that allow you to reuse stateful logic across multiple components.

#### Example:

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}

function App() {
  const data = useFetch('https://api.example.com/data');

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

---

## 5. Common Use Cases

### 5.1. Manage Form State
Use `useState` or `useReducer` to handle form inputs and validation.

### 5.2. Fetch Data
Use `useEffect` to fetch data on component mount or in response to dependency changes.

### 5.3. Optimize Performance
Use `useMemo` and `useCallback` to prevent unnecessary re-renders and computations.

---

## 6. Best Practices

1. **Keep Dependencies Updated**:
   - Always list dependencies explicitly in `useEffect`, `useMemo`, and `useCallback`.
2. **Avoid Overusing State**:
   - Derive values from existing state whenever possible.
3. **Modularize Logic**:
   - Use custom hooks for reusable and testable logic.
4. **Combine Hooks**:
   - Don’t hesitate to use multiple hooks in a single component for better modularity.

---

## 7. Conclusion

React Hooks provide a modern, flexible way to build components with state and side effects. By mastering built-in hooks like `useState`, `useEffect`, and `useContext`, as well as creating custom hooks, you can write more modular and maintainable code.

### Key Points:
- Hooks simplify state and lifecycle management in functional components.
- Follow the **Rules of Hooks** for reliable and predictable behavior.
- Leverage custom hooks for reusable and clean logic.

Start using hooks to make your React development faster and more efficient!
```

This Markdown guide provides an overview of React Hooks, their use cases, and examples. You can paste this content into any Markdown editor for easy viewing.
