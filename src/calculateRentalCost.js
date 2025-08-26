/**
 * @param {number} days
 *
 * @return {number}
 */
// 3. Prefer `const` over `let` where possible, to avoid unintentional changes.
// 4. Prefer `if` with `return` over `if else` to simplify later conditions. 
// 5. DON'T add `else` after `if` with `return` - the code after it won't be executed anyway.

function calculateRentalCost(days) {
  // write code here
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
