const fs = require('fs');
const [n, ...input] = fs.readFileSync("../dev/stdin").toString().trim().split("\n");
const nums = input[0].split(" ")
console.log(Math.min(...nums), Math.max(...nums))