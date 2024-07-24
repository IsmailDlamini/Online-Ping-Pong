document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    //setting the attributes of each player paddle
    let playerHeight = 200;
    let playerWidth = 30;
    let player1PositionX = canvas.width * .5;
    let player1PositionY = (canvas.height * 50/100);
    let player2PositionX = canvas.width * 0.95;
    let player2PositionY = (canvas.height * 0.5) - playerHeight / 2;


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        drawPlayer1();
        drawPlayer2();
    }

    function drawPlayer1() {
        ctx.fillStyle = "white";
        ctx.fillRect(player1PositionX, player1PositionY, playerWidth, playerHeight);

    }

    function drawPlayer2(){
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width * 0.95, 100, 40, 100)
    }

    // Resize the canvas initially and when the window resizes
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});