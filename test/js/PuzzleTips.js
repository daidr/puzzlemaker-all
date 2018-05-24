var PuzzleTips = {
	c: {
		//配置项
		x: 20, //x偏移量,相对于鼠标
		y: 20, //y偏移量,相对于鼠标

		style: {
			'position': 'fixed',
			'padding': '8px 12px',
			'color': '#fff',
			'border-radius': '5px',
			'font-family': "微软雅黑",
			'z-index': '999',
			'display': 'inline',
			'font-size': '14px',
			'background-color': 'rgba(0, 0, 0, 0.5)',
			'color': '#fff',
			'z-index': '1070',
			'line-height': '1.42857143'

		}
	},
	//show方法，用于显示提示

	s: function (em, text, a, b) {
		var style;
		var fun;

		if (typeof (a) == 'string') {
			style = a;
			fun = b;
		} else if (typeof (a) == 'function') {
			style = b;
			fun = a;
		}

		if (style == 'undefined' || style == null) {
			style = 'default';
		}

		var doc = $('<div></div>').addClass('PuzzleTips PuzzleTips-' + style).html(text).appendTo(em);

		if (doc.css('z-index') !== '5000') {
			doc.css(this.c.style);
		}

		em.on('mousemove', function (e) {
			doc.offset({
				top: e.pageY + PuzzleTips.c.x,
				left: e.pageX + PuzzleTips.c.y
			})
		});

		if (fun != null && typeof (fun) != 'undefined') {
			fun();
		}

	},

	//hide方法，用于隐藏和删除提示
	h: function (fun) {

		$('.PuzzleTips').remove();
		if (fun != 'undefined' && fun != null) {
			fun();
		}

	},

	//用于给相关属性添加提示功能
	m: function () {

		$(document).on('mouseover', '[data-puzzletips]', function (e) {
			//鼠标进入

			PuzzleTips.s($(this), $(this).attr('data-puzzletips'), $(this).attr('data-puzzletips-style'));
			$(".PuzzleTips").offset({
				top: e.pageY + PuzzleTips.c.x,
				left: e.pageX + PuzzleTips.c.y
			})
		});
		$(document).on('mouseout', '[data-puzzletips]', function (e) {
			//鼠标离开
			PuzzleTips.h();
		});

	}

}
PuzzleTips.m(); //通过此函数激活所有的