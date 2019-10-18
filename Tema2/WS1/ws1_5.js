/** 
Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y é
el m todo setTimeout() crea un reloj que se actualice cada segundo.
 */

function startTime() {
   var fec = new Date();
   var hr = fec.getHours();
   var min = fec.getMinutes();
   var seg = fec.getSeconds();
   
   ampm = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
   hr = (hr == 0) ? 12 : hr;
   hr = (hr > 12) ? hr - 12 : hr;
   
   //anadir cero si es menor que 10
   hr = add0(hr);
   min = add0(min);
   seg = add0(seg);
   //--------------------------------

   document.getElementById("relog").innerHTML = hr + ":" + min + ":" + seg + " " + ampm;
   
   
   var time = setTimeout(function(){ startTime() }, 1000);
}
function add0(i) {
   if (i < 10) {
       i = "0" + i;
   }
   return i;
}
