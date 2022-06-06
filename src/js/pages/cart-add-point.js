export function cartAddPoint() {
    const bp = 767;

    if($('#cartaddpoint').length) {
        console.log($('#cartaddpoint').length);


        // HTML構成変更
        changeStructure();
        $(window).resize(function() {
            changeStructure();
        });


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
            const w = window.innerWidth;

            $('.cartaddpoint-pointrow').each(function() {
                var ele = $(this).find('.js-move-ele');
                var target = $(this).find('.point-rowitem');
                var pcTarget = $(this).find('.point-rowvalue');

                if(bp < w) {
                    ele.prependTo(pcTarget);
                } else {
                    ele.appendTo(target);
                }
            })

        }
    }
}
