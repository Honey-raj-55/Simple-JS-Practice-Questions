let quantity = window.prompt("Enter No. of products");
let price = window.prompt("Enter price of one product");

let amount = quantity*price;

let discAmount = amount*0.10;

let finalAmount = amount-discAmount;

console.log("amount="+amount+" discount amount="+discAmount+" Final Amount="+finalAmount);