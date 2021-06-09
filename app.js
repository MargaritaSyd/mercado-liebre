const express = require('express');
const app = express();
const path = require ('path');

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo")
});

//app.get('/' , (req,res) => {
//    res.send('Hola Mundo!');
//})

app.get('/' , (req,res) => {
    res.sendFile(path.resolve(__dirname , './view/home.html'))
});

app.get('/register' , (req,res) => {
    res.sendFile(path.resolve(__dirname , './view/register.html'))
});

app.get('/login' , (req,res) => {
    res.sendFile(path.resolve(__dirname , './view/login.html'))
});

app.use(express.static(path.resolve(__dirname , './public')))