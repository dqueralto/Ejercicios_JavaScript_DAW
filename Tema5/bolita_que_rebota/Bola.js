export class Bola{
    constructor(ub,idsvg="contenedor",idc="circulo",cx=60,cy=80,r=25,stroke="black",strokeWidth=1,fill="silver")
    {
        this.contenedor = document.getElementById("contenedor");
        this.bola = document.createElementNS("http://www.w3.org/2000/svg","circle");

        this.bola.setAttribute("id",idc);
        this.bola.setAttribute("cx",cx);
        this.bola.setAttribute("cy",cy);
        this.bola.setAttribute("r",r);
        this.bola.setAttribute("stroke",stroke);
        this.bola.setAttribute("stroke-width",strokeWidth);
        this.bola.setAttribute("fill",fill);

        this.contenedor.appendChild(this.bola);
        this.contenedor.setAttribute("id",idsvg);

        ub.appendChild(this.contenedor);

    }

    moverBolaDerecha(velocidad=1){
        var cx = parseInt(this.bola.getAttribute('cx'));
        this.bola.setAttribute('cx', cx + velocidad);
    }

    moverBolaIzquierda(velocidad=1){
        var cx = parseInt(this.bola.getAttribute('cx'));
        this.bola.setAttribute('cx', cx - velocidad);
    }

    moverBolaArriba(velocidad=1){
        var cy = parseInt(this.bola.getAttribute('cy'));
        this.bola.setAttribute('cy', cy - velocidad);
    }

    moverBolaAbajo(velocidad=1){
        var cy = parseInt(this.bola.getAttribute('cy'));
        this.bola.setAttribute('cy', cy + velocidad);
    }

    retCX(){return parseInt(this.bola.getAttribute('cx'));}

    retCY(){return parseInt(this.bola.getAttribute('cy'));}

    retCR(){return parseInt(this.bola.getAttribute('r'));}
   

}


/*
function crearBola(ub,idsvg="contenedor",idc="circulo",cx=60,cy=80,r=25,stroke="black",strokeWidth=1,fill="silver")
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

    contenedor.appendChild(bola);
    contenedor.setAttribute("id",idsvg);

    ub.appendChild(contenedor);
}*/