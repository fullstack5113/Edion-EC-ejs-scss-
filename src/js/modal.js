import { isSp } from './sp';

export function modal() {
    const bp = 767;
	////////////////////////////////////
	//  modal
	////////////////////////////////////

	// 全ページ共通
	$('.js-modal').click(function() {
    	var target = $(this).attr('modal-id');
        $('.overlay02').stop().fadeIn();
        $('#'+target).stop().fadeIn();
        $('body').css('overflow', 'hidden');
	});

	$('.js-close,.overlay02').click(function() {
		console.log('テスト');
        $('.overlay02').stop().fadeOut();
        $('.modal-block').fadeOut();
        $('body').css('overflow', 'auto');
	});


	// 注文01
	$('.js-modal-order01').click(function() {
        const w = window.innerWidth;
    	var target = $(this).attr('modal-id');

        if(bp < w ) {
            $('.overlay02').stop().fadeIn();
        }

        $('#'+target).stop().fadeIn();
        $('body').css('overflow', 'hidden');
	});
}
