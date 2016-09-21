// //How to deal with text in JS.  You use a string, which is set up in "".
// "This is my first string.  I was born in Indy." // It won't build like this.  You need a variable to get it to print.
// var birthCity = "Indy";
// var birthState = "IN";
// var comma = ", ";
// console.log(birthCity);

// //Real world use of a string - 
// var username = "LDecker";
// var password = "password";
// var tweet = "Kayne is broke again"; // String is an array of characters.  Spaces are counted as characters, too.  
// //Every stroke is a character.
// var facebookPost = "I love coding";
// var instaCaption = "#Awesome";
// console.log (username);
// console.log ("this is a test"); // can also do this, instead of saving it as a var.

// console.log ("        ");//adds spaces in the console, makes it easier to read at time.

// //generally put all the variables at the top.  Then write the code to use the var.

// //Concatenation
// console.log (birthCity, birthState); //puts the vars (strings) on the same line.  The comma adds a space.
// console.log (birthCity + birthState); //smashes the words together.  The plus doesn't add a space
// console.log (birthCity + ", " + birthState);//adds the comma and space between.
// console.log (birthCity + comma + birthState);// the space after the comma is added above in the var
// console.log (birthCity, comma, birthState); //the comma added extra spaces after every var.

// var highSchool = "North Central High School";
// var graduationYear = 1976; // if you put the number in a string, you can't do math with it.  You need an integer to do math.
// console.log ("I graduated from" + highSchool + comma +graduationYear); //this smashes together fromNorth
// console.log ("I graduated from", highSchool + comma +graduationYear);//this puts a space between from and North.

// //Create one variable that holds a string to print out 3 other variables.
// //The 3 other variable s should be the make, model & year of your car.
var carMake = "Buick";
var carModel = "LaCrosse";
var carYear = 2006;
var comma = ", ";// moved this down here, since had blocked it all out above.
console.log (carMake, carModel, carYear);
console.log (carMake + comma + carModel + comma + carYear);
var makeModelYear = carMake + comma + carModel + comma + carYear;
console.log (makeModelYear);





