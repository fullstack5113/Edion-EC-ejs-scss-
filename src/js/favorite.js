export function favorite() {

	////////////////////////////////////
	//  お気に入りボタン
	////////////////////////////////////

	$('.js-add-favorite').click(
	    function() {
	    	$(this).toggleClass('is-active');
	    },
	);

}
