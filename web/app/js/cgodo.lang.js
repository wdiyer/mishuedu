/**
 * 基础包
 * @author 李义星
 */
/**
 * 字符串函数
 */
(function($) {
	/**
	 * 是空
	 */
	$.isBlank = function(str) {
		return (!str || $.trim(str) == "");
	};
	
	String.prototype.replaceAllString = function(reg, s1) {
		return this.replace(new RegExp(reg,"gm"),s1);
	};

	/**
	 * 不是空
	 */
	$.isNotBlank = function(str) {
		return !$.isBlank(str);
	};

	/**
	 * 搜索坐标
	 */
	$.indexOf = function(str, searchvalue) {
		if ($.isBlank(str)) {
			return -1;
		}

		if ($.isBlank(searchvalue)) {
			return -1;
		}

		return str.indexOf(searchvalue);
	};
	
	/**
	 * ###.###
	 * 000.00
	 * yyyy-MM-dd  HH:mm:ss
	 */
	$.format = function(obj, format) {
		if(!obj) {
			return '';
		}
		
		if(typeof(obj) == 'number') {
			
		}
	};
	
	/**
	 * "{},{},hehe".messageFormat("hello","world")=hello,word,hehe
	 */
	$.formatMessage = function() {
		if(arguments.length == 0) {
			return '';
		}
		
		var str = arguments[0];
		
		if ($.isBlank(str)) {
			return "";
		}
		
		if(arguments.length < 2) {
			return  str;
		}
		
		var strs = str.split('{}');
		
		//可变字符串变量数不一致
		if(strs.length != arguments.length) {
			return str;
		}
		
		var result = '';
		
		for(i = 0; i < strs.length; i++) {
			result = result + strs[i];
			
			if(i < strs.length - 1) {
				result = result + arguments[i+1] ;
			}
		}
		
		return result;
	};
})(jQuery);

/**
 * url函数
 */
(function($) {
	/**
	 * 添加问号
	 */
	$.addParamMark = function(url) {
		if ($.isBlank(url)) {
			return '?';
		} else {
			url = $.trim(url);

			if (url.indexOf('?') > -1) {
				return url;
			} else {
				return url + '?1=1';
			}
		}
	};

	/**
	 * 添加参数
	 */
	$.addParam = function(url, param,value) {
		if ($.isBlank(param)) {
			return url;
		}

		url = $.addParamMark(url);

		return url + '&' + param + '=' + value;
	};
})(jQuery);

/**
 * 是否手机
 */
var isMobile = function() {
	var mobilePattern = /mobile/i;
	var userAgent = navigator.userAgent;

	if ($.isBlank(userAgent)) {
		return false;
	}

	return mobilePattern.test(userAgent);
}();

var isIos = function() {
	var mobilePattern = /iPhone|iPad|iPod/i;
	var userAgent = navigator.userAgent;

	if ($.isBlank(userAgent)) {
		return false;
	}

	return mobilePattern.test(userAgent);
}();

var isAndroid = function() {
	var mobilePattern = /Android/i;
	var userAgent = navigator.userAgent;

	if ($.isBlank(userAgent)) {
		return false;
	}

	return mobilePattern.test(userAgent);
}();

/**
 * 是否微信
 */
var isWechat = function() {
	var userAgent = navigator.userAgent;

	return $.indexOf(userAgent, "MicroMessenger") > -1
}();

var LSD = LSD || {};

$(function() {
	LSD.LayoutPort = {
		width : document.body.getBoundingClientRect().width,
		height : document.body.getBoundingClientRect().height
	}

	LSD.ViewPort = {
		width : document.documentElement.clientWidth,
		height : document.documentElement.clientHeight
	}
})