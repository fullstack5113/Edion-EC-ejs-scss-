export function checksheet() {
    if($('#checksheet').length) {
        console.log("checksheet()");

        const $submitTarget = $('#submit');
        const $checkTarget = $('#check01');
        $submitTarget.prop('disabled', true);

        $checkTarget.on('click', function() {
            if ($(this).prop('checked') == false ) {
                $submitTarget.prop('disabled', true);
            } else {
                $submitTarget.prop('disabled', false);
            }
        });
    }
}
