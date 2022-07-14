const express=require('express');
const app=express();

const socket = require('socket.io');
const PORT=process.env.PORT || 3000;


const server=app.listen(PORT,  () => {
    console.log('Merhaba2')
});


const io=socket(server);

io.on('connection', (socket) => {

    console.log('baglandiiii ' + socket.id);

    io.emit('congrats', {
        msg: 'Başarılı bağlantı!',
      });
    

      socket.on('ok', (data) => {
        console.log('Received:', data);
      });
});

module.exports = { app, io };