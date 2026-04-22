// 1)module.(File To File)
// for (let i = 0; i < 10; i++) {
//   console.log("10 Times Hellow");
// }
// let add = require("./anothr");
// console.log(add(5));

// 2)module.exports(Folder to Folder)

// let sum = require("calculations");
// sum(10, 10);

// 3)import
// import { sum, mul } from "./anothr.js";
// console.log(sum(5, 10));
// console.log(mul(5, 5));

// 4)import pakages
import { generate, count } from "random-words";

console.log(generate());
//output: 'army'
