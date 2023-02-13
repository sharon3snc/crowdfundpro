
function obtenerdatos() {
        console.log("---getting data");
     
        var nombre= document.getElementById ("name").value;
        var donacion= document.getElementById ("aporte").value;
        var comentario= document.getElementById ("cuentame").value;

        console.log(nombre+ " " + donacion+ " " + comentario +". ");
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
        <div> ${name} </div>
        </div>
        <div class="post">
        <div> ${cuentame} </div>
        </div>
        `
    document.getElementById("postList").innerHTML= HTML;
}

//muestro comentarios
function comment2(name, cuentame){
    var HTML= document.getElementById("postList2").innerHTML;

        HTML += `
        <div class="title">
        <div> ${name} </div>
        </div>
        <div class="post">
        <div> ${cuentame} </div>
        </div>
        `
    document.getElementById("postList2").innerHTML= HTML;
}

//Acumula donaciones
function acumula (aporte){
    var suma=0;
    var donacion= 0;

    donacion= parseInt(aporte);
    suma= suma+ donacion;
    console.log(suma)
} 


//contador de donantes
var cont=0;

function contador(){
    updateDisplay(++cont);
}

function updateDisplay (val) {
document.getElementById("valor").innerHTML=val;
}


