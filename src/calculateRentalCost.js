/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let pay = dailyRate * days;
  if (days >= 7) {
    pay -= 50;
  } else if (days >= 3) {
    pay -= 20;
  }
  return pay;
}

module.exports = calculateRentalCost;
