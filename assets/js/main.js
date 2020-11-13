$('.mobileNavToggler').click(function () {
    $('.site_navbar_mobile_nav').fadeToggle()
})

$('.site_navbar_mobile_nav_close').click(function () {
    $('.site_navbar_mobile_nav').fadeOut()
})

$('.site_navbar_mobile_nav .dropdown').click(function () {
    $(this).children('.dropdown_nav').slideToggle()
})

$('.site_navbar .dropdown').click(function () {
    $(this).children('.dropdown_nav').slideToggle()
})

$('.site_navbar .dropdown .nav-link').append(`
    <i class="fas fa-sort-down dropdown_icon"></i>
`)

$('.site_navbar_mobile_nav .dropdown .nav-link').append(`
    <i class="fas fa-sort-down dropdown_icon"></i>
`)

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
