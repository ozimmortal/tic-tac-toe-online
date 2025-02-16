
const express = require('express');
const app = express();
const PORT = 3000;
const socketio = require('socket.io');
const session = require('express-session');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts')
const uri = "mongodb+srv://zaleambo:<oliy2627>@freecode.nyvmf3r.mongodb.net/?retryWrites=true&w=majority&appName=freecode";

app.use(express.json());
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('views'));
app.use(express.static('public'));
app.use(session({
    secret:'1234567890',
    resave:false,
    saveUninitialized:false
}))

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/game',(req,res)=>{
    res.render('game')
})
let server = app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})

let io = socketio(server,{});

io.on('connect',(socket)=>{
    console.log(socket.id,"data")
})
