gh-pages
	$('.box1').flickity({
  // options
  wrapAround: true
});

	$('.box2').flickity({
  // options
  wrapAround:true
});

$("document").ready(function(){	

	var topSelected =false;

	var bottomSelected =false;

	var top = "";

	var bottom = "";

	$("#choose-1").click(function(){ 
		top = $(".box1").find(".is-selected").attr("data-clothing");

$("document").ready(function(){
	// 1- Set varibles so that they are global to the all parts of the function
	var topSelected = false;
	var bottomSelected = false;
	var top, bottom;

	// 2- Choose top
	$("#choose-1").click(function(){
		top = $("#box1 .is-selected").attr("data-clothing");
master
		topSelected = true;
		console.log(top);
		console.log(topSelected);
	});

	// 3- Choose bottom
	$("#choose-2").click(function(){
		bottom = $("#box2 .is-selected").attr("data-clothing");
		bottomSelected = true;
		console.log(bottom);
		console.log(bottomSelected);
	});

	// 4- Establish checkMatch function to check if garments match
	function checkMatch(){
		console.log(top);
		console.log(bottom);
		if (topSelected === true && bottomSelected === true){
			if (top === bottom){
				alert("MATCH!");
			} else {
				alert("MIS-MATCH!");
			}
		} else {
			alert("Please select a top and a bottom.");
		}
	}

	// 5- Runs checkMatch function onclick of #match button
	$("#match").click(checkMatch);
});
