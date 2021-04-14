module.exports = function(app, swig) {
    app.get('/error', function(req, res) {
        let respuesta = swig.renderFile("views/error.html",req.session.errores);
        res.send(respuesta);
    })
};