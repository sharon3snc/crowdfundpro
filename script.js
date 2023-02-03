let nombre, donacion, suma, comentario;

//acumula donaciones
function acumula (){
    var suma=0;
    var donacion= 0;

    donacion= parseInt("donacion");
    suma= suma+ donacion;
}

//contador de donantes
var cont=0;
var pvalor= document.getElementById("valor");
var btnConfirmar= document.getElementById("confirmar")

btnConfirmar.onclick = function (){
    cont++;
    pvalor.textContent= cont;
}



function obtenerdatos(){
        var nombre= document.getElementById ("name").value;
        var donacion= document.getElementById ("aporte").value;
        var comentario= document.getElementById ("cuentame").value;

        let mensajefinal= "Muchas gracias, " + nombre;
        console.log(mensajefinal);
}


