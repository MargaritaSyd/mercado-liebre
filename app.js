const express = require('express');
const app = express();
const path = require ('path');

app.listen(3002, () => {
    console.log("Servidor corriendo")
});

//app.get('/' , (req,res) => {
//    res.send('Hola Mundo!');
//})

app.get('/' , (req,res) => {
    res.sendFile(path.resolve(__dirname , './view/home.html'))
});

app.use(express.static(path.resolve(__dirname , './public')))