// JavaScript Document
$(document).ready(function() {
	

$(".btn-hide").click(function() {
	
	alert("Thanks for submitting your catering application. Someone will contact you about the event within 2 business days");
	$("#catering").fadeOut(1000);
});
$(".btn-total").hide();
var counter = 0;
$(".btn-danger").click(function() {
	counter++;
	if (counter === 1){
		$("#count").text(counter + " item selected");
	}else{
		$("#count").text(counter + " items selected");
	}
	$(".btn-total").fadeIn(1000);
});
$(".btn-total").click(function() {
	alert("sorry but our online ordering tool is still under construction. please try back later.");
});
});