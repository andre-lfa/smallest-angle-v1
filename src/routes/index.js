const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'API para calcular o menor ângulo entre os 2 ponteiros do relógio!',
    version: '1.0.0',
  });
});

module.exports = router;