$(function(){
	portFolioObj.init();
});

let portFolioObj = {

	TITLE : 'FURIUM\'s portFolio' ,
	
	selector : '#page_container',
	
	size : {
		winHeight : null,
		pageHeight : null,
		winWidth : null
	},
	
	pageCnt : null,
	
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
			let imgs = $(skillImgs).eq(j).find("img");
			for(let i = 0; i < imgs.length; i++){
				if(i < 3){
					$(imgs[i]).css("left", -35 + "%");
					$(imgs[i]).css("top", 45 + ( i * 17) + "%");
				}else{
					$(imgs[i]).css("left", 10 + "%");
					$(imgs[i]).css("top", 45 + ( (i - 3) * 17) + "%");
				}
			}
			let prgrs = $(skillImgs).eq(1).find(".progress-bar");
			for(let i = 0; i < prgrs.length; i++){
				if(i < 3){
					$(prgrs[i]).css("left", 18 + "%");
					$(prgrs[i]).css("top", 49 + ( i * 17) + "%");
				}else{
					$(prgrs[i]).css("left", 65 + "%");
					$(prgrs[i]).css("top", 49 + ( (i - 3) * 17) + "%");
				}
			}
		}
		
		that.resizeHandler();
		that.initClip();
		that.textSetting();
		that.projectImgSetting();
		
		let menuNavs = $('.menu_nav');
		
		for(let i = 0; i < menuNavs.length; i++){
			let left = 20 + (i * 13.33);
			$(menuNavs[i]).css('left', left + '%');
		}
		
		$("body").css('overflow-x','hidden');
		
		$("#menu_main > div").addClass("c_yelloding");
		$("#menu_main > div").css("display", "relative");
		$("#menu_main").css("width", "0%");
		$("#menu_main > div").css("width", "100%");
		$("#menu_main > div").css("height", that.size.winHeight * 2);
		
		$('#top_arrows').parent().css('height', '1%');
		$('#top_arrows').parent().css('left', '42%');
		
		$('#menu_main').hide();
		
	},
	
	projectImgSetting : function(){
		let that = this;
		
		let projectImgs = $('.project_imgs');
		
		let top = 29;
		let left = 39;
		
		let addLeft = 32;
		
		for(let i = 0; i < projectImgs.length; i++){
			
			switch(i){
				case 0:
					$(projectImgs[i]).css('left', '42%');
					$(projectImgs[i]).css('top', '29%');
				break;
				case 1:
					$(projectImgs[i]).css('left', '71%');
					$(projectImgs[i]).css('top', '29%');
				break;
				case 2:
					$(projectImgs[i]).css('left', '13%');
					$(projectImgs[i]).css('top', '62%');
				break;
				case 3:
					$(projectImgs[i]).css('left', '42%');
					$(projectImgs[i]).css('top', '62%');
				break;
				case 4:
					$(projectImgs[i]).css('left', '71%');
					$(projectImgs[i]).css('top', '62%');
				break;
			}
		}
	},
	
	textSetting : function(){
		let that = this;
		
		$(".content_text").eq(1).css('top', that.size.winHeight * 2);
		
		$(".content_text").eq(2).css('top', that.size.winHeight * 2.45);
		
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
		
		$(".content_text").eq(10).css('top', that.size.winHeight * 7);
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
		that.size.winWidth = $(window).width();
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
		
		$('#a_menu').click(function(){
			$('#content_main').hide();
			$('#menu_main').show();
			$('#menu_main > div').hide();
			
			$('#menu_main').animate({
				width : that.size.winWidth + 200,
				height : that.size.winHeight + 200
			},700,function(){
				$('#menu_main > div').show();
			});
			
			$("body").css('overflow-y','hidden');
			
			that.scrollToTop();
		});
		
		$('#a_close').click(function(){
			$('#menu_main > div').hide();
			
			$('#menu_main').animate({
				width : that.size.winWidth * 0.88
			},500,function(){
				$('#content_main').show();
				$('#menu_main').hide();
			});
			
			$("body").css('overflow-y','auto');
		});
		
		$('.menu_nav').hover(function(){
			$(this).css('cursor', 'pointer');
		});
		
		$('.menu_nav').click(function(){
			that.linkNav($(this));
		});
		
		$('#a_close').hover(function(){
			$(this).css('cursor', 'pointer');
		});
		
		$('#top_arrows').click(function(){
			that.scrollToTop();
		});
		
		$('.link_img').click(function(){
			that.popupLink($(this).parent().attr("id"));
		});
		
		$('.project_imgs').click(function(){
			let imgTag = $(this).children().children();
			that.orgImgsOpen(imgTag);
		});
	},
	
	orgImgsOpen : function(imgTag){
		
		let location = $(imgTag).attr('src');
		
		window.open(location);
		
		
	},
	
	popupLink : function(serviceId){
		let that = this;
		
		let url = '';
		
		if(serviceId == "github"){
			url = "https://github.com/contability";
		}else{
			url = "https://open.kakao.com/o/sMNmzS7d";
		}
		
		window.open(url);
	},
	
	linkNav : function(menu){
		let that = this
		
		let scrVal = $(menu).attr('scroll-value');
		
		$('#menu_main > div').hide();
			
		$('#menu_main').animate({
			width : that.size.winWidth * 0.88
		},500,function(){
			$('#content_main').show();
			$('#menu_main').hide();
			$("body").css('overflow-y','auto');
			window.scrollTo(0, that.size.winHeight * scrVal);
		});
		
	},
	
	scrollToTop : function(){
		
		let scrTp = $(window).scrollTop();
		
		let duration = scrTp/120000;
		
		for(let i = scrTp; i > -1; i--){
			setTimeout(function(){
				window.scrollTo(0, i)
			}, duration);
		}
		
	},
	
	scrollHandler : function(scrollTop){
		let that = this;
		
		let contentPage = $('.content_section');
		
		let pageCnt = parseInt(scrollTop / that.size.winHeight);
		that.pageCnt = pageCnt;
		
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
			
			$('.progress-bar').addClass('progress-ani');
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
		
		if(scrollTop > that.size.pageHeight - that.size.winHeight){
			$(".content_text").eq(8).hide();
		}else{
			$(".content_text").eq(8).show();
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