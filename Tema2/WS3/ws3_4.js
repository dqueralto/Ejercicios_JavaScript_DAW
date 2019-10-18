/*4) 

Crea una funci n que tomando una cadena de texto como entrada coloque todas ó
sus consonantes al principio y todas sus vocales al final de la misma, eliminando
los blancos.
*/

var x = prompt("Inserta una frase:").trim();


document.write(separarVocalesyConsonates(x));

function separarVocalesyConsonates(e)
{
    let vocales = [];
    let consonantes = [];
    let letras = [];
    let letra = '';
    let cont = 0;

    //let frase = e.trim();
    letras = frase.split('');
    
    
    let idx = letras.length-1;
   
    
    while( cont <= idx )
    {
        letra = letras[cont]
        if(letra ==='a'||letra ==='A'||letra ==='e'||letra ==='E'||letra ==='i'||letra ==='I'||letra ==='o'||letra ==='O'||letra ==='u'||letra ==='U')
        {
            vocales.push(letra);
        }
        else
        {
            consonantes.push(letra);
        }
        
        i++;
    }
    let resultado = vocales.toString()+letras.toString();
    return resultado.trim;
}