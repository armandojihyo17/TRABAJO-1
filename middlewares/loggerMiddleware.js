function logRequest(req, res, next) {
    const now = new Date();
    console.log(`Acceso a la ruta: ${req.originalUrl} | Fecha y hora: ${now}`);
    next();
}

module.exports = logRequest;