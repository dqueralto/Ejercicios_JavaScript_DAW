import {Bola}  from './Bola.js';
import {Barra}  from './Barra.js';
export class Juego{
    
    constructor(){
        this.bola = new Bola("contenedor","circulo",limiteVentanaH/2,limiteVentanaV/2,50,"black",1,"silver");
    
        this.pj1 = new Palo("contenedor","pj1",100,100,30,120,"red",10 );
        this.pj2 = new Palo("contenedor","pj2",limiteVentanaH-100,limiteVentanaH-100,30,120,"blue",10 );

        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;

        this.direccionH = true;
        this.direccionV = true;
    }



    colisionHorizontal(intCX,r)
    {
        if(this.direccionH)
        {
            this.bola.moverBolaDerecha(3);
            if(intCX + r >= this.limiteVentanaH  )
            {
                this.direccionH = false;
            }
            
        }else{
            this.bola.moverBolaIzquierda(3);
            if(intCX - r <= 0 )
            {
                this.direccionH = true;
            }
        }
    }

    colisionVertical(intCY,r)
    {
        if (this.direccionV) {
            this.bola.moverBolaAbajo(3);
            if( intCY + r >= this.limiteVentanaV)
            {
                this.direccionV = false;
            }
        } else {
            this.bola.moverBolaArriba(3);
            if( intCY - r <= 0)
            {
                this.direccionV = true;
            }
        }
    }


}