
// //Declaration
// function helloWorld (){
// 	console.log("Hello World");
// }

// //Call
// helloWorld(); //Hello World printed in broser


// function printName(){
// 	console.log("L");
// }

// printName();

// //Declaration #2 -other option 
// var name=function(){
// 	console.log ("L")
// }
// //Call
// name();

// //Scope - variables live in curly braces, but not available outside of the curly braces.
// function addNumbers (){
// 	var x = 10;
// 	var y = 10;
// 	console.log (x + y);
// }

// addNumbers(); //Twenty shows in the broswer


// function multiplyNumbers(){
// 	var a = 3;
// 	var b = 4;
// 	console.log (a * b);
// }

// multiplyNumbers();  
// //limitation is your don't get to change numbers unless in the function.

// //Parameters & Arguments
// function printNumber (x){
// 	console.log ("The number you entered was: " + x);
// }
// //Argument - is the value you put into it.
// // printNumber(6);

// //function
// function bankPin(x){
// 	console.log (x + " is the correct number.")
// }

// bankPin (1234);

// //CHALLENGE - use conditional statements to 
// // check if the pin # is correct or not.


// //Shane's example from slack
// //bankpin
// 	function enterpin(xyz) {
// 		var pin = 503;

// 		if (pin != xyz) {
// 			console.log("Pin not accepted");
// 		} else {
// 			console.log("Correct!");
// 		}
// 	}

// 	enterpin(502);

// 	//another way
// 	function numAdd (a,b) {
// 		return a + b;
// 	}
// 	console.log (numAdd("James", "Paul")); // this returns JamesPaul.
// 	console.log (numAdd(1,2));// this returns 3 (1+2=3)


/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/

	// function bronze (a,b) {
	// 	return a + " " + b
	// }
	// console.log (bronze ("Go", "Fish"))//this does not add a space


	// function bronze (a, b){
	// 	return a + b
	// }
	// console.log (bronze("go", "fish"))
 

//SILVER:
// 	Write a function that will help me easily 
// 	calculate monthly bills.*/
// to calculate bills 1) list the amount, 2) add the totla

// function monthlyBills() {
// 	var gas = 23;
// 	var phone = 121;
// 	var electric = 45;
// 	var water = 87;
// 	var house = 876;
// console.log (gas + phone + electric + water + house);  
// }
// if the above worked, it would be hard coded, but the one below give you flexibility.
//You just have enter in the amount due in console.log and not in the function.

// function monthyBills(rent, phone, dateNight){
// 	return rent + phone +dateNight;
// }

// console.log (monthyBills (200, 50, 100))
// /*-----------------------------------------------------------
// 

/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

//you need to identify - number bought, brand bought, cost is $0.99 each, add them together
// then multipy the total by 1.07 to get the total.  You only care about the brand in the message.

function purchase (cans, cost, tax){
	return (cans * cost * tax);
}

console.log (purchase (100, .99, 1.07))

function message (){
	console.log (cans "of Coke cost" purchase):
}

