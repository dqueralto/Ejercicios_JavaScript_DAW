/**2. The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.*/

birthYear = parseInt(prompt("Inserte el año de nacimiento"));
currentYear = parseInt(prompt("Inserte el año actual"));

calculateAge(birthYear,currentYear);
calculateAgeBonus(birthYear);

function calculateAge(birYear, curYear)
{
    let age = curYear-birYear;
    document.write("La edad actual está entre " + (age-1) + " y "+ age);
    
}

function calculateAgeBonus(birYear)
{
    let date = new Date();
    let year = date.getFullYear();
    let age = year-birYear;
    document.write("<br>La edad actual está entre " + (age-1) + " y "+ age + " segun la fecha del sistema.");
    
}
