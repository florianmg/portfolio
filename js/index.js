$(document).ready(function() {

    /**** SMOOTH SCROLL ****/
    $('.scroll').on('click', function() { // on Click element class scroll
        var page = $(this).attr('href'); // Stock dans la var valleur de l'attribut
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });


});