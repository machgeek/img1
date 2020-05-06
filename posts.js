$('.post-wrapper').click(function(){
	$('.post-inner', this).toggleClass('open').children('.text').slideToggle(500);
});
