const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';


    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log('#############################'.green);
    console.log(`##### Tabla del ${base} #####`.rainbow);
    console.log(data.red);
    console.log('#############################'.green);
}

// Damos un valor por defecto al limite en caso de que no nos lo pasen
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let nombreArchivo = `tabla-${base}.txt`;
        let data = '';

        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('El limite no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(nombreArchivo);
        });
    });

}

// tambien sirve definir la funcion como module.exports.nombreFuncion = ()=>{}
module.exports = {
    crearArchivo,
    listarTabla
}