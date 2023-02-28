const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(e => {
  console.log(e.split(",").reduce((a, b) => Number(a) + Number(b)))
})