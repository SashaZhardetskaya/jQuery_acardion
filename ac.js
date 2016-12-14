$(document).ready(function(){
	$('.acc .acc-header').on('click', function(){
		//next()  получает след-й за текущим элемент
		//prev()  получает пред-й за текущим элемент
		$('.acc .acc-header').not(this).next().slideUp(700);
		$(this).next().slideToggle(1000);
		$('.acc .acc-header').not(this).css('background','cadetblue');
		$(this).css('background','red');
	});
});