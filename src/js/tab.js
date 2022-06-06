import { isSp } from './sp';

export function tab() {

	////////////////////////////////////
	//  Tab
	////////////////////////////////////
    if ($(window).width() > 767) {
        $('.tabs-wrapper').each(function() {
            let ths = $(this);
            ths.find('.tab-item').not(':first').hide();
            ths.find('.tab').click(function() {
                ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    }
    $('.tabs-wrapper-all').each(function() {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function() {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });
}
