import { isSp } from './sp';

export function backtop() {

	////////////////////////////////////
	//  Back Top
	////////////////////////////////////

    $(".js-back-top").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".js-back-top").fadeIn("fast");
        } else {
            $(".js-back-top").fadeOut("fast");
        }
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var footHeight = $("footer").innerHeight(); //footerの高さ
        if($('.compare-list').length){
            var comparelistHeight = $(".compare-list").innerHeight();
        }else{
            var comparelistHeight = 0;
        }
        
        if ( scrollHeight - scrollPosition  <= footHeight - comparelistHeight ) {
            $(".js-back-top").css({
                "position":"absolute", 
                "bottom": footHeight + 40
            });
        } else { 
            $(".js-back-top").css({
                "position":"fixed",
                "bottom": comparelistHeight + 40 
            });
        }
    });
    $('.js-back-top').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
}
