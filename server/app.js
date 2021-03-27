const express= require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const chat = require('./models/chat');
var jwt = require('jsonwebtoken');
const app = express();

var http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3000;
const api = require('./routes/api');


app.use(cors());
app.use(bodyparser.json());
app.use('/api',api);


const io = require("socket.io")(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET","POST"]
      
    }
});

app.get('/',function(req,res){
    res.send("From Server");
});

io.on('connection',(socket)=>{
    console.log('a user is connected');
    socket.on('disconnect', function() {
        console.log('User disconnected');
      });
    socket.on('message',(msg)=>{
        console.log(msg);
        socket.broadcast.emit('message-broadcast',msg);
       
    });
});
/* GET ALL CHATS */
// router.get('/room', function(req, res, next) {
//     Chat.find({ reciever: req.params.reciever }, function (err, chats) {
//       if (err) return next(err);
//       res.json(chats);
//     });
//   });

//   /* SAVE CHAT */
// router.post('/', function(req, res, next) {
//     Chat.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
app.get('/',function(req,res){
    res.send("From Server");
});

http.listen(PORT,function(){
    console.log("listening to port :" + PORT);
});