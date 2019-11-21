import {Bola}  from './Bola.js';
import {Barra}  from './Barra.js';
export class Juego{
    
    constructor(limiteVentana,direccion=true, cx,r,){
        this.bola = new Bola();

        this.limiteVentana=limiteVentana;
        this.direccion = direccion;

        this.radio = r;

    }


    crearBola(idsvg="contenedor",idc="circulo",cx=0,cy=0,r=25,stroke="black",strokeWidth=1,fill="silver")
    {
        var contenedor = document.createElement("svg");
        var bola = document.createElement("circle");

        bola.setAttribute("id",idc);
        bola.setAttribute("cx",cx);
        bola.setAttribute("cy",cy);
        bola.setAttribute("r",r);
        bola.setAttribute("stroke",stroke);
        bola.setAttribute("stroke-width",strokeWidth);
        bola.setAttribute("fill",fill);

        contenedor.setAttribute("id",idsvg);
        contenedor.appendChild(bola);
    }

 

    moverBola(bola,direccion=true){
        
        setInterval( () => {

            if( direccion)
            {
                bola.setAttribute('cx', intCX + 4);
                //console.log("cx: "+intCX+r);
                if(intCX+r >= limiteVentana)
                {
                  direccion = false;
                }
            }else{
                bola.setAttribute('cx', intCX - 4);
                //console.log("cx: "-intCX);
              if(intCX-r <= 0)
              {
                direccion = true;
              }
            }


        }, 10);
    }
    
}