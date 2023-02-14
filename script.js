
function obtenerdatos() {
        console.log("---getting data");
     
        var nombre= document.getElementById ("name").value;
        var donacion= document.getElementById ("aporte").value;
        var comentario= document.getElementById ("cuentame").value;

        console.log(nombre+ " " + donacion + " " + comentario +". ");
        let mensajefinal= "Muchas gracias, " + nombre;
        console.log(mensajefinal);
        window.modal.close(modal);

        comment(nombre, comentario);
        comment2(nombre,comentario);
        acumula (donacion);
        contador();
}

//muestro comentarios
function comment(name, cuentame){
    var HTML= document.getElementById("postList").innerHTML;

        HTML += `
        <div class="title">
        <div><b> ${name} </b></div>
        <div> ${cuentame} </div>
        </br>
        </div>
        `
    document.getElementById("postList").innerHTML= HTML;
}

//muestro comentarios2
function comment2(name, cuentame){
    var HTML= document.getElementById("postList2").innerHTML;

        HTML += `
        <div class="title">
        <div><b> ${name} </b></div>
        <div> ${cuentame} </div>
        </br>
        </div>
        `
    document.getElementById("postList2").innerHTML= HTML;
}

//Acumula donaciones
function acumula (aporte){
    var total=3000;
    aporteporcent= parseInt(aporte);

    total = document.getElementById("spTotal").innerHTML;
    total = (total == null || total == undefined || total == "") ? 3000 : total;

    total = (parseInt(total) + parseInt(aporte));

    document.getElementById("spTotal").innerHTML = total;
} 


//Barra de porcentaje
function progress (aporte){
    var percent=10;
    var percentnuevo= percent + Math.round((parseInt(aporte))/30000);

    percentnuevo = (parseInt(percentnuevo) + parseInt(aporte));

    console.log(percentnuevo);
} 


//contador de donantes
var cont=0;

function contador(){
    updateDisplay(++cont);
}

function updateDisplay (val) {
document.getElementById("valor").innerHTML=val;
}


