export function cartPayment() {
    const bp = 767;
    // - 支払い方法要素
    // - コンテンツ上部　支払い方法に紐ずれられたコンテンツ要素
    const $paymentBtns = $("[name='paymethod']");
    const $paymentContent = $("[id^='js-pay-method0']");

    // - Sec02 クレジットカード決済
    const $sec02 = $('#js-pay-method02');

    // - コンテンツ上部 支払いボタン
    // - Sec01 カード選択
    // - Sec02 カード選択
    const $cartSelectBtn01 = $("[id^='method01-2-']");
    const $cartSelectBtn02 = $("[id^='method02-2-']");
    checkCheckboxFlag($paymentBtns);
    checkCheckboxFlag($cartSelectBtn01);
    checkCheckboxFlag($cartSelectBtn02);

    toggleSection($paymentBtns, $paymentContent);
    toggleCardBlock($sec02);
    toggleTerms();


    function toggleSection($btns, $contents) {
        // クレジットカード決済 デフォルト表示
        const $defaultShowContents  = $('#js-pay-method02');
        $contents.hide();
        $defaultShowContents.show();

        $btns.on('click', function() {
            // クリックされた支払い要素に紐ずけられたコンテンツ要素
            let $clickEle = $('#' + $(this).attr('data-id'));

            if($(this).prop('checked')) {
                $contents.hide();
                $clickEle.show();
            } else {
                $contents.hide();
            }

            let $btonIndex = $btns.index($(this));
            const $updateBtn = $('#js-modal-block-lastbtn');
            if($btonIndex === 0 || $btonIndex === 1) {
                $updateBtn.text('同意して更新');
            } else {
                $updateBtn.text('更新');
            }
        });
    }

    function toggleCardBlock($obj) {
        // - 前回・新規カード選択
        // - 前回・新規カード選択 ラジオボタン
        // - カードの種類選択
        // - 新規選択時のインプットセクション
        // - SPサイズカードリーダー
        let $lastCard     = $obj.find('.methoditem-lastcardselect');
        let $lastCardInputBtn     = $lastCard.find('input[name^="method0"]');
        let $selectCard   = $obj.find('.methoditem-cardselect');
        let $inputBlock   = $obj.find('.methoditem-inputblock');
        let $readbtnwrap  = $obj.find('.readbtnwrap');

        $selectCard.hide();
        $inputBlock.hide();
        $readbtnwrap.hide()

        $lastCardInputBtn.on('click', function() {
            const w = window.innerWidth;
            if($(this).attr('value') == 2) {
                $selectCard.show();
                $inputBlock.show();
                if(w < bp) {
                    $readbtnwrap.show()
                }
            } else {
                $selectCard.hide();
                $inputBlock.hide();
                if(w < bp) {
                    $readbtnwrap.hide()
                }
            }
        })
    }

    function toggleTerms() {
        // - モバイル決済全体
        // - 各社決済ロゴ
        // - 各社決済規約テキスt
        const $mobile = $('#js-pay-method03');
        const $mobileBtn = $mobile.find('.methoditem-brandlogoitem');
        const $mobileTerms = $mobile.find('.brandterms');

        $mobileTerms.hide();
        $mobileBtn.each(function() {
            $(this).on('click', function() {
                let $clickTermContent = $('#' +$(this).attr('data-id'))
                $mobileTerms.hide();
                $clickTermContent.show();
            })
        });
    }


    function checkCheckboxFlag($obj) {
        $obj.on('click', function() {
            if ($(this).prop('checked')){
                $obj.prop('checked', false);
                $(this).prop('checked', true);
            }
        });
    }

}
