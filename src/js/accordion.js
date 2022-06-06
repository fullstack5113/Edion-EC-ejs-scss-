import { isSp } from './sp';

export function accordion() {

	////////////////////////////////////
	//  accordion
	////////////////////////////////////

	$('.js-accordion-btn').click(function() {
		$(this).next().slideToggle('');
		$(this).toggleClass('is-active');
	});

	$('.js-accordion-btn-more').click(function() {
		$(this).prev().slideToggle('');
		$(this).toggleClass('is-active');
	});

}
