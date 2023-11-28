let principalAmount = window.prompt("Enter amount");
let interestRate = window.prompt("Enter Interest rate");
let time = window.prompt("Enter Number of Years");

interestRate = parseFloat(interestRate);

let SI = principalAmount*interestRate*time/100;

console.log(SI);