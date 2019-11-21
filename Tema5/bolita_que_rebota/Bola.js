export class Bola{
    constructor(idsvg="contenedor",idc="circulo",cx=60,cy=80,r=25,stroke="black",strokeWidth=1,fill="silver")
    {
        this.contenedor = document.getElementById(idsvg);
        this.bola = document.createElementNS("http://www.w3.org/2000/svg","circle");

        this.bola.setAttribute("id",idc);//Asignacion inicial del ID del objeto "circle".

        this.bola.setAttribute("cx",cx);//Asignacion inicial de la coordenada X del objeto "circle".
        this.bola.setAttribute("cy",cy);//Asignacion inicial de la coordenada Y del objeto "circle".

        this.bola.setAttribute("r",r);//Asignacion inicial del Radio del objeto "circle".

        this.bola.setAttribute("stroke",stroke);//Asignacion inicial del color del borde del objeto "circle". 
        this.bola.setAttribute("stroke-width",strokeWidth);//Asignacion inicial del grosor del borde del objeto "circle".

        this.bola.setAttribute("fill",fill);//Asignacion inicial del color de fondo del objeto "circle".

        this.contenedor.appendChild(this.bola);//Inclusion del objeto "circle" en el contenedor "SVG"


    }

    moverBolaDerecha(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada X del objeto  "circle" lo desplaza hacia la derecha.
    {
        var cx = parseInt(this.bola.getAttribute('cx'));
        this.bola.setAttribute('cx', cx + velocidad);
    }

    moverBolaIzquierda(velocidad=1)//Funcion que decrementando el valor numerico de la coordenada X del objeto  "circle" lo desplaza hacia la izquierda.
    {
        var cx = parseInt(this.bola.getAttribute('cx'));
        this.bola.setAttribute('cx', cx - velocidad);
    }

    moverBolaArriba(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada Y del objeto  "circle" lo desplaza hacia arriba.
    {
        var cy = parseInt(this.bola.getAttribute('cy'));
        this.bola.setAttribute('cy', cy - velocidad);
    }

    moverBolaAbajo(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada X del objeto  "circle" lo desplaza hacia derabajo.
    {
        var cy = parseInt(this.bola.getAttribute('cy'));
        this.bola.setAttribute('cy', cy + velocidad);
    }

    retCX(){return parseInt(this.bola.getAttribute('cx'));}//Funcion que retorna la coordenada X del objeto "circle".

    retCY(){return parseInt(this.bola.getAttribute('cy'));}//Funcion que retorna la coordenada Y del objeto "circle".

    retCR(){return parseInt(this.bola.getAttribute('r'));}//Funcion que retorna el Radio del objeto "circle".
   

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