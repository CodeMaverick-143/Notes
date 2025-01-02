# File System in Node.js

The `fs` module in Node.js allows you to interact with the file system. It provides methods for reading, writing, updating, and deleting files, as well as handling directories.

---

## 1. Importing the `fs` Module

To use the `fs` module, you need to import it:

```javascript
const fs = require('fs');
```

There’s also a promise-based version available in `fs/promises`:

```javascript
const fsPromises = require('fs/promises');
```

---

## 2. File Operations

### 2.1. Reading Files

#### Asynchronous:

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### Synchronous:

```javascript
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

#### Promise-Based:

```javascript
fsPromises.readFile('example.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

### 2.2. Writing Files

#### Asynchronous:

```javascript
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
```

#### Synchronous:

```javascript
fs.writeFileSync('example.txt', 'Hello, Node.js!');
console.log('File written!');
```

#### Appending to a File:

```javascript
fs.appendFile('example.txt', '\nAppended content!', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
```

---

### 2.3. Deleting Files

#### Asynchronous:

```javascript
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

#### Synchronous:

```javascript
fs.unlinkSync('example.txt');
console.log('File deleted!');
```

---

## 3. Directory Operations

### 3.1. Creating a Directory

#### Asynchronous:

```javascript
fs.mkdir('new-dir', (err) => {
  if (err) throw err;
  console.log('Directory created!');
});
```

#### Synchronous:

```javascript
fs.mkdirSync('new-dir');
console.log('Directory created!');
```

#### Recursive Creation:

```javascript
fs.mkdir('nested/dir/path', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Nested directories created!');
});
```

---

### 3.2. Reading a Directory

#### Asynchronous:

```javascript
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files:', files);
});
```

#### Synchronous:

```javascript
const files = fs.readdirSync('.');
console.log('Files:', files);
```

---

### 3.3. Deleting a Directory

#### Asynchronous:

```javascript
fs.rmdir('new-dir', (err) => {
  if (err) throw err;
  console.log('Directory removed!');
});
```

#### Synchronous:

```javascript
fs.rmdirSync('new-dir');
console.log('Directory removed!');
```

#### Recursive Deletion:

```javascript
fs.rm('nested', { recursive: true, force: true }, (err) => {
  if (err) throw err;
  console.log('Directory removed recursively!');
});
```

---

## 4. File and Directory Information

### 4.1. Checking File/Directory Existence

Deprecated: Use `fs.access()` instead of `fs.exists()`.

```javascript
fs.access('example.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist' : 'File exists');
});
```

---

### 4.2. File Stats

Get metadata about a file or directory:

#### Asynchronous:

```javascript
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);
});
```

#### Synchronous:

```javascript
const stats = fs.statSync('example.txt');
console.log(stats);
```

### Example Output of `fs.stat`:

```plaintext
Stats {
  dev: 2049,
  ino: 305352,
  mode: 33206,
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  size: 1024,
  atime: 2023-01-01T00:00:00.000Z,
  mtime: 2023-01-01T00:00:00.000Z,
  ctime: 2023-01-01T00:00:00.000Z,
  birthtime: 2023-01-01T00:00:00.000Z
}
```

---

## 5. Watching Files and Directories

### Watching a File:

```javascript
fs.watchFile('example.txt', (curr, prev) => {
  console.log(`File changed: ${curr.mtime}`);
});
```

### Watching a Directory:

```javascript
fs.watch('new-dir', (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  console.log(`Filename: ${filename}`);
});
```

---

## 6. Streams in File System

### Reading a File Stream:

```javascript
const readStream = fs.createReadStream('largefile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});
```

### Writing to a File Stream:

```javascript
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Writing to a file stream\n');
writeStream.end('Done!');
```

### Piping Streams:

```javascript
const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

---

## 7. Best Practices for Using `fs`

1. **Use Promises**:
   - Prefer the promise-based `fs/promises` module for cleaner asynchronous code.
2. **Handle Errors Gracefully**:
   - Always handle errors in callbacks, promises, or `try-catch` blocks.
3. **Use Streams for Large Files**:
   - For large files, use streams to avoid memory overload.
4. **Check for Compatibility**:
   - Some methods like `fs.rm()` may require newer Node.js versions.

---

## 8. Example: Combining File Operations

Copy a file:

```javascript
const fs = require('fs');

fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('File copied!');
});
```

---

## 9. Conclusion

The `fs` module is a core feature of Node.js, enabling developers to efficiently handle file and directory operations. By understanding both its callback-based and promise-based APIs, you can build scalable and efficient file management systems.

Explore further by creating projects like:
- File upload services
- Log management systems
- File-based database systems
```

This Markdown document explains the file system module in Node.js with examples for common tasks such as reading, writing, and managing files and directories. Copy and paste this into any Markdown viewer or editor for a clean and formatted display.
