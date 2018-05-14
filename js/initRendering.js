$(function(){
	var d = $('#container');
	d.fullpage({
		keyboardScrolling: false,
		scrollBar: false,
		fixedElements: 'footer,nav',
	});
	window.setTimeout(()=>{
		$('.loading').hide();
		d.fadeIn();
	}, 3000);
});