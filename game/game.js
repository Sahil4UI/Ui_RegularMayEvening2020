window.addEventListener("load", initEvents);
var canvas, ctx, raf;
var snakeX = 0;
var snakeY = 0;
var move_x = 0;
var move_y = 0;

function initEvents() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.height = 400;
    canvas.width = 800;
    ctx.fillStyle = 'rgb(255,0,0)';
    raf = window.requestAnimationFrame(animateSnake);
}

function animateSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snakeX += move_x;
    snakeY += move_y;
    ctx.fillRect(snakeX, snakeY, 20, 20);
    document.querySelector("body").addEventListener("keyup", moveSnake);
    raf = window.requestAnimationFrame(animateSnake);
}

function moveSnake() {
    canvas = document.querySelector("#canvas");
    console.log(canvas.width);

    var key = event.keyCode;

    if (key == 38) {

        move_x = 0
        move_y = -7;

    } else if (key == 39) {
        if (snakeX > canvas.width - 20) {
            move_x = 0;
            move_y = 0;
        } else {
            move_x = 7;
            move_y = 0;
        }

    } else if (key == 37) {
        move_x = -7;
        move_y = 0;

    } else if (key == 40) {
        move_x = 0
        move_y = 7;

    }




}