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

function imprimirNombreMayus({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(diego)
imprimirNombreMayus(sacha)
imprimirNombreMayus({nombre: 'Dario'})