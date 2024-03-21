// Task1

import { readFileSync, writeFileSync } from "fs";
const readFile = readFileSync("./node.txt", {
  encoding: "utf-8",
});
writeFileSync('./data.txt', readFile.toUpperCase())
console.log(readFile.toUpperCase())


// import { readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";

// writeFileSync('./data.txt', "node js oyrenirem🚀csljdnksnalcas😂cxvsdvds", {
//     flag: "a"
// })

// const data = readFileSync("./data.txt", {
//     encoding: 'utf-8'
// });
// console.log(data.toString());

//Write alphabet on abc.txt file
// function getAlphabet() {
//   const alphabet = [];
//   for (let i = 65; i <= 90; i++) {
//     let letter = String.fromCharCode(i).concat(String.fromCharCode(i + 32));
//     alphabet.push(letter);
//   }
//   return alphabet;
// }
// console.log(getAlphabet());

// writeFileSync('./abc.txt', getAlphabet().join('\n'))
// renameSync("./abc.txt", "./node.txt")
// unlinkSync("./node.txt")
// writeFileSync("./data.txt", "");

// function getMultiplication() {
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       writeFileSync("./multip.txt", `${i} * ${j} = ${i * j}\n`, {
//         flag: 'a'
//       });
//     }
//      writeFileSync("./multip.txt", `\n`, {
//        flag: "a",
//      });
//   }
// }
// getMultiplication();

// const file = readFileSync("./app.rus");
// const codes = file.toString().trim().split("\n");
// console.log(codes);
// codes.forEach((code) => {
//   const statement = code.split(" ");
//   console.log(statement);

//   if (statement[0] == "log") {
//     if (statement[1] === "cem") {
//       console.log(+statement[2] + +statement[3]);
//     } else if (statement[1] === "vur") {
//       console.log(vur(statement[2], statement[3]));
//     } else {console.log(code.slice(3))};
//   }
// });

// function cem(a, b) {
//   return +a + +b;
// }
// function vur(a, b) {
//   return a * b;
// }
// function log(txt) {
//   console.log(txt);
// }

// ----------------------------------------------------------
