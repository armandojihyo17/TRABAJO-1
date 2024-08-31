const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Este es un mensaje simple.');
});

module.exports = router;