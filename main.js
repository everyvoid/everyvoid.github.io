import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setClearColor( 0xffffff, 1);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Geometry
const geometry = new THREE.TorusGeometry( 10, 4, 16, 25 );
const material = new THREE.MeshBasicMaterial( { color: 0x111111, wireframe: true, transparent: true, opacity: 0.05} );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 10;


// Animation
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.0005;
  torus.rotation.y += 0.0005;

  if (torus.position.x >= 10) torus.position.x -= 0.005;
  else torus.position.x += 0.005;
 
  renderer.render( scene, camera );
}

animate();
