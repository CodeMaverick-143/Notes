# MongoDB Aggregations

Aggregation in MongoDB is a framework used to process and transform data. It allows you to perform advanced queries by chaining multiple stages into a pipeline. This is particularly useful for data analysis, reporting, and data transformation.

---

## 1. Aggregation Pipeline

The aggregation pipeline processes documents through a series of stages. Each stage transforms the documents as they pass through it.

### Key Stages

| Stage        | Description                                                |
|--------------|------------------------------------------------------------|
| `$match`     | Filters documents based on criteria (like `WHERE` in SQL). |
| `$group`     | Groups documents by a specified key and performs aggregations. |
| `$sort`      | Sorts documents by specified fields.                       |
| `$project`   | Reshapes the document by including, excluding, or computing fields. |
| `$limit`     | Limits the number of documents in the output.              |
| `$skip`      | Skips a specified number of documents.                     |
| `$unwind`    | Deconstructs an array field into individual documents.     |

---

## 2. Basic Aggregation Example

### Example Collection: `orders`

```json
[
  { "_id": 1, "product": "Laptop", "quantity": 2, "price": 1000, "category": "Electronics" },
  { "_id": 2, "product": "Mouse", "quantity": 5, "price": 50, "category": "Electronics" },
  { "_id": 3, "product": "Chair", "quantity": 10, "price": 200, "category": "Furniture" },
  { "_id": 4, "product": "Desk", "quantity": 4, "price": 300, "category": "Furniture" }
]
```

### Aggregation Query: Total Revenue by Category

```javascript
db.orders.aggregate([
  { $group: { _id: "$category", totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } } } }
]);
```

#### Output:

```json
[
  { "_id": "Electronics", "totalRevenue": 2050 },
  { "_id": "Furniture", "totalRevenue": 3200 }
]
```

---

## 3. Aggregation Pipeline Stages in Detail

### 3.1. `$match`

Filters documents based on conditions.

#### Example: Filter Electronics Orders

```javascript
db.orders.aggregate([
  { $match: { category: "Electronics" } }
]);
```

---

### 3.2. `$group`

Groups documents by a key and computes aggregate values.

#### Example: Count Orders by Category

```javascript
db.orders.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
]);
```

---

### 3.3. `$sort`

Sorts documents in ascending (`1`) or descending (`-1`) order.

#### Example: Sort by Total Revenue Descending

```javascript
db.orders.aggregate([
  { $group: { _id: "$category", totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } } } },
  { $sort: { totalRevenue: -1 } }
]);
```

---

### 3.4. `$project`

Selects and transforms fields in the output documents.

#### Example: Calculate Total Value of Each Order

```javascript
db.orders.aggregate([
  { $project: { product: 1, totalValue: { $multiply: ["$quantity", "$price"] } } }
]);
```

---

### 3.5. `$unwind`

Deconstructs an array into individual documents.

#### Example: Flatten an Orders Array

Given a collection with nested arrays:

```json
[
  { "_id": 1, "product": "Laptop", "tags": ["Electronics", "Portable"] },
  { "_id": 2, "product": "Mouse", "tags": ["Electronics", "Accessory"] }
]
```

Unwind the `tags` array:

```javascript
db.orders.aggregate([
  { $unwind: "$tags" }
]);
```

#### Output:

```json
[
  { "_id": 1, "product": "Laptop", "tags": "Electronics" },
  { "_id": 1, "product": "Laptop", "tags": "Portable" },
  { "_id": 2, "product": "Mouse", "tags": "Electronics" },
  { "_id": 2, "product": "Mouse", "tags": "Accessory" }
]
```

---

## 4. Expressions in Aggregations

MongoDB provides operators and expressions for calculations, transformations, and evaluations.

### Common Expressions

| Operator        | Description                              |
|-----------------|------------------------------------------|
| `$sum`          | Calculates the sum of numeric values.   |
| `$avg`          | Calculates the average of numeric values. |
| `$min`          | Finds the minimum value in a group.     |
| `$max`          | Finds the maximum value in a group.     |
| `$multiply`     | Multiplies numeric values.              |
| `$add`          | Adds numeric values.                   |
| `$concat`       | Concatenates strings.                  |
| `$toUpper`      | Converts a string to uppercase.         |

#### Example: Average Price per Category

```javascript
db.orders.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
]);
```

---

## 5. Advanced Aggregation Examples

### 5.1. Pagination

#### Example: Paginate Orders (Skip 2, Limit 2)

```javascript
db.orders.aggregate([
  { $sort: { _id: 1 } },
  { $skip: 2 },
  { $limit: 2 }
]);
```

---

### 5.2. Nested Fields

#### Example: Sum Nested Quantities

Given a collection:

```json
[
  { "_id": 1, "product": "Laptop", "details": { "quantity": 2, "price": 1000 } },
  { "_id": 2, "product": "Mouse", "details": { "quantity": 5, "price": 50 } }
]
```

Aggregate on nested fields:

```javascript
db.orders.aggregate([
  { $group: { _id: null, totalQuantity: { $sum: "$details.quantity" } } }
]);
```

#### Output:

```json
[
  { "_id": null, "totalQuantity": 7 }
]
```

---

## 6. Aggregation Performance Tips

1. **Use Indexes**:
   - `$match` stages benefit from indexes.

2. **Reduce Early**:
   - Place `$match` and `$project` early in the pipeline to reduce data size.

3. **Use `$merge`**:
   - Store aggregation results in a new collection for reuse.

---

## 7. Real-World Use Cases

1. **Data Reporting**:
   - Summarize data for dashboards.
   - Example: Total sales per region.

2. **Data Transformation**:
   - Clean and reformat data.

3. **Inventory Management**:
   - Track low stock items.

4. **User Analytics**:
   - Calculate active users by time period.

---

## 8. Conclusion

MongoDB aggregations are powerful for performing complex data analysis and transformations. By chaining pipeline stages and using expressions, you can build efficient queries tailored to your application’s needs. Practice is key to mastering the aggregation framework!

Start exploring with the aggregation framework to unlock MongoDB's full potential!
```

This Markdown guide provides a detailed explanation of MongoDB Aggregations, including examples, use cases, and performance tips. Copy it into a Markdown viewer for a structured display.
