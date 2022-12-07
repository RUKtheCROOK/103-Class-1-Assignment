//  Below are some js functions
// var =variable and it is not used very much
// let =another way to make a variable with less issues and the number can be changed
// const =constant and it is another way to make a variable but is a constant
var age = 100;
let userName = "JimBob";
let taxes = 11.5;
const name = "john";

console.log(age, userName, taxes, name);

userName = "RUKtheCROOK";

console.log(userName);

let childrenNumber = 0;
let spouseName = "Megan";
let geoLocation = "Nebraska";
let Job = "Student";

document.write(
  `I have ${childrenNumber} children with my spouse named ${spouseName}. We live in ${geoLocation} and I currently do not work but am instead a ${Job}
    .`
);
