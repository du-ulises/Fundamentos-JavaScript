var diego = {
    nombre: 'Diego',
    apellido: 'Martinez',
    altura: 1.7,
    cantidadLibros: 120
};

var ulises = {
    nombre: 'Ulises',
    apellido: 'Aguilar',
    altura: 1.85,
    cantidadLibros: 12
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.76,
    cantidadLibros: 85
};

var sacha = {
    nombre: 'Sacha',
    apellido: 'Linsky',
    altura: 1.9,
    cantidadLibros: 100
};

const esAlta = ({ altura }) => altura > 1.8;

var personas = [diego, ulises, paula, sacha];

/* for (let i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
} */

var personasAltas = personas.filter(esAlta);
/* 
var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8;
});
 */

const pasarAlturaACm = persona => ({
    ...persona,
    altura: persona.altura * 100
})

/* {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}; */

var personasCms = personas.map(pasarAlturaACm);

console.log(personasCms);

const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total existen ${totalDeLibros} libros`)