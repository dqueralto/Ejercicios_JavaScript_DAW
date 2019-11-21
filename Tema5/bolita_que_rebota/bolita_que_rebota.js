import {Bola}  from './Bola.js';
import {Palo}  from './Palo.js';






window.onload = function() {
    var limiteVentanaH = contenedor.clientWidth;
    var limiteVentanaV = contenedor.clientHeight;

    var bola = new Bola("contenedor","circulo",limiteVentanaH/2,limiteVentanaV/2,50,"black",1,"silver");
    
    var pj1 = new Palo("contenedor","palo1",100,100,30,120,"red",10 );
    var pj2 = new Palo("contenedor","palo2",limiteVentanaH-100,limiteVentanaH-100,30,120,"blue",10 );

    var direccionH = true;
    var direccionV = true;

    setInterval(function(){ 

        var intCX = bola.retCX();
        var intCY = bola.retCY();
        var r = bola.retCR();


        if(direccionH)
        {
            bola.moverBolaDerecha(3);
            if(intCX + r >= limiteVentanaH  )
            {
                direccionH = false;
            }
            
        }else{
            bola.moverBolaIzquierda(3);
            if(intCX - r <= 0 )
            {
                direccionH = true;
            }
        }

        if (direccionV) {
            bola.moverBolaAbajo(3);
            if( intCY + r >= limiteVentanaV)
            {
                direccionV = false;
            }
        } else {
            bola.moverBolaArriba(3);
            if( intCY - r <= 0)
            {
                direccionV = true;
            }
        }

        
    },10);
};