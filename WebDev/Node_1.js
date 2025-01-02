# Node.js Basics

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side to build scalable and efficient applications.

---

## 1. What is Node.js?

- **Asynchronous and Event-Driven**: Node.js uses non-blocking I/O, making it efficient for handling multiple requests simultaneously.
- **Single-Threaded**: Uses a single-threaded event loop for handling multiple connections.
- **Cross-Platform**: Runs on Windows, macOS, and Linux.

---

## 2. Key Features of Node.js

1. **Fast Execution**:
   - Built on V8 engine, Node.js compiles JavaScript to machine code for faster execution.
2. **Non-Blocking I/O**:
   - Performs I/O operations asynchronously, allowing multiple operations to execute simultaneously.
3. **Scalable**:
   - Handles a large number of simultaneous connections with a small memory footprint.
4. **NPM (Node Package Manager)**:
   - Provides access to thousands of libraries and modules for rapid development.

---

## 3. Installation

Download and install Node.js from the [official website](https://nodejs.org).

After installation, verify using:

```bash
node -v
npm -v
```

---

## 4. Basics of Node.js

### 4.1. Running JavaScript with Node.js

Create a file `app.js`:

```javascript
console.log("Hello, Node.js!");
```

Run the file:

```bash
node app.js
```

### 4.2. The REPL (Read-Eval-Print Loop)

Use Node.js REPL for quick JavaScript execution:

```bash
node
> 2 + 3
5
> console.log("Hello, Node!");
Hello, Node!
```

### 4.3. Global Objects

Node.js provides several global objects:

- **`__dirname`**: Current directory path.
- **`__filename`**: Current file name with path.
- **`console`**: Standard output console.
- **`process`**: Provides information and control over the current Node.js process.

#### Example:

```javascript
console.log(__dirname);
console.log(__filename);
console.log(process.version);
```

---

## 5. Modules in Node.js

Node.js follows a modular architecture. Modules can be **built-in**, **user-defined**, or **third-party**.

### 5.1. Built-in Modules

Node.js includes core modules like `fs`, `path`, `http`, etc.

#### Example: File System (`fs`)

```javascript
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 5.2. User-Defined Modules

Create a module (`math.js`):

```javascript
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
```

Use it in another file (`app.js`):

```javascript
const math = require('./math');

console.log(math.add(5, 3)); // Output: 8
```

### 5.3. Third-Party Modules

Install and use modules via NPM.

#### Example: Installing `lodash`

```bash
npm install lodash
```

Use it in your code:

```javascript
const _ = require('lodash');

console.log(_.capitalize("hello world")); // Output: Hello world
```

---

## 6. Creating a Simple Server

Use the `http` module to create a server.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

## 7. Asynchronous Programming in Node.js

### 7.1. Callback Functions

Node.js uses callbacks for asynchronous operations.

#### Example:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 7.2. Promises

Promises simplify handling asynchronous operations.

#### Example:

```javascript
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### 7.3. Async/Await

Async/await makes asynchronous code cleaner and more readable.

#### Example:

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```

---

## 8. Events in Node.js

Node.js has an **EventEmitter** class for handling events.

#### Example:

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define an event
eventEmitter.on('greet', () => {
  console.log('Hello, World!');
});

// Emit the event
eventEmitter.emit('greet');
```

---

## 9. File System Module (`fs`)

The `fs` module provides functions to interact with the file system.

### Reading a File:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Writing to a File:

```javascript
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
```

---

## 10. Package Management with NPM

### Installing a Package:

```bash
npm install <package_name>
```

### Installing a Package Globally:

```bash
npm install -g <package_name>
```

### Removing a Package:

```bash
npm uninstall <package_name>
```

---

## 11. Debugging in Node.js

Run Node.js with the inspect flag:

```bash
node --inspect app.js
```

Use Chrome DevTools to debug.

---

## 12. Best Practices

1. **Use Linter**: Use tools like ESLint to maintain code quality.
2. **Handle Errors Gracefully**: Always handle errors in asynchronous code.
3. **Use Environment Variables**: Store sensitive data like API keys in `.env` files.
4. **Follow Modular Design**: Split code into smaller, reusable modules.

---

## 13. Conclusion

Node.js is a powerful platform for building server-side applications. Its event-driven and non-blocking I/O model makes it ideal for real-time and scalable applications. With its rich ecosystem of libraries and tools, Node.js has become a go-to technology for web development.

Explore further by building small projects like:
- A REST API
- A simple chat application
- File upload service

Happy coding!
```

This Markdown guide provides a beginner-friendly overview of Node.js, covering its features, core concepts, and examples. Copy and paste it into any Markdown viewer or editor for a formatted display.
