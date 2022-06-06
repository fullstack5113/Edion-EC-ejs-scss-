export function inquiry() {

    ////////////////////////////////////
    //  Chat button
    ////////////////////////////////////

    $(window).on("load scroll", function() {
        var winWidth = $(document).width();
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var footHeight = $("footer").innerHeight(); //footerの高さ
        
        if ( winWidth > 767){
            if ( scrollHeight - scrollPosition  <= footHeight ) {
                $(".js-inquiry-chat").css({
                    "position":"absolute", 
                    "bottom": footHeight + 132
                });
            } else { 
                $(".js-inquiry-chat").css({
                    "position":"fixed",
                    "bottom": 132 
                });
            }
        }
    });
    
}
