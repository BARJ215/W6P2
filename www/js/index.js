<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

//If device launched, run 'onDeviceReady' function
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	//If app is resumed, run 'onResume' function
    document.addEventListener("resume", onResume, false);
    //If app is paused, run 'onPause' function
    document.addEventListener("pause", onPause, false);
	
	var hide = false;
	var tapped = false;
	var swiped = 0;
	
	getCurrent();
	loadCurrent();
}

$(document).on("pagecreate","#pageone",function(){

    
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
        hide = true;
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
        tapped = true;
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
        swiped = 1;
  	});
    
    $('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
        swiped = 2;
  	});  


});

function onPause(){
	saveCurrent();
}


function saveCurrent() {
    window.localStorage.setItem("hideKey",hide);
	window.localStorage.setItem("tapKey",tapped);
	window.localStorage.setItem("swipeKey",swiped);
}

function getCurrent(){
	hide=window.localStorage.getItem("hideKey");
	tapped=window.localStorage.getItem("tapKey");
	swiped=window.localStorage.getItem("swipeKey");
	
}

function loadCurrent(){
	if(hide==true){
		$('#tapholdtext').hide();		
	}
	if(tapped==true){
		$('#taptext').css('color','red');
	}
	switch(swiped){
		case 1:
			$('#swipetext').css('color','green')
			break;
		case 2:
			$('#swipetext').css('color','blue')
			break;
		default:
			break;
	}
}