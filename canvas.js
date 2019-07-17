let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "grey";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "purple";
c.fillRect(600, 100, 100, 100);
c.fillStyle = "#053";
c.fillRect(100, 400, 100, 100);
c.fillStyle = "yellow";
c.fillRect(200, 200, 100, 100);


//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "pink";
c.stroke();

//arc and circle
let colors = [
    "blue", "green", "yellow", "orange", "purple"
]

for ( let i = 0; i < 100; i++ ){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.strokeStyle = colors[Math.floor(Math.random()* 5)];
    c.fillStyle = colors[Math.floor(Math.random()* 5)];
    c.arc(x, y, 30, 0, Math.PI *2, false);
    c.fill();
    c.stroke();
}