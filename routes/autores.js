const express = require('express');
const router = express.Router();

const autoresModel = require("../models/autores");





router.get('/', function (req, res, next) {
    autoresModel
        .obtenerAutores()
        .then(autores => {
            res.render("autores/agregar", {
                autores: autores,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo");
        });

});


router.get('/agregar', function (req, res, next) {
    res.render("autores/agregar");
});



router.post('/insertarAutores', function (req, res, next) {
 
    const { nombreAutor, codigoPais } = req.body;
    if (!nombreAutor || !codigoPais) {
        return res.status(500).send("No hay autor o pais");
    }

    autoresModel
        .insertarAutores(nombreAutor, codigoPais)
        .then(idAutorInsertado => {
            res.redirect("/autores/agregar");
        })
        .catch(err => {
            return res.status(500).send("Error insertando");
        });

    });




    router.get('/agregar/:id', function (req, res, next) {
        autoresModel
            .obtenerPorId(req.params.id)
            .then(autor => {
                if (autor) {
                    res.render("autores/agregar", {
                        autor: autor,
                    });
                } else {
                    return res.status(500).send("No existe Autor con ese id:");
                }
            })
            .catch(err => {
                return res.status(500).send("Error obteniendo");
            });
    });







    router.get('/editar/:id', function (req, res, next) {
        autoresModel
            .obtenerPorId(req.params.id)
            .then(autor => {
                if (autor) {
                    res.render("autores/editar", {
                        autor: autor,
                    });
                } else {
                    return res.status(500).send("No existe con ese id");
                }
            })
            .catch(err => {
                return res.status(500).send("Error obteniendo");
            });
    });



    router.post('/actualizar/', function (req, res, next) {
     
        const { id, nombreAutor, codigoPais } = req.body;
        if (!titulo || !id) {
            return res.status(500).send("Faltan datos");
        }
            autoresModel
            .actualizar(id, nombreAutor, codigoPais)
            .then(() => {
                res.redirect("/autores");
            })
            .catch(err => {
                return res.status(500).send("Error actualizando");
            });
    });





    module.exports = router;