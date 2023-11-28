let n = window.prompt("Enter number of elements");
let sum=0;

for(let i=0; i<n; i++){
    let num=parseInt(window.prompt("Enter element or num"));
    sum = sum+num;
}

let avg = sum/n;

console.log("Average="+avg);