/** 4.10 y 4.19
Crea una web que genere una tabla con dos columnas. En la primera un
numero ascendente y en la otra el valor de su seno.
 */
var nums =[];

for(i = 1; i<=5; i++)
{
    nums.push(parseInt(prompt("Inserte un numero:")));
}
nums.sort();
document.write("<table border= 1>"); 
    for(x of nums)
    {
        document.write("<tr>");
            document.write("<td>"+x+"</td>");
            document.write("<td>"+Math.sin(x)+"</td>");
        document.write("</tr>");
    }
document.write("</table>"); 