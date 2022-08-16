const conexion = require("../conexion")

module.exports = {
    insertar(titulo, precio, isbn, detalle) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into libros
            (titulo, precio, isbn, detalle)
            values
            (?, ?, ?, ?)`,
                [titulo, precio, isbn, detalle], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },

    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, titulo, precio, isbn, detalle from libros`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },

    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, titulo, precio, isbn, detalle from libros where id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(id, titulo, precio, isbn, detalle) {
        return new Promise((resolve, reject) => {
            conexion.query(`update libros
            set titulo = ?,
            precio = ?,
            isbn = ?,
            detalle = ?
            where id = ?`,
                [titulo, precio, isbn, detalle, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
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
};
