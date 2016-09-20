$(document).ready(function () {
	$('#menu_area').find('li').click(function (){
		$('li').removeClass('active');
		$(this).addClass('active');
		var content = $(this).html();
		$('#render_title').html(content);
	})
	
});