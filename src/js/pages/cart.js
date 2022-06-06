export function cart() {
    const bp = 767;

    const $shopItemParent = $('.js-cartblock');
    const $giftcardParent = $('.coupon').find('.giftcard');
    const $favoriteParent  = $('.item-rightwarranty');


    // HTML構成変更
    changeStructure();
    $(window).resize(function() {
        changeStructure();
    });


    const targetRadioBtn = 'input#sidebar-item02[type="radio"]';
    toggleRadioBtn(targetRadioBtn);


    // 各ウィンドウサイズ 入れ子構造の変更
    function changeItemStructure(ele) {
        const w = window.innerWidth;

        const $eleItem = ele.find('.item');
        $eleItem.each(function() {
            const $moveEle = $(this).find('.js-item-rightproddetail');
            const $quantity = $(this).find('.js-quantity');
            const $icon = $(this).find('.js-lefticon');

            const $right = $(this).find('.js-item-right');
            const $left = $(this).find('.js-item-left');
            const wrap = $(this).find('.sp-quantity-wrap');

            if(bp < w) {
                $moveEle.prependTo($right);
                $quantity.appendTo($moveEle);
                $icon.appendTo($left);
                if(wrap.length > 0) {
                    wrap.remove();
                }

            } else {
                $moveEle.appendTo($left);
                if(wrap.length === 0) {
                    $quantity.prependTo($right);
                    $quantity.wrap('<div class="sp-quantity-wrap"></div>');
                }
                $icon.prependTo($right);
            }
        });
    }

    // 各ウィンドウサイズ 入れ子構造の変更
    function changeGiftStructure(ele) {
        const w = window.innerWidth;
        ele.each(function() {
            const $giftInput =  $(this).find('.giftcardinput');
            const $giftRemove = $(this).find('.giftcardremove');

            if(bp < w) {
                $giftRemove.insertAfter($giftInput);
            } else {
                $giftRemove.appendTo($giftInput);
            }
        });
    }

    // 各ウィンドウサイズ 入れ子構造の変更
    function changeFavoriteStructure(ele) {
        const w = window.innerWidth;
        ele.each(function() {
            const $itemFirst =  $(this).find('.js-favorite-first');
            const $itemLast = $(this).find('.js-favorite-last');
            if(bp < w) {
                $itemFirst.insertBefore($itemLast);
            } else {
                $itemFirst.insertAfter($itemLast);
            }
        });
    }

    // 各ウィンドウサイズ 入れ子構造の変更
    function changeEmptyBtnStructure(ele) {
        const w = window.innerWidth;
        ele.each(function() {
            const $emptyBtn = $(this).find('.emptybtn');
            const pcTarget = $(this).find('.cartblock-contentleft');
            const spTarget = $(this);
            if(bp < w) {
                $emptyBtn.appendTo(pcTarget);
            } else {
                $emptyBtn.insertAfter(spTarget);
            }
        });
    }


    // cart-confirm.html > サイドバー > 出荷メール受け取り toggle
    function toggleRadioBtn(ele) {
        let $target = $(ele + ':checked').val();
        $(ele).on('click', function(){
            if ($(this).val() == $target) {
                $(this).prop('checked', false);
                $target = false;
            } else {
                $target = $(this).val();
            }
        });
    }

    // 各種HTML構造変更 関数まとめ
    function changeStructure() {
        changeItemStructure($shopItemParent);
        changeGiftStructure($giftcardParent);
        changeFavoriteStructure($favoriteParent);
        changeEmptyBtnStructure($shopItemParent);
    }
}
