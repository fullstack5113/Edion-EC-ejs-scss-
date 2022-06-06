import { isSp } from './sp';

export function scroll() {

	////////////////////////////////////
	//  Smooth Scroll
	////////////////////////////////////

	$(function(){
	  $('a[href^="#"]').click(function(){
	    var adjust = 0;
	    var speed = 400;
	    var href= $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top + adjust;
	    $('body,html').animate({scrollTop:position}, speed, 'swing');
	    return false;
	  });
	});
    
    ////////////////////////////////////
    //  Table Scroll
    ////////////////////////////////////
    
    $('#js-compare-wrap-arrow').click(function(){
        var win_w = $(window).width();
        var cell_w;
        if (win_w < 768) {
            cell_w = 225;
        }else{
            cell_w = 316;
        }
        var table_pos = $('#js-compare-wrap').scrollLeft();
        table_pos = table_pos / cell_w + 1;
        table_pos = Math.floor(table_pos);
        if (win_w < 768) {
            var target_pos = table_pos * cell_w;
        }else{
            var target_pos = table_pos * cell_w + 34;
        }
        
        $('#js-compare-wrap').animate({
            scrollLeft: target_pos
        }, 400, 'swing');
    });
}
