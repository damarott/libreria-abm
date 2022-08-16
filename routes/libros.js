const express = require('express');
const router = express.Router();

const librosModel = require("../models/libros");

/* LA NAVEGACION */

router.get('/nosotros', function (req, res, next) {
    res.render("libros/nosotros");
});

router.get('/contacto', function (req, res, next) {
    res.render("libros/contacto");
});

router.get('/home', function (req, res, next) {
    res.render("libros/home");
});





/* UTILIZA LA URL */

router.get('/', function (req, res, next) {
    librosModel
        .obtener()
        .then(libros => {
            res.render("libros/ver", {
                libros: libros,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("libros/agregar");
});



router.post('/insertar', function (req, res, next) {
       const { titulo, precio, isbn, detalle } = req.body;
    if (!titulo || !precio) {
        return res.status(500).send("Falta titulo o precio");
    }
       librosModel
        .insertar(titulo, precio, isbn, detalle)
        .then(idLibroInsertado => {
            res.redirect("/libros");
        })
        .catch(err => {
            return res.status(500).send("Error insertando");
        });
});

router.get('/eliminar/:id', function (req, res, next) {
    librosModel
        .eliminar(req.params.id)
        .then(() => {
            res.redirect("/libros");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});

router.get('/editar/:id', function (req, res, next) {
    librosModel
        .obtenerPorId(req.params.id)
        .then(libro => {
            if (libro) {
                res.render("libros/editar", {
                    libro: libro,
                });
            } else {
                return res.status(500).send("No existe libro con id:");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo libro");
        });
});


router.post('/actualizar/', function (req, res, next) {
   
    const { id, titulo, precio, isbn, detalle } = req.body;
    if (!titulo || !precio || !id) {
        return res.status(500).send("Faltan datos");
    }
    
    librosModel
        .actualizar(id, titulo, precio, isbn, detalle)
        .then(() => {
            res.redirect("/libros");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando");
        });
});


module.exports = router;
