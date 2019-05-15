$(document).ready(function() {
    
    //расписания туров, выбрать тур, получить консультацию
    $('.main_nav nav ul li:eq(1) a, .main_btna, .main_btn:has(span)').on('click', function(event) {
        $('.modal').css({
            "margin-left": "0",
            "margin-top": "50%"
        });
        $('.overlay').fadeIn('slow');
        $('.modal').animate({
            height: "show",
            width: "show",
            marginLeft: "30%",
            marginTop: "5rem"
        }, 'slow');
    });

    //закрытие на крестик
    $('.modal .close').on('click', function(event) {
        event.preventDefault();
        $('.overlay').fadeOut('slow');
        $('.modal').animate({
            height: "hide",
            width: "hide",
            marginLeft: "100%",
            marginTop: "0%"
        }, 'slow');
    });

    //AJAX
    $('.contactform_select').on('submit', function(event) {

        event.preventDefault();

        $.post("server.php", $('.contactform_select').serializeArray(), function(data, status) {
                alert('Ваши данные успешно отправлены!');
            })
            .fail(function(err, status) {
                console.error('ошибка ' + err);
            });    
    });
});