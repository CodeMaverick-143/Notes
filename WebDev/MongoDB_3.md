# Data Modeling in MongoDB

Data modeling in MongoDB is the process of designing the structure of documents, collections, and their relationships to meet the requirements of an application. Unlike relational databases, MongoDB provides flexibility with schema design, which can be optimized for performance and scalability.

---

## 1. Key Concepts in MongoDB Data Modeling

1. **Document-Oriented**:
   - Data is stored in BSON (Binary JSON) documents.
   - Each document is a self-contained record.

2. **Collections**:
   - Groups of documents (analogous to tables in SQL).

3. **Dynamic Schema**:
   - Collections do not enforce a fixed schema.
   - Each document in a collection can have different fields.

4. **Relationships**:
   - Two main types:
     - **Embedded Documents**: For one-to-few relationships.
     - **References**: For one-to-many or many-to-many relationships.

---

## 2. Types of Relationships in MongoDB

### 2.1. One-to-One Relationship

#### Example: User Profile

**Embedded Document**:

```json
{
  "_id": 1,
  "name": "Alice",
  "profile": {
    "age": 25,
    "city": "New York"
  }
}
```

**Referenced Document**:

```json
// Users Collection
{
  "_id": 1,
  "name": "Alice",
  "profileId": 101
}

// Profiles Collection
{
  "_id": 101,
  "age": 25,
  "city": "New York"
}
```

---

### 2.2. One-to-Many Relationship

#### Example: Customer Orders

**Embedded Documents**:

```json
{
  "_id": 1,
  "customerName": "Alice",
  "orders": [
    { "product": "Laptop", "quantity": 1 },
    { "product": "Mouse", "quantity": 2 }
  ]
}
```

**Referenced Documents**:

```json
// Customers Collection
{
  "_id": 1,
  "customerName": "Alice"
}

// Orders Collection
{
  "_id": 101,
  "customerId": 1,
  "product": "Laptop",
  "quantity": 1
}
```

---

### 2.3. Many-to-Many Relationship

#### Example: Students and Courses

**Referenced Documents**:

```json
// Students Collection
{
  "_id": 1,
  "name": "Alice",
  "enrolledCourses": [101, 102]
}

// Courses Collection
{
  "_id": 101,
  "title": "Math 101",
  "studentsEnrolled": [1, 2, 3]
}
```

---

## 3. When to Use Embedded vs. Referenced Documents

### Embedded Documents

- **Use When**:
  - Data is tightly related and frequently accessed together.
  - Relationships are one-to-few.
- **Advantages**:
  - Faster read performance.
  - Simpler queries (single document retrieval).

### Referenced Documents

- **Use When**:
  - Data is loosely related or large in size.
  - Relationships are one-to-many or many-to-many.
  - Data needs to be shared across collections.
- **Advantages**:
  - Avoids duplication.
  - Easier to update individual documents.

---

## 4. Schema Design Patterns

### 4.1. Single Table Inheritance

Store similar types of data in a single collection with a `type` field.

#### Example: Vehicles

```json
{
  "_id": 1,
  "type": "Car",
  "brand": "Toyota",
  "wheels": 4
}
{
  "_id": 2,
  "type": "Bike",
  "brand": "Yamaha",
  "wheels": 2
}
```

### 4.2. Bucketing

Group related data into buckets for better performance.

#### Example: Monthly Sales Data

```json
{
  "_id": "2023-01",
  "sales": [
    { "day": 1, "total": 100 },
    { "day": 2, "total": 150 }
  ]
}
```

### 4.3. Outlier Pattern

Separate frequently accessed data and outliers into different collections.

#### Example: Product Reviews

- **Core Data**: Frequently accessed:
  ```json
  {
    "_id": 1,
    "product": "Laptop",
    "avgRating": 4.5,
    "reviewCount": 1000
  }
  ```

- **Outlier Data**: Less frequently accessed:
  ```json
  {
    "_id": 101,
    "productId": 1,
    "review": "Excellent laptop!"
  }
  ```

---

## 5. Indexing in MongoDB

Indexes improve query performance by quickly locating documents.

### Types of Indexes

- **Single Field Index**:
  ```javascript
  db.collection.createIndex({ field: 1 });
  ```

- **Compound Index**:
  ```javascript
  db.collection.createIndex({ field1: 1, field2: -1 });
  ```

- **Text Index**:
  ```javascript
  db.collection.createIndex({ field: "text" });
  ```

- **Geospatial Index**:
  ```javascript
  db.collection.createIndex({ location: "2dsphere" });
  ```

---

## 6. Best Practices for Data Modeling

1. **Design Around Queries**:
   - Model your schema to optimize the most frequent queries.

2. **Avoid Over-Embedding**:
   - Too much embedded data can cause large document sizes.

3. **Use Indexes**:
   - Index frequently queried fields for faster lookups.

4. **Balance Read and Write Performance**:
   - Design for application-specific needs (e.g., high read or write operations).

5. **Limit Document Size**:
   - MongoDB documents have a 16MB size limit.

6. **Use Schema Validation**:
   - Enforce constraints on collections with JSON Schema.

   ```javascript
   db.createCollection("users", {
     validator: {
       $jsonSchema: {
         bsonType: "object",
         required: ["name", "email"],
         properties: {
           name: { bsonType: "string", description: "must be a string" },
           email: { bsonType: "string", pattern: "^.+@.+$", description: "must be a valid email" }
         }
       }
     }
   });
   ```

---

## 7. Real-World Example: E-Commerce Schema

### Products Collection

```json
{
  "_id": 1,
  "name": "Laptop",
  "price": 1000,
  "category": "Electronics",
  "stock": 50
}
```

### Users Collection

```json
{
  "_id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
```

### Orders Collection

```json
{
  "_id": 101,
  "userId": 1,
  "items": [
    { "productId": 1, "quantity": 2, "price": 1000 }
  ],
  "total": 2000,
  "orderDate": "2023-01-01"
}
```

---

## 8. Conclusion

Data modeling in MongoDB is highly flexible and can be tailored to the specific needs of an application. By understanding the relationships, designing schema patterns, and leveraging indexes, you can build efficient, scalable, and maintainable data models. Always consider query patterns, application requirements, and future scalability when designing your schema.

Happy modeling!
```

This Markdown guide provides a complete overview of data modeling in MongoDB, including relationships, schema design patterns, and best practices. You can copy and paste it into a Markdown viewer for a well-structured display.
