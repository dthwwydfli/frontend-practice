//Given this array of orders, use map to return a summary string for each: "Ali paid £30" or "Sara — no payment info" if payment is missing.

const users = [{name:"Ali",payment:{amount:30}},{name:"Sara"},{name:"Tom",payment:{amount:55}}];

const result = users.map((p) => p.payment ? `${p.name} paid £${p.payment.amount}` : `${p.name} — no payment info`);

console.log(result);

