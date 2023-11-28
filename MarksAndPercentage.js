let sub1 = window.prompt("Enter Subject1 marks:");
let sub2 = window.prompt("Enter Subject2 marks:");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);

let totalMarks = sub1+sub2;

let percentage = (totalMarks/200)*100; //max marks in 2 subjects is 200

percentage = parseFloat(percentage);

console.log("Total Marks="+totalMarks+" Percentage="+percentage);