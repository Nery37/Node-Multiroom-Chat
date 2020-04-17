/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(434, function(){
    console.log('\x1b[32m%s\x1b[0m', '                                  SERVIDOR ONLINE');
})		

var io = require ('socket.io').listen(server);

/* criar a conexão por websocket */

app.set('io', io);


io.on('connection', function (socket){
 

	socket.on('disconnect', function(){

	})

	socket.on('msgParaServidor', function(data){

		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem, acc : '8291admin23'}
			);

				socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem : data.mensagem, acc : '8291admin23'}
			);


	/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0 ) {
			socket.emit(
			'participantesParaCliente', 
			{apelido: data.apelido, acc : '8291admin23'}
			);

				socket.broadcast.emit(
			'participantesParaCliente', 
			{apelido: data.apelido, acc : '8291admin23'}

			);

var socketId = socket.id;
  var clientIp = socket.request.connection.remoteAddress;
	var datetime = new Date();
 			console.log('O usuario: "'+ data.apelido +'" se ' + '\x1b[32m%s\x1b[0m', 'CONECTOU' + '\x1b[37m\x1b[0m', 'ao chat com o ip: ' + clientIp.substr(7) + " || Data: " + datetime)}
			 			
 					

	});

});
