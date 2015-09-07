$('#day1Button').click(function(){
	$('#day2Seg').css('display','none');
	$('#day11Seg').css('display','block');
	$('#day12Seg').css('display','block');
	$('#day13Seg').css('display','block');
});

$('#day2Button').click(function(){
	$('#day2Seg').css('display','block');
	$('#day11Seg').css('display','none');
	$('#day12Seg').css('display','none');
	$('#day13Seg').css('display','none');
});