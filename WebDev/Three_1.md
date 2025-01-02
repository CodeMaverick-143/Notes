# Three.js Basics

**Three.js** is a 3D graphics library that makes it easy to create 3D graphics in the browser using WebGL. With Three.js, you can create and render 3D scenes, objects, and animations. This guide will cover the basics of Three.js, including setting up a scene, creating 3D objects, and rendering them in the browser.

---

## 1. Introduction to Three.js

Three.js is a JavaScript library that abstracts many of the complexities of WebGL, allowing you to create 3D scenes and objects with ease. It provides a simple API to interact with the 3D world, including cameras, lights, geometries, materials, and more.

---

## 2. Setting Up a Basic Three.js Scene

To use Three.js in your project, you need to include the Three.js library and set up a basic HTML structure to render the scene.

### 2.1. Installation

You can include Three.js in your HTML file by using a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

Alternatively, you can install it using npm in a Node.js project:

```bash
npm install three
```

### 2.2. Basic HTML Structure

Create an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Three.js Basics</title>
  <style>
    body { margin: 0; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

### 2.3. Setting Up the Scene in JavaScript

Create an `app.js` file to set up a basic scene:

```javascript
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and attach it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material for the cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a cube mesh
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Set the camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

animate();
```

This code sets up a basic scene with a rotating green cube. The renderer is attached to the DOM to display the 3D scene in the browser.

---

## 3. Core Concepts in Three.js

Three.js provides several key concepts that help in building 3D scenes. These include the scene, camera, objects, lights, and materials.

### 3.1. The Scene

The scene is the container that holds all objects, cameras, lights, and other elements in the 3D space.

```javascript
const scene = new THREE.Scene();
```

### 3.2. The Camera

The camera defines the viewpoint from which the scene is rendered. In Three.js, the **PerspectiveCamera** is the most commonly used type of camera, simulating how the human eye perceives depth and perspective.

```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;  // Position the camera to view the scene
```

### 3.3. The Renderer

The renderer is responsible for rendering the scene. The **WebGLRenderer** is used to render the scene using WebGL.

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add the renderer's canvas to the DOM
```

### 3.4. Geometries and Meshes

In Three.js, **geometries** define the shapes of 3D objects, and **meshes** are the objects that are created by combining geometries with materials.

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);  // Create a box geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // Green color
const cube = new THREE.Mesh(geometry, material);  // Create a mesh (cube)
scene.add(cube);  // Add the cube to the scene
```

### 3.5. Lights

Lights are essential in Three.js for making objects visible. Common types of lights include **AmbientLight**, **DirectionalLight**, and **PointLight**.

```javascript
const light = new THREE.AmbientLight(0x404040);  // Ambient light with color
scene.add(light);  // Add light to the scene
```

---

## 4. Animation in Three.js

Three.js allows you to animate objects by continuously updating their properties inside an animation loop. The **requestAnimationFrame()** method is used to create smooth, efficient animations.

### 4.1. Animation Loop

An animation loop is a function that continuously renders the scene while updating the objects' properties.

```javascript
function animate() {
  requestAnimationFrame(animate);  // Call animate on the next frame

  // Update the cube's rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

animate();  // Start the animation loop
```

---

## 5. Handling User Input

You can interact with Three.js scenes using user input, such as mouse movements or keyboard events.

### 5.1. Mouse Movement Example

Use mouse events to rotate the camera based on the mouse's position.

```javascript
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
  requestAnimationFrame(animate);

  // Rotate the camera based on mouse position
  camera.rotation.x = mouseY * Math.PI;
  camera.rotation.y = mouseX * Math.PI;

  renderer.render(scene, camera);
}

animate();
```

---

## 6. Handling Window Resize

To ensure the 3D scene resizes when the browser window is resized, you can update the camera's aspect ratio and the renderer's size dynamically.

```javascript
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();  // Update camera projection matrix
  renderer.setSize(window.innerWidth, window.innerHeight);  // Update renderer size
});
```

---

## 7. Conclusion

Three.js is a powerful library that enables you to create stunning 3D graphics directly in the browser. This guide has covered the basics of setting up a Three.js scene, including creating a scene, camera, lights, objects, and rendering them. You've also learned about animating objects and handling user input, which are fundamental in creating interactive 3D applications.

By understanding the core concepts in Three.js, you can build more complex 3D scenes and visualizations. Explore further by experimenting with advanced topics like shaders, physics, and 3D models.

Happy coding!
```

This **Markdown** guide covers the essentials of **Three.js Basics**, providing a detailed explanation of setting up a scene, creating and animating 3D objects, handling user input, and handling resizing. You can copy and paste this into any Markdown editor or viewer for a structured, easy-to-follow reference.
