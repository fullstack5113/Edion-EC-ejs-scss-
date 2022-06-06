export function cartDeliveryDate() {
    // 配送日時項目 非表示
    $('.deliverydate').hide();

    // 配送日時設定 判定
    $('input[name=radio01]').on('click', function(){
        if($(this).attr('value') == 1) {
            $('.deliverydate').hide();
        } else {
            $('.deliverydate').show();
        }
    })
}
