/**1. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/



for (i = 0; i<3; i++) 
{
    let nChil = parseInt(prompt("Numero de hijos:"));
    let parName = prompt("nombre de la pareja:");
    let geoLoc = prompt("Localizacion:");
    let job = prompt("Trabajo:");
    tellFortune(nChil,parName,geoLoc,job);
}


function tellFortune(nChil, parName, geoLoc, job)
{
    alert("You will be a "+job+" in "+geoLoc+", and married to "+parName+" with "+nChil+" kids.");
    document.write("<br>You will be a "+job+" in "+geoLoc+", and married to "+parName+" with "+nChil+" kids.");
}