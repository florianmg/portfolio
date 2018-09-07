
$(document).ready(function() {

    var svgAttributes = anime({
        targets: '#svgAttributes polygon',
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        duration: 2000,
        easing: 'easeInOutExpo'
    });

    var nameAppear = anime({
        targets:'#txtSvg',
        opacity: 1,
        delay: 2000,
        duration: 3000
    });

    var jobAppear = anime({
        targets:'#job',
        opacity: 1,
        delay: 2000,
        duration: 3000
    });

    var svgArrow = anime({
        targets: '#arrow_bot',
        delay: 2300,
        opacity: 1,
        translateY: 50,
        easing: 'easeInOutQuart',
        scale: {
            value: 2,
            duration: 500,
            delay: 3000,
            loop: true,
            easing: 'easeInOutQuart'
        }

    });






});



