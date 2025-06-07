// Simple Three.js test
function initSimpleThree(containerId) {
  console.log('Starting simple Three.js test...');
  
  // Check Three.js
  if (typeof THREE === 'undefined') {
    console.error('THREE is not defined!');
    // Try to load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/three@0.160.0/build/three.min.js';
    script.onload = () => {
      console.log('Three.js loaded dynamically');
      initSimpleThree(containerId);
    };
    document.head.appendChild(script);
    return;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Container not found!');
    return;
  }
  
  // Clear container
  container.innerHTML = '';
  
  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0eee6);
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(350, 350);
  container.appendChild(renderer.domElement);
  
  // Add light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);
  
  // Create a simple red cube
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshPhongMaterial({ color: 0xB22234 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
  console.log('Simple Three.js scene created with rotating red cube');
}