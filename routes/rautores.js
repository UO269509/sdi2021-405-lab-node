module.exports = function(app, swig) {
    app.get("/autores", function(req, res) {

        let autores = [ {
            "nombre": "Francisco",
            "grupo": "Grupo1",
            "rol": "Cantante"
        }, {
            "nombre": "Edward",
            "grupo": "Grupo1",
            "rol": "Batería"
        }, {
            "nombre": "Enrique",
            "grupo": "Grupo2",
            "rol": "Cantante"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            autores: autores
        });

        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let roles = ["Cantante", "Batería", "Guitarrista", "Teclista", "Bajista"];
        let respuesta = swig.renderFile('views/autores-agregar.html', {
            roles: roles
        });
        res.send(respuesta);
    })

    app.post('/autor', function(req, res) {
        let respuesta = ""
        if (typeof req.body.nombre === 'undefinded' ||  req.body.nombre === null) {
            respuesta +="Nombre no enviado en la petición" + "<br>";
        } else {
            respuesta +="Autor agregado: " + req.body.nombre + "<br>";
        }
        if (typeof req.body.grupo === 'undefinded' ||  req.body.grupo === null) {
            respuesta +="Grupo no enviado en la petición" + "<br>";
        } else {
            respuesta +="Grupo agregado: " + req.body.grupo + "<br>";
        }
        if (typeof req.body.rol === 'undefinded' ||  req.body.rol === null) {
            respuesta +="Rol no enviado en la petición" + "<br>";
        } else {
            respuesta +=" Rol agregado: " + req.body.rol + "<br>";
        }
        res.send(respuesta);
    });

    app.get('/autores/*', function(req, res) {
        res.redirect('/autores');
    });
};