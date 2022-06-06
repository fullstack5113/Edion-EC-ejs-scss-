export function account() {
    
    $('.js-account-news-tab').click(function(){
        $(this).siblings('.js-account-news-tab').removeClass('active');
        $(this).addClass('active');
        var t_data =  $(this).data('id');
        var t_class = '.' + t_data;
        $(this).parent('.account-news-tab').next('.js-account-news-tab-content').children('.tab-item').hide();
        $(this).parent('.account-news-tab').next('.js-account-news-tab-content').children(t_class).show();
    });
   
   $('.js-designlist-btn').click(function(){
        $('.js-designlist').slideToggle(400);
        $(this).toggleClass('active');
   });
   
   $('.js-sidebar-ttl').click(function(){
        $(this).next('.js-sidebar-category-list').slideToggle(400);
        $(this).toggleClass('active');
    });
}
