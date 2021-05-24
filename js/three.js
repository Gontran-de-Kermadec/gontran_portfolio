import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize(window.innerWidth, innerHeight);
//document.body.appendChild(renderer.domElement);
//document.querySelector(".threejs").appendChild(renderer.domElement);
document.querySelector(".threejs").appendChild(renderer.domElement);
//const controls = new OrbitControls( camera, renderer.domElement );

const geometry = new THREE.BoxGeometry(3,1,0.3);
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mat = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry, mat );
//const cube = new THREE.Mesh( geometry, material );
//scene.add(new THREE.AxisHelpers());
scene.add( cube );

camera.position.z = 5;
//camera.position.x = 3;
camera.position.y = 0;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //controls.update();
	renderer.render( scene, camera );
}
animate();
