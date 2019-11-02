/** 

1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de ese sitio, 
deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. 
En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente. 
Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio en blanco, acentos, etc....)

2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, 
de párrafo y el tamaño de la letra.

3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.

OPCIONAL _________________________________________________

4) Crea 3 funciones genéricas para el manejo de cookies:
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null 
    en caso contrario.

    c) BorrarCookie().
 */


window.onload=()=>
{
    checkCookie();
    document.getElementById("brck").onclick = removeCookie;

}

function removeCookie() 
{
    setCookie("username","",-1);
    setCookie("background","",-1);
    setCookie("color","",-1);
    setCookie("size","",-1);

    document.body.style.backgroundColor = "white";
    document.getElementById("parrafo").style.color = "black";
    document.getElementById("parrafo").style.size = 16;
}

function setCookieExp(cname, cvalue, exdays) {
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));//expiracion en dias
    d.setTime(d.getTime() + (exdays*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie(cname, cvalue) {
    var expires = "expires=";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie()
{

    var username = getCookie("username");
    if (username != "") 
    {
        alert("Bienvenido de nuevo " + username);
    } else {
        username = prompt("Porfavor inserte su nombre:", "");
        if (username != "" && username != null) {
            setCookieExp("username", username, 5);
            alert("hola " + username);
        }
    }

    /*
    var background = getCookie("background");
    if (background != "") 
    {
        document.body.style.backgroundColor = background;
    } else {
        background = prompt("Porfavor inserta el color del fondo:", "");
        if (background != "" && background != null) {
            setCookie("background", background, -1);//pasandole un tiempo de expiracion en negativo las cookies no se guardan
            document.body.style.backgroundColor = background;
        }
    }*/

    var background = getCookie("background");
    if (background != "") 
    {
        document.body.style.backgroundColor = background;
    } else {
        background = prompt("Porfavor inserta el color del fondo:", "");
        if (background != "" && background != null) {
            setCookie("background", background);//si no se indica un tiempo de expiracion  las cookies se borraran si se cierra el NAVEGADOR
            document.body.style.backgroundColor = background;
        }
    }
    


    var color = getCookie("color");
    if (color != "") 
    {
        document.getElementById("parrafo").style.color = color;
        
    } else {
        color = prompt("Porfavor inserta el color del parrafo:", "");
        if (color != "" && color != null) 
        {
            setCookie("color", color);
            document.getElementById("parrafo").style.color = color;
        }
    }


    var size = getCookie("size");
    if (size != "") 
    {
        document.getElementById("parrafo").style.fontSize=size;
    } else {
        size = prompt("Porfavor inserteel tamaño:", "");
        if (size != "" && size != null) {
            setCookie("size", size);
            document.getElementById("parrafo").style.fontSize=size+"px";
        }
    }



}
/*
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Bienvenido de nuevo " + username);
    } else {
        username = prompt("Porfavor inserte su nombre:", "");
        if (username != "" && username != null) {
        setCookie("username", username, 5);
        alert("hola " + username);
        }
    }
}*/