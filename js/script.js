
// menu explaination hover

$(document).ready(function() {

	$(".btn--menu").mouseover(function() {
		$(".btn--menu--hover").fadeIn(300);
	});

	$(".btn--menu").mouseout(function() {
		$(".btn--menu--hover").fadeOut(300);
	});

});