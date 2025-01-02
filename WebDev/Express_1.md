# Express.js Basics

Express.js is a minimalist web framework for Node.js that allows you to build fast and scalable web applications. It simplifies the process of setting up routes, handling requests, and integrating with databases. Express.js is one of the most popular frameworks in the Node.js ecosystem due to its flexibility and ease of use.

---

## 1. Introduction to Express.js

Express.js provides a robust set of features to develop web and mobile applications. It simplifies many aspects of building web applications, including routing, middleware, templating, and more.

Key Features:
- Fast and lightweight.
- Middleware support.
- Routing capabilities.
- Template engine integration.
- HTTP utility methods.
- Scalable.

---

## 2. Installing Express.js

Before using Express.js, you need to install it in your project. To install Express, follow these steps:

### 2.1. Initialize a Node.js Project

In the terminal, run the following command to create a `package.json` file:

```bash
npm init -y
```

### 2.2. Install Express.js

Use the following command to install Express:

```bash
npm install express --save
```

---

## 3. Creating a Basic Express Server

After installing Express, you can create a basic server using just a few lines of code.

### 3.1. Example: Basic Express Server

Create a file named `app.js`:

```javascript
const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### 3.2. Run the Server

In the terminal, run the following command:

```bash
node app.js
```

Visit `http://localhost:3000/` in your browser, and you should see `Hello World!`.

---

## 4. Routing in Express.js

Routing is the process of defining URL patterns and their associated actions. Express allows you to easily define routes that respond to HTTP requests.

### 4.1. HTTP Methods

- **GET**: Retrieve data from the server.
- **POST**: Submit data to the server.
- **PUT**: Update data on the server.
- **DELETE**: Remove data from the server.

### 4.2. Example: Defining Routes

```javascript
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

app.put('/update', (req, res) => {
  res.send('Data updated!');
});

app.delete('/delete', (req, res) => {
  res.send('Data deleted!');
});
```

### 4.3. Route Parameters

You can define dynamic routes using parameters. Route parameters are specified by placing a colon (`:`) before the parameter name.

```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

---

## 5. Middleware in Express.js

Middleware functions are functions that have access to the request (`req`), response (`res`), and the next middleware function in the application’s request-response cycle. Middleware can be used for logging, authentication, error handling, etc.

### 5.1. Example: Basic Middleware

```javascript
const myMiddleware = (req, res, next) => {
  console.log('Request received');
  next(); // Pass the request to the next middleware/route handler
};

// Use middleware globally for all routes
app.use(myMiddleware);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
```

### 5.2. Built-in Middleware

Express provides several built-in middleware functions for common tasks, including:

- **express.static**: Serves static files (e.g., images, CSS, JavaScript).
  
  ```javascript
  app.use(express.static('public'));
  ```

- **express.json**: Parses incoming JSON data.
  
  ```javascript
  app.use(express.json());
  ```

---

## 6. Handling Requests and Responses

Express provides various methods to handle requests and responses.

### 6.1. Request Object (`req`)

The `req` object contains information about the HTTP request, such as headers, query parameters, body, and more.

- **req.query**: Contains URL query parameters.
- **req.params**: Contains route parameters.
- **req.body**: Contains the request body (used with POST/PUT requests).

### 6.2. Response Object (`res`)

The `res` object is used to send a response back to the client.

- **res.send()**: Sends a response of any type (string, object, array, etc.).
- **res.json()**: Sends a JSON response.
- **res.status()**: Sets the HTTP status code.
  
Example:

```javascript
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});
```

---

## 7. Templating Engines in Express.js

Express supports the use of various templating engines to render dynamic content. Common templating engines include **Pug**, **EJS**, and **Handlebars**.

### 7.1. Example: Using EJS

1. Install EJS:

   ```bash
   npm install ejs
   ```

2. Set EJS as the view engine:

   ```javascript
   app.set('view engine', 'ejs');
   ```

3. Create a `views` directory and an EJS file (`index.ejs`):

   ```html
   <!-- views/index.ejs -->
   <h1>Hello, <%= name %>!</h1>
   ```

4. Render the EJS template in a route:

   ```javascript
   app.get('/hello', (req, res) => {
     res.render('index', { name: 'Alice' });
   });
   ```

---

## 8. Error Handling in Express.js

Express provides a simple mechanism for handling errors. You can create custom error-handling middleware by defining a function with four parameters (`err`, `req`, `res`, `next`).

### 8.1. Example: Error Handling Middleware

```javascript
// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

### 8.2. Handling 404 Errors

If no route matches the request, you can create a middleware to handle 404 errors:

```javascript
app.use((req, res) => {
  res.status(404).send('Page not found');
});
```

---

## 9. Connecting to a Database (MongoDB Example)

Express can be easily integrated with databases like MongoDB. Here's how you can set up a connection to MongoDB using **Mongoose**:

1. Install Mongoose:

   ```bash
   npm install mongoose
   ```

2. Connect to MongoDB:

   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/mydatabase', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });

   mongoose.connection.on('connected', () => {
     console.log('Connected to MongoDB');
   });
   ```

3. Define a simple Mongoose model and use it in your routes:

   ```javascript
   const User = mongoose.model('User', { name: String });

   app.post('/user', (req, res) => {
     const user = new User({ name: req.body.name });
     user.save()
       .then(() => res.send('User saved'))
       .catch(err => res.status(400).send('Error saving user'));
   });
   ```

---

## 10. Conclusion

Express.js is a powerful and flexible web framework that makes building web applications in Node.js fast and simple. With its rich feature set, including routing, middleware, templating, and integration with databases, Express provides everything you need to create scalable and maintainable applications. Whether you're building a small API or a large-scale web application, Express is a great choice for your project.

Explore more of Express.js by diving into advanced topics such as authentication, security, and scaling.

Happy coding!
```

This **Markdown** guide provides a comprehensive overview of **Express.js Basics**. It covers installation, routing, middleware, error handling, database connections, and more. You can copy this guide into any Markdown viewer for a structured and easy-to-follow reference.
