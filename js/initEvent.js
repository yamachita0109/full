// TODO リファクタリング 汚い。。。
$(function(){
	$('.go-btn')
	.on('click', (e)=>{
		let p = $(e.currentTarget).data('page').split('-');
		$.fn.fullpage.moveTo(p[0], p[1]);
	});

	$('.result-btn')
	.on('click', (e)=>{
		try {
			let p = $(e.currentTarget)
			p.closest('.before-result').hide();
			var point = p.closest('.section').find('input[type=radio]:checked')
				.map((i, d)=>{return Number($(d).val());}).get().reduce((a,b)=>{return a + b;});
			var key = p.closest('.section').data('key');
			var pointList = pointJson.filter((o, i)=>{return o.key === key;})[0].points;
			var filterMax = Math.max(...pointList.filter((o, i)=>{return o.point <= point;})
				.map((o, i)=>{return o.point;}));
			var text = pointList.filter((o, i)=>{return o.point === filterMax;})[0].text;

			p.closest('.content').find('.result').fadeIn();

		} catch (e) {
			console.error(e);
		}
	});
});