//The following was used to very jQuery is working 
$(document).ready(function(){

	//alert("JQuery is working");


	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000); //5000 is 5 seconds
	});

//Friday, Sept 23, 2016 from the board - other ways to maniplate the picture:

$("#explore").click(function(){
	$("#image").hide("explode", { pieces: 1000}) //and then it disappeared.
})


});