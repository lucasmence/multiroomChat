/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(8080, function(){
    console.log('Servidor online');
})

var io = require('socket.io').listen(server);

/* Criar a conexão por WebSocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });
});