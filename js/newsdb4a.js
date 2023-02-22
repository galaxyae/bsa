$('#news-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: true,
    arrows: true,
    adaptiveHeight: true,
    infinite: false,
    prevArrow: '<button class="prev arrows"></button>',
    nextArrow: '<button class="next arrows"></button>',
});


// On before slide change
$('#news-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // arrangeDots();
});

function arrangeDots(){
    $('#news-carousel .slick-slide').each(function (){
        dots = $(this).find('.dot').length;
        gaps = 95/dots;
        currentGap = 5;

        $(this).find('.dot').each(function (){
            etop = Math.floor(Math.random() * (85 - 1) + 1);
            $(this).css('left',currentGap+'%').css('top',etop+'%');

            if(currentGap>=50)
                $(this).addClass('alignleft');

            currentGap += gaps;
        });
    });
}

arrangeDots();

$('#news-carousel .dot').mouseenter(function (){
    $('#news-carousel .dot').addClass('opaque');
    $('#bigCircle2').addClass('opaque');
    $(this).removeClass('opaque');
});

$('#news-carousel .dot').mouseleave(function (){
    $('#bigCircle2').removeClass('opaque');
    $('#news-carousel .dot').removeClass('opaque');
});

$('#inner #searchBt').on('click',function (){
    $('#searchbox').toggle();
});

$('#inner #closeSearch').on('click',function (){
    $('#searchbox').toggle();
});

