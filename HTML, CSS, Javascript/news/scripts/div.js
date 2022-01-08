$(document).ready(function() {
	var $btn = $("#button1");
	var $bg = $("#body");

	$btn.click(function() {
		$bg.style.$("#bg-black");
	});
});

	var button = document.getElementById('btn');
	button.addEventListener('click', function() {
	var con = document.getElementById('Div');
if (con.style.display=='none') {
	con.style.display = 'block';
} else {
	con.style.display = 'none';
}
});

	var button = document.getElementById('btn2');
	button.addEventListener('click', function() {
	var con = document.getElementById('Div2');
if (con.style.display=='none') {
	con.style.display = 'block';
} else {
	con.style.display = 'none';
}
});

	var button = document.getElementById('btn3');
	button.addEventListener('click', function() {
	var con = document.getElementById('Div3');
if (con.style.display=='none') {
	con.style.display = 'block';
} else {
	con.style.display = 'none';
}
});

var count = 0;
var cnt = document.querySelector('.result')

btn.onclick = function() {
	count++;
	cnt.innerHTML = count;
}



