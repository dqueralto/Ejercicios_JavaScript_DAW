/** 
a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, 
    sinoque se establece mediante atributos del objeto style).
b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según laopción pulsada.
 */

window.onload=()=>
{



    function changeStyle()
    { 
        var _head = document.getElementsByTagName('head')[0];
        var _link = document.createElement('link');
        _link.type = 'text/css';
        _link.href = form1.color.options[form1.color.selectedIndex].value;
        _link.rel = 'stylesheet';
        _head.appendChild(_link);
    }

    function normalStyle() {
        var div = document.getElementById('divButton');
        var normal = div.getElementsById('normal');
        var minimalista = document.getElementsByName('minimalista');

        
    }

    function miniStyle() {
        var normal = document.getElementById('divButton').tagName('normal');
        var minimalista = document.getElementById('divButton').tagName('minimalista');
        
    }
}
