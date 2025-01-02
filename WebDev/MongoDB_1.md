# MongoDB Basics

**MongoDB** is a NoSQL database that stores data in a flexible, JSON-like format. It is designed for scalability, high performance, and ease of use, making it ideal for modern applications.

---

## 1. Key Features of MongoDB

- **Schema-less**: Collections do not enforce a fixed schema, allowing flexibility.
- **JSON-like Documents**: Data is stored in BSON (Binary JSON), making it easy to work with nested data structures.
- **Scalability**: Horizontal scaling with sharding.
- **Indexing**: Powerful indexing options for fast query performance.
- **Aggregation**: Advanced data processing pipelines.

---

## 2. Installing MongoDB

### 2.1. Installation on Local Machine

1. Download MongoDB from the [official website](https://www.mongodb.com/try/download/community).
2. Follow the installation instructions for your operating system.
3. Start the MongoDB server:
   ```bash
   mongod
   ```

### 2.2. MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a cluster and connect using a connection string.

---

## 3. MongoDB Architecture

1. **Database**: A container for collections (e.g., `myDatabase`).
2. **Collection**: A group of documents (similar to a table in SQL).
3. **Document**: A JSON-like object that stores data (e.g., `{ name: "Alice", age: 25 }`).

---

## 4. MongoDB Commands

### 4.1. Connecting to MongoDB

Start the MongoDB shell:

```bash
mongo
```

Connect to a database:

```bash
use myDatabase
```

---

### 4.2. CRUD Operations

#### 4.2.1. Insert Documents

Insert a single document:

```javascript
db.collectionName.insertOne({ name: "Alice", age: 25 });
```

Insert multiple documents:

```javascript
db.collectionName.insertMany([
  { name: "Bob", age: 30 },
  { name: "Carol", age: 35 }
]);
```

#### 4.2.2. Read Documents

Find all documents:

```javascript
db.collectionName.find();
```

Find documents with a condition:

```javascript
db.collectionName.find({ age: { $gt: 30 } });
```

Find a single document:

```javascript
db.collectionName.findOne({ name: "Alice" });
```

#### 4.2.3. Update Documents

Update a single document:

```javascript
db.collectionName.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
);
```

Update multiple documents:

```javascript
db.collectionName.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
);
```

Replace a document:

```javascript
db.collectionName.replaceOne(
  { name: "Alice" },
  { name: "Alice", age: 27, city: "New York" }
);
```

#### 4.2.4. Delete Documents

Delete a single document:

```javascript
db.collectionName.deleteOne({ name: "Alice" });
```

Delete multiple documents:

```javascript
db.collectionName.deleteMany({ age: { $lt: 30 } });
```

---

### 4.3. Indexing

Create an index:

```javascript
db.collectionName.createIndex({ name: 1 });
```

View all indexes:

```javascript
db.collectionName.getIndexes();
```

---

### 4.4. Aggregation

Aggregation pipelines process data in stages.

#### Example: Grouping and Summing

```javascript
db.collectionName.aggregate([
  { $group: { _id: "$status", totalAge: { $sum: "$age" } } }
]);
```

#### Example: Sorting

```javascript
db.collectionName.aggregate([
  { $sort: { age: -1 } }
]);
```

---

## 5. Data Types in MongoDB

| Type         | Example                |
|--------------|------------------------|
| String       | `"Alice"`              |
| Number       | `25`                   |
| Boolean      | `true`                 |
| Array        | `[1, 2, 3]`            |
| Object       | `{ city: "NYC" }`      |
| Null         | `null`                 |
| Date         | `new Date("2023-01-01")` |
| ObjectId     | `ObjectId("507f1f77bcf86cd799439011")` |

---

## 6. MongoDB Drivers

Use MongoDB drivers to interact with the database programmatically.

### Example: Node.js Driver

1. Install the driver:

   ```bash
   npm install mongodb
   ```

2. Connect to MongoDB:

   ```javascript
   const { MongoClient } = require('mongodb');
   const uri = "mongodb://localhost:27017";
   const client = new MongoClient(uri);

   async function run() {
     try {
       await client.connect();
       const database = client.db('myDatabase');
       const collection = database.collection('myCollection');
       
       // Example: Insert a document
       await collection.insertOne({ name: "Alice", age: 25 });
       console.log('Document inserted');
     } finally {
       await client.close();
     }
   }

   run().catch(console.dir);
   ```

---

## 7. MongoDB Schema Design

1. **Embed Data**:
   - For one-to-few relationships.
   - Example:
     ```json
     {
       "name": "Alice",
       "orders": [
         { "item": "Laptop", "quantity": 1 }
       ]
     }
     ```

2. **Reference Data**:
   - For one-to-many or many-to-many relationships.
   - Example:
     ```json
     {
       "_id": 1,
       "name": "Alice"
     }
     ```
     ```json
     {
       "userId": 1,
       "order": { "item": "Laptop", "quantity": 1 }
     }
     ```

---

## 8. Best Practices

1. **Use Indexes**:
   Index frequently queried fields to improve performance.

2. **Avoid Over-Embedding**:
   Avoid storing too much nested data in a single document.

3. **Shard for Scalability**:
   Use sharding to distribute data across multiple servers.

4. **Use Aggregation Pipelines**:
   Process data efficiently on the server side.

5. **Backup Data**:
   Regularly back up your database to prevent data loss.

---

## 9. Tools for MongoDB

- **MongoDB Compass**: GUI for managing MongoDB.
- **Mongo Shell**: Command-line tool for interacting with MongoDB.
- **Robo 3T**: Lightweight GUI for MongoDB.
- **MongoDB Atlas**: Cloud-based MongoDB service.

---

## 10. Conclusion

MongoDB is a powerful NoSQL database designed for modern, scalable applications. Its flexibility, rich query language, and robust features make it a popular choice for developers. By mastering MongoDB commands, drivers, and schema design, you can build efficient and scalable data-driven applications.

Happy coding!
```

This Markdown guide provides a complete overview of MongoDB, covering its features, installation, commands, and best practices. You can copy and paste it into any Markdown viewer for a structured and formatted display.
