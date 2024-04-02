console.log(personajes)

let gryContainer = document.getElementById("gry")
let slyContainer = document.getElementById("sly")
let ravContainer = document.getElementById("rav")
let huffContainer = document.getElementById("huff")

console.log(gryContainer);

function crearLi(personaje){
    let li=`<li>${personaje.name} --interpretado por-- ${personaje.actor}</li>`
    return li
}

console.log(crearLi(personajes[0]))

function dibujarLi(array, contenedor ,casa){

    let arrayFiltrado = array.filter(personaje => personaje.house == casa)

    let template = ""

    for (const personaje of arrayFiltrado) {
        let li = crearLi(personaje)
        template += li
    }

    contenedor.innerHTML = template
}

dibujarLi(personajes, gryContainer, "Gryffindor")
dibujarLi(personajes, slyContainer, "Slytherin")
dibujarLi(personajes, ravContainer, "Ravenclaw")
dibujarLi(personajes, huffContainer, "Hufflepuff")

let arrayCasas = new Set(personajes.map(personaje => personaje.house)) 

console.log(arrayCasas);