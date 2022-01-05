jQuery(function($){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
  
    $(window).resize(function() {
      if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
        location.reload();
        return;
      }
    });
  });

let slideWitdh = $('#slideImg').width()
var moveBackward = false
var n = slideWitdh, timer
$('#slides').css("margin-left", -slideWitdh)
$('#slide:last-child').prependTo('#slides')

$('#leftBtn').click(() => {
    showSlides(slideWitdh, true)
})

$('#rightBtn').click(() => {
    showSlides(-slideWitdh, false)
})

timer = setTimeout(showSlides, 3000)
function showSlides(n, moveBackward){
    if(moveBackward == true){
        clearTimeout(timer)
        $('#slides').animate(
            {"left": n},
            1000,
            ()=>{
                $('#slide:last-child').prependTo('#slides')
                $('#slides').css("left", "")
            }
        )
    }
    else{
        clearTimeout(timer)
        $('#slides').animate(
            {"left": n},
            1000,
            ()=>{
                $('#slide:first-child').appendTo('#slides')
                $('#slides').css("left", "")
            }
        )
    }
    moveBackward = false
    timer = setTimeout(showSlides, 3000)
    
}

