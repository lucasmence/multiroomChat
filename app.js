/*importar as configuracoes do servidor*/

var app = require('./config/server.js');

/* parametrizar a porta de escuta */
app.listen(8080, function(){
    console.log('Server online');
});