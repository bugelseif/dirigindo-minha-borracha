"use strict";
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var x = 20, y = 20, larg = 100, alt = 50, ang = 0;

function desenharCarro(){
    ctx.save();
        ctx.translate(x,y)
        ctx.rotate(ang)
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgb(211, 218, 242)";
        ctx.fillRect(-larg/2, -alt/2, larg, alt);
        ctx.fillStyle = "rgb(45, 85, 227)";
        ctx.fillRect(-larg/2, -alt/2, larg/1.3, alt);
        ctx.stroke();
    ctx.restore();
}

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    desenharCarro();
    moverObjetos();
    requestAnimationFrame(desenhar);
}

function moverObjetos(){
    document.onkeydown = function(evt){
        console.log("Nome da tecla " + evt.key +" Numero " + evt.keyCode)
        if(evt.key == "ArrowUp"){
            x+= Math.cos(ang) * 5
            y+= Math.sin(ang) * 5
            ctx.lineTo(x,y)
        }else if(evt.key == "ArrowDown"){
            x-= Math.cos(ang) * 5
            y-= Math.sin(ang) * 5
            ctx.lineTo(x,y)
        }else if(evt.key == "ArrowLeft"){
            ang -= 0.1
            ctx.lineTo(x,y)
        }else if(evt.key == "ArrowRight"){
            ang += 0.1
            ctx.lineTo(x,y)
        }
    }
}

requestAnimationFrame(desenhar);