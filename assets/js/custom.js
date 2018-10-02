/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	"use strict";
		
	var ww = $(window).width();
	var mbsrc;
	
	$(document).ready(function() {
		
		/*var ww = $(window).width();
		$(".navbar-brand svg").css("left", (ww-$(".navbar-brand svg").width())/2);
		$(".navbar-brand + svg").css("left", (ww-$(".navbar-brand + svg").width())/2);
		var wh = $(window).height();
		var sh = $(".navbar-brand svg").height()+$(".navbar-brand + svg").height()+100;
		$(".navbar-brand svg").css("top", (wh-sh)/2);
		$(".navbar-brand + svg").css("top", ((wh-sh)/2)+$(".navbar-brand svg").height()+100);
		setTimeout(function(){ $("body").addClass("aftercenter"); }, 300);
		setTimeout(function(){ $("body").addClass("afterload"); }, 4000);*/
		
		var mbid, lang;
		
		if(ww < 580){
			$.each($("#mainbanner img"), function() { 
				mbid = $(this).attr("id");
				lang = "-" + $("body").attr("id");
				mbsrc = 'assets/img/mobile-'+mbid+lang+'.jpg';
				$(this).attr("src", mbsrc);
			});
			
			$("#mainbanner").addClass("mobile-banner");
		}
		else{
			$.each($("#mainbanner img"), function() { 
				mbid = $(this).attr("id");
				lang = "-" + $("body").attr("id");
				mbsrc = 'assets/img/desktop-'+mbid+lang+'.jpg';
				$(this).attr("src", mbsrc);
			});
			$("#mainbanner").addClass("desktop-banner");
		}
		
		var txt = $( ".step-active p" ).html();
		$('.step-text').html(txt);
		
		if(ww < 1183){
			setTimeout(function(){ 
				var maxHeight = Math.max.apply(null, $("div.feature-item").map(function ()
				{
					return $(this).height();
				}).get());
				
				$.each($(".feature-item"), function() { 
					$(this).css("height", maxHeight, 'important');
				});
			}, 1000);
		}
		
		
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 500,
                //duration of the top scrolling animation (in ms)
                scroll_top_duration = 700,
                //grab the "back to top" link
                $back_to_top = $('.cd-top');

        ($(this).scrollTop() > offset) ? $back_to_top.fadeIn(500) : $back_to_top.fadeOut(500);

        //hide or show the "back to top" link
        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.fadeIn(500) : $back_to_top.fadeOut(500);
        });

        //smooth scroll to top
        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({scrollTop: 0, }, scroll_top_duration);
        });
		
		$('#youtube').on('hidden.bs.modal', function (e) {
			$('.videoWrapper iframe').attr("src", "");
		});
		
        var value = $(this).scrollTop();
        if (value > 50){
            $(".navbar-fixed-top").removeClass("nav-trans");
			$(".navbar-fixed-top").addClass("nav-solid");
		}
        else{
            $(".navbar-fixed-top").addClass("nav-trans");
			$(".navbar-fixed-top").removeClass("nav-solid");
		}
	});
	
	$('.step-item').on('click', function() {
		var id = $(this).attr('id').replace("step", "");
		var idactive = $('.step-active').attr('id').replace("step", "");
		var alt = $(this).attr("data-alt");
		var src = $('.step-image').attr("src");
		var newsrc = src.replace(idactive, id);
		$(".step-image").attr("alt", alt);
		$(".step-image").attr("src", newsrc);
        $(".step-item").removeClass("step-active");
		$(".step-item").removeClass("step-blue");
		
		$(this).addClass("step-active");
		var txt = $( ".step-active p" ).html();
		$('.step-text').html(txt);
		
		var i;
		for(i=0;i<=parseInt(id);i++){
			$('#step'+i).addClass("step-blue");
		}
	});
	
	$(window).on('resize', function () {
		ww = $(window).width();
		
		if(ww < 1183){
			setTimeout(function(){ 
				$(".feature-item").css("height", "auto");
				var maxHeight = Math.max.apply(null, $("div.feature-item").map(function ()
				{
					return $(this).height();
				}).get());
				
				$.each($(".feature-item"), function() { 
					$(this).css("height", maxHeight);
				});
			}, 2000);
		}
	});
	
	$(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 50){
            $(".navbar-fixed-top").removeClass("nav-trans");
			$(".navbar-fixed-top").addClass("nav-solid");
			
		}
        else{
            $(".navbar-fixed-top").addClass("nav-trans");
			$(".navbar-fixed-top").removeClass("nav-solid");
		}
    });
	
	$(document).on("click", "#myneo a", function () {
		var owl = $('.owl-carousel.owl-carousel3');
		owl.trigger('stop.owl.autoplay');
		var videoId = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1";
		$(".videoWrapper iframe").attr("src", videoId);
	});
	
	$(document).on("click", "#feature a", function () {
		var owl = $('.owl-carousel.owl-carousel2');
		owl.trigger('stop.owl.autoplay');
		var videoId = "https://www.youtube.com/embed/" + $(this).data('id');
		$(".videoWrapper iframe").attr("src", videoId);
	});
	
	$('#youtube').on('hidden.bs.modal', function () {
		var owl = $('.owl-carousel.owl-carousel2');
		owl.trigger('play.owl.autoplay',[7000]);
		var owl = $('.owl-carousel.owl-carousel3');
		owl.trigger('play.owl.autoplay',[4000]);
	})
	
	
	
	
})(window.jQuery);