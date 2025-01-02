# Express.js Middleware

In Express.js, **middleware** is a function that has access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can modify the request and response objects, or end the request-response cycle by sending a response.

Express middleware is used for tasks like logging, authentication, parsing request bodies, handling errors, and more. This guide explores the different types of middleware in Express.js, how to create custom middleware, and how to use built-in middleware.

---

## 1. Types of Middleware

Middleware in Express.js can be categorized into the following types:

### 1.1. Application-Level Middleware

Application-level middleware is bound to the entire application, and it is executed for all incoming requests. You can register application-level middleware using `app.use()`.

#### Example:

```javascript
const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('Request received');
  next(); // Pass control to the next middleware or route handler
};

app.use(myMiddleware); // Apply middleware globally

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### 1.2. Router-Level Middleware

Router-level middleware is specific to a subset of routes defined in an Express router. It is similar to application-level middleware, but it only applies to the routes defined within the router.

#### Example:

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Middleware for this specific router
router.use((req, res, next) => {
  console.log('Request to /user route');
  next();
});

router.get('/profile', (req, res) => {
  res.send('User Profile');
});

app.use('/user', router); // Apply router middleware

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### 1.3. Built-in Middleware

Express provides several built-in middleware functions that handle common tasks like serving static files, parsing request bodies, etc.

#### 1.3.1. **express.static()**

Used to serve static files like images, CSS, JavaScript, etc.

```javascript
app.use(express.static('public')); // Serve files from the "public" folder
```

#### 1.3.2. **express.json()**

Used to parse incoming requests with JSON payloads.

```javascript
app.use(express.json()); // Parse JSON bodies
```

#### 1.3.3. **express.urlencoded()**

Used to parse incoming requests with URL-encoded payloads.

```javascript
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
```

### 1.4. Error-Handling Middleware

Error-handling middleware is a special type of middleware that takes four parameters: `err`, `req`, `res`, and `next`. This middleware is used to catch errors and send a response to the client.

#### Example:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

---

## 2. Creating Custom Middleware

You can create your own custom middleware to handle various tasks like logging, authentication, and request validation.

### 2.1. Example: Logging Middleware

A logging middleware logs the method and URL of each incoming request.

```javascript
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass the request to the next middleware or route handler
};

app.use(loggingMiddleware); // Use logging middleware globally
```

### 2.2. Example: Authentication Middleware

You can use middleware to check if a user is authenticated before allowing them to access certain routes.

```javascript
const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware
  }
  res.status(403).send('Forbidden'); // User is not authenticated, send a 403 response
};

app.use('/profile', authMiddleware); // Apply auth middleware to the "/profile" route
```

### 2.3. Example: Request Validation Middleware

A middleware that checks if the incoming request has the required fields.

```javascript
const validateRequest = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send('Bad Request: Missing required fields');
  }
  next(); // All required fields are present, proceed to the next middleware
};

app.post('/login', validateRequest, (req, res) => {
  res.send('Login successful');
});
```

---

## 3. Middleware Execution Order

Express executes middleware in the order in which it is added to the application. The order of middleware is important because once a middleware sends a response or terminates the request-response cycle, subsequent middleware will not be executed.

### 3.1. Example: Middleware Execution Order

```javascript
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Pass control to the next middleware
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
  console.log('Route handler');
  res.send('Hello World!');
});
```

The output will be:

```
Middleware 1
Middleware 2
Route handler
```

The order of the middleware calls determines the flow of the application.

---

## 4. Chaining Middleware

You can chain multiple middleware functions together for a single route or group of routes. Express will execute the middleware functions one after another.

### 4.1. Example: Chaining Middleware Functions

```javascript
const middleware1 = (req, res, next) => {
  console.log('Middleware 1');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2');
  next();
};

app.use(middleware1, middleware2);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Output:

```
Middleware 1
Middleware 2
Hello World!
```

---

## 5. Using Middleware with Specific Routes

You can apply middleware to specific routes rather than globally. This allows for more fine-grained control.

### 5.1. Example: Middleware for Specific Route

```javascript
const middleware = (req, res, next) => {
  console.log('Middleware applied only to this route');
  next();
};

app.get('/specific-route', middleware, (req, res) => {
  res.send('This route has middleware');
});
```

### 5.2. Example: Middleware for Multiple Routes

```javascript
app.use('/admin', (req, res, next) => {
  console.log('Middleware for /admin routes');
  next();
});

app.get('/admin/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});
```

---

## 6. Third-Party Middleware

There are many third-party middleware packages available to extend the functionality of your Express application. Some common third-party middleware include:

- **body-parser**: Parses incoming request bodies.
  - Example: `npm install body-parser`
  - Usage: `app.use(require('body-parser').json());`

- **morgan**: HTTP request logger middleware.
  - Example: `npm install morgan`
  - Usage: 
    ```javascript
    const morgan = require('morgan');
    app.use(morgan('dev'));
    ```

- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
  - Example: `npm install cors`
  - Usage: 
    ```javascript
    const cors = require('cors');
    app.use(cors());
    ```

---

## 7. Conclusion

Express middleware is an essential part of building applications in Express.js. It enables you to handle tasks like logging, authentication, body parsing, and error handling in a clean and modular way. Middleware functions can be used globally, for specific routes, or as part of route handling.

By understanding how middleware works, you can create powerful and flexible Express applications that are easy to maintain and scale.

Happy coding!
```

This **Markdown** guide provides an in-depth look at **Express.js Middleware**, including its types, how to create custom middleware, error handling, middleware execution order, and usage examples. You can copy and paste this into any Markdown editor to view it in a formatted structure.
