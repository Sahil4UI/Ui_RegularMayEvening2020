var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var img = new Image();
img.src = 'kitten-1.jpg';

function draw() {
    img.onload = function() {
        context.drawImage(img, 0, 50, 100, 100);
    }
}

draw()