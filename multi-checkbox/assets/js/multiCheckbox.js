$(function() {
	var $li = $('<li></li>').addClass('li-selected');
	var $liClose = $('<a></a>').addClass('li-selected-close');
	var $span = $('<span></span>');
	var selectedHtml = '';

	$li.append($liClose).append($span);

	// 总多选框点击显示下拉框
	$('.multi-checkbox').click(function() {
		$(this).children('.selectbox').show();
	})
	// 总多选框悬浮显示全部内容
	$(document).off('mouseover ', '.multi-checkbox').on('mouseover', '.multi-checkbox', function() {				
		if($('.multi-selected>li').size()>0){
			$('.panel-show').show();
		}

	}).off('mouseout', '.multi-checkbox').on('mouseout', '.multi-checkbox', function() {
		$('.panel-show').hide();
	})

	//下拉框的鼠标移入移出实现展示数据的刷新以及本身的显示隐藏
	$('.selectbox').hover(function() {
		$(this).show();
		$('.panel-show').hide();
		selectedHtml='';
	}, function() {
		$(this).hide();
		$('.multi-selected>li').each(function() {
			var _lidataid = $(this).attr('data-id');
			var _text = $.trim($(this).find('span').text());
			selectedHtml += '<span class="item" data-id="' + _lidataid +'">' + _text + '</span>';
		});

		$('.panel-show').html(selectedHtml);
	})

	// input框的变化实现数据的选择以及多出数据省略号的表现形式
	$('input').change(function(event) {					
		var tip = $(this).attr('id');
		var ctn = $(this).siblings('label').text();
		var $liClone = $li.clone().attr('data-id','sp_'+tip);
	
		if($(this).is(':checked')) {
			$('.multi-selected').append($liClone);
			$liClone.find('span').text(ctn);
		} else {
			$("li[data-id='sp_" + tip + "']").remove();
		}

		showEllipsis();
		event.stopPropagation();

	})

	// 动态加载的数据使用on添加事件
	$('.multi-selected').off('click', '.li-selected-close').on('click', '.li-selected-close', function(event) {
		$(this).parents('li').remove();
		var li_dataid = $(this).parent('li').attr('data-id');
		var ipt_id = li_dataid.slice(3);
		$('.selectbox').children('div').each(function() {
			if($(this).find('input').attr('id') == ipt_id) {
				$(this).find('input').attr('checked', false);
			}
		})
		
		$('.panel-show').children().each(function() {
			if($(this).attr('data-id') == li_dataid ){
				$(this).remove()
			}

		})
		
		showEllipsis();					
		event.stopPropagation();
	});

});

// 超出多选框数据用省略号的表现形式
function showEllipsis(){
	var choseWidth = parseInt($('.multi-selected').outerWidth());
	var lilen = 0;
	$('.multi-selected').find('li').each(function(){
		lilen += parseInt($(this).outerWidth(true));
	});
	if(lilen > choseWidth) {
		if($('.multi-checkbox .ellipsis').size() == 0) {
			$('.multi-checkbox').append('<span class="ellipsis">...</span>');
		}
		$('.multi-checkbox .ellipsis').show();

	} else {
		if($('.multi-checkbox .ellipsis').size() > 0) {
			$('.multi-checkbox .ellipsis').hide();
		}
	}
}