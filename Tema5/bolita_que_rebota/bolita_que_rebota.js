import {Bola}  from './Bola.js';






window.onload = function() {
    var conten = document.getElementById("conten");
    var bola = new Bola(conten,"contenedor","circulo",60,80,50,"black",1,"silver");

    var direccionH = true;
    var direccionV = true;

    setInterval(function(){ 
        var contenedor = document.getElementById("contenedor");
        //var bola = document.getElementById("circulo");

        //var intCX = parseInt(bola.getAttribute('cx'));
        //var r = parseInt(bola.getAttribute('r'));

        var intCX = bola.retCX();
        var r = bola.retCR();
        var limiteVentanaH = contenedor.clientWidth;
        var limiteVentanaV = contenedor.clientHeight;
        console.log("cx: "+intCX);
        console.log("lv: "+limiteVentanaH);


        if(direccionH)
        {
            bola.moverBolaDerecha(3);
            if(bola.retCX() + bola.retCR() >= limiteVentanaH  )
            {
                direccionH = false;
            }
            
        }else{
            bola.moverBolaIzquierda(3);
            if(bola.retCX() - bola.retCR() <= 0 )
            {
                direccionH = true;
            }
        }

        if (direccionV) {
            bola.moverBolaAbajo(3);
            if( bola.retCY() + bola.retCR() >= limiteVentanaV)
            {
                direccionV = false;
            }
        } else {
            bola.moverBolaArriba(3);
            if( bola.retCY() - bola.retCR() <= 0)
            {
                direccionV = true;
            }
        }

        
    },10);
};