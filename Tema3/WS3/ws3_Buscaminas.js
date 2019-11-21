/** 
Buscaminas:  Implementa  ste juego teniendo en cuenta las siguientes particularidades:
é1.El juego consiste en despejar todas las casillas de una pantalla que no oculten unamina. 

2.Algunas casillas tienen un n mero, este n mero indica las minas que suman todasúúlas casillas circundantes. 
As , si una casilla tiene el n mero 3, significa que de lasíúocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minasy 5 sin minas. 

3.Si se descubre una casilla sin n mero indica que ninguna de las casillas vecinasútiene mina y estas se descubren autom ticamente. 
Si se descubre una casilla conáuna mina se pierde la partida. 4.El tablero ser  de 8x8 con 10 minas.á5.
Debe controlarse un tiempo l mite para resolver el juego.
 */

 class Buscaminas
 {
     constructor()
     {
        this.j1 = "X" ;
        this.tablero = new Array(8);
        for (key in this.tablero) {
            key = new Array(8);
        }
        
     }
     

     insertarBombas()
     {
        var i=0;
        do {
            var x = this.numRanmdon(0,8);
            var y = this.numRanmdon(1,8);
            if (this.comprobarUbicacion(x,y)) //comprobamos que se puedan insertar las "bombas"
            {
                this.tablero[x][y] = "0"; //insertamos bomba
                i += 1;//incrementamos la iteracion
            }
            //si el if no se cumple el bucle empieza denuevo sin incrementarse para comprobar otra posicion random
          } while (i < 10);          
    }



    comprobarUbicacion(posX = 0, posY = 0)
    {
        var pos = this.tablero[posX][posY];
        if (pos != "0") {
            return true;//retornamos true si se puede insertar
        } else {
            return false;//retornamos false si no se puede insertar
        }
    }

    numRanmdon(max, min)
    {
        return Math.floor(Math.random()*((max+1)-min)+min);
    }




    imprimirTablero()
    {
        this.insertarBombas();
        this.tablero.forEach(element => {
                document.element(element+"</br>");
        });
    }
    
 }






 