$(function() {

	/* 将输入框设置placeholder行为 */
	yu.setPlaceholder($('.txt-input'));


	/* 弹出自定义alert */
	$('#btn-pop').click(function() {
		yu.popAlert('自定义alert的内容;更多更多的内容，，观察换行效果');
	});

	/* 初始化二级级联select，这时两级都没有值 */
	yu.selectUtil.initArea('');

	/* 当二级级联select的，一级有选中值时，动态生成二级 */
	$('#province').change(function() {
		var provinceVal = $(this).val();
		yu.selectUtil.changeProvince('', provinceVal);
	});

	/* 回显用户之前用户选择过的二级级联select，要查看后果请把以下删除以下语句注释 */
	yu.selectUtil.initArea('_1', '广东', '清远'); 
	$('#province_1').change(function() {
		var provinceVal = $(this).val();
		yu.selectUtil.changeProvince('_1', provinceVal);
	});	
});