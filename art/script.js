function showHide1 () {
	
	$("#poetryboxbottom1").toggle();
	
}

function showHide2 () {
	
	$("#poetryboxbottom2").toggle();
	
}


function showHide (id) {
	
	$(id).toggle();
	
}


function makeBig() {
    $("#bigpic").attr("src","style/item1/4.jpg");
}

function makeItBig(a) {
    $("#bigpic").attr("src","style/item1/"+a+".jpg");
}