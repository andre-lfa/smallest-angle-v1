const db = require("../config/database");

// ==> Método responsável por criar um novo 'Calculo de ângulo':

exports.createAngle = async (req, res) => {
  let { hour, minute } = req.params;
  minute ? minute : minute = 0;
  
  let angle = (60 * hour - 11 * minute) / 2;

  const { rows } = await db.query(
    "INSERT INTO calculatedangles (hour, minute, angle) VALUES ($1, $2, $3)",
    [hour, minute, angle]
  );

  res.status(201).send({
    angle: angle
  });
};
