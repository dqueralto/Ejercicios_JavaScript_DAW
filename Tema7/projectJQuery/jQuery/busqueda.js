 
APIURL='https://www.omdbapi.com/?';
APIKEI='&apikey=ef2e3108';
nPag=1
controlAjax=true;

function cambiarIMG() {
    $("img").on("error",function (){
        //$(this).attr("src","https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es")
        $(this).attr("src"," https://www.clipartwiki.com/clipimg/detail/139-1395875_-emoticones-caritas-kawaii-kawaii-sad-face.png")
        //$(this).attr("class","w-auto")

    });
}

function busqueda(pag=1,borrar=true)
{
    url = APIURL+"s="+$("#busqueda").val()+"&page="+pag+APIKEI;
        if (controlAjax) 
        {
            controlAjax=false;
            $.ajax({url: url, 
                beforeSend: function() 
                {
                    $("#spinner").show();
                },
                complete: function() {
                    $("#spinner").hide();
                },
                
                
                success: function(result){
                if(borrar)
                {
                    $(".pelicula").remove();
                }
                console.log(result.Search);
                maquetarPortadaPelicula(result.Search);
                controlAjax=true;
            }});
        }

}

function busquedaEspecifica(id)
{
    url = APIURL+"i="+id+"&page=1"+APIKEI;
    if (controlAjax) 
    {
        controlAjax=false;
        $.ajax({url: url,
            beforeSend: function() 
            {
                $("#spinner").show();
            },
            complete: function() {
                $("#spinner").hide();
            },
            success: function(result){
            maquetarInfoPelicula(result);
            controlAjax=true;
        }});
    }
}
function crearnavBar() 
{
    /*<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" >BuscaPelis</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" >

        <input id="busqueda" class="form-control mr-sm-2" type="search" placeholder="¿Que pelicula buscas?" aria-label="Search">
        <button id="buscar" class="btn btn-outline-success my-2 my-sm-0">Buscar</button>
    </div>
  </nav>*/


}

function spinner() 
{
    var contenedor = $("<div id='spinner' class='spinner-border text-warning' role='status'>");
    var obj = $("<span class='sr-only'>Loading...</span>");

    contenedor.append(obj);
    $("body").after(contenedor);
    $("#spinner").hide();
}

function maquetarPortadaPelicula(resultBus) 
{
    $.each(resultBus,function(index,pelicula)
    {       
        let contenedor = $("<div id='"+pelicula.imdbID+"' class='card pelicula border  bg-warning ml-3 mt-5' style='width: 18rem;'></div>")
        let img = $("<img src='"+pelicula.Poster+"' class='card-img-top' alt='"+pelicula.Title+"'>");
        let cuerpo = $("<div id='cuerpo' class='card-body'></div>");
        let titulo = $("<h5 class='card-title'>"+pelicula.Title+"</h5>");
       
        
        let bt = $("<button id='moreInfo' class='btn btn-primary' data-toggle='modal' data-target='#allInfo'>Más Información</button>");



        contenedor.append(img);
        cuerpo.append(titulo);

        cuerpo.append(bt);
        contenedor.append(cuerpo);
        $('#contenido').append(contenedor);

        bt.click(function() {
            let id = contenedor.attr("id");
            $('#allInfo').remove();
            busquedaEspecifica(id);          
        })

        cambiarIMG();
    })
}



function maquetarInfoPelicula(info) 
{
    console.log(info);

    var modal0 = $("<div id='allInfo' class='modal fade bd-example-modal-xl'  tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>");
    var modal1 = $("<div class='modal-dialog modal-xl' role='document'>");
    var modal2 = $("<div class='  modal-content ftarg bg-dark'>");
    var header = $("<div class='modal-header'>");
    var titulo = $("<h5 class='modal-title'>"+info.Title+"</h5>");
    var btX = $("<button type='button' class='close' data-dismiss='modal' aria-label='Close'>");
    var spah = $("<span aria-hidden='true'>&times;</span>");
    var body = $("<div class='modal-body container'>");
    var footer = $("<div class='modal-footer'>");
    var btClose = $("<button type='button' class='btn btn-secondary' data-dismiss='modal'>Salir</button>");

    var textTitle = $("<h5 >Recomendación</h5>");

    var anio = $("<p><b>Año: </b>"+info.Year+"</p>");
    var descripcion = $("<p><b>Descripcion: </b>"+info.Plot+"</p>");
    var img = $("<img src='"+info.Poster+"' class='w-50' alt='"+info.Title+"'>");

    let progresContent = $("<div class='progress'></div></br>");
    let score = parseInt(info.Metascore);
    if (score ) {
        
    } else {
        
    }

    let progresBar = $("<div class='progress-bar bg-success' role='progressbar' style='width: "+score+"%'' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>"+score+"%</div>");

    let r0 = $("<div class='row'>");
    let c1 = $("<div class='col-6'>");
    let c2 = $("<div class='col-6' >");
    let r1 = $("<div class='row'>");
    let r2 = $("<div class='row'>");

    progresContent.append(progresBar);

    header.append(titulo);
    header.append(btX);
    header.append(spah);

    body.append(textTitle);
    body.append(progresContent);

    
    r0.append(c1);
    r0.append(c2);
    c1.append(img);
    r1.append(anio);
    r2.append(descripcion);
    c2.append(r1);
    c2.append(r2);


    body.append(r0);
    //body.append(anio);
    //body.append(descripcion);

    footer.append(btClose);

    modal2.append(header);
    modal2.append(body);
    modal2.append(footer);

    modal1.append(modal2);

    modal0.append(modal1);


    $("#contenido").append(modal0);   

    modal0.modal('show');
    cambiarIMG();
}

function maquetarPaginaSiguiente() 
{
    var posScrollNextPage = $(window).scrollTop();
    nPag++;
    busqueda(nPag,false);
    $(window).scrollTop(posScrollNextPage) 

}

function scroll() 
{
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() == $(document).height())
        {
            maquetarPaginaSiguiente();
        }
    });
}


$("#algo").ready(function(){
    $("#buscar").click(function(){
        busqueda();
    }); 
    scroll();
    spinner();
});

$("#contenido").ready(function (){
    
});
