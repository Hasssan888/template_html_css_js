/*
  S Challenge
*/


// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero

// // 8 H
// console.log(a.charAt(a.length - 4).toUpperCase().repeat(8)); // H H H H H H H H
// console.log(a.substr(a.length - 4, 1).toUpperCase().repeat(8));
// console.log(a.substring(a.length - 4, a.length - 3).toUpperCase().repeat(8));

// console.log(a.substring(0, 6)); // Elzero
// console.log(a.substr(0,7) + a.substr(11, 6)); // Elzero School
// console.log(a.charAt(0).toLowerCase() + a.substr(1, a.length - 2).toUpperCase() + a.charAt(a.length - 1));

/*
   If Challenge
*/

// let a = 10;

// if (a < 10)
//    console.log(10);
// else if (a >= 10 && a <= 40)
//    console.log("10 to 40");
// else if (a > 40)
//    console.log("> 40");
// else
//    console.log("Unknown");

// // Write With Ternary If Syntax

// a < 10 ? console.log(10) : 
// a >= 10 && a <= 40 ? console.log("10 to 40") : 
// a > 40 ? console.log("> 40") : 
// console.log("Unknown");

// let st = "Elzero Web School";

// console.log(`length th st is ${st.length}`);
// if ((st.length * 2).toString() === "34")
//    console.log("Good");
// console.log(`length th st is ${(st.length * 2).toString()}`);
// // W Position May Change
// if (st.charAt(st.search("W")).toLowerCase() ===  "w")
//    console.log("Good");

// if (st !== "string")
//    console.log("Good");

// if (typeof (st.length) === "number")
//    console.log("Good");

// if (st.substring(0, 6).repeat(2) === "ElzeroElzero")
//    console.log("Good");

/*
   Switch Challenge
*/

// let job = "Designer";
// let salary = 0;

// switch (job)
// {
//    case "Manager":
//       salary = 8000;
//       console.log(`the salary is ${salary}`);
//       break;
//    case "It":
//    case "Support":
//       salary = 6000;
//       console.log(`the salary is ${salary}`);
//       break;
//    case "Developer":
//    case "Designer":
//       salary = 7000;
//       console.log(`the salary is ${salary}`);
//       break;
//    default:
//       salary = 4000;
//       console.log(`the salary is ${salary}`);
//       break;
// }

/* 
   Arrays Challenges
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here

// console.log(my.slice(zero, ++counter).reverse()); // ["osama", "Elham", "Mazero", "Ahmed"]
// console.log(counter);

// console.log(my.slice(counter - --counter, counter).reverse()); //["Elham","Mazero"]
// console.log(counter);
// let m = my.slice(++zero, counter).reverse().join("").slice(--zero - ++counter);// ElhamMazero
// console.log(`zero = ${zero}`);
// console.log(`counter = ${counter}`);
// console.log(m);
// let n = my.slice(++zero, --counter).reverse().join("").slice(--zero, --counter);
// console.log(n);
// let p = n + m;
// console.log(p); // "Elzero"
// console.log(`zero = ${zero}`);
// console.log(`counter = ${counter}`);
// p = p.slice(-counter).split("");
// console.log(p[zero] + p[--counter].toUpperCase());//rO

/*
  Loop Challenge
*/

let   myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let   myEmployees = ["Amgad", "Samah", "Ammer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let i = 0;
while (i < myAdmins.length)
{
   if (myAdmins[i] == "Stop")
      break;
i++;
}
document.write(`<div>We Have ${i} Admins</div>`);

let j = 0;
while (j < i)
{
   document.write(`<p>The </p>`);
}