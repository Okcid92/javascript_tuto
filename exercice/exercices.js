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

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("enter the first one: ", (num1) => {
//   rl.question("enter the operator: ", (op) => {
//     rl.question("enter the second one: ", (num2) => {
//       rl.close();
//       let a = Number(num1);
//       let b = Number(num2);
//       let result;
//       switch (op) {
//         case "+":
//           result = a + b;
//           break;
//         case "-":
//           result = a - b;
//           break;
//         case "*":
//           result = a * b;
//           break;
//         case "/":
//           result = b === 0 ? "invalid: b < 0 !!!" : a / b;
//           break;
//         default:
//           console.log("invalid op");
//           break;
//       }
//       console.log(`result = ${result}`);
//     });
//   });
// });

// exercice 9 Jeu du Nombre Secret 🎲

// 👉 Génère un nombre aléatoire entre 1 et 10. L’utilisateur doit le deviner.
// Le programme lui dit si son nombre est trop grand ou trop petit jusqu’à ce qu’il trouve.
// (Concepts : Math.random, boucle while, conditions)

// const readline = require("readline");

// const nmbrToDevine = Math.floor(Math.random() * 10) + 1;

// function deviner() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question("Entrer votre choix: ", (choix) => {
//     const a = Number(choix);

//     if (a < nmbrToDevine) {
//       console.log("Plus grand !");
//       rl.close();
//       deviner(); // relance la fonction si pas encore trouvé
//     } else if (a > nmbrToDevine) {
//       console.log("Plus petit !");
//       rl.close();
//       deviner(); // relance
//     } else {
//       console.log("Bravo ! Vous avez deviné !");
//       rl.close(); // fin du jeu
//     }
//   });
// }

// deviner();

// const readline = require("readline");

// function ask(question) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   return new Promise((resolve) =>
//     rl.question(question, (answer) => {
//       rl.close();
//       resolve(answer);
//     })
//   );
// }

// (async () => {
//   const nmbrToDevine = Math.floor(Math.random() * 10) + 1;
//   let a = null;

//   while (a !== nmbrToDevine) {
//     a = Number(await ask("Devinez le nombre (1-10) : "));

//     if (a < nmbrToDevine) console.log("Plus grand !");
//     else if (a > nmbrToDevine) console.log("Plus petit !");
//     else console.log("Bravo ! Vous avez deviné !");
//   }
// })();

// const readline = require("readline");

// function ask(question) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       rl.close();
//       resolve(answer);
//     });
//   });
// }

// (async () => {
//   let score = Number(0);

//   let rp1 = await ask("la capitale du burkina faso?: ");
//   if (rp1 && rp1.toLowerCase() === "ouagadougou") score++;
//   let rp2 = await ask("la capitale du mali?: ");
//   if (rp2 && rp2.toLowerCase() === "bamako" ) score++;
//   let rp3 = await ask("la capitale du niger?: ");
//   if (rp3 && rp3.toLowerCase() === "niamey") score++;
//   console.log(score);
// })();

// exercice 10 Gestion d’une To-Do List
// 👉 Crée un tableau vide. L’utilisateur peut :
// Ajouter une tâche
// Supprimer une tâche
// Afficher toutes les tâches
// (Concepts : arrays, fonctions, menus CLI, boucles)

let listTasks = [];

function ask(question) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function addTasks() {
  let task = await ask("enter your new task: ");
  listTasks.push(task);
}

async function deleteTasks() {
  console.log(listTasks);
  let del = await ask("enter task you want to delete: ");
  listTasks.includes(del)
    ? listTasks.splice(listTasks.indexOf(del), 1)
    : "introuvable";
}

async function affiche() {
  for (let index = 0; index < listTasks.length; index++) {
    console.log(`${index} -> ${listTasks[index]}\n`);
  }
}

(async () => {
  while (true) {
    let choice = await ask("1.add\n2.delete\n3.show all\n4.exit\nchoice: ");
    if (choice.toLowerCase() === "exit" || choice === "4") {
      console.log("Bye !");
      return; // quitte la boucle
    }
    choice = Number(choice); // convertit si nécessaire

    switch (choice) {
      case 1:
        await addTasks();
        break;
      case 2:
        await deleteTasks();
        break;
      case 3:
        await affiche();
        break;
      default:
        console.log("Choix invalide");
    }
  }
})();
