export function fcMenu() {
    $('.js-fc-menu-btn').click(function() {
        $(this).addClass('active');
        $('.js-fc-menu-wrap').addClass('active');
    });
    $('.js-fc-menu-overlay').click(function() {
        $('.js-fc-menu-btn').removeClass('active');
        $('.js-fc-menu-wrap').removeClass('active');
    });
}
