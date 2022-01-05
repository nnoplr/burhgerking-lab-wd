var slideIndex = 0, timer, clicked = false;
var slides = $(".slideImgCont");
var indicators = $(".indicator");
showSlides();

$("#prevBtn").click(function () {
    clicked = true;
    showSlides(slideIndex -= 1);
    
});

$("#nextBtn").click(function () {
    clicked = true;
    showSlides(slideIndex += 1);
    
});

$(".indicator").click(function () {
    var idx = $(this).index();
    clicked = true;
    showSlides(slideIndex = idx + 1);
    
});

function showSlides() {
    var i;
    if (clicked == true) {
        clearTimeout(timer);
        if (slideIndex > slides.length) { slideIndex = 1 }
        else if (slideIndex < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides.eq(i).hide();
        }
    }

    else{
        for (i = 0; i < slides.length; i++) {
            slides.eq(i).hide();
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
    }
    
    for (i = 0; i < indicators.length; i++) {
        indicators.eq(i).removeClass('active');
    }
    slides.eq(slideIndex - 1).fadeIn("slow").show();
    indicators.eq(slideIndex - 1).addClass('active');
    clicked = false;
    timer = setTimeout(showSlides, 3000);
}