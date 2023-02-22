$('.hovertext').mouseenter(function (){
    if(window.innerWidth>767){
        $('.pop').css('margin-top',0);
        $('.hovertext').removeClass('active');
        $(this).addClass('active');
        $('.pop').removeClass('active');
        $('.pop').eq($(this).index('.hovertext')).addClass('active');
    }
});

$('.hovertext').mouseleave(function (){
    if(window.innerWidth>767) {
        $('.hovertext').removeClass('active');
        $('.active.pop').removeClass('active');
    }
});

$('.hovertext').on('click',function (){

    if($(this).hasClass('active')){
        $('.hovertext').removeClass('active');
        $('.active.pop').removeClass('active');
        $('.pops').removeClass('active');
    }
    else {
        $('.hovertext').removeClass('active');
        $(this).addClass('active');
        $('.pop').removeClass('active');
        $('.pop').eq($(this).index('.hovertext')).addClass('active');
        $('.pops').addClass('active');

        outHeight = $('.pop').eq($(this).index('.hovertext')).outerHeight()/2;

        $('.pop').eq($(this).index('.hovertext')).css('margin-top','-'+outHeight+'px');
    }
});

$('#hovertexts').on('click',function (){
    $('.hovertext').removeClass('active');
    $('.active.pop').removeClass('active');
    $('.pops').removeClass('active');
});

//
// var image = document.getElementsByClassName('parallax');
// new simpleParallax(image, {
//     overflow: true,
//     transition: 'cubic-bezier(0,0,0,1)',
//     orientation: 'down',
//     scale: 1.9
// });

// var image = document.getElementsByClassName('step-left');
//
// new simpleParallax(image, {
//     overflow: true,
//     scale: 1.8,
//     orientation: 'up right'
// });
// var image = document.getElementsByClassName('step-right');
//
// new simpleParallax(image, {
//     overflow: true,
//     scale: 1.8,
//     orientation: 'down left'
// });

// .chrome styling Vanilla JS

// document.getElementById("podcastSlider").oninput = function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
// };

var scrollFoot = $(document).outerHeight() - $('#footer').outerHeight();

$(window).on('scroll',function (){
    if((getScroll()[1]+$(window).outerHeight()-65) > scrollFoot)
        $('#podcastPlayer').css('position','absolute').css('bottom',$('#footer').outerHeight());
    else
        $('#podcastPlayer').css('position','fixed').css('bottom',0);


    $('.hovertext').removeClass('active');
    $('.active.pop').removeClass('active');
    $('.pops').removeClass('active');
});

$(window).on('resize',function (){
    setTimeout(function () {
        resizeWindow();
    },300);
});

function resizeWindow() {
    if(window.innerWidth <= 767){
        $('.pop').addClass('scale-in-center');
    } else {
        $('.pop').removeClass('scale-in-center');
    }
}
resizeWindow();

function getScroll() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

var mouseDown = false;

$(document).mousedown(function(){
    mouseDown = true;
});

$(document).on('touchstart',function(){
    mouseDown = true;
});

$(document).on('touchend',function(){
    mouseDown = false;
});

$(document).mouseup(function(){
    mouseDown = false;
});

var scrollAnimating = false;
wHeight = parseInt($('#homevid').outerHeight()) + parseInt($('#header').outerHeight());
hHeight = wHeight/2;

function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}

var scrollBarWidth = getScrollbarWidth();

$(window).scroll(function(){

    if(window.innerWidth>767) {

        wHeight = parseInt($('#homevid').outerHeight()) + parseInt($('#header').outerHeight());
        hHeight = wHeight/2;

        if(!scrollAnimating){
            if($(document).scrollTop()>0 && $(document).scrollTop()<hHeight && scrollAnimating == false){
                if(!mouseDown){
                    scrollAnimating = true;
                    $('html, body').css('overflow','hidden');
                    $('html').css('padding-right',scrollBarWidth+'px');
                    $('#header').css('padding-right',(scrollBarWidth+30)+'px');

                    $('html, body').stop().animate({
                        scrollTop: wHeight
                    }, 600, function(){
                        scrollAnimating = false;
                        $('html, body').css('overflow','auto');
                        $('html').css('padding-right','0');
                        $('#header').css('padding-right','30px');
                    });
                }
            }
            else if ( $(document).scrollTop()<(wHeight) && $(document).scrollTop() > ((wHeight/2) - parseInt($('#header').outerHeight())) && scrollAnimating == false ) {
                if(!mouseDown){
                    scrollAnimating = true;
                    $('html, body').css('overflow','hidden');
                    $('html').css('padding-right',scrollBarWidth+'px');
                    $('#header').css('padding-right',(scrollBarWidth+30)+'px');
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, 600, function(){
                        scrollAnimating = false;
                        $('html, body').css('overflow','auto');
                        $('html').css('padding-right','0');
                        $('#header').css('padding-right','30px');
                    });
                }
            }

        }
    }
});

