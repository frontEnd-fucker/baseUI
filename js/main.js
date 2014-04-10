$(function() {

	/* 将输入框设置placeholder行为 */
	yu.setPlaceholder($('.txt-input'));


	/* 弹出自定义alert */
	$('#btn-pop').click(function() {
		yu.popAlert('自定义alert的内容;更多更多的内容，，观察换行效果');
	});
});