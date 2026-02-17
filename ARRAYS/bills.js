/*
 * Programming Quiz: I Got Bills (6-9)
 */

const bills = [
  50.23, 19.12, 34.01,
  100.11, 12.15, 9.90,
  29.11, 12.99, 10.00,
  99.22, 102.20, 100.10,
  6.77, 2.22
];

// Add 15% tip and keep 2 decimal accuracy
const totals = bills.map(bill =>
  Number((bill * 1.15).toFixed(2))
);

console.log(totals);
