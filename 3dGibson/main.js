import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);



const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)



const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)


const controls = new OrbitControls(camera, renderer.domElement);



const spaceTexture = new THREE.TextureLoader().load('street.jpg');
scene.background = spaceTexture;


const michaelTexture = new THREE.TextureLoader().load('cartoonme.png');

const michael = new THREE.Mesh(new THREE.BoxGeometry(12, 12, 12), new THREE.MeshBasicMaterial({ map: michaelTexture }));

scene.add(michael);


michael.position.z = 3;
michael.position.setX = 10;

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;

  michael.rotation.y += 0.01;
  michael.rotation.z += 0.01;

  





}

document.body.onscroll = moveCamera








// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  michael.rotation.x += 0.01;
  michael.rotation.y += 0.005;
  michael.rotation.z += 0.01;



  controls.update();

  renderer.render(scene, camera);
}

animate();