var arDrone = require('ar-drone'),
	Firebase = require('firebase');

var client  = arDrone.createClient();

var ref = new Firebase('https://ardrone.firebaseio-demo.com'),
	takeoffRef = ref.child('takeoff'),
	leftRef = ref.child('rollLeft'),
	rightRef = ref.child('rollRight'),
	pitchUpRef = ref.child('pitchUp'),
	pitchDownRef = ref.child('pitchDown'),
	yawCWRef = ref.child('yarClockwise'),
	yawCCWRef = ref.child('yawCounterClockwise'),
	throttleUpRef = ref.child('throttleUp'),
	throttleDownRef = ref.child('throttleDown');

function main(){

	var SENSITIVITY = 1;

	takeoffRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.land();
		} else if (snapshot.val() === 1) {
			client.takeoff();
		} else {
			client.stop();
		}
	});

	leftRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.left(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.left(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	rightRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.right(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.right(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	pitchUpRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.front(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.front(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	pitchDownRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.back(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.back(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	yawCWRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.clockwise(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.clockwise(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	yawCCWRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.counterClockwise(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.counterClockwise(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	throttleUpRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.up(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.up(SENSITIVITY);
		} else {
			client.stop();
		}
	});

	throttleDownRef.on('value', function(snapshot){
		if (snapshot.val() === 0) {
			client.down(0);
			client.stop();
		} else if (snapshot.val() === 1) {
			client.down(SENSITIVITY);
		} else {
			client.stop();
		}
	});
}

main();
