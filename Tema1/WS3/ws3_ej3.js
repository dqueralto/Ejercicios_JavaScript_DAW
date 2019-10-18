/*3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/


const Dead = 80;


for(i = 0; i<3; i++)
{
    let age = parseInt(prompt("Edad:"));
    let food = parseFloat(prompt("Cuanto comes al dia"));
    calculateSupply(age,food)
}


function calculateSupply(age, food)
{
    let live = Dead-age
    let consum = live*365*food;
    alert("You will need "+(Math.round(consum*100)/100)+" to last you until the ripe old age of "+live+" years");
    document.write("<br/>You will need "+(Math.round(consum*100)/100)+" to last you until the ripe old age of "+live+" years");
}


