import  {Nota}  from "./Nota.js";


function modContent(event,th)
{
  var titulo = alert("Inserta un nuevo titulo: ")
  var texto = alert("Inserta un nuevo texto: ")
}

function dragElement(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "h")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "h").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



window.onload = () => {
    var nota = new Nota();
    // Make the DIV element draggable:
    //dragElement(document.getElementById("mydiv"));
    dragElement(nota);
    

  
    setInterval(() => {


    }, 1000);

    

}