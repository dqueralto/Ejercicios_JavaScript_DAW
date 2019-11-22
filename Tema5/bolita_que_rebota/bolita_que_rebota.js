import {Bola}  from './Bola.js';
import {Barra}  from './Barra.js';






window.onload = function() {
    var limiteVentanaH = contenedor.clientWidth;
    var limiteVentanaV = contenedor.clientHeight;

    var bola = new Bola("contenedor","circulo",limiteVentanaH/2,limiteVentanaV/2,50,"black",1,"silver");
    var bola2 = new Bola("contenedor","circulo",0,0,50,"black",1,"red");
    var bola3 = new Bola("contenedor","circulo",0,limiteVentanaV,50,"black",1,"blue");

    var pj1 = new Barra("contenedor","palo1",100,100,30,120,"red",10 );
    var pj2 = new Barra("contenedor","palo2",limiteVentanaH-100,limiteVentanaH-100,30,120,"blue",10 );

    setInterval(function(){ 

        bola.controlImpactoTotal(limiteVentanaH,limiteVentanaV,1);
        bola2.controlImpactoTotal(limiteVentanaH,limiteVentanaV,5);
        bola3.controlImpactoTotal(limiteVentanaH,limiteVentanaV,9);
        /*
        var intCX = bola.retCX();
        var intCY = bola.retCY();
        var r = bola.retR();
        var velocidad = 7;

        if(direccionH)
        {
            bola.moverBolaDerecha(velocidad);
            bola2.moverBolaDerecha(velocidad);
            bola3.moverBolaDerecha(velocidad);
            if(intCX + r >= limiteVentanaH  )
            {
                direccionH = false;
            }
            
        }else{
            bola.moverBolaIzquierda(velocidad);
            bola2.moverBolaDerecha(velocidad);
            bola3.moverBolaDerecha(velocidad);
            if(intCX - r <= 0 )
            {
                direccionH = true;
            }
        }

        if (direccionV) {
            bola.moverBolaAbajo(velocidad);
            bola2.moverBolaDerecha(velocidad);
            bola3.moverBolaDerecha(velocidad);
            if( intCY + r >= limiteVentanaV)
            {
                direccionV = false;
            }
        } else {
            bola.moverBolaArriba(velocidad);
            bola2.moverBolaDerecha(velocidad);
            bola3.moverBolaDerecha(velocidad);
            if( intCY - r <= 0)
            {
                direccionV = true;
            }
        }
        */
        
    },10);
};