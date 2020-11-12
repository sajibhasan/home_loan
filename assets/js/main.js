$('.mobileNavToggler').click(function () {
    $('.site_navbar_mobile_nav').fadeToggle()
})

$('.site_navbar_mobile_nav_close').click(function () {
    $('.site_navbar_mobile_nav').fadeOut()
})

$('.site_navbar .dropdown').mouseenter(function () {
    $(this).children('.dropdown_nav').slideDown()
})

$('.site_navbar .dropdown .dropdown_nav').mouseleave(function () {
    $(this).slideUp()
})

$('.site_navbar_mobile_nav .dropdown').mouseenter(function () {
    $(this).children('.dropdown_nav').slideDown()
})

$('.site_navbar_mobile_nav .dropdown .dropdown_nav').mouseleave(function () {
    $(this).slideUp()
})

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
