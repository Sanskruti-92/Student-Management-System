// REPORT CARD GENERATOR
function generateResult(){

let inputs=document.querySelectorAll(".marks");
let total=0;

inputs.forEach(i=>{
total+=Number(i.value);
});

let per=total/inputs.length;

let grade;

if(per>=85) grade="Distinction";
else if(per>=60) grade="First Class";
else if(per>=35) grade="Pass";
else grade="Fail";
s
document.getElementById("result").innerHTML=
"Percentage: "+per.toFixed(2)+"% | Result: "+grade;

}



// ADD FEE FUNCTION
function addFee(){

let name=document.getElementById("fname").value;
let total=document.getElementById("total").value;
let paid=document.getElementById("paid").value;

let remain=total-paid;

let row="<tr><td>"+name+"</td><td>"+total+"</td><td>"+paid+"</td><td>"+remain+"</td></tr>";

document.getElementById("feeTable").innerHTML+=row;

}
function logout(){

localStorage.removeItem("role");
localStorage.removeItem("dept");

window.location="login.html";

}