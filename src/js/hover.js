import { isSp } from './sp';

export function hover() {

	////////////////////////////////////
	//  Hover
	////////////////////////////////////

	$('.js-hover').hover(
	    function() {
	    	var target = $(this).attr('hover-id');
	    	$('.overlay01').stop().fadeIn();
	    	$('#'+target).stop().fadeIn();
	    },
	    function() {
	    	var target = $(this).attr('hover-id');
	    	$('.overlay01').stop().fadeOut();
	    	$('.hover-block').stop().fadeOut();
	    }
	);

}
