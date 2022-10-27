const express = require('express')
const router = express.Router();


router.get('/torneo', (req, res) => {
    res.send('torneo')
});



module.exports = router;