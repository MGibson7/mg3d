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

const michael = new THREE.Mesh(new THREE.BoxGeometry(9, 9, 9), new THREE.MeshBasicMaterial({ map: michaelTexture }));

const robotTexture = new THREE.TextureLoader().load('robot.jpeg');
const footballTexture = new THREE.TextureLoader().load('football.png');
const michael2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: footballTexture }));
const michael3 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: robotTexture }));

scene.add(michael);
scene.add(michael2);
scene.add(michael3);


michael.position.z = 10;
michael.position.x = 10;
michael2.position.z = 10;
michael2.position.x = 10;
michael2.position.y = -10;
michael3.position.y = -10;
michael3.position.x = 15;
michael3.position.z = 10;










// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  michael.rotation.x += 0.01;
  michael.rotation.y += 0.005;
  michael.rotation.z += 0.01;
  if (michael2.position.x >= -40)
  {
    michael2.position.x += -0.1;

  }
  else{
    michael2.position.x = 40;
  }
  




  controls.update();

  renderer.render(scene, camera);
}

animate();