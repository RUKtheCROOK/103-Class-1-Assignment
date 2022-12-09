// let userName = prompt("Enter your username");
// let email = prompt("Enter your email");
// let password = prompt("Enter your password");
// let age = prompt("Enter your age");
// let country = prompt("Enter your country");
// let salaryMonthly = prompt("Enter your salary");

// console.log(userName, email, salaryMonthly * 12);
// document.write(`<p>User: ${userName}</p>
// <p>Email: ${email}</p>
// <p>Salary monthly: ${salaryMonthly}
// <p>Salary yearly: ${salaryMonthly * 12}`);

function greeting() {
  alert("Hello");
  return "john";
}

function sum() {
  return 10 + 10;
}

console.log(sum());

let displayValues = function () {
  console.log("displaying values...");
};
displayValues();

// arrow function

let traveling = (country) => "traveling to ..." + country;

travel = traveling("italy");
console.log(travel);
let total = 0;

function addCart(price) {
  total = total + price;
  console.log(total);
  return total;
}

function taxes() {
  subtotal = addCart(2);
  let totaltax = subtotal * 1.11;
  document.getElementById("recipt").innerHTML = `
<p>Subtotal = ${subtotal}</p>
<p>Total = ${totaltax}</p>`;
}
