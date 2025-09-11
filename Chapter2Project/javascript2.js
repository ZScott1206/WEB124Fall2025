// Zoe Scott 9/10/2025
"use strict";

let myName = "Zoe Scott";
let para1 = document.getElementById("p1");
	para1.textContent = myName;
	
let n1 = 12;
let n2 = 63;

let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

let ageCompare = 19 >= numberMult;
document.getElementById("p6").textContent = ageCompare;