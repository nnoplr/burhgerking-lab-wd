var ctx = null;
var x_icon = 0;
var y_icon = 0;
var stepX = 1;
var stepY = 1;
var size_x = 95;
var size_y = 80;
var canvas_size_x = 500;
var canvas_size_y = 350;
var anim_img = null;
      
function draw() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    // anim_img = new Image(size_x, size_y);
    anim_img = new Image();
    anim_img.src = 'Asset/Csoon/burger-canvas.png';

    anim_img.onload = function() {
        ctx.drawImage(anim_img, 0, 0);
        setInterval('myAnimation()', 5);
    }
}

function myAnimation() {
    ctx.clearRect(0, 0, canvas_size_x, canvas_size_y);
    
    if (x_icon < 0 || x_icon > canvas_size_x - size_x) {
        stepX = -stepX;
    }

    if (y_icon < 0 || y_icon > canvas_size_y - size_y) {
        stepY = -stepY;
    }

    x_icon += stepX;
    y_icon += stepY;
    ctx.drawImage(anim_img, x_icon, y_icon);
}