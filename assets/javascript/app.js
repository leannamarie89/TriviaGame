$(document.ready(function(){
	$("start").click(function(){

		var number = 60;

		$("#start").on("click", start);
		$("#done").on("click", done);

		function start(){
			clock = setInterval(timer, 1000);
		}

	function clock(){
		number-- 
		$('#clock').html();
		if (clock === 0) {
			done();

	}
