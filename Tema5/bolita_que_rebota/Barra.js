export class Barra{
    constructor(idsvg="contenedor",idp="barra",x1=60,x2=80,y1=80,y2=25,stroke="black",strokeWidth=10)//Constructor que solicita el id del contenedor donde se ubicara, un id para nuestro objeto, coordenada x1, x2, y1, y2, color del borde y ancho del borde(actuara de ancho de la barra).
    {
        this.contenedor = document.getElementById(idsvg);//Obtencion del objeto que contendra nuestra "barra" (casi siempre sera un SVG)
        this.barra = document.createElementNS("http://www.w3.org/2000/svg","line");//creacion del objeto "line" con SVG.

        this.barra.setAttribute("id",idp);//Asignacion inicial del ID del objeto "line".

        this.barra.setAttribute("x1",x1);//Asignacion de inicio de la linea en el eje X del objeto "line".
        this.barra.setAttribute("x2",x2);//Asignacion de finalizacion de la linea en el eje X del objeto "line".

        this.barra.setAttribute("y1",y1);//Asignacion de inicio de la linea en el eje Y del objeto "line".
        this.barra.setAttribute("y2",y2);//Asignacion de finalizacion de la linea en el eje Y del objeto "line".
        
        this.barra.setAttribute("stroke",stroke);//Asignacion inicial del color del borde del objeto "line".
        this.barra.setAttribute("stroke-width",strokeWidth);//Asignacion inicial del grosor del borde del objeto "line".

        this.contenedor.appendChild(this.barra);//Inclusion del objeto "line" en el contenedor "SVG"

        this.direccionH = true;
        this.direccionV = true;
        this.movimbar =true;


    }

    moverBarraDerecha(velocidad=1)//Funcion que incrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto  "line", lo desplaza hacia la derecha.
    {
        var x1 = parseInt(this.barra.getAttribute('x1'));//Obtencion de la coordenada de inicio "X" actual del objeto "line".
        var x2 = parseInt(this.barra.getAttribute('x2'));//Obtencion de la coordenada de finalizacion "X" actual del objeto "line".

        this.barra.setAttribute('x1', x1 + velocidad);//Incrementacion e implementacion de la coordenada de inicio "X" del objeto "line".
        this.barra.setAttribute('x2', x2 + velocidad);//Incrementacion e implementacion de la coordenada de finalizacion "X" del objeto "line".
    }

    moverBarraIzquierda(velocidad=1)//Funcion que decrementando el valor numerico de la coordenadas de inicio y finalizacion "X" del objeto "line", lo desplaza hacia la derecha.
    {
        var x1 = parseInt(this.barra.getAttribute('x1'));//Obtencion de la coordenada de inicio "X" actual del objeto "line".
        var x2 = parseInt(this.barra.getAttribute('x2'));//Obtencion de la coordenada de finalizacion "X" actual del objeto "line".

        this.barra.setAttribute('x1', x1 - velocidad);//Decrementacion e implementacion de la coordenada de inicio "X" del objeto "line".
        this.barra.setAttribute('x2', x2 - velocidad);//Decrementacion e implementacion de la coordenada de finalizacion "X" del objeto "line".
    }

    moverBarraArriba(velocidad=1)//Funcion que incrementando el valor numerico de la coordenadas de inicio y finalizacion "Y" del objeto "line", lo desplaza hacia la arriba.
    {
        var y1 = parseInt(this.barra.getAttribute('y1'));//Obtencion de la coordenada de inicio "Y" actual del objeto "line".
        var y2 = parseInt(this.barra.getAttribute('y2'));//Obtencion de la coordenada de finalizacion "Y" actual del objeto "line".

        this.barra.setAttribute('y1', y1 - velocidad);//Decrementacion e implementacion de la coordenada de inicio "Y" del objeto "line".
        this.barra.setAttribute('y2', y2 - velocidad);//Decrementacion e implementacion de la coordenada de finalizacion "Y" del objeto "line".
    }

    moverBarraAbajo(velocidad=1)//Funcion que decrementando el valor numerico de la coordenadas de inicio y finalizacion "Y" del objeto "line", lo desplaza hacia abajo.
    {
        var y1 = parseInt(this.barra.getAttribute('y1'));//Obtencion de la coordenada de inicio "Y" actual del objeto "line".
        var y2 = parseInt(this.barra.getAttribute('y2'));//Obtencion de la coordenada de finalizacion "Y" actual del objeto "line".

        this.barra.setAttribute('y1', y1 + velocidad);//Incrementacion e implementacion de la coordenada de inicio "Y" del objeto "line".
        this.barra.setAttribute('y2', y2 + velocidad);//Incrementacion e implementacion de la coordenada de finalizacion "Y" del objeto "line".
    }

    retX1(){return parseInt(this.barra.getAttribute('x1'));}//Funcion que retorna la coordenada de inicio "X" del objeto "line".

    retX2(){return parseInt(this.barra.getAttribute('x2'));}//Funcion que retorna la coordenada de finalizacion "X" del objeto "line".

    retY1(){return parseInt(this.barra.getAttribute('y1'));}//Funcion que retorna la coordenada de inicio "Y" del objeto "line".

    retY2(){return parseInt(this.barra.getAttribute('y2'));}//Funcion que retorna la coordenada de finalizacion "Y" del objeto "line".   


}