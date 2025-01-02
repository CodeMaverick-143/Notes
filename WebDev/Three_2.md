# Advanced Three.js

**Three.js** is an immensely powerful 3D JavaScript library for creating interactive 3D graphics in the browser. While the basics of Three.js involve creating scenes, cameras, meshes, and basic animations, the library also provides advanced features for building complex 3D experiences.

This guide explores advanced Three.js concepts such as custom shaders, 3D models, post-processing effects, particle systems, and physics integration.

---

## 1. Custom Shaders in Three.js

Shaders are programs that run on the GPU to control how objects are rendered. In Three.js, custom shaders allow you to create unique visual effects, such as advanced materials, lighting, and post-processing.

### 1.1. Shader Basics

In Three.js, shaders are written in **GLSL** (OpenGL Shading Language). There are two types of shaders:

- **Vertex shaders**: Control the position of each vertex in 3D space.
- **Fragment shaders**: Control the color of each pixel.

#### Example: Simple Shader Material

```javascript
const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
  }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});

const geometry = new THREE.SphereGeometry(1, 32, 32);
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```

In this example, the vertex shader calculates the position of the vertices, while the fragment shader sets the pixel color to red.

### 1.2. Uniforms and Attributes

Uniforms are variables passed from JavaScript to the shaders. They are constant for every vertex or fragment, making them useful for things like time-based animation or lighting.

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0.0 },
    color: { value: new THREE.Color(0x00ff00) }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});

function animate() {
  material.uniforms.time.value += 0.1; // Update the time uniform
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### 1.3. Using Built-In Shaders

Three.js also includes a number of built-in shaders for common effects, such as `MeshBasicMaterial`, `MeshStandardMaterial`, and `ShaderMaterial` for custom effects.

---

## 2. 3D Models in Three.js

Three.js supports importing 3D models created in software like Blender or Maya, which are stored in formats such as **GLTF**, **OBJ**, or **FBX**. The **GLTF** format is widely supported for web use.

### 2.1. Loading 3D Models

To load a 3D model, you use a loader specific to the file format. The most common file format for web use is GLTF.

#### Example: Loading a GLTF Model

```javascript
const loader = new THREE.GLTFLoader();
loader.load('path_to_model.gltf', function (gltf) {
  scene.add(gltf.scene); // Add the model to the scene
}, undefined, function (error) {
  console.error(error);
});
```

You can customize the loaded model by accessing its `gltf.scene` object, which contains all of the model's meshes and other properties.

### 2.2. Animating Models

You can also animate 3D models that contain animation data, such as rigged characters.

```javascript
const loader = new THREE.GLTFLoader();
loader.load('path_to_model_with_animation.gltf', function (gltf) {
  scene.add(gltf.scene);
  const mixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => mixer.clipAction(clip).play());

  function animate() {
    mixer.update(0.01); // Update animations
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
});
```

In this example, the `AnimationMixer` is used to play and update animations on the model.

---

## 3. Post-Processing Effects

Post-processing in Three.js allows you to apply effects to the final rendered image, such as bloom, depth of field, and blur, after the scene is rendered.

### 3.1. Using the Effect Composer

The **EffectComposer** class in Three.js helps chain multiple post-processing effects.

```javascript
const composer = new THREE.EffectComposer(renderer);
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.BloomPass(1.5);
composer.addPass(bloomPass);

function animate() {
  composer.render();
  requestAnimationFrame(animate);
}
```

Here, a **RenderPass** is used to render the scene normally, and a **BloomPass** adds a bloom effect to the scene.

### 3.2. Adding More Post-Processing Effects

You can add various effects like **film grain**, **motion blur**, **depth of field**, etc., by using additional passes in the composer.

```javascript
const filmPass = new THREE.FilmPass(0.35, 0.025, 648, false);
composer.addPass(filmPass);
```

---

## 4. Particle Systems

Particle systems allow you to simulate phenomena like smoke, fire, rain, and explosions in Three.js. Particles are created using **BufferGeometry** and **PointsMaterial**.

### 4.1. Basic Particle System

```javascript
const particleCount = 10000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = Math.random() * 2000 - 1000;
  positions[i * 3 + 1] = Math.random() * 2000 - 1000;
  positions[i * 3 + 2] = Math.random() * 2000 - 1000;
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.5 });
const particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);
```

This creates a basic particle system with random positions for each particle in the scene.

### 4.2. Animating Particles

You can animate the particles by modifying their positions in the animation loop.

```javascript
function animate() {
  const positions = particleSystem.geometry.attributes.position.array;

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] += Math.random() - 0.5;
    positions[i + 1] += Math.random() - 0.5;
    positions[i + 2] += Math.random() - 0.5;
  }

  particleSystem.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
```

---

## 5. Physics in Three.js

For simulating real-world physics like gravity, collisions, and motion, you can integrate physics engines with Three.js. Some popular physics engines include **Cannon.js**, **Ammo.js**, and **Oimo.js**.

### 5.1. Using Cannon.js with Three.js

First, install Cannon.js:

```bash
npm install cannon
```

Then, create a physics world and integrate it with Three.js:

```javascript
import * as THREE from 'three';
import * as CANNON from 'cannon';

// Create a physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// Create a physical sphere body
const sphereShape = new CANNON.Sphere(1);
const sphereBody = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(0, 10, 0)
});
sphereBody.addShape(sphereShape);
world.addBody(sphereBody);

// Create a Three.js mesh
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphereMesh = new THREE.Mesh(geometry, material);
scene.add(sphereMesh);

// Animation loop
function animate() {
  world.step(1 / 60); // Update the physics world

  // Sync the Three.js mesh with the Cannon.js physics body
  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
```

In this example, a physics body is created for a sphere using Cannon.js, and the Three.js mesh is updated to match the physics body's position and rotation.

---

## 6. Conclusion

This guide covers several **advanced Three.js** topics, including:

- **Custom shaders** for creating complex materials and effects.
- **3D model loading** and animation using GLTF format.
- **Post-processing effects** using the EffectComposer.
- **Particle systems** for simulating dynamic visual effects.
- **Physics integration** using engines like Cannon.js for realistic simulations.

By mastering these advanced techniques, you can create highly interactive, realistic, and visually stunning 3D applications in the browser. Explore the Three.js documentation and experiment with these features to push the boundaries of what you can create.

Happy coding!
```

This **Markdown** guide provides an in-depth look at **Advanced Three.js** concepts, including custom shaders, 3D model loading, post-processing effects, particle systems, and integrating physics engines. You can copy and paste this into any Markdown editor or viewer to view it in a formatted structure.
