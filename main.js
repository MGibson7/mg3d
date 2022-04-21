
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
const networthTexture = new THREE.TextureLoader().load('money.jpeg');
const junkTexture = new THREE.TextureLoader().load('junk.webp');
const michael2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: footballTexture }));
const michael3 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: robotTexture }));
const michael4 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: etchTexture }));
const michael5 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: calcTexture }));
const michael6 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: invTexture }));
const michael7 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: dtvTexture }));
const michael8 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: conTexture }));
const michael9 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: viaTexture }));
const michael10 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: networthTexture }));
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
let hover = []

michael.position.z = 10;
michael.position.x = 0;
michael10.position.z = 10;
michael10.position.x = 10;
michael10.position.y = -10;
michael9.position.y = -10;
michael9.position.x = 15;
michael9.position.z = 10;
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
michael2.position.y = -10;
michael2.position.x = 45;
michael2.position.z = 10;
michael3.position.y = -10;
michael3.position.x = 50;
michael3.position.z = 10;
michael11.position.y = -10;
michael11.position.x = 55;
michael11.position.z = 10;


//Add Event Listener
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseClick( event ) {
    raycaster.setFromCamera( mouse, camera );
    var cubeInter = raycaster.intersectObject(michael);
    var isIntersected = raycaster.intersectObject(michael2);
    var project2Inter = raycaster.intersectObject(michael3);
    var project3Inter = raycaster.intersectObject(michael4);
    var project4Inter = raycaster.intersectObject(michael5);
    var project5Inter = raycaster.intersectObject(michael6);
    var project6Inter = raycaster.intersectObject(michael7);
    var project7Inter = raycaster.intersectObject(michael8);
    var project8Inter = raycaster.intersectObject(michael9);
    var project9Inter = raycaster.intersectObject(michael10);
    var project10Inter = raycaster.intersectObject(michael11);

    if (isIntersected.length > 0) {
        console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './football.png' alt = 'Helmet' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/ALLTIMEFANTASY' target='_blank' rel='noopener noreferrer'><button id = source1>SOURCE CODE</button></a>\
                        <a href= './FantasyTrading.mp4'target='_blank' rel='noopener noreferrer'><button id = demo1>LIVE DEMO</button></a>\
                        <p>Trading card game that assigns you a random player from a random year and then it's up to you to accept or reject a trade offer for them.</p>"

    }
    else if (cubeInter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './cartoonme.png' alt = 'Cartoon' width = 100px, height = 100px>"

    }
    else if (project2Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './robot.jpeg' alt = 'Robot' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/RockPaperScissorsJava' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './RockPaperScissorsJava.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>rock-paper-scissors against the computer in first to 5 matches and keeps track of titles won.</p>"

    }
    else if (project3Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './etch.jpeg' alt = 'Etch' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/etchasketch' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                          <a href= 'https://mgibson7.github.io/etchasketch/'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>Program to mimic an Etch A Sketch utilizing DOM Manipulation via JavaScript.</p>"

    }
    else if (project4Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './calculator.jpeg' alt = 'Calculator' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/calculator' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
        <a href= 'https://mgibson7.github.io/Calculator/'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>Utilizing JS functions and DOM manipulation to produce a calculator.</p>"

    }
    else if (project5Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './invoice.jpg' alt = 'Invoice' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/FFLTechInvoiceMaker' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './ViasatInvoicing.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>scrapes completed job data from company site and compiles it into a word document invoice based on the inputted tech and date range.</p>"

    }
    else if (project6Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './dtv.jpg' alt = 'DirecTV' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/ACDTVSQLQUERIES' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './ACDTVSQL2.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>SQL code for pulling total number of unique accounts and subsequent billing from large assortment of account data. \
                        Group unique accounts. See overview of customer base differences month vs month.</p>"

    }
    else if (project7Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './contact.png' alt = 'Phone' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/ACAddTechContactInfo' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './addcontactinfovia.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>Program uses selenium and adds phone number of corresponding tech that is assigned to that work order.</p>"

    }
    else if (project8Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './viasat.png' alt = 'Viasat' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/ViasatMovingAvgs' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './viasatmoving.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>scrape data off company site to provide an indepth report of the 90 day, 60 day, 30 day, and\
                        15 day moving averages (normalized for a 30 day period). This was utilized to optimize equipment ordering and save on shipping costs/avoid out of stock reschedules.</p>"

    }
    else if (project9Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './money.jpeg' alt = 'money' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/networthStatement' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= 'https://mgibson7.github.io/networthStatement/'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>Interactive networth statement that displays where you stack up amongst your peers \
                        utilized Javascript OOP, DOM Manipulation, and CSS Grid</p>"

    }
    else if (project10Inter.length >0){
      console.log('Mesh clicked!')
        let projecthere = document.getElementById('projecthere')
        projecthere.innerHTML = "<img src = './junk.webp' alt = 'Junk' width = 100px, height = 100px>\
        <a href= 'https://github.com/MGibson7/SMALLBIZAUTOMATION-JunkintheTruck' target='_blank' rel='noopener noreferrer'><button>SOURCE CODE</button></a>\
                        <a href= './junktruckvid.mp4'target='_blank' rel='noopener noreferrer'><button>LIVE DEMO</button></a>\
                        <p>text alerts of incoming job opportunities to vendors dependent on their criteria & ability</p>"

    }
}

function onDocumentMouseMove(event) {

  var mouse = new THREE.Vector2();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects( array1 );

  if (intersects && intersects.length > 0) { 
    document.body.style.cursor = 'pointer' 
  } 
  else { document.body.style.cursor = 'default' }

}


function onMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}



window.addEventListener( 'click', onMouseClick, false );
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener( 'mousemove', onDocumentMouseMove, false );






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