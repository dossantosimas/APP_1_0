const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/torneos', (req, res) => {
    res.render('torneos');
})

module.exports = router;