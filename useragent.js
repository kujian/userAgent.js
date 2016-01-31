;(function (window, document, undefined){
	"use strict";

	var docEl = document.documentElement;

	var ua = navigator.userAgent;
	var na = navigator.appVersion;
	if(window.console && console.log){
		// console.log(ua);
		// console.log(na);
	}

	var util= {
		pfx:function(prop){
			var re = new RegExp(prop);
			return ua.match(re);
		}
	};
	function UserAgent(){}
	UserAgent.prototype = {
		constructor : UserAgent,

		// Test if userAgent is Windows
		windows : (function(){
			return !!util.pfx('Windows');
		})(),

		// Test if userAgent is Android
		android : (function(){
			return !!util.pfx('Android|Adr');
		})(),

		// Test if userAgent is iOS
		ios : (function(){
			return !!util.pfx(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		})(),

		iPhone : (function(){
			return !!util.pfx('iPhone');
		})(),

		iPad : (function(){
			return !!util.pfx('iPad');
		})(),

		// Test if userAgent is Linux
		linux : (function(){
			return !!util.pfx('Linux');
		})(),
		//opera内核
		presto : (function(){
			return !!util.pfx('Presto');
		})(),
		//IE内核
		trident : (function(){
			return !!util.pfx('Trident');
		})(),
		//苹果、谷歌内核
		webKit : (function(){
			return !!util.pfx('AppleWebKit');
		})(),

		// Test if userAgent is android
		mobile : (function(){
			return !!util.pfx(/AppleWebKit.*Mobile.*/);
		})(),

		// Test if userAgent is Chrome
		chrome : (function(){
			return !!util.pfx('Chrome');
		})(),

		// Test if userAgent is IE
		ie : (function(){
			return !!util.pfx('MSIE');
		})(),
		//微信
		weixin : (function(){
			return !!util.pfx('MicroMessenger');
		})(),
		//手机qq
		qq : (function(){
			return !!util.pfx('\sQQ');
		})(),
		//手机qq空间
		qzone : (function(){
			return !!util.pfx('Qzone');
		})(),
		//手机qq浏览器
		qqbrowser : (function(){
			return !!util.pfx('MQQBrowser');
		})(),
		//手机uc浏览器
		ucbrowser : (function(){
			return !!util.pfx('UCBrowser');
		})(),

		testAll : function() {
	      var classes = " js";
	      for (var test in this) {
	        if (test !== "testAll" && test !== "constructor" && this[test]) {
	          classes += " " + test;
	        }
	      }
	      docEl.className += classes.toLowerCase();
	    }

	};

	function expose(){
		var ftr = new UserAgent();
		return ftr;
	}
	window.useragent = expose();
}(window,document));
