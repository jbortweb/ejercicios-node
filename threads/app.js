const { Worker } = require('worker_threads');
const request = require('request');

console.log('Este es el hilo principal');

request.get('http://www.google.com', (err, response) => {
    if(err){
        return console.error(err);
    }
    //response.body[0] como array sirve para leer letra a letra todo el contenido de la web
    console.log('Total de bytes recibidos: ', response.body.length);
});

function empezarWorker(path, callback){
    let w = new Worker(path, { workerData: null });
    w.on('message', msg => {
        //Mensaje desde el worker
        callback(null, msg);
    });
    w.on('error', callback); //Explicación del error
    w.on('exit', code => {
        // Código de salida del worker diferente a 0 significa que ha habido un error
        if (code !=0)
            console.error(
                new Error(`El worker se ha parado, código de error: ${code}`));
    });
    return w;
}

let miWorker = empezarWorker(
    `${__dirname}/codigoWorker.js`,
    (error, resultado) => {
        if (error)
            return console.error(error);

            console.log('[[Proceso con gran carga computacional terminado]]');
            console.log('El primer valor es: ' + resultado.val);
            console.log('Ha tardado: ' + resultado.timeDiff / 1000 + ' segundos.');
    }
);