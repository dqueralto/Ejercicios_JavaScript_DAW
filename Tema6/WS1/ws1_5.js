
    console.log("inicio JS");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {

            //document.getElementById("nextpag").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", "./ws1_5.php", true);
    xmlhttp.send();

