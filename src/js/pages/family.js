export function family() {
    var mql = window.matchMedia('screen and (max-width: 767px)');
    const trLen = $('.account-infotable tr').length;
    const $targetHead = $('tr:first-child').children() ;
    const $targetDesc = $('tr:last-child').children() ;

    // テーブル行列入れ替え
    function swapMatrix(mql) {
        const trLen = $('.account-infotable tr').length;

        //SP
        if (mql.matches && trLen === 2) {
            $('.account-infotable > tbody').unwrap();
            $('tbody > tr').unwrap();

            $targetHead.unwrap();
            $targetDesc.unwrap();

            $('.account-infotype').wrapAll('<tr></tr>');
            $('.account-familyinfo').wrapAll('<tr></tr>');
            $('.account-id').wrapAll('<tr></tr>');
            $('tr').wrapAll('<table class="account-infotable"><tbody></tbody></table>');
            //PC
        } else if (!mql.matches && trLen === 3 ) {
            $('.account-infotable > tbody').unwrap();
            $('tbody > tr').unwrap();

            $('.account-infotype').unwrap();
            $('.account-familyinfo').unwrap();
            $('.account-id').unwrap();

            $('th').wrapAll('<tr></tr>');
            $('td').wrapAll('<tr></tr>');
            $('tr').wrapAll('<table class="account-infotable"><tbody></tbody></table>');
        }
    }

    // ブレイクポイントの瞬間に発火
    mql.addListener(swapMatrix);

    // Initチェック
    swapMatrix(mql);
}
