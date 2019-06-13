function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

const ALTO = 1.8

Persona.prototype.soyAlto = function () {
    if (this.altura >= ALTO) {
        return console.log(`Soy alto!`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.85)
//sacha.saludar()
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Gil', 1.82)




