
# Python Array Notes

## 1. What is an Array in Python?

An array is a data structure that holds multiple values of the same type. In Python, arrays are provided by the `array` module. However, in practice, lists are more commonly used in Python, as they provide more flexibility and are built-in.

## 2. Working with Arrays in Python

### a. **Importing the `array` Module**

To work with arrays in Python, you need to import the `array` module. This module provides a way to define and manipulate arrays.

```python
import array
```

### b. **Creating an Array**

You can create an array using the `array` function from the `array` module. You need to specify the type code and the initial elements of the array.

#### Example:

```python
import array

# Creating an array of integers
arr = array.array('i', [1, 2, 3, 4, 5])

# Creating an array of floating-point numbers
arr_float = array.array('f', [1.1, 2.2, 3.3, 4.4])
```

### Type Codes:
- `'i'`: Integer
- `'f'`: Floating point
- `'d'`: Double precision floating point

### c. **Accessing Array Elements**

You can access elements in an array using indexing, similar to how you access elements in a list.

```python
arr = array.array('i', [1, 2, 3, 4, 5])

# Accessing the first element
print(arr[0])  # Output: 1

# Accessing the last element
print(arr[-1])  # Output: 5
```

### d. **Modifying Array Elements**

You can modify array elements by assigning a new value to a specific index.

```python
arr[0] = 10
print(arr)  # Output: array('i', [10, 2, 3, 4, 5])
```

## 3. Array Methods in Python

Python arrays provide various methods to manipulate array elements.

### a. **append()**: Adds an element to the end of the array.

```python
arr = array.array('i', [1, 2, 3])
arr.append(4)
print(arr)  # Output: array('i', [1, 2, 3, 4])
```

### b. **insert()**: Inserts an element at a specified position in the array.

```python
arr = array.array('i', [1, 2, 3])
arr.insert(1, 4)  # Insert 4 at index 1
print(arr)  # Output: array('i', [1, 4, 2, 3])
```

### c. **remove()**: Removes the first occurrence of a specified element.

```python
arr = array.array('i', [1, 2, 3, 4])
arr.remove(3)  # Remove the first occurrence of 3
print(arr)  # Output: array('i', [1, 2, 4])
```

### d. **pop()**: Removes and returns the last element of the array.

```python
arr = array.array('i', [1, 2, 3, 4])
popped_element = arr.pop()
print(popped_element)  # Output: 4
print(arr)  # Output: array('i', [1, 2, 3])
```

### e. **extend()**: Adds elements from another array to the end of the current array.

```python
arr1 = array.array('i', [1, 2])
arr2 = array.array('i', [3, 4])
arr1.extend(arr2)
print(arr1)  # Output: array('i', [1, 2, 3, 4])
```

### f. **index()**: Returns the index of the first occurrence of a specified element.

```python
arr = array.array('i', [1, 2, 3, 4])
index_of_3 = arr.index(3)
print(index_of_3)  # Output: 2
```

### g. **reverse()**: Reverses the order of elements in the array.

```python
arr = array.array('i', [1, 2, 3, 4])
arr.reverse()
print(arr)  # Output: array('i', [4, 3, 2, 1])
```

### h. **tolist()**: Converts the array to a list.

```python
arr = array.array('i', [1, 2, 3, 4])
arr_list = arr.tolist()
print(arr_list)  # Output: [1, 2, 3, 4]
```

## 4. Array vs List in Python

- **Array**:
  - Arrays are more memory-efficient when working with a large number of elements of the same type.
  - Arrays are limited to storing data of the same type.
  - Arrays are provided by the `array` module and are typically used when you need performance and space optimization.

- **List**:
  - Lists are more flexible and can store elements of different types.
  - Lists are built-in Python data structures and are generally more convenient to use than arrays.
  - Lists are more commonly used for general-purpose programming in Python.

## 5. Multidimensional Arrays in Python

Python doesn't have built-in support for multidimensional arrays (like 2D or 3D arrays) in the `array` module, but you can create nested arrays or use libraries like **NumPy** for advanced array manipulation.

### Example of 2D Array using Lists:

```python
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

print(matrix[0][1])  # Output: 2 (first row, second column)
```

## 6. Working with NumPy Arrays

While Python's built-in `array` module is useful for simple tasks, for more complex array manipulations, **NumPy** is the preferred choice.

You can install NumPy via pip:

```bash
pip install numpy
```

### Example of creating a NumPy array:

```python
import numpy as np

# Creating a NumPy array
arr = np.array([1, 2, 3, 4])
print(arr)  # Output: [1 2 3 4]
```

### Advantages of NumPy Arrays:
- Supports multidimensional arrays (matrices, tensors, etc.).
- Efficient mathematical operations on large datasets.
- Supports a variety of numerical operations and functions.

## 7. Conclusion

Arrays in Python are useful for storing collections of data of the same type. You can use the `array` module for simple array operations, but in practice, **lists** are more commonly used for most tasks. For more advanced functionality and multidimensional arrays, the **NumPy** library is highly recommended.
