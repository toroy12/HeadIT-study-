$(document).ready(function() {
		var count = 0;
		var $div = $("#Div");
		var $div2 = $("#Div2");
		var $div3 = $("#Div3");

	$(".button1").click(function() {
		$("body").toggleClass('bg-black');
		count++;
		$(".result").html(count);
		});

	$("#btn").click(function() {
		if ($div.css("display") != "none") {
			$div.hide();
		} else {
			$div.show();
		}
	});	
		
	$("#btn2").click(function() {
		if ($div2.css("display") != "none") {
			$div2.hide();
		} else {
			$div2.show();
		}
	});
		
	$("#btn3").click(function() {
		if ($div3.css("display") != "none") {
			$div3.hide();
		} else {
			$div3.show();
		}
	});	
});