var signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'aries':
        console.log('Quizá las inquietudes profesionales de Aries le hagan cambiar de idea con respecto a algún proyecto que estaba por concretar. ');
        break;
    case 'tauro':
        console.log('Dará comienzo a un periodo de expansión que será muy fructífero para las expectativas de trabajo. ');
        break;
    case 'geminis':
    case 'géminis':
        console.log('Géminis no deberá descartar que este año se generen cambios importantes para progresar y crecer en el trabajo. ');
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Cáncer deberá contemplar si quiere negociar con éxito esta propuesta. Algunos temas familiares relacionados con herencias, documentos, viviendas. ');
        break;
    case 'leo':
        console.log('Leo dispondrá hoy de mucha energía y una gran fuerza interior para conseguir todo lo que se proponga en el terreno personal y profesional. ');
        break;
    case 'virgo':
        console.log('Los planes para hoy podrían cambiar dejando a Virgo de muy mal humor. ');
        break;
    case 'escorpio':
        console.log('Terminarán la semana con la sensación de haber dado pasos positivos en el amor. ');
        break;

    default:
        console.log('No es un signo zoodiacal válido');
        break;
}