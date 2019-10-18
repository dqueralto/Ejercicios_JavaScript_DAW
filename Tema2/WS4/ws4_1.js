/*
Muestra, maquetada en una tabla HTML toda la informaci n que puedas ó
extraer mediante JavaScript del navegador cliente.

*/
var activeVRDisplays = navigator.activeVRDisplays;
var appCodeName = navigator.appCodeName;
var appName = navigator.appName;
var appVersion = navigator.appVersion;
var battery = navigator.battery;
var connection = navigator.connection;
var cookiEnable = navigator.cookiEnable;
var geolocation = navigator.geolocation;



document.write("<table border=1><tr><td>activeVRDisplays</td><td>"+activeVRDisplays+"</td></tr><tr><td>appCodeName</td><td>"+appCodeName+"</td></tr><tr><td>appName</td><td>"+appName+"</td></tr><tr><td>appVersion</td><td>"+appVersion+"</td></tr><tr><td>battery</td><td>"+battery+"</td></tr><tr><td>connection</td><td>"+connection+"</td></tr><tr><td>cookiEnable</td><td>"+cookiEnable+"</td></tr><tr><td>geolocation</td><td>"+geolocation+"</td></table>");

