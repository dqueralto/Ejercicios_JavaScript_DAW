/** 
Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, 
en el quesucesivamente dos  jugadores  van marcando casillas  hasta  conseguir  tener  sus  tres marcas en l nea, 
pudiendo ser  sta horizontal, vertical o en diagonal. Se pide por tantoíéla implementaci n de  ste juego teniendo en cuenta:óé1.
El juego es pensado para ser usado por dos usuarios.2.
El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigueantes las tres en l nea.
 */


class TresEnRaya
{
    constructor()
    {
       this.j1 = "X", this.j2 = "O" ;//constantes
       this.tablero = new Array(3);
       for (key in this.tablero) {
           key = new Array(3);
       }
       this.turno = true;//true lo usaremos para X y false para O
    }
    
    
   insertarFicha(posX = 0, posY = 0)//, pj = "")
   {
       if (this.turno == true) 
       {
           this.tablero[posX][posY] = "O";//insertamos la ficha en la posicion indicada 
           this.turno = false;//cambiamos de turno
       } else if(turno == false)
       {
           this.tablero[posX][posY] = "X";//insertamos la ficha en la posicion indicada 
           this.turno = true;//cambiamos de turno
       }
   }

   comprobarUbicacion(posX , posY)
   {
       var pos = this.tablero[posX][posY];
       if (pos == "") 
       {
           return true;//retornamos true si se puede insertar
       } else {
           return false;//retornamos false si no se puede insertar
       }
   }

   comprobarVictori()//comprobamos que si alguna de filas/coumnas/diagonales cumplen las condiciones de victoria (3 iguales seguidas)
   {
       var empate = false;
       for (let x = 0; x < this.tablero.length; x++) 
       {
           for (let y = 0; y < this.tablero.length; y++) 
           {
               if (this.tablero[x][y] == this.tablero[x][y] && this.tablero[x][y] == this.tablero[x][y]) //comprobamos la primera fila
               {
                   empate = false;
                   return comprobarContenido(this.tablero[x][y]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
               }
           }
       }
       if (empate) {
           return -1//retornamos -1 si se produce un empate
       }


       /*
       if (this.tablero[0][0] == this.tablero[0][1] && this.tablero[0][1] == this.tablero[0][2]) //comprobamos la primera fila
       {
           return comprobarContenido(this.tablero[0][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[1][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[1][2])//comprobamos la segunda fila
       {
           return comprobarContenido(this.tablero[1][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       } else if (this.tablero[2][0] == this.tablero[2][1] && this.tablero[2][1] == this.tablero[2][2]) //comprobamos la tercera fila
       {
           return comprobarContenido(this.tablero[2][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][0] == this.tablero[1][0] && this.tablero[1][0] == this.tablero[2][0])//comprobamos la primera columna
       {
           return comprobarContenido(this.tablero[1][0]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][1] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][1])//comprobamos la segunda columna
       {
           return comprobarContenido(this.tablero[1][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][2] == this.tablero[1][2] && this.tablero[1][2] == this.tablero[2][2])//comprobamos la tercera columna
       {
           return comprobarContenido(this.tablero[1][2]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][2] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][0])//comprobamos la primera diagonal
       {
           return comprobarContenido(this.tablero[1][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else if (this.tablero[0][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[0][2])//comprobamos la segunda diagonal
       {
           return comprobarContenido(this.tablero[1][1]);//retornamos el contenido de la ubicacion central como ganador de darse este caso
       }else
       {
           return -1//retornamos -1 si se produce un empate
       }*/
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




