# REST API Development

A **RESTful API** (Representational State Transfer) is a web service that follows the principles of REST architecture. It uses standard HTTP methods and a stateless communication protocol to perform operations on resources.

---

## 1. Principles of REST

1. **Stateless**: Each request is independent; the server does not store client context.
2. **Client-Server Architecture**: The client handles the user interface, while the server manages data and business logic.
3. **Cacheable**: Responses should include caching metadata to improve performance.
4. **Uniform Interface**: API endpoints should have a consistent structure and behavior.
5. **Layered System**: The API can use intermediate layers (e.g., load balancers) without affecting the client-server interaction.

---

## 2. HTTP Methods

| Method  | Description              | Example URL         |
|---------|--------------------------|---------------------|
| `GET`   | Retrieve resources       | `/users`            |
| `POST`  | Create a new resource    | `/users`            |
| `PUT`   | Update an existing resource | `/users/1`        |
| `PATCH` | Partially update a resource | `/users/1`       |
| `DELETE`| Delete a resource        | `/users/1`          |

---

## 3. Setting Up a REST API

### 3.1. Prerequisites

1. **Node.js** and **npm** installed on your system.
2. Install **Express.js**:

   ```bash
   npm install express
   ```

3. Optionally, install a database driver or ORM (e.g., `mongoose` for MongoDB).

---

### 3.2. Basic REST API with Express.js

#### File: `app.js`

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory database (for simplicity)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

// Routes
// GET: Fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET: Fetch a single user
app.get('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// POST: Create a new user
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update an existing user
app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users[userIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE: Remove a user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

## 4. Key Concepts in REST API Development

### 4.1. Resource Naming

- Use nouns instead of verbs (e.g., `/users` instead of `/getUsers`).
- Use plural names for collections (`/users`).
- Use a hierarchical structure for related resources:

  ```plaintext
  /users/1/posts/5
  ```

---

### 4.2. Status Codes

Use appropriate HTTP status codes for responses:

| Status Code | Description                    |
|-------------|--------------------------------|
| 200         | OK (Request successful)       |
| 201         | Created (Resource created)    |
| 204         | No Content (Successful with no response body) |
| 400         | Bad Request (Invalid input)   |
| 401         | Unauthorized (Authentication required) |
| 403         | Forbidden (Access denied)     |
| 404         | Not Found (Resource not found) |
| 500         | Internal Server Error         |

---

### 4.3. Error Handling

Centralize error handling with middleware:

```javascript
// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

---

## 5. Connecting to a Database

### 5.1. MongoDB with Mongoose

1. Install Mongoose:

   ```bash
   npm install mongoose
   ```

2. Connect to MongoDB:

   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/restdb', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', () => {
     console.log('Database connected');
   });
   ```

3. Define a Schema and Model:

   ```javascript
   const userSchema = new mongoose.Schema({
     name: String,
     email: String,
   });

   const User = mongoose.model('User', userSchema);
   ```

4. Use the Model in Routes:

   ```javascript
   app.get('/users', async (req, res) => {
     const users = await User.find();
     res.json(users);
   });

   app.post('/users', async (req, res) => {
     const newUser = new User(req.body);
     await newUser.save();
     res.status(201).json(newUser);
   });
   ```

---

## 6. Authentication and Authorization

### 6.1. JWT (JSON Web Tokens)

1. Install JWT:

   ```bash
   npm install jsonwebtoken
   ```

2. Generate a Token:

   ```javascript
   const jwt = require('jsonwebtoken');

   const token = jwt.sign({ userId: 1 }, 'your-secret-key', { expiresIn: '1h' });
   ```

3. Verify Token Middleware:

   ```javascript
   function authenticateToken(req, res, next) {
     const token = req.headers['authorization'];
     if (!token) return res.status(401).send('Access Denied');

     jwt.verify(token, 'your-secret-key', (err, user) => {
       if (err) return res.status(403).send('Invalid Token');
       req.user = user;
       next();
     });
   }

   app.get('/secure-route', authenticateToken, (req, res) => {
     res.send('This is a secure route');
   });
   ```

---

## 7. Testing REST APIs

### 7.1. Using Postman

- Install [Postman](https://www.postman.com/).
- Create and test requests with GET, POST, PUT, DELETE methods.

### 7.2. Automated Testing with Jest and Supertest

1. Install Jest and Supertest:

   ```bash
   npm install --save-dev jest supertest
   ```

2. Write Tests:

   ```javascript
   const request = require('supertest');
   const app = require('./app'); // Import your Express app

   describe('GET /users', () => {
     it('should return all users', async () => {
       const res = await request(app).get('/users');
       expect(res.statusCode).toEqual(200);
       expect(res.body).toBeInstanceOf(Array);
     });
   });
   ```

3. Run Tests:

   ```bash
   npx jest
   ```

---

## 8. Best Practices

1. **Versioning**:
   Use API versioning (e.g., `/api/v1/users`) for backward compatibility.

2. **Documentation**:
   Use tools like Swagger to document your API.

   ```bash
   npm install swagger-jsdoc swagger-ui-express
   ```

3. **Rate Limiting**:
   Use `express-rate-limit` to prevent abuse.

4. **Validation**:
   Validate request data with libraries like `joi` or `express-validator`.

---

## 9. Conclusion

Developing a REST API involves setting up endpoints for CRUD operations, managing data storage, handling authentication, and ensuring proper error handling. With Express and tools like Mongoose, you can build scalable and maintainable APIs.

Start coding your RESTful API today!
```

This Markdown guide covers REST API development from basics to advanced topics, including database integration, authentication, and testing. Copy it into a Markdown editor for formatted display.
