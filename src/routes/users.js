const express = require('express')
const router = express.Router();

router.get('/sigin', (req, res) => {
    res.send('Ingresando a la aplicacion');
});

router.get('/sigup', (req, res) => {
    res.send('Formulario de autenticación');
});

module.exports = router;