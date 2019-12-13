import {Bola}  from './Bola.js';
import {Barra}  from './Barra.js';

export class Juego{
    
    constructor(){
        
        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;

        this.direccionH = true;
        this.direccionV = true;

        this.movimpj1 = true;
        this.movimpj2 = true;


        this.creacionDeObjetos();
        this.iniciar();



    }

    controlMovimiento(e)
    {
        
        //if (e.keyCode == 87) 
        if (e.key == 87) 

        {
            this.movimpj1 = true;
            console.log("w");
        //} else if (e.keyCode == 83)
        } else if (e.key == 83)

        {
            this.movimpj1 = false;
            console.log("s");
        }
        
        if (e.keyCode == 38)
        {
            this.movimpj2 = true;
            console.log('¡');
        }else if (e.keyCode == 40)
        {
            this.movimpj2 = false;
            console.log("!");
        }

    }



    creacionDeObjetos()
    {
        this.bola = new Bola("contenedor","circulo",this.limiteVentanaH/2,this.limiteVentanaV/2,30,"black",3,"orange");

        this.pj1 = new Barra("contenedor","pj1",100,100,0,300,"red",10 );
        this.pj2 = new Barra("contenedor","pj2",this.limiteVentanaH-100,this.limiteVentanaH-100,0,300,"blue",10 );
    }

    iniciar()
    {
        document.addEventListener("keydown",(e) => {this.controlMovimiento(e,this.limiteVentanaV,this.limiteVentanaH)});

        setInterval(() =>
        { 
            this.bola.controlImpactoTotal(this.limiteVentanaH,this.limiteVentanaV,6);

            if (this.movimpj1) 
            {
                if (this.pj1.retY1() >= 0 ) 
                {
                    this.pj1.moverBarraArriba(10);          
                }

            } else if(!this.movimpj1){

                if (this.pj1.retY2()<=this.limiteVentanaV) 
                {
                    this.pj1.moverBarraAbajo(10);
                }
            }


            if (this.movimpj2 ) 
            {
                if (this.pj2.retY1() >= 0 ) 
                {
                    this.pj2.moverBarraArriba(10);          
                }

            } else if(!this.movimpj2){

                if (this.pj2.retY2()<=this.limiteVentanaV) 
                {
                    this.pj2.moverBarraAbajo(10);
                }
            }



        },10);
    }




}