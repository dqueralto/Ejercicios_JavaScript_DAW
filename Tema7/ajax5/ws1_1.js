function showHint() {
    //console.log("lkdfjm");
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {

      if (this.readyState == 4 && this.status == 200) 
      {
        //document.getElementById("nextpag").innerHTML = this.responseText;
        console.log(this.responseXML);
      }

    };
    xhttp.open("GET", "ws1_5.php", true);
    xhttp.send();  
    
}

