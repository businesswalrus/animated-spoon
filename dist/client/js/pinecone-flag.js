// Pinecone American Flag Animation
function initPineconeFlag(containerId) {
  console.log('initPineconeFlag called with container:', containerId);
  
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('Three.js is not loaded!');
    return;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Container not found:', containerId);
    return;
  }
  
  console.log('Container found, initializing Three.js scene...');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#F0EEE6');

  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 20;
  camera.position.y = 0;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(550, 550);
  container.appendChild(renderer.domElement);
  
  console.log('Renderer created and added to DOM');

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  // Create pinecone group
  const pineCone = new THREE.Group();

  // Define scale shape
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.7, 0.7);
  shape.lineTo(0.5, 1.4);
  shape.lineTo(0, 1.7);
  shape.lineTo(-0.5, 1.4);
  shape.lineTo(-0.7, 0.7);
  shape.closePath();

  const extrudeSettings = {
    depth: 0.05,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  const scaleGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // American flag colors
  const redMaterial = new THREE.MeshPhysicalMaterial({
    color: '#B22234',
    transparent: true,
    opacity: 0.8,
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const whiteMaterial = new THREE.MeshPhysicalMaterial({
    color: '#FFFFFF',
    transparent: true,
    opacity: 0.8,
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const blueMaterial = new THREE.MeshPhysicalMaterial({
    color: '#3C3B6E',
    transparent: true,
    opacity: 0.8,
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: '#333333',
    transparent: true,
    opacity: 0.2
  });

  const edgesGeometry = new THREE.EdgesGeometry(scaleGeometry);

  // Create layers
  const layers = 38;
  const scalesPerLayer = 8;
  const layerGroups = [];

  for (let layer = 0; layer < layers; layer++) {
    const layerGroup = new THREE.Group();
    const yPosition = (layer / layers) * 18 - 9 - 0.9;
    let layerRadius;

    if (layer < 10) {
      layerRadius = Math.sin((layer / 10) * Math.PI * 0.5) * 2;
    } else {
      layerRadius = 2 + Math.sin(((layer - 10) / (layers - 10)) * Math.PI) * 2.5;
    }

    const taper = 1 - (layer / layers) * 0.3;

    // Determine which material to use for this layer
    const colorIndex = layer % 3;
    let layerMaterial;
    if (colorIndex === 0) {
      layerMaterial = redMaterial;
    } else if (colorIndex === 1) {
      layerMaterial = whiteMaterial;
    } else {
      layerMaterial = blueMaterial;
    }

    for (let i = 0; i < scalesPerLayer; i++) {
      const angle = (i / scalesPerLayer) * Math.PI * 2 + (layer * 0.25);

      const scaleMesh = new THREE.Mesh(scaleGeometry, layerMaterial);
      scaleMesh.rotation.x = Math.PI / 3;
      scaleMesh.rotation.y = angle;
      scaleMesh.position.x = Math.cos(angle) * layerRadius * taper;
      scaleMesh.position.z = Math.sin(angle) * layerRadius * taper;
      scaleMesh.position.y = yPosition;
      scaleMesh.scale.set(0.8, 0.8, 0.8);

      layerGroup.add(scaleMesh);

      const wireframe = new THREE.LineSegments(edgesGeometry, wireframeMaterial);
      wireframe.rotation.x = Math.PI / 3;
      wireframe.rotation.y = angle;
      wireframe.position.x = Math.cos(angle) * layerRadius * taper;
      wireframe.position.z = Math.sin(angle) * layerRadius * taper;
      wireframe.position.y = yPosition;
      wireframe.scale.set(0.8, 0.8, 0.8);

      layerGroup.add(wireframe);
    }

    // Start with scales folded inward
    layerGroup.scale.set(0.01, 0.01, 0.01);
    layerGroup.rotation.x = Math.PI / 2;
    
    layerGroups.push(layerGroup);
    pineCone.add(layerGroup);
  }

  scene.add(pineCone);

  // Animation variables
  let time = 0;
  let unfoldingProgress = 0;

  function animate() {
    requestAnimationFrame(animate);
    time += 0.005;
    
    // Unfolding animation
    if (unfoldingProgress < 1) {
      unfoldingProgress += 0.008;
    }

    // Update each layer's unfolding based on progress
    layerGroups.forEach((layerGroup, index) => {
      const layerProgress = Math.max(0, Math.min(1, (unfoldingProgress * layers - index) / 3));
      
      if (layerProgress > 0) {
        // Unfold scale
        const scale = layerProgress;
        layerGroup.scale.set(scale, scale, scale);
        
        // Unfold rotation
        const rotationX = (1 - layerProgress) * Math.PI / 2;
        layerGroup.rotation.x = rotationX;
        
        // Add slight wobble during unfolding
        if (layerProgress < 1) {
          layerGroup.rotation.z = Math.sin(time * 10) * 0.02 * (1 - layerProgress);
        }
      }
    });

    // Gentle rotation after unfolding
    if (unfoldingProgress >= 1) {
      pineCone.rotation.y = time * 0.2;
      pineCone.rotation.x = Math.sin(time * 0.5) * 0.03;
      pineCone.rotation.z = Math.cos(time * 0.7) * 0.02;

      const breathe = 1 + Math.sin(time * 0.5) * 0.015;
      pineCone.scale.set(breathe, breathe, breathe);
    }

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  function handleResize() {
    const width = Math.min(container.clientWidth, 550);
    const height = width;
    camera.aspect = 1;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  // Return cleanup function
  return function cleanup() {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}