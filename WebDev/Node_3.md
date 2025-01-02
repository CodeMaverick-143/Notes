# Express Framework

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating server-side applications by providing powerful tools and middleware.

---

## 1. Why Use Express?

1. **Lightweight**: Minimalistic framework with essential features.
2. **Flexible**: Highly customizable using middleware and third-party modules.
3. **Fast**: Optimized for performance in server-side applications.
4. **Middleware Support**: Easily add functionality like parsing, authentication, and error handling.
5. **Routing**: Provides powerful routing mechanisms.

---

## 2. Installing Express

To use Express, you need to have Node.js installed.

### Installation:

```bash
npm install express
```

### Creating a Basic Express Server:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

Run the server:

```bash
node app.js
```

Visit `http://localhost:3000` in your browser.

---

## 3. Core Concepts of Express

### 3.1. Middleware

Middleware are functions that execute during the request-response cycle.

#### Example:

```javascript
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Pass control to the next middleware
});
```

Built-in middleware:
- **`express.json()`**: Parses incoming JSON requests.
- **`express.urlencoded()`**: Parses URL-encoded payloads.

#### Example of Built-in Middleware:

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

### 3.2. Routing

Routing determines how an application responds to client requests.

#### Basic Routing:

```javascript
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/submit', (req, res) => {
  res.send('Data Submitted');
});
```

#### Route Parameters:

```javascript
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

#### Query Parameters:

```javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search Query: ${query}`);
});
```

#### Chaining Route Handlers:

```javascript
app.route('/products')
  .get((req, res) => res.send('Get Products'))
  .post((req, res) => res.send('Add Product'));
```

---

### 3.3. Static Files

Serve static files (e.g., images, CSS, JS) using `express.static`.

```javascript
app.use(express.static('public'));
```

Place files in the `public` folder, and they will be accessible directly.

---

### 3.4. Template Engines

Express supports template engines like **EJS**, **Pug**, and **Handlebars**.

#### Example with EJS:

1. Install EJS:

   ```bash
   npm install ejs
   ```

2. Set EJS as the template engine:

   ```javascript
   app.set('view engine', 'ejs');
   ```

3. Create an `index.ejs` file:

   ```html
   <h1>Welcome, <%= user %>!</h1>
   ```

4. Render the template:

   ```javascript
   app.get('/', (req, res) => {
     res.render('index', { user: 'John' });
   });
   ```

---

## 4. Handling HTTP Methods

### GET Method:

```javascript
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET Request' });
});
```

### POST Method:

```javascript
app.post('/api/data', (req, res) => {
  res.json({ message: 'POST Request', data: req.body });
});
```

### PUT Method:

```javascript
app.put('/api/data/:id', (req, res) => {
  res.json({ message: 'PUT Request', id: req.params.id });
});
```

### DELETE Method:

```javascript
app.delete('/api/data/:id', (req, res) => {
  res.json({ message: 'DELETE Request', id: req.params.id });
});
```

---

## 5. Error Handling

Define custom error-handling middleware.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

---

## 6. Advanced Features

### 6.1. Express Router

Use `express.Router` to modularize routes.

#### Example:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Router Home');
});

router.get('/about', (req, res) => {
  res.send('About Router');
});

module.exports = router;
```

Use the router in the main application:

```javascript
const router = require('./router');
app.use('/router', router);
```

---

### 6.2. Middleware for Authentication

```javascript
function authMiddleware(req, res, next) {
  if (req.headers.authorization === 'Bearer token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

app.get('/secure', authMiddleware, (req, res) => {
  res.send('Secure Route');
});
```

---

### 6.3. Connecting to a Database

#### Example with MongoDB:

1. Install Mongoose:

   ```bash
   npm install mongoose
   ```

2. Connect to MongoDB:

   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/testdb', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', () => {
     console.log('Database connected');
   });
   ```

---

## 7. Best Practices

1. **Use Environment Variables**:
   Store sensitive data like API keys in a `.env` file and use `dotenv`.

   ```bash
   npm install dotenv
   ```

   ```javascript
   require('dotenv').config();
   const port = process.env.PORT || 3000;
   ```

2. **Error Handling**:
   Implement proper error-handling middleware for robustness.

3. **Security**:
   Use packages like `helmet` and `express-rate-limit` for enhanced security.

4. **Use Logging**:
   Use `morgan` or similar tools for logging HTTP requests.

   ```bash
   npm install morgan
   ```

   ```javascript
   const morgan = require('morgan');
   app.use(morgan('dev'));
   ```

5. **Modularize Code**:
   Use routers and controllers to organize application logic.

---

## 8. Example Project: Basic REST API

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  res.json({ id, ...updatedUser });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

## 9. Conclusion

Express is a versatile framework that simplifies building robust web and mobile applications. With its middleware, routing, and integration capabilities, it is ideal for both small and large-scale applications.

Happy coding!
```

This Markdown guide covers the basics and advanced topics of the Express framework. You can copy and paste it into any Markdown viewer for a formatted display.
