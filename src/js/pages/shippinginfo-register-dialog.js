export function shippinginfoRegisterDialog() {
    $('.js-shippinginfo-searchtype input[name=search_type]').click(function() {
        $('.js-form-block').hide();
        var $result = $('.js-result > div');
        $result.show();
        if($.trim($result.text())!=''){
            $('.js-result').removeClass('empty');
        }

        if ($('input[name=search_type]:eq(0)').prop('checked')) {
            $('.js-form-block01').show();
        }
        if ($('input[name=search_type]:eq(1)').prop('checked')) {
            $('.js-form-block02').show();
        }
        if ($('input[name=search_type]:eq(2)').prop('checked')) {
            $('.js-form-block03').show();
            $('.js-result').addClass('empty');
            $('.js-result > div').hide();
        }
        if ($('input[name=search_type]:eq(3)').prop('checked')) {
            $('.js-form-block04').show();
        }
    });
    
}
