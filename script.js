
function obtenerdatos() {
        console.log("---getting data");
     
        var nombre= document.getElementById ("name").value;
        var donacion= document.getElementById ("aporte").value;
        var comentario= document.getElementById ("cuentame").value;

        console.log(nombre+ " " + donacion+ " " + comentario +". ");
        let mensajefinal= "Muchas gracias, " + nombre;
        console.log(mensajefinal);
        window.modal.close(modal);
}

//muestro comentarios
function comentario (postList){
    var HTML= '';

        HTML += `
        <div class="title">
        <div> ${"name"} </div>
        </div>
        <div class="post">
        <div> ${"cuentame"} </div>
        </div>
        `
    document.getElementById("postList").innerHTML= HTML;
}

//Acumula donaciones
function acumula (){
    var suma=0;
    var donacion= 0;

    donacion= parseInt("aporte");
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


