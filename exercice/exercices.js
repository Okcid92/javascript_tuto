// exercice 1 les dates

// const d = new Date();

// let Iday = d.getDay();
// let month = d.getMonth();
// let year = d.getFullYear();
// let hours = d.getHours();
// let minutes = d.getMinutes();
// let secondes = d.getUTCSeconds();

// const listOfDay = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (let i = 0; i < listOfDay.length; i++){
//     if (i === Iday) {
//         day = listOfDay[i - 1]
//     }
// };

// const day = listOfDay[Iday - 1]

// console.log(`Today is : ${day}, ${month} ${year}\n Current time is : ${hours}h:${minutes}:${secondes}`)

// exercice 2 l'aire du triangle

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let number = [];
// let s,
//   ara = 0;

// function area(a, b, c) {
//   s = (a + b + c) / 2;
//   ara = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return ara;
// }

// rl.question("enter number a: ", (a) => {
//   number.push(Number(a));
//   rl.question("enter number b: ", (b) => {
//     number.push(Number(b));
//     rl.question("enter number c: ", (c) => {
//       number.push(Number(c));
//       rl.close();
//       const [na, nb, nc] = number;
//       console.log(number);
//       console.log(area(na, nb, nc));
//     });
//   });
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("your name: ", (name) => {
//   console.log(`your name is ${name}`);
//   rl.close();
// });

// exercice 3 pair ou impaire

// function deduction(number) {
//   return number % 2 === 0 ? "le nombre est pair" : "le nombre est impaire";
// }

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("entre le nombre pour voir: ", (number) => {
//   console.log(deduction(Number(number)));
//   rl.close();
// });

// exercice 4 table de multiplication

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function multiplication(number) {
//   for (let i = 0; i <= 10; i++) console.log(`${number} * ${i} = ${number * i}`);
// }

// rl.question("enter your number: ", (number) => {
//   multiplication(Number(number));
//   rl.close();
// });

// exercice 5 La Somme d’un Tableau

// 👉 Crée un tableau [1, 2, 3, 4, 5] et calcule la somme de ses éléments.
// (Concepts : arrays, boucle for, .length)
// let sum = 0;

// const myArray = [1, 2, 3, 4, 5];
// for (let index = 0; index < myArray.length; index++) {
//   sum += myArray[index];
// }

// console.log(sum);

// exercice 6 Compter les Voyelles

// 👉 Demande une phrase à l’utilisateur et compte combien de voyelles (a, e, i, o, u) elle contient.
// (Concepts : string, boucle for, conditions)

// const voyelles = ["a", "e", "i", "o", "u"];
// let counter = 0;
// let counterC = 0;
// function countVo(phrase) {
//   for (let char of phrase.toLowerCase()) {
//     if (voyelles.includes(char)) {
//       counter++;
//     } else if (/[a-z]/.test(char)) {
//       counterC++;
//     }
//   }
//   console.log(`voyelles ${counter} consonnes ${counterC}`);
// }

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("enter phrase: ", (phrase) => {
//   countVo(String(phrase));
//   rl.close();
// });

// exercice 7 Palindrome Checker

// 👉 Vérifie si un mot est un palindrome (ex: "radar", "kayak").
// (Concepts : manipulation de string, .split(), .reverse(), .join())

// function palindromeCheker(phrase) {
//   return phrase === phrase.split('').reverse().join('')
//     ? "it's a palindrome"
//     : "it's not a palindrome";
// }
// console.log(palindromeCheker(String("kayak")))

// exercice 8 Mini Calculatrice

// 👉 Demande 2 nombres + une opération (+, -, *, /) et affiche le résultat.
// (Concepts : switch/case, fonctions, opérateurs mathématiques)
