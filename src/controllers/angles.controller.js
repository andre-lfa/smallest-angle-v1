const db = require("../config/database");

// ==> Método responsável por criar um novo 'Calculo de ângulo':

exports.createAngle = async (req, res) => {
  const { hour, minute } = req.params;

  if(hour > 24 || minute > 60) {
    res.status(400).send({
      message: "The API only accept value between 1-24 for hours and 0-60 for minutes!"
    })
  } 

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

  let absoluteHour = Math.abs(hour);
  let absoluteMinute = Math.abs(minute);

  var calculatedAngle = (60 * absoluteHour - 11 * absoluteMinute) / 2;
  calculatedAngle > 180 ? calculatedAngle -= 360 : calculatedAngle;

  return Math.abs(calculatedAngle);
}
