window.onload = function () {

document.getElementById("difficulty").defaultValue = '1';
$('#difficulty').change(function() {
    if ($(this).val() == '0') {
        $('.easy').css('display', 'inline-block');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '1') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'inline-block');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '2') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'inline-block');
        $('.expert').css('display', 'none');
    }
    else if ($(this).val() == '3') {
        $('.easy').css('display', 'none');
        $('.medium').css('display', 'none');
        $('.hard').css('display', 'none');
        $('.expert').css('display', 'inline-block');
    }
});
$('input[type=range]').on('input', function() {
    $(this).trigger('change');
});

}