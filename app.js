// sino usamos la destructuracion {} habria que usar nonmbre de la constante, nombre funcion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv; // esta linea es equivalente a la anterior
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}