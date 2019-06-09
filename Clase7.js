var diego = {
    nombre: 'Diego',
    apellido: 'Martínez',
    edad: 28
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function imprimirNombreMayus(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(diego)
imprimirNombreMayus(sacha)
//imprimirNombreMayus({ nombre: 'Dario' })

function impNombreCompleto(persona) {
    var { nombre } = persona
    var { apellido } = persona
    console.log(`Hola mi nombre es ${nombre} ${apellido}`)
}
impNombreCompleto(diego)