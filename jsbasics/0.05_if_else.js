// Use elevator example - elevator can go up, down, stop
var elevatorUp = false
;
var elevatorBroken = true;
var elevatorDown = true;
var elevatorStop = true;

if (elevatorUp === true) {
	console.log ("Going up"); // if var elevatorUp is true, this prints in console
}else {
	console.log ("The elevator is either broken or going down"); // if var elevatorUp is fales, this prints in console
}

//write one for elevator broken
if (elevatorBroken === true) {
	console.log ("Ahh.... I'm not working");
}else {
	console.log ("I'm doing my best to get down to you");
}


//Write one for elevator stopped
if (elevatorStop === false) {
	console.log ("I'm stopped, quit pounding the button!");
}else {
	console.log ("I'll be there soon");
}

//Write oine for elevator going down


//Develop case where you could use && or ||
If (elevatorUp === true && elevatorBroken === false){
	console.log ("elevator is moving, please wait");
}else {
	console.log ("elevator is on it's way");
}

if (elevatorDown || elevatorUp) {
	
}