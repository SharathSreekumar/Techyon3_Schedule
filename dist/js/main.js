

//$('#day1Seg').css('display','block');
//$('#day2Seg').css('display','none');

/*$('#day1Button').click(function(){
	$('#day2Seg').css('display','none');
	$('#day1Seg').css('display','block');
	$('#day1Button').css('background-color','white');
	$('#day1Text').css('color','black');
	$('#day2Text').css('color','white');
	$('#day2Button').css('background-color','transparent');
});*/

$('#day1Button').click(function(){
	$('#day2Seg').hide('slow');
	$('#day11Seg').show('slow');
	$('#day12Seg').show('slow');
	$('#day13Seg').show('slow');
	$('#day1Text').css('color','black');
	$('#day2Text').css('color','white');
	//$('#day1Button').css('background-color','white');
	//$('#day2Button').css('background-color','transparent');
	$('#day1Button').addClass('select');
	$('#day2Button').removeClass('select');
});

$('#day2Button').click(function(){
	//$('#day2Seg').css('display','block');
	//$('#day11Seg').css('display','none');
	//$('#day12Seg').css('display','none');
	//$('#day13Seg').css('display','none');
	$('#day1Text').css('color','white');
	$('#day2Text').css('color','black');
	//$('#day1Button').css('background-color','transparent');
	//$('#day2Button').css('background-color','white');
	$('#day1Button').removeClass('select');
	$('#day2Button').addClass('select');
	$('#day11Seg').hide('slow');
	$('#day12Seg').hide('slow');
	$('#day13Seg').hide('slow');
	$('#day2Seg').show('slow');
});
/*$('#day2Button').click(function(){
	$('#day2Seg').css('display','block');
	$('#day1Seg').css('display','none');
	$('#day1Text').css('color','white');
	$('#day2Text').css('color','black');
	$('#day1Button').css('background-color','transparent');
	$('#day2Button').css('background-color','white');
});*/



/*$('#day2Button').click(function(){
	$('#day11Seg').css('display','block');
	$('#day12Seg').css('display','block');
	$('#day13Seg').css('display','block');
	$('#day21Seg').css('display','none');
	$('#day22Seg').css('display','none');
	$('#day23Seg').css('display','none');
});

/*function load(){
	document.getElementById('day2Seg').disabled =true;
}

function clickDay2(){
	document.getElementById('day2Seg').display =true;
	document.getElementById('day1Seg').disabled =true;
}

function clickDay1(){
	document.getElementById('day1Seg').display =true;
	document.getElementById('day2Seg').disabled =true;
}*/