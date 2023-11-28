let length = window.prompt("enter lenght");
let breadth = window.prompt("enter breadth");

length = parseInt(length);
breadth = parseInt(breadth);

let Area = length*breadth;
let Perimeter = 2*(length+breadth);

console.log("Area="+Area+" Perimeter="+Perimeter);