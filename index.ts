

import express from "express";
import { Server} from "socket.io";
import expressLayout from 'express-ejs-layouts'
const app = express();
const PORT = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('views'));
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/game',(req,res)=>{
    res.render('game')
})
let server = app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})

let io = new Server(server,{});

io.on('connect',(socket)=>{
    console.log(socket.id,"data")
})
