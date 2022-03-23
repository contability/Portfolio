$(function(){
	portFolioObj.init();
});

let portFolioObj = {

	TITLE : '포트폴리오',
	
	selector : '#page_wrap',
	
	init : function(){
		let that = this;
		
		that.initUi();
		that.bindEvents();
	},
	
	initUi : function(){
		//let that = this;
		
		let contentPage = $('.content_page');
		
		let pageHeight = $(window).height();
		let pageWidth = $(window).width();
		
		for(let i = 0; i < contentPage.length; i++){
			//contentPage[i].style.position = 'absolute';
			contentPage[i].style.width = pageWidth;
			contentPage[i].style.height = pageHeight / contentPage.length;
		}
	},
	
	bindEvents : function(){
		//let that = this;
		
		
	}
};