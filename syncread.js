const { Console } = require("console");
let fs=require("fs");
let data=fs.readFileSync("demo2.txt");
let info=data.toString();
console.log(info);
console.log("hi");
console.log("hello");