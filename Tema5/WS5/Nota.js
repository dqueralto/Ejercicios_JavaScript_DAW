
export class Nota 
{
  constructor(titulo="",contenido="",fecCreacion="",width=500,height=500, color="yellow")
  {
    
    this.titulo = titulo;
    this.contenido = contenido;
    //this.fecCreacion = fecCreacion;
    this.fecCreacion = fecCreacion;
    this.width = width;
    this.height = height;
    this.color  = color;
    this.crearNota();

  }

  crearNota(id="nota",w=250,h=250,color=this.color)
  {
    var body = document.getElementsByTagName("body")[0];
    this.div = document.createElement("div");
    this.divh = document.createElement("div");
    var h1   = document.createElement("h1");        
    var p   = document.createElement("p");     
    var titulo = document.createTextNode("ToT");   
    var text = document.createTextNode("UwU");

    this.div.setAttribute("id",id);
    this.div.style.width = w;
    this.div.style.height = h;
    this.div.style.background = color;
    this.div.style.border = "1px solid black";

    this.divh.setAttribute("id",id+"h")
    this.divh.style.width = "100%";
    this.divh.style.height = "25%";
    this.divh.style.background = "#E5BE01";

    this.divh.style.border = "1px solid black";

    this.div.setAttribute("onclick","modContent(event,this)");

    h1.appendChild(titulo);
    p.appendChild(text);
    
    this.divh.appendChild(h1);
    this.div.appendChild(this.divh);
    this.div.appendChild(p);

    body.appendChild(this.div);

  }
  
  retIDHeader()
  {
    return this.divh.getAttribute("id")
  }

  modContent(obj,titulo="",text="")
  {
    var titulo = document.createTextNode(titulo);   
    var text = document.createTextNode(text);
  }

  dragElement(elmnt=this) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.retIDHeader())) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.retIDHeader()).onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
  }



}