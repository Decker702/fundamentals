
// if () { // this is the structure of the statement

// } else if () {

// } else {

// }


// var bankAccount = 50;
// var appleWatch = 400;
// var appleWatchGold = 10000;

// if (bankAccount > appleWatch) {
// 	console.log ("make it rain boi"); // since first condition is true ir won't check the rest of the conditions
// } else if (bankAccount < appleWatchGold) {
// 	console.log ("Start selling plasma to get this!!!");  //if first condition not true it will come down to the second statement.
// } else {
// 	console.log ("Get a job you hippie"); //if neither first or second condition are not true then it will default to print this statement.
// }



// //TO create a personAge then use if / else if / else to check if that person is eligible to vote.
// var personAge = 12;
// var votingAge = 18;
// var reisteredVote = false;

// if ((personAge >= votingAge) && (reisteredVote === true)){ //this is how James uses (()), optional 
// 	console.log ("You are eligible to vote");
// }else if ((personAge >= votingAge) && (reisteredVote === false)) {
// 	console.log ("go get registered and make a difference!!!"); 
// } else {
// // 	console.log ("Not old enough to vote");
// }


// Create a var and assign it a value
//next create an if , else if, esle to evaluate it
// the number is divisable by 2 or 3 adn console.log that it is .

var numberOne = 7

if ((numberOne % 2 === 0) && (numberOne % 3 === 0)) {
	console.log ("Number is divisable by 2 and 3:");
} else if (numberOne % 2 == 0){
	console.log ("Number is divisable by 2");
} else if (numberOne % 3 == 0){
	console.log ("Number is dividable by 3");
} else {
	console.log ("Number is not divisable by 2 or 3")
}