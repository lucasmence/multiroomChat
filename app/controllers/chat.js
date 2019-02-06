module.exports.iniciarChat = function(application, request, response){

    var dadosForm = request.body;

    request.assert('apelido', 'The nickname cannot be empty!').notEmpty();
    request.assert('apelido', 'The nickname must contain between 3 and 15 characters!').len(3, 15);

    var errors = request.validationErrors();

    if (errors){
        response.render("index.ejs", {validacao : errors});
        return;
    }

    response.render("chat.ejs");
}