function spawnUfo(event) {
    var ufo = document.createElement("img");
    ufo.src = "hal.gif?a="+Math.random();
    document.body.appendChild(ufo);
    ufo.style.position = "absolute";
    ufo.style.top = document.body.clientHeight*Math.random()-100;
    ufo.style.left = -200;
 
    //ufo.style.filter = "contrast("+Math.random()+")";
    ufok.push(ufo);
    
    ufo.addEventListener("mousedown", robban);
}
 
function robban(event) {
    var ufo = event.target;
    document.body.removeChild(ufo);
    ufok.splice( ufok.indexOf(ufo), 1 );
    var bumm = document.createElement("img");
    bumm.src = "vodor.png?a="+Math.random();
    document.body.appendChild(bumm);
    bumm.style.position = "absolute"
    bumm.style.top = event.clientY-100
    bumm.style.left = event.clientX-100
    bumm.style.pointerEvents = 'none';
    var robbanHang = new Audio('fog.mp3');
    robbanHang.play();
    setTimeout( function(){document.body.removeChild(bumm);}, 100);
}
 
function mindentmozgat() {
    for(var i=0; i<ufok.length; i++) {
        ufok[i].style.left = parseInt(ufok[i].style.left) + 3;
        if (parseInt(ufok[i].style.left) > document.body.clientWidth){
            document.body.removeChild(ufok[i]);
            ufok.splice( i, 1 );
            ufok < document.body.clientWidth
            alert ("GAME OVER!");
            document.location.reload();

            
        }
    }
}

setInterval(mindentmozgat, 10);
setInterval(spawnUfo, 500);
 
var ufok = [];
