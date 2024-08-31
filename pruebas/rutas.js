const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Felicitaciones has accedido a la fecha y hora mi estimado");
});

module.exports = router;