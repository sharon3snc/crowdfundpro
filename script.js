
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
        progress(donacion);
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
    aportacion= parseInt(aporte);

    total = document.getElementById("spTotal").innerHTML;
    total = (total == null || total == undefined || total == "") ? 3000 : total;

    total = (parseInt(total) + parseInt(aporte));

    document.getElementById("spTotal").innerHTML = total;
    console.log("el acumulado es" + total);
} 


//Barra de porcentaje
function progress (aporte){
    var total2=10;
    nuevo= parseInt(aporte);

    total2 = document.getElementById("progressBar").style.width;

    total2 = (total2 == null || total2 == undefined || total2 == "") ? 10 : total2;

    total2 = (parseInt(total2) + ((parseInt(aporte))/300));

    document.getElementById("progressBar").style.width = (total2+"%");

    console.log("el % que llevamos es: " + total2);
    
} 


//contador de donantes
var cont=0;

function contador(){
    updateDisplay(++cont);
}

function updateDisplay (val) {
document.getElementById("valor").innerHTML=val;
}

$("#modal").on('hidden.bs.modal', function (e) {
    $('#modal').find("input[type=text]").val("");
})




