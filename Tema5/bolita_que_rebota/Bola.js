export class Bola{
    constructor(idsvg="contenedor",idc="circulo",cx=60,cy=80,r=25,stroke="black",strokeWidth=1,fill="silver")//Constructor que solicita el id del contenedor donde se ubicara, un id para nuestro objeto, coordenada cx, cy, color del borde, ancho del borde y color de fondo.
    {
        this.contenedor = document.getElementById(idsvg);//Obtencion del objeto que contendra nuestra "barra" (casi siempre sera un SVG)
        this.bola = document.createElementNS("http://www.w3.org/2000/svg","circle");//creacion del objeto "circle" con SVG.

        this.bola.setAttribute("id",idc);//Asignacion inicial del ID del objeto "circle".

        this.bola.setAttribute("cx",cx);//Asignacion inicial de la coordenada X del objeto "circle".
        this.bola.setAttribute("cy",cy);//Asignacion inicial de la coordenada Y del objeto "circle".

        this.bola.setAttribute("r",r);//Asignacion inicial del Radio del objeto "circle".

        this.bola.setAttribute("stroke",stroke);//Asignacion inicial del color del borde del objeto "circle". 
        this.bola.setAttribute("stroke-width",strokeWidth);//Asignacion inicial del grosor del borde del objeto "circle".

        this.bola.setAttribute("fill",fill);//Asignacion inicial del color de fondo del objeto "circle".

        this.contenedor.appendChild(this.bola);//Inclusion del objeto "circle" en el contenedor "SVG"


    }

    moverBolaDerecha(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "X" del objeto  "circle", lo desplaza hacia la derecha.
    {
        var cx = parseInt(this.bola.getAttribute('cx'));//Obtencion de la coordenada "X" actual del objeto  "circle".
        this.bola.setAttribute('cx', cx + velocidad);//Incrementacion e implementacion de la coordenada "X" del objeto  "circle".
    }

    moverBolaIzquierda(velocidad=1)//Funcion que decrementando el valor numerico de la coordenada "X" del objeto  "circle", lo desplaza hacia la izquierda.
    {
        var cx = parseInt(this.bola.getAttribute('cx'));//Obtencion de la coordenada "X" actual del objeto  "circle".
        this.bola.setAttribute('cx', cx - velocidad);//Decrementacion e implementacion de la coordenada "X" del objeto  "circle".
    }

    moverBolaArriba(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "Y" del objeto  "circle", lo desplaza hacia arriba.
    {
        var cy = parseInt(this.bola.getAttribute('cy'));//Obtencion de la coordenada "Y" actual del objeto  "circle".
        this.bola.setAttribute('cy', cy - velocidad);//Decrementacion e implementacion de la coordenada "Y" del objeto  "circle".
    }

    moverBolaAbajo(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "Y" del objeto  "circle", lo desplaza hacia abajo.
    {
        var cy = parseInt(this.bola.getAttribute('cy'));//Obtencion de la coordenada "Y" actual del objeto  "circle".
        this.bola.setAttribute('cy', cy + velocidad);//Incrementacion e implementacion de la coordenada "Y" del objeto  "circle".
    }

    retCX(){return parseInt(this.bola.getAttribute('cx'));}//Funcion que retorna la coordenada "X" del objeto "circle".

    retCY(){return parseInt(this.bola.getAttribute('cy'));}//Funcion que retorna la coordenada "Y" del objeto "circle".

    retCR(){return parseInt(this.bola.getAttribute('r'));}//Funcion que retorna el "Radio" del objeto "circle".
   

}