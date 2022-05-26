//Cargarmos las librerías necesaria del core de node.js
const http = require('http');
const url = require ('url');

//Definimos variables a usar.
const hostname = ('127.0.0.1');
const port = 3000;

    //Creamos el objeto servidor donde pasamos los dos parámetros.

    /* const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola Mundo\n');
    });
    Lo podemos hacer de la siguiente manera añadiendo la const url */

//Obtenemos el path name de la petición mediante el módulo url.

const server = http.createServer((req, res)=> {
    let pathName = url.parse(req.url).pathname;
    if (pathName === '/'){
        console.log(pathName);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola mundo\n');
    }
    else if (pathName === '/About'){
        console.log(pathName);
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('About us\n');
    }
});

//Activamos nuestro servidor.
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});