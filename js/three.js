var scene = new THREE.Scene();
// Use the following in order to determine width and height of window: (we want the size of the element in html)
const animationSection = document.getElementById('animationSection'); //using this element to get it's width and height.
// let windowWidth = ;
// let windowHeight = ;

var camera = new THREE.PerspectiveCamera( 25, window.innerWidth/window.innerHeight, 0.1, 100 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 ); // div by 2 to get half size.

animationSection.appendChild( renderer.domElement )
// document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();