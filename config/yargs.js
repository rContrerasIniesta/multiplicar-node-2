const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Creammos un archivo de texto con la tabla de multiplicar', opt)
    .help() // al poner --help nos indica la informacion del comando, si esta esta funcion puesta
    .argv;

module.exports = {
    argv
}