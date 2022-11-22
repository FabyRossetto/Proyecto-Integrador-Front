let boton = document.getElementById('btn');
let categoria = document.getElementById('categoria')
let cantidad = document.getElementById('cantidad')

var EntradaGeneral = 200;
var descuentoJr = EntradaGeneral * 0.15;
var descuentoEs = EntradaGeneral * 0.80;
var descuentoTr = EntradaGeneral * 0.50;




function clickear() {
    console.log("conectando")
    console.log("la cantidad de entradas es" + cantidad.value)//html input element
    console.log("de la categoria" + categoria.value)
    var total = 0;

    for (let contador = 1; contador <= cantidad.value; contador++) {

        if (categoria.value == "Estudiante") {
            var ValorEntrada = (EntradaGeneral - descuentoEs)

            console.log("El valor de cada entrada es " + ValorEntrada);

        }
        if (categoria.value == "Trainee") {
            var ValorEntrada = (EntradaGeneral - descuentoTr)
            console.log("El valor cada entrada es " + ValorEntrada)


        }
        if (categoria.value == "Junior") {
            var ValorEntrada = (EntradaGeneral - descuentoJr)
            console.log("El valor de cada entrada es " + ValorEntrada)

        }
        if (categoria.value == "General") {
            var ValorEntrada = EntradaGeneral
            console.log("El valor de cada entrada es " + EntradaGeneral)

        }

        total = total + ValorEntrada

    }

    console.log("El total es" + total)
    let alerta = document.querySelector("span")

    alerta.textContent = ("Usted a comprado" + cantidad.value + "entradas, de la categoria " + categoria.value)

//solo lo saca a pantalla cuando hago click mientras dura el click,porque esta dentro de la funcion,pero si lo saco no lo lee
}



