import { isSp } from './sp';

export function remove() {

	////////////////////////////////////
	//  Search History Remove
	////////////////////////////////////

	$('.js-all-remove').click(function() {
        $('.history-list li').remove();
	});
	$('.js-single-remove').click(function() {
        $(this).parents('li').remove();
	});
}
