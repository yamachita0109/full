$(function(){
	var json = sampleJson.map((v, i) => {
		let page = (i + 2);
		v.page = page + '-0';
		v.nextPage = page + '-1';
		v.style = {
			'color': v.fontColor,
			'background-color': v.color
		};
		v.lists = v.lists.map((listV, listI) => {
			let key = page + '-' + listI;
			listV.key = key;
			listV.q = '質問' + (listI + 1) + '.' + listV.q;
			listV.beforePage = page + '-' + listI;
			listV.nextPage = page + '-' + (listI + 2);
			listV.as = listV.as.map((aV, aI) => {
				aV.key = key + '-' + aI;
				return aV;
			});
			return listV;
		});
		return v;
	});

	new Vue({
		el: '#view-group',
		data: {items: json}
	});
});