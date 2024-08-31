// server.js
const express = require('express');
const logRequest = require('./middlewares/loggerMiddleware');
const fechaRuta = require('./routes/fechaRuta');
const mensajeRuta = require('./routes/mensajeRuta');

const app = express();
const PORT = 3000;

// Usar el middleware en todas las rutas
app.use(logRequest);

// Configurar rutas
app.use('/fecha', fechaRuta);
app.use('/mensaje', mensajeRuta);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
