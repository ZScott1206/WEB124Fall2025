// Zoe Scott 10/30/2025

"use strict";

	function addition() {
		let num = parseInt(document.getElementById("num").value);
		let add = "";
		
		for (let i = 1; i <= 10; i++) {
			add += `${i} + ${num} = ${i + num}<br>`;
		}
		document.getElementById("add").innerHTML = add; 
	}
	
	function subtraction() {
		let num = parseInt(document.getElementById("num").value);
		let sub = "";
		let i = 1;
		
		while (i <= 10) {
			sub += `${i} - ${num} = ${i - num}<br>`;
			i++;
		}
		document.getElementById("sub").innerHTML = sub;
	}
	
	function multiplication() {
		let mul = "";
		let i = 1;
		let num = parseInt(document.getElementById("num").value);
		
		do {
			mul += `${i} * ${num} = ${i * num}<br>`;
			i++;
		} while (i <= 10);		
		document.getElementById("mul").innerHTML = mul;
	}
	
	function division() {
		let div = "";
		let i = 1;
		let num = parseInt(document.getElementById("num").value);
		
		do {
			let ans = (i / num).toFixed(2);
			div += `${i} / ${num} = ${ans}<br>`;
			i++;
		} while (i <= 10);			
		document.getElementById("div").innerHTML = div;
	}
	
	function calculate() {
		addition();
		subtraction();
		multiplication();
		division();
	}
	document.getElementById("calc").addEventListener("click", calculate);