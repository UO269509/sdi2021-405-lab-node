module.exports = function(app, swig) {
    app.get('/error', function(req, res) {
        let respuesta = swig.renderFile("views/error.html",
            {
            mensaje: req.params.mensaje,
            tipoMensaje: req.params.tipoMensaje

            });
        res.send(respuesta);
    })
};