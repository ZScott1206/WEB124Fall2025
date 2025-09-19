// Zoe Scott 9/18/2025
"use strict";

const myName = "Zoe Scott" // Variable to store my full name
console.log(myName);
document.getElementById("p1").textContent = myName;

let mySalary = 45000; // Variable to store my desired annual salary
console.log(mySalary);
document.getElementById("p2").textContent = "$" + mySalary;

let veteranStatus = "Not a veteran"; // Variable to store my veteran status
console.log(veteranStatus);
document.getElementById("p3").textContent = veteranStatus;

const friends = ["Abby", "Alana", "Cale"]; // Array of 3 friends and their names
console.log(friends);

let friendsSalary = [40000, 50000, 60000] // Array of my 3 friends' desired annual salary
console.log(friendsSalary);

let fourthFriend = {
	firstName: "Jane",
	lastName: "Doe",
	salary: 100000
}; // Object that stores first name, last name, and desired annual salary for a fourth friend
console.log(fourthFriend);
