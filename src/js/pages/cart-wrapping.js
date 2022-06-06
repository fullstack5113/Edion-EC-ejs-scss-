export function cartWrapping() {
    function checkCheckboxFlag($obj) {
        $obj.on('click', function() {
            console.log($(this));
            if ($(this).prop('checked')){
                $obj.prop('checked', false);
                $(this).prop('checked', true);
            }
        });
    }

    const $checkObj = {
        $check01: $("[name='check01']"),
        $check02: $("[name='check02']"),
        $check03: $("[name='check03']"),
        $check04: $("[name='check04']")
    }

    for (var i = 1; i <= Object.keys($checkObj).length; i++) {
        checkCheckboxFlag($checkObj["$check0" + i]);
    }
}
