module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;
    var acc = "8291admin23";
var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
var hora    = (data.getHours()<10?'0':'') + data.getHours();           // 0-23
var min     = (data.getMinutes()<10?'0':'') + data.getMinutes();        // 0-59
var seg     = (data.getSeconds()<10?'0':'') + data.getSeconds();      // 0-59
var str_hora = hora + ':' + min + ':' + seg;
    var d =  diaF+"/"+mesF+"/"+anoF + " || " + str_hora;





    req.assert('apelido', 'Nome ou Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou Apelido deve conter entre 3 e 25 caracteres').len(3,25);

    var erros = req.validationErrors();

    if(erros){
        res.render("index", { validacao : erros });
        return;
    }

    application.get('io').emit(
    	'msgParaCliente',
    	{apelido: dadosForm.apelido, mensagem : ' Acabou de entrar no chat.', acc : '8291admin23'});

var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}


    teste = addresses;

    res.render('chat', {dadosForm : dadosForm, ip : teste});
   };

