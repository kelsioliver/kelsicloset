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

		topSelected = true;
	});

	$("#choose-2").click(function(){
		bottom = $(".box2").find(".is-selected").attr("data-clothing");
		
		bottomSelected = true;
	});

	$("#match").click(checkMatch)

	function checkMatch(){
		if (topSelected === true && bottomSelected === true){
			if (top === bottom){
				alert("MATCH!")
			} else {
				alert("MIS-MATCH!")
			}

		} else {
			alert("Please select a top and a bottom.")
		}

	} 
})