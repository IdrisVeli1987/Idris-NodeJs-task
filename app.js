// Task1 Fayldan yazıları oxuyun, uppercase edib digər fayla yazın

// import { readFileSync, writeFileSync } from "fs";

// const dataContent = readFileSync("./node.txt").toString().toUpperCase();

// // console.log(dataContent);

// writeFileSync("node2.txt", dataContent);

// -------------------------------------------------------------------------------

// Task2 Funksiya yaradın. Belə ki, onun işi kopyalamaq olsun. 2 dənə string alsın, faylın adları. Birinci faylı kopyalasın ikinci fayl yaratsın.

import { readFileSync, writeFileSync } from "fs";

function copyFile(from, to) {
  const fromContent = readFileSync(from);
  writeFileSync(to, fromContent);
}
copyFile('data.txt', 'test.txt')