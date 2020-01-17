<?php
    $xml ='<?xml version="1.0" encoding="UTF-8"?><Correos>';

    for ($i=0; $i<10; $i++) 
    { 
        $xml = $xml . "<Correo id=$i>";
            $xml = $xml . "<Remitente> Remitente $i</Remitente>";
            $xml = $xml . "<Asunto>Asunto $i</Asunto>";
            $xml = $xml . "<Fecha>$i</Fecha>";
            $xml = $xml . "<Contenido>Contenido del correo $i</Contenido>";
        $xml = $xml . '</Correo>';
    }

    $xml = $xml . '</Correos>';
    
    echo $xml;
    
?>