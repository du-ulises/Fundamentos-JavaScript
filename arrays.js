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

var personas = [diego, ulises, paula, sacha];

for (let i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}