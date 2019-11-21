import {Bola}  from './Bola.js';
import {Barra}  from './Barra.js';
export class Juego{
    
    constructor(){
        this.bola = new Bola("contenedor","circulo",limiteVentanaH/2,limiteVentanaV/2,50,"black",1,"silver");
    
        this.pj1 = new Palo("contenedor","pj1",100,100,30,120,"red",10 );
        this.pj2 = new Palo("contenedor","pj2",limiteVentanaH-100,limiteVentanaH-100,30,120,"blue",10 );

    }



 


}