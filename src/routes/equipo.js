const express = require('express')
const router = express.Router();

router.get('/equipo-formulario', (req, res) => {
    res.send('Formulario de equipos')
});

module.exports = router;