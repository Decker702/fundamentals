//var is a key word, so is if.

var isOn = true;
var isHot = true;

if (isOn) {
	console.log ("Man, that light is really bright.");
}// this is an if statement and you can run lots of code within it.  The display is Man, that light is really bright.

if (isOn === true) {
	console.log ("Dude, that's so cool.");//only JavaScript has 3 equals, not in other languages.  
}

if (isOn === true) {
	console.log ("Dude, that's so cool."); // does not print to the console, unless it is true [changed the var above to false.
}

// && is for and
// || is for or, called double pipes on top of the \ key.

if (isOn && isHot) {
	console.log ("Wow, it is incredibly hot.  Please kill those spot lights.") //both have to be true or both false to print because of and.
}

if (isOn || isHot) {
	console.log ("Wow, it is incredibly hot.  Please kill those spot lights.") //because of or it will print because both variable can be true or false.
}

//boulean becomes an on and off switch.

