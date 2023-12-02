import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setClearColor( 0xffffff, 1);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setPixelRatio(window.devicePixelRatio);


// Geometry
const geometry = new THREE.TorusGeometry( 10, 4, 16, 100 );
const materialMesh = new THREE.MeshBasicMaterial( { color: 0x111111, wireframe: true, transparent: true, opacity: 0.02} );
const materialPoints = new THREE.PointsMaterial( { size: 0.05, color: 0x111111, transparent: true, opacity: 0.02} );
const torusPoints = new THREE.Points( geometry, materialPoints );
const torusMesh = new THREE.Mesh( geometry, materialMesh );
scene.add( torusPoints ); scene.add( torusMesh );

camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 10;

var toRight = true;

// Animation
function animate() {
  requestAnimationFrame( animate );

  torusMesh.rotation.x += 0.0005;
  torusMesh.rotation.y += 0.0005;

  torusPoints.rotation.x += 0.0005;
  torusPoints.rotation.y += 0.0005;

  if (torusPoints.position.x >= 10) toRight = false;
  if (torusPoints.position.x <= 10) toRight = true;
 
  if (toRight) torusMesh.position.x += 0.001;
  if (!toRight) torusMesh.position.x -= 0.001;

  if (toRight) torusPoints.position.x += 0.001;
  if (!toRight) torusPoints.position.x -= 0.001; 

  renderer.render( scene, camera );
}

animate();
