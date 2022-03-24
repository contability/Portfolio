$(function(){
	portFolioObj.init();
});

let portFolioObj = {

	TITLE : '포트폴리오',
	
	selector : '#page_wrap',
	
	size : {
		winHeight : null,
		pageHeight : null
		
	},
	
	init : function(){
		let that = this;
		
		that.initUi();
		that.bindEvents();
	},
	
	initUi : function(){
		let that = this;
		
		that.resizeHandler();
		that.initClip();
	},
	
	initClip : function(){
		//let sections = $(".content_section:not(:eq(0))");
		let sections = $(".content_section");
		
		for(let i = 1; i < sections.length; i++){
			let sectionTag = sections[i];
			let secHeight = $(sectionTag).height();
			let secWidth = $(sectionTag).width();
			
			$(sections).css("clip", "rect(" + secHeight + ", " + secWidth + "," + secHeight + ", 0)");
		}
	},
	
	resizeHandler : function(){
		let that = this;
		
		that.size.winHeight = $(window).height(); 
		let contentPage = $('section');
		
		$("#page_container").height(that.size.winHeight * contentPage.length);
		
		that.size.pageHeight = $("#page_container").height();
		
		for(let i = 0; i < contentPage.length; i++){
			contentPage[i].style.height = that.size.pageHeight / contentPage.length;
		}
	},
	
	bindEvents : function(){
		let that = this;
		
		$(window).resize(function(){
			that.resizeHandler();
		});
		
		$(window).scroll(function(){
			that.scrollHandler($(this).scrollTop());
		});
	},
	
	scrollHandler : function(scrollTop){
		let that = this;
		
		// 섹션들
		let contentPage = $('.content_section');
		
		// 스크롤 위치 / 윈도우 = 몇번째 동작을 취해야 하는지
		let pageCnt = parseInt(scrollTop / that.size.winHeight);
		
		let top = 0;
		let bottom = 0;
		
		// 해당 섹션의 이미지
		//let selectImg = $(contentPage[sectionCnt]).find("img");
		if(scrollTop < that.size.winHeight){
			for(let i = 0; i < contentPage.length; i++){
				that.imgClip(contentPage[i], that.size.winHeight, that.size.winHeight);
			}
		}
		
		//if(pageCnt != 0){
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[pageCnt], $(contentPage[pageCnt]).height() + top, bottom);
		//}
		
		console.log(pageCnt);
		//that.imgClip(selectImg, top, bottom);
	},
	
	imgClip : function(selectSection, top, bottom){
		//let secHeight = $(selectSection).height();
		let secWidth = $(selectSection).width();
		
		$(selectSection).css("clip", "rect(" + top + ", " + secWidth + "," + bottom + ", 0)");
	}
};