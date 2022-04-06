
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';



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






let materials = [
  new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('sql.png')
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('dtv.jpg')
}),
new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('uncw.png')
}),
new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('js.png')
}),
new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('python.png')
}),
new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('htmlcss.png')
})];

const michael = new THREE.Mesh(new THREE.BoxGeometry(9, 9, 9), materials);


const robotTexture = new THREE.TextureLoader().load('robot.jpeg');
const footballTexture = new THREE.TextureLoader().load('football.png');
const etchTexture = new THREE.TextureLoader().load('etch.jpeg');
const calcTexture = new THREE.TextureLoader().load('calculator.jpeg');
const invTexture = new THREE.TextureLoader().load('invoice.jpg');
const dtvTexture = new THREE.TextureLoader().load('dtv.jpg');
const conTexture = new THREE.TextureLoader().load('contact.png');
const viaTexture = new THREE.TextureLoader().load('viasat.png');
const fireTexture = new THREE.TextureLoader().load('fire.png');
const junkTexture = new THREE.TextureLoader().load('junk.webp');
const michael2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: footballTexture }));
const michael3 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: robotTexture }));
const michael4 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: etchTexture }));
const michael5 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: calcTexture }));
const michael6 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: invTexture }));
const michael7 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: dtvTexture }));
const michael8 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: conTexture }));
const michael9 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: viaTexture }));
const michael10 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: fireTexture }));
const michael11 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: junkTexture }));

scene.add(michael);
scene.add(michael2);
scene.add(michael3);
scene.add(michael4);
scene.add(michael5);
scene.add(michael6);
scene.add(michael7);
scene.add(michael8);
scene.add(michael9);
scene.add(michael10);
scene.add(michael11);


let array1 = [michael2, michael3, michael4, michael5, michael6, michael7, michael8, michael9, michael10, michael11]


michael.position.z = 10;
michael.position.x = 0;
michael2.position.z = 10;
michael2.position.x = 10;
michael2.position.y = -10;
michael3.position.y = -10;
michael3.position.x = 15;
michael3.position.z = 10;
michael4.position.y = -10;
michael4.position.x = 20;
michael4.position.z = 10;
michael5.position.y = -10;
michael5.position.x = 25;
michael5.position.z = 10;
michael6.position.y = -10;
michael6.position.x = 30;
michael6.position.z = 10;
michael7.position.y = -10;
michael7.position.x = 35;
michael7.position.z = 10;
michael8.position.y = -10;
michael8.position.x = 40;
michael8.position.z = 10;
michael9.position.y = -10;
michael9.position.x = 45;
michael9.position.z = 10;
michael10.position.y = -10;
michael10.position.x = 50;
michael10.position.z = 10;
michael11.position.y = -10;
michael11.position.x = 55;
michael11.position.z = 10;










// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  michael.rotation.x += 0.01;
  michael.rotation.y += 0.005;
  michael.rotation.z += 0.01;
 
  for (const item of array1){
    if (item.position.x >= -40){
      item.position.x += -0.1;

    }
    else{
      item.position.x = 40;
    }

  }
    
  

  
  
  




  controls.update();

  renderer.render(scene, camera);
}

animate();