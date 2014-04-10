/**
 * 常规函数
 * 命名空间为yu
 */

var yu = {};

/**
 * 将表单元素模拟html5的placeholder变现
 * @param {jqObject} 需要setPlaceholder的jq对象
 */
yu.setPlaceholder = function($el) {
	$el.each(function() {
		$(this).focus(function() {
			if($(this).val() == this.defaultValue) {
				$(this).val('');
			}
		}).blur(function() {
			if($(this).val() == '') {
				$(this).val(this.defaultValue);
			}
		});
	});
}

/**
 * 自定义alert,代替默认的alert层；且改alert垂直和水平居中显示，样式已在css中定义;并带有遮罩层和关闭按钮
 * @param {str} 提示的内容
 */
yu.popAlert = function(content) {
	var str = '<div class="cont">' + content + '</div><a href="#" id="close">x</a>';
	var myAlert = document.createElement('div');
	myAlert.id = 'myAlert';
	myAlert.innerHTML = str;

	yu.addMask();
	$('body').append(myAlert);
	$('#close').click(function() {
		$(this).parent().remove();
		$('#mask').remove();
		return false;
	});
}

/**
 * 弹出已存在于文档中的层；样式在css定义
 * @param {jqObject} 需要弹出的文档中已存在的jq对象
 */
yu.popExistingLayer = function($el) {
	$el.show();
	yu.addMask();
}

/**
 * 关闭existing layer；样式在css定义
 * @param {jqObject} 需要关闭的弹层
 */
yu.closeExistingLayer = function($el) {
	$el.hide();
	$('#mask').remove();
}

/**
 * 弹出遮罩层 
 */
yu.addMask = function() {
	var mask = document.createElement('div');
	mask.id = 'mask';
	$('body').append(mask);
}