const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('libros/home', { title: 'Express' });
});


module.exports = router;
