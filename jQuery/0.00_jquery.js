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

});