var Firebase = require('firebase');

var ref = new Firebase('https://ardrone.firebaseio-demo.com'),
	takeoffRef = ref.child('takeoff'),
	leftRef = ref.child('rollLeft'),
	rightRef = ref.child('rollRight'),
	pitchUpRef = ref.child('pitchUp'),
	pitchDownRef = ref.child('pitchDown');

function main(){
	
}

main();
