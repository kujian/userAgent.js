;(function (window, document, undefined){
	"use strict";

	var docEl = document.documentElement;

	var ua = navigator.userAgent;

	var util= {
		pfx:function(prop){
			return ua.match(prop,'i');
		}
	};
	function UserAgent(){}
	UserAgent.prototype = {
		constructor : UserAgent,

		// Test if userAgent is android
		windows : (function(){
			return !!util.pfx('Windows');
		})(),

		// Test if userAgent is android
		android : (function(){
			return !!util.pfx('Android');
		})(),
		// Test if userAgent is android
		chrome : (function(){
			return !!util.pfx('Chrome');
		})(),

		weixin : (function(){
			return !!util.pfx('MicroMessenger');
		})(),

		qq : (function(){
			return !!util.pfx('\sQQ');
		})(),

		qzone : (function(){
			return !!util.pfx('Qzone');
		})(),

	};

	function expose(){
		var ftr = new UserAgent();
		return ftr;
	}
	window.useragent = expose();
}(window,document));
