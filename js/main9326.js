var image = document.getElementById('bigCircle');
new simpleParallax(image, {
    overflow: true,
    delay: .6,
    scale: 2,
    orientation: 'right down',
    transition: 'cubic-bezier(0,0,0,1)'
});
var image2 = document.getElementById('bigCircle2');
new simpleParallax(image2, {
    overflow: true,
    delay: .6,
    scale: 2,
    orientation: 'right up',
    transition: 'cubic-bezier(0,0,0,1)'
});

$('.knowledge-link').mouseenter(function(){
    // $('#header').addClass('green');
});

$('.knowledge-link').mouseleave(function(){
    // $('#header').removeClass('green');
});

function toggleMenu(x) {
    x.classList.toggle("change");
    $('#mainNav').toggleClass('active');
}

$('.highlights-next').on('click', function (e) {
    e.preventDefault();
    $('.highlights-carousel').slick('slickNext');
});

$('.highlights-prev').on('click', function (e) {
    e.preventDefault();
    $('.highlights-carousel').slick('slickPrev');
});

$('#header .search').on('click',function (){
    $('#mainSearchbox').toggle();
    $('#mainNav').toggle();
    $('#menuBt').toggle();
});

$('#mainCloseSearch').on('click',function (){
    $('#mainSearchbox').toggle();
    $('#mainNav').toggle();
    $('#menuBt').toggle();
});

$('.timezone li').mouseenter(function (){
    $(this).closest('ul').find('li').removeClass('active');
    $(this).addClass('active');
});

//
// $('.socials-carousel').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     draggable: true,
//     arrows: false,
//     adaptiveHeight: true,
//     infinite: false,
//     autoplay: true,
// });


$('.highlights-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


$('#subscribeForm').on('submit',function (e) {
    e.preventDefault();
    e.stopPropagation();

    data = $(this).serialize();
    url = $(this).attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(response){
            $('#subscribeSuccess').html(response).show();
            $('#subscribeForm').trigger('reset');
        }
    });

});
