var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de drone')
    }
}

//imprimirProfesiones(sacha)

const MAYORIA_DE_EDAD = 18

//Funciones que retornan valores
/*
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

//Funciones anónimas
/*
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

//ARROW FUNCTIONS
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
//Desestructurando el parametro
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

//imprimirSiEsMayorDeEdad(sacha)

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('Acceso denegado')
    }
}

const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD

function imprimirEsMenorDeEdad(persona) {
    if (!esMenorDeEdad(persona)) {
        console.log(`No, ${persona.nombre} es mayor de edad`)
    }
}

var diego = {
    nombre: 'Diego',
    apellido: 'Martinez',
    edad: 21,
    peso: 60
}

console.log(`Al inicio del año ${diego.nombre} pesa ${diego.peso}kg`)

/* function aumentarDePeso(prsona) {
    return persona.peso += peso
} */
const INCREMENTO_PESO = .2
const DIAS_DEL_ANIO =365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(diego)
    } else if (random < 0.5) {
        adelgazar(diego)
    }
}

console.log(`Al final del año ${diego.nombre} pesa ${diego.peso.toFixed(1)}kg`)