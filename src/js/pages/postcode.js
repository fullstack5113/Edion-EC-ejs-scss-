export function postcode() {
    
    var text1 = '郵便番号で住所を検索できます。';
    var text2 = '市区町村で住所を検索できます。';
    
    $('.js-postcode-searchtype input[name=search_type]').click(function() {
        $('.js-form-block').hide();
        if ($('input[name=search_type]:eq(0)').prop('checked')) {
            $('.js-form-block01').show();
            $('.js-form-result').show();
            $('.js-postcode-subtext').text(text1);
        }
        if ($('input[name=search_type]:eq(1)').prop('checked')) {
            $('.js-form-block02').show();
            $('.js-form-result').show();
            $('.js-postcode-subtext').text(text2);
        }
        if ($('input[name=search_type]:eq(2)').prop('checked')) {
            $('.js-form-block03').show();
            $('.js-form-result').hide();
            $('.js-postcode-subtext').text(text1);
        }
        if ($('input[name=search_type]:eq(3)').prop('checked')) {
            $('.js-form-block04').show();
            $('.js-form-result').show();
            $('.js-postcode-subtext').text(text1);
        }
    });
    
}
