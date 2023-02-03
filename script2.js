let nombre, donacion, suma, comentario;

//acumula donaciones
function acumula (){
    var suma=0;
    var donacion= 0;

    donacion= parseInt("donacion");
    suma= suma+ donacion;
}

//contador de donantes
let cont=0;
const valor= document.getElementById("valor");
const btnConfirmar= document.getElementById("confirmar")

btnConfirmar.onclick = function(){
    cont++;
    valor.innerHTML= cont;
}

function obtenerdatos(){
        var nombre= document.getElementById ("name").value;
        var donacion= document.getElementById ("aporte").value;
        var comentario= document.getElementById ("cuentame").value;

        let mensajefinal= "Muchas gracias, " + nombre;
        prompt(mensajefinal);
}


