$('.btn-talk').click(function () {
    $('.contact_wrapper').css({
        'visibility': 'visible',
        'opacity': 1
    });
})

$('#contact_modal_close_btn').click(function () {
    $('.contact_wrapper').removeAttr('style');
})

$(".contact_form_check input[type='checkbox']").click(function () {
    if ($(this).prop('checked') === true) {
        $(this).parent().css({
            'background': 'rgba(144, 10, 34, 1)',
            'color': 'white'
        })
    } else {
        $(this).parent().removeAttr('style')
    }
})

$(".contact_form_check input[type='radio']").click(function () {
    $(".contact_form_check input[type='radio']").parent().removeAttr('style')
    if ($(this).prop('checked') === true) {
        $(this).parent().css({
            'background': 'rgba(144, 10, 34, 1)',
            'color': 'white'
        })
    }
})
