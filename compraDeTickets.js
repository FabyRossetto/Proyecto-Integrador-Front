let boton = document.getElementById('btn1');
let categoria = document.getElementById('categoria');
let cantidad = document.getElementById('cantidad');


var EntradaGeneral = 200;
var descuentoJr = EntradaGeneral * 0.15;
var descuentoEs = EntradaGeneral * 0.80;
var descuentoTr = EntradaGeneral * 0.50;



const compra = document.getElementById('btn1').addEventListener('click', (evento) => {

    evento.preventDefault();

    console.log("conectando")
    console.log("la cantidad de entradas es" + cantidad.value)//html input element
    console.log("de la categoria" + categoria.value)


    var total = 0;
    let alerta = document.querySelector("span")

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
        alerta.innerHTML = `
        <div>
            
                <p align=center>  Total a pagar: $${total}</p>
            
        </div> 
    `

    }

    console.log("El total es" + total)





})

const borrar = document.getElementById('btn2').addEventListener('click', () => {

  

    let alerta = document.querySelector("span")
    alerta.innerHTML = `
        <div>
            
                <p align=center>  Total a pagar: $</p>
            
        </div> 
    `
})




