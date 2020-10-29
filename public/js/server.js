const http = require(´http´);
const express = require('express');

const server = express();
const listenport = 8080;



const public = express.static(´public´);

server.use(´public´)

// start the server
public.listen(port, function() {  console.log('app started');});

// route our app
public.get('/', function(req, res) {  res.send('hello world!');});






////
//objeto
////

const noticias = [
    {
        "titulo" :        "la mega fiesta",
        "descripcion":    "de 150 personas mas popular del verano"
    },
    
    {
        "titulo" :        "el español",
        "descripcion":    "asesino a un soldado aleman"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    }
    ];