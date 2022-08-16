const conexion = require("../conexion")

module.exports = {
    insertarAutores(nombreAutor, codigoPais) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into autor
            (nombreAutor, codigoPais)
            values
            (?, ?)`,
                [nombreAutor, codigoPais], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });


    },

  
  obtenerAutores() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombreAutor, codigoPais from autor`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    
    obtenerAutoresPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombreAutor, codigoPais from autor where id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },



    actualizarAutor(id, nombreAutor, codigoPais) {
        return new Promise((resolve, reject) => {
            conexion.query(`update autor
            set nombreAutor = ?,
            codigoPais = ?,
            where id = ?`,
                [nombreAutor, codigoPais, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },


/*

    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from libros
            where id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },

*/


};

