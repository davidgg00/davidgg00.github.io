$("#enlaceproyectos").click(function () {
    $('html, body').animate({
        scrollTop: $('#proyectos').offset().top
    }, 'slow');
    return false; //Para que no rediriga a #
});

$("#enlacesobremi").click(function () {
    $('html, body').animate({
        scrollTop: $('#sobremi').offset().top
    }, 'slow');
    return false; //Para que no rediriga a #
});

$("#enlacecontacto").click(function () {
    $('html, body').animate({
        scrollTop: $('#contacto').offset().top
    }, 'slow');
    return false; //Para que no rediriga a #
});

$("#enlacerrss").click(function () {
    $('html, body').animate({
        scrollTop: $('#redes-sociales').offset().top
    }, 'slow');
    return false; //Para que no rediriga a #
});