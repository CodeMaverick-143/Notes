# React Components

React Components are the fundamental building blocks of any React application. They allow you to divide the UI into reusable and independent pieces, making the development process modular and easier to manage.

---

## 1. What are Components?

A **component** is a reusable piece of code that defines the structure (HTML/JSX), behavior (logic), and styling of a part of the user interface. React components are like JavaScript functions but they:
- Accept **inputs** called `props`.
- Return **React elements** that describe what should appear on the screen.

---

## 2. Types of Components

React supports two primary types of components:

### 2.1. Functional Components

Functional components are the simplest form of React components. They are JavaScript functions that accept `props` as an argument and return JSX (React's syntax extension for HTML).

#### Example:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

- **When to Use Functional Components**:
  - When you do not need to manage state or lifecycle methods.
  - For simple presentational components.

---

### 2.2. Class Components

Class components are ES6 classes that extend `React.Component`. They have more features than functional components, such as managing state and using lifecycle methods.

#### Example:

```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

- **When to Use Class Components**:
  - When you need to manage local state or implement lifecycle methods (though functional components with hooks now provide this functionality too).

---

## 3. Props (Properties)

### What are Props?
Props are **inputs** passed to components from their parent. They are **immutable** and allow you to pass data and callbacks to child components.

#### Example:

```javascript
function Greeting(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

- The `App` component passes `name` as a prop to the `Greeting` component.

---

## 4. State

### What is State?

State is a **mutable** object that allows components to create and manage their own data. When a component's state changes, React automatically re-renders the component.

#### Using State in Functional Components with `useState`:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

#### Using State in Class Components:

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}
```

---

## 5. Lifecycle Methods (Class Components)

Class components provide lifecycle methods to execute code at specific points in a component's life:

- **Mounting**: When a component is inserted into the DOM.
  - `componentDidMount`
- **Updating**: When a component updates due to state or props changes.
  - `componentDidUpdate`
- **Unmounting**: When a component is removed from the DOM.
  - `componentWillUnmount`

#### Example:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <h1>The time is {this.state.time.toLocaleTimeString()}</h1>;
  }
}
```

---

## 6. Hooks in Functional Components

Hooks allow functional components to have features like state and lifecycle methods without using class components.

### Commonly Used Hooks:

1. **`useState`**: Manage local state.
2. **`useEffect`**: Perform side effects (similar to lifecycle methods).
3. **`useContext`**: Access React's Context API for global state management.

#### Example: Using `useEffect` for Side Effects

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID); // Cleanup on unmount
  }, []); // Empty dependency array means this runs only once

  return <h1>The time is {time.toLocaleTimeString()}</h1>;
}
```

---

## 7. Composition vs Inheritance

React recommends **composition** over inheritance to reuse code between components. 

### Example of Composition:

```javascript
function Dialog(props) {
  return (
    <div className="dialog">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

function WelcomeDialog() {
  return <Dialog title="Welcome" message="Thank you for visiting!" />;
}
```

---

## 8. Higher-Order Components (HOCs)

HOCs are advanced techniques to reuse component logic. They are functions that take a component as input and return a new enhanced component.

#### Example:

```javascript
function withLogger(WrappedComponent) {
  return function Logger(props) {
    console.log("Rendering component with props:", props);
    return <WrappedComponent {...props} />;
  };
}

function Hello(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const HelloWithLogger = withLogger(Hello);
```

---

## 9. Render Props

Render props is a technique for sharing code between components using a prop whose value is a function.

#### Example:

```javascript
function MouseTracker(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {props.render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker render={(position) => (
      <h1>
        Mouse position: ({position.x}, {position.y})
      </h1>
    )} />
  );
}
```

---

## 10. Conclusion

React components are the backbone of React applications. Understanding how to build and manage components efficiently will help you create reusable, maintainable, and scalable applications.

### Key Points:
- **Functional Components** are simple and use hooks for state and effects.
- **Class Components** offer traditional state and lifecycle methods.
- Use **props** for data passing and **state** for local data management.
- React encourages **composition** over inheritance for better code reuse.
- Advanced patterns like **HOCs** and **Render Props** help share logic between components.

With this knowledge, you are well-equipped to build a robust React application!
```

This guide covers the basics and advanced concepts of React components, including their types, props, state, lifecycle methods, hooks, and patterns like HOCs and Render Props. You can use this Markdown content in any Markdown editor or viewer.
