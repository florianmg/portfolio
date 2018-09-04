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