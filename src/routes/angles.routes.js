const router = require('express-promise-router')();
const anglesController = require('../controllers/angles.controller');

// ==> Rota responsável por criar um novo 'Calculo de ângulo' somente com horas: (POST): http://localhost:3000/v1/rest/clock
router.post('/clock/:hour/:minute?', anglesController.createAngle);

module.exports = router;