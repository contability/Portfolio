$(function(){
	portFolioObj.init();
});

let portFolioObj = {

	TITLE : 'FURIUM\'s portFolio' ,
	
	selector : '#page_container',
	
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
		
		document.title = that.TITLE + ' v1.0';
		/*const target = document.querySelector(".target");
		const targetTop = target.getBoundingClientRect().top;
		window.scroll({
			top: targetTop,
			behavior:"smooth"
		});*/
		
		let skillImgs = $(".skill_imgs");
		for(let j = 0; j < skillImgs.length; j++){
			let imgs = $(skillImgs).eq(j).children("img");
			for(let i = 0; i < imgs.length; i++){
				if(i > 4){
					$(imgs[i]).css("left", -35 + ((i - 5) * 25) + "%");
					$(imgs[i]).css("top", 75 + "%");
				}else{
					$(imgs[i]).css("left", -35 + ( i * 25) + "%");
					$(imgs[i]).css("top", 45 + "%");
				}
			}
		}
		
		that.resizeHandler();
		that.initClip();
		that.textSetting();
		
	},
	
	textSetting : function(){
		let that = this;
		
		$(".content_text").eq(1).css('top', that.size.winHeight * 2);
		
		$(".content_text").eq(2).css('top', that.size.winHeight * 2.3);
		
		$(".content_text").eq(3).css('top', that.size.winHeight * 3);
		$(".content_text").eq(3).css('left', "87%");
		
		$(".content_text").eq(4).css('top', that.size.winHeight * 4);
		
		$(".content_text").eq(5).css('top', that.size.winHeight * 5);
		$(".content_text").eq(5).css('left', '10%');
		
		$(".content_text").eq(6).css('top', that.size.winHeight * 4.8);
		
		$(".content_text").eq(7).css('top', that.size.winHeight * 5.5);
		$(".content_text").eq(7).css('left', "87%");
		
		$(".content_text").eq(8).css('top', that.size.winHeight * 6);
		
		$(".content_text").eq(9).css('top', that.size.winHeight * 6.5);
		$(".content_text").eq(9).css('left', '18%');
	},
	
	initClip : function(){
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
		
		$(that.selector).height(that.size.winHeight * contentPage.length);
		
		that.size.pageHeight = $(that.selector).height();
		
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
		
		$(".orgFile_popup").click(function(){
			window.open($(this).attr("src"));
		});
	},
	
	scrollHandler : function(scrollTop){
		let that = this;
		
		let contentPage = $('.content_section');
		
		let pageCnt = parseInt(scrollTop / that.size.winHeight);
		
		let top = 0;
		let bottom = 0;
		
		if(scrollTop < that.size.winHeight){
			for(let i = 0; i < contentPage.length; i++){
				that.imgClip(contentPage[i], that.size.winHeight, that.size.winHeight);
			}
		}
		
		if(pageCnt == 2){
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[2], $(contentPage[pageCnt]).height() + top, bottom);
			
			$(contentPage[1]).height()
			reverseBottom = scrollTop - (that.size.winHeight * pageCnt); 
			that.imgClip(contentPage[1], 0, bottom - reverseBottom);
			that.imgClip(contentPage[0], 0, bottom - reverseBottom);
		}else if(pageCnt > 2 && pageCnt < 4){
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[pageCnt], $(contentPage[pageCnt]).height() + top, bottom);
		}else if(pageCnt == 4){
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[4], $(contentPage[pageCnt]).height() + top, bottom);
			
			$(contentPage[2]).height()
			reverseBottom = scrollTop - (that.size.winHeight * pageCnt); 
			that.imgClip(contentPage[2], 0, bottom - reverseBottom);
			that.imgClip(contentPage[3], 0, bottom - reverseBottom);
		}else if(pageCnt == 5){
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[5], $(contentPage[pageCnt]).height() + top, bottom);
			
			$(contentPage[4]).height()
			reverseBottom = scrollTop - (that.size.winHeight * pageCnt); 
			that.imgClip(contentPage[4], 0, bottom - reverseBottom);
		}else{
			top = (that.size.winHeight * pageCnt) - scrollTop;
			bottom = that.size.winHeight;
			that.imgClip(contentPage[pageCnt], $(contentPage[pageCnt]).height() + top, bottom);
		}
		
		console.log("window Height is : " + that.size.winHeight);
		console.log("scrollTop is : " + scrollTop);
		console.log("pageCnt is : " + pageCnt);
	},
	
	imgClip : function(selectSection, top, bottom){
		let secWidth = $(selectSection).width();
		
		$(selectSection).css("clip", "rect(" + top + ", " + secWidth + "," + bottom + ", 0)");
	}
};