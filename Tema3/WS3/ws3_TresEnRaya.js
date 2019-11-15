/** 
Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, 
en el quesucesivamente dos  jugadores  van marcando casillas  hasta  conseguir  tener  sus  tres marcas en l nea, 
pudiendo ser  sta horizontal, vertical o en diagonal. Se pide por tantoíéla implementaci n de  ste juego teniendo en cuenta:óé1.
El juego es pensado para ser usado por dos usuarios.2.
El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigueantes las tres en l nea.
 */



export class TresEnRaya
{
    
    constructor()
    {
       this.j1 = "X", this.j2 = "O" ;//constantes
       this.tablero = new Array(3);
       for (let i = 0; i < this.tablero.length; i++) {
           this.tablero[i] = new Array(3);
       }/*
       for ( val of this.tablero) 
       {
           val = new Array(3);
       }*/
       this.inicializarTablero();
  
       this.nMob = 0;
       this.turno = true;//true lo usaremos para X y false para O
        
       this.evento; 
       this.ths;

       this.x;
       this.y;
    }
    
    inicializarTablero(){
        console.log(this.tablero.length);
        for (let i = 0; i < this.tablero.length; i++) 
        {
            for (let x = 0; x < this.tablero.length; x++) {
                this.tablero[i][x] = "";
                
            }
        }
    }
    //obtenerVariables(evento,ths,x,y)
    obtenerPosicion(cell)
    {
        let x = parseInt(cell.charAt(0));
        let y = parseInt(cell.charAt(1));
        console.log("X: "+x+"Y: "+y);
    }

    //jugada(event,ths,x,y)
    jugada(cell,ths)
    {
        let x = parseInt(cell.charAt(0));
        let y = parseInt(cell.charAt(1));
  
        if (this.comprobarUbicacion(x,y)) {
            
            if (this.turno) {
                this.insertarFicha(x,y);
                return "X"
                //let dx = document.createTextNode("X");
                //ths.appendChild(dx);
                //this.comprobarVictori();
            }else{
                this.insertarFicha(x,y);
                return "O"
                //let dy = document.createTextNode("O");
                //ths.appendChild(dy);
                //this.comprobarVictori();

            }
            
        } else {
            console.log("¡¡¡¡NOP!!!!");
            console.log("Contiene: "+this.tablero[x][y]);
            return null;
        }
        
    }
    
   insertarFicha(posX = 0, posY = 0)//, pj = "")
   {
       if (this.turno == true) 
       {
           this.tablero[posX][posY] = "X";//insertamos la ficha en la posicion indicada 
           this.turno = false;//cambiamos de turno
           

       } else if(this.turno == false)
       {
           this.tablero[posX][posY] = "O";//insertamos la ficha en la posicion indicada 
           this.turno = true;//cambiamos de turno
           
       }
   }

   comprobarUbicacion(posX =0, posY=0)
   {
       var pos = this.tablero[posX][posY];
       if (pos === "") 
       {
           return true;//retornamos true si se puede insertar
       } else {
           return false;//retornamos false si no se puede insertar
       }
   }

   comprobarVictori(increment=0)//comprobsamos que si alguna de filas/coumnas/diagonales cumplen las condiciones de victoria (3 iguales seguidas)
   {
        var empate = false;
        this.nMob+=increment;
        console.log(this.nMob);
        /*
        if (this.nMob != 9) {

            for (let x = 0; x < this.tablero.length; x++) 
            {
                for (let y = 0; y < this.tablero.length; y++) 
                {
                    if (this.tablero[x][y] == this.tablero[x][y] && this.tablero[x][y] == this.tablero[x][y]) //comprobamos la primera fila
                    {
                        empate = false;
                        console.log('x: '+x+' y: '+y);
                        console.log('ar: '+this.tablero[x][y]);
                        console.log('comprobando: '+this.comprobarContenido(this.tablero[x][y]));
                        return this.comprobarContenido(this.tablero[x][y]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
                    }
                }
            }
            empate = true;
        }

       if (empate && this.nMob == 9) 
       {
           console.log("retornar empate");
           return "emp";//retornamos -1 si se produce un empate
       }*/


       
       if (this.tablero[0][0] == this.tablero[0][1] && this.tablero[0][1] == this.tablero[0][2]) //comprobamos la primera fila
       {
           return this.tablero[0][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[1][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[1][2])//comprobamos la segunda fila
       {
           return this.tablero[1][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       } else if (this.tablero[2][0] == this.tablero[2][1] && this.tablero[2][1] == this.tablero[2][2]) //comprobamos la tercera fila
       {
           return this.tablero[2][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][0] == this.tablero[1][0] && this.tablero[1][0] == this.tablero[2][0])//comprobamos la primera columna
       {
           return this.tablero[1][0];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][1] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][1])//comprobamos la segunda columna
       {
           return this.tablero[1][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][2] == this.tablero[1][2] && this.tablero[1][2] == this.tablero[2][2])//comprobamos la tercera columna
       {
           return this.tablero[1][2];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][2] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][0])//comprobamos la primera diagonal
       {
           return this.tablero[1][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[0][2])//comprobamos la segunda diagonal
       {
           return this.tablero[1][1];//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.nMob === 9) 
       {
           return "emp";//retornamos -1 si se produce un empate
       }
   }

   comprobarContenido(contenido)
   {
       if (contenido == "O" ) 
       {
           return true; //si el contenido de la posicion es "o" retornamos true
       }else if (contenido == "X") 
       {
           return false; //si el contenido de la posicion es "x" retornamos false
       }else if (contenido == "")
       {
           return -1; //si el contenido esta vacio retornamos -1
       }
   }
    /*
   gentabla(f,c,ub,wc,hc) {
    // Obtener la referencia del elemento body
    //var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    // Crea las celdas
    for (var i = 0; i < f; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
   
        for (var j = 0; j < c; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            //Indicamos el texto de la celda
            var textoCelda = document.createTextNode(" ");
            celda.setAttribute("onclick","tresRayas.jugada(event,this,"+i+","+j+")")
            celda.appendChild(textoCelda);
            celda.setAttribute("width",wc);
            celda.setAttribute("height",hc);
            hilera.appendChild(celda);
        }
   
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    ub.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "0";
    tabla.setAttribute("border", "1");
    
    tabla.setAttribute("cellspacing","1");
    }*/


   ia()
   {
       if (condition) {
           
       } else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }else if (conditio) {
           
       }
   }




   mensajes(mensaje="Ganana "+ganador.toUperCase(),ganador)//funcion de comprobación
   {
       ganador=ganador.toUperCase(); 
       if (ganador == "O") //si el contenido de la posicion es "o" retornamos true
       {
           return mensaje+ganador; 
       }else if (ganador == "X") //si el contenido de la posicion es "x" retornamos true
       {
           return mensaje+ganador; 
       }else if (ganador == "")
       {
           return "¡¡¡EMPATE!!!"; //si el contenido esta vacio retornamos un mensaje de empate (luego se adaptara a la interfaz grafica)
       }
   }
   
}




