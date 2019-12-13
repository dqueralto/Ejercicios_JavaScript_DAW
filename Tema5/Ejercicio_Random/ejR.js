class Gato
{

    constructor(url="",idCont="")
    {
        this.cont=0;
        this.genimg(url,idCont);
        this.genCont(idCont);
    }
   

    genimg(url="",idCont="") 
    {
        var body = document.getElementsByTagName("body")[0];
        var div = document.createElement("div");
        var img   = document.createElement("img");

        img.setAttribute("src",url);
        img.setAttribute("onclick","pinchar(event,this,"+idCont+")")
        div.appendChild(img);
        body.appendChild(div);
        

    }


    genCont(id="",texto="UwU") 
    {
        var body = document.getElementsByTagName("body")[0];
        var p   = document.createElement("p");
        var text = document.createTextNode("Numero de Clicks: "+texto);

        p.setAttribute("id",id);


        p.appendChild(text);

        body.appendChild(p);
        

    }



}



function pinchar(e,obj,idcont="",texto="")
{
    gato1.cont++;
    var p   = document.getElementById(idcont);
    var text = document.createTextNode("Numero de Clicks: "+texto);

    obj.appendChild(text);
    
    console.log(cont);
    console.log(p);

}

window.onload=()=>
{
    var idCont1 = "gato1";   
    var gato1 = new Gato("https://ep01.epimg.net/verne/imagenes/2019/05/17/articulo/1558087739_432602_1558090295_noticia_normal.jpg",idCont1);


}
