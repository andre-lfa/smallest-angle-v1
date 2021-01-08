const db = require("../config/database");

// ==> Método responsável por criar um novo 'Calculo de ângulo':

exports.createAngle = async (req, res) => {
  const { hour, minute } = req.params;

  const angle = calculateSmallestAngle(hour, minute);

  const { rows } = await db.query(
    "INSERT INTO calculatedangles (hour, minute, angle) VALUES ($1, $2, $3)",
    [hour, minute, angle]
  );

  res.status(201).send({
    angle: angle
  });
};

function calculateSmallestAngle(hour, minute = 0) {
  
  var calculatedAngle = (60 * hour - 11 * minute) / 2;
  calculatedAngle < 180 ? calculatedAngle : calculatedAngle = calculatedAngle - 180; 

  return Math.abs(calculatedAngle);
}
