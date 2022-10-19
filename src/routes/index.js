const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
})

router.get('/about', (req, res) => {
    res.send('About');
})

router.get('/torneos', (req, res) => {
    res.send('Torneos');
})

module.exports = router;