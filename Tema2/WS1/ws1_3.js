/** 
Utilizando setTimeout() creo un contador hac a atr s de 60 segundos
 */
const sec = 60;
var num = sec;
cuentaAtras();
function cuentaAtras()
{
    document.write(num+"</br>");
    if(num != 0)
    {
        num--;
        setTimeout(cuentaAtras, 1000);
    }
    else
    {
        document.write("</br>FIN");
    }
}
