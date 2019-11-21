export class Palo{
    constructor(idsvg="contenedor",idp="palo",x1=60,x2=80,y1=80,y2=25,stroke="black",strokeWidth=1)
    {
        this.contenedor = document.getElementById(idsvg);
        this.palo = document.createElementNS("http://www.w3.org/2000/svg","line");

        this.palo.setAttribute("id",idp);

        this.palo.setAttribute("x1",x1);
        this.palo.setAttribute("x2",x2);

        this.palo.setAttribute("y1",y1);
        this.palo.setAttribute("y2",y2);
        
        this.palo.setAttribute("stroke",stroke);
        this.palo.setAttribute("stroke-width",strokeWidth);

        this.contenedor.appendChild(this.palo);

    }

    moverPaloDerecha(velocidad=1)
    {
        var x1 = parseInt(this.palo.getAttribute('x1'));
        var x2 = parseInt(this.palo.getAttribute('x2'));

        this.palo.setAttribute('x1', x1 + velocidad);
        this.palo.setAttribute('x2', x2 + velocidad);
    }

    moverPaloIzquierda(velocidad=1)
    {
        var x1 = parseInt(this.palo.getAttribute('x1'));
        var x2 = parseInt(this.palo.getAttribute('x2'));

        this.palo.setAttribute('x1', x1 - velocidad);
        this.palo.setAttribute('x2', x2 - velocidad);
    }

    moverPaloArriba(velocidad=1)
    {
        var y1 = parseInt(this.palo.getAttribute('y1'));
        var y2 = parseInt(this.palo.getAttribute('y2'));

        this.palo.setAttribute('y1', y1 + velocidad);
        this.palo.setAttribute('y2', y2 + velocidad);
    }

    moverPaloAbajo(velocidad=1)
    {
        var y1 = parseInt(this.palo.getAttribute('y1'));
        var y2 = parseInt(this.palo.getAttribute('y2'));

        this.palo.setAttribute('y1', y1 + velocidad);
        this.palo.setAttribute('y2', y2 + velocidad);
    }

    retX1(){return parseInt(this.palo.getAttribute('x1'));}

    retX2(){return parseInt(this.palo.getAttribute('x2'));}

    retY1(){return parseInt(this.palo.getAttribute('y1'));}

    retY2(){return parseInt(this.palo.getAttribute('y2'));}   

}

