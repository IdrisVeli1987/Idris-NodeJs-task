// Task1 Fayldan yazıları oxuyun, uppercase edib digər fayla yazın

import { readFileSync, writeFileSync } from "fs";

const dataContent = readFileSync("./node.txt").toString().toUpperCase();

// console.log(dataContent);

writeFileSync("node2.txt", dataContent);
