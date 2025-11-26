/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCostForDays = 40 * days;

  if (days > 6) {
    return rentalCostForDays - 50;
  }

  if (days > 2) {
    return rentalCostForDays - 20;
  }

  return rentalCostForDays;
}

module.exports = calculateRentalCost;
