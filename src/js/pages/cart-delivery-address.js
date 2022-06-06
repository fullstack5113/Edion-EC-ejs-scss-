export function cartDeliveryAddress() {
    const bp = 767;

    // No.26 cart-delivery-address
    const cartDeliveryAddr = document.getElementById("cartdeliveryaddress");

    // No.26 ページ判定
    if(cartDeliveryAddr !=  null) {
        console.log("address01");
        const $selectBtnArray = $('#js-deliveryselect');
        const $selectBtn =  $selectBtnArray.find('input[name=check01]');
        const bindArray = ['#js-deliveryinfo', '#js-deliverygroup', '#js-deliveryinput'];

        // 各配送先住所 項目非表示
        for (var i = 0; i < bindArray.length; i++) {
            $(bindArray[i]).hide();
        }

        // 紐付けられた項目の表示
        $selectBtn.on('click', function() {
            let eleIndex = Number($(this).attr('id').replace('check01-0', ''));

            for (var i = 0; i < bindArray.length; i++) {
                $(bindArray[i]).hide();
            }
            $(bindArray[eleIndex - 1]).show();
        })
    }


    // No.28 cart-delivery-address02
    const cartDeliveryAddr02 = document.getElementById("cartdeliveryaddress02");

    // No.28 ページ判定
    if(cartDeliveryAddr02 !=  null) {
        changeStructure();
        $(window).resize(function() {
            changeStructure();
        });
    }

    function changeStructure() {
        const w = window.innerWidth;
        const $deliveryAddrItem = $('.js-deliveryaddress-item');

        $deliveryAddrItem.each(function() {
            const $moveEle = $(this).find('.js-deliveryaddress-inputttl');
            const $pcTarget = $(this).find('.js-deliveryaddress-input');
            const $spTarget = $(this).find('.js-deliveryaddress-prod');

            if(bp < w) {
                $moveEle.prependTo($pcTarget);
            } else {
                $moveEle.insertBefore($spTarget);
            }
        });
    }
}
