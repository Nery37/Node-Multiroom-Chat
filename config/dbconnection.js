	

var mysql = require('mysql');

var ConnMysql = function (){
	console.log('A conexão com o BD foi estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'shadow'
	});
}

module.exports = function (){
	console.log('O autoload funcionou com sucesso.');
	return ConnMysql;
		

	}