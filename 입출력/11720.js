const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(e => {
  console.log(e.split("").map(e => Number(e)).reduce((a, b) => a + b))
})