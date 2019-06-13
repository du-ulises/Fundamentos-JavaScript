var diego = {
    nombre: 'Diego',
    apellido: 'Martinez',
    altura: 1.7
};

var ulises = {
    nombre: 'Ulises',
    apellido: 'Aguilar',
    altura: 1.85
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.76
};

var sacha = {
    nombre: 'Sacha',
    apellido: 'Linsky',
    altura: 1.9
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