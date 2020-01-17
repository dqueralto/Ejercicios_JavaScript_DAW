
console.log("inicio JS");

function myFunction(xml) 
{
    var i;
    var xmlDoc = xml.responseXML;
    //var table="<tr><th>Title</th><th>Artist</th></tr>";
    var table="";
    var x = xmlDoc.getElementsByTagName("Correo");
    for (i = 0; i < x.length; i++) 
    {
        table += "<tr><td>" + 
        x[i].getElementsByTagName("Remitente")[0].childNodes[0].nodeValue +
        "</td></tr><tr><td>" +
        x[i].getElementsByTagName("Asunto")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
    
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        myFunction(this);
    }
};
xmlhttp.open("GET", "./ws1_5.php", true);
xmlhttp.send();


    
