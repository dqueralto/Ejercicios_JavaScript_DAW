/*

*/


function validarTarjetas(){
  
  
    visa = document.getElementById("visa").value;
    mastercard = document.getElementById("mastercard").value;
       
    visa_error = "";
    mastercard_error = "";     
       
    if (!visa.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/))
    {
        visa_error = "No es un número de Visa correcto";
        document.getElementById("visa_ok").innerHTML = "";
        document.getElementById("visa_error").innerHTML = "¡¡¡ERROR!!!";
        alert(visa_error);

    }
    else
    {
        document.getElementById("visa_error").innerHTML = "";
        document.getElementById("visa_ok").innerHTML = "¡¡¡CORRECTO!!!";
    }
    
    if (!mastercard.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/))
    {
        mastercard_error = "No es un número de Mastercard correcto";
        document.getElementById("mastercard_ok").innerHTML = "";
        document.getElementById("mastercard_error").innerHTML = "¡¡¡ERROR!!!";
        alert(mastercard_error);

    }
    else
    {
        document.getElementById("mastercard_error").innerHTML = "";
        document.getElementById("mastercard_ok").innerHTML = "¡¡¡CORRECTO!!!";
      }

    
    }