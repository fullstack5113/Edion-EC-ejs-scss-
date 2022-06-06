export function download() {
    const w = window.innerWidth;
    const bp = 767;
    const $moveEle = $('#js-bottomitem');
    const $pcTarget = $('#js-topitem-ttl');
    const $spTarget = $('#js-topitem');

    changeStructure();
    $(window).resize(function() {
        changeStructure();
    });

    // 各ウィンドウサイズ 入れ子構造の変更
    function changeStructure() {
        const w = window.innerWidth;
        if(bp < w) {
            $($moveEle).appendTo($pcTarget);
        } else {
            $($moveEle).insertAfter($spTarget);
        }
    }
}
