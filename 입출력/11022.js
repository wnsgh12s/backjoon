const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach((e, i) => {
  const [a, b] = e.split(" ");
  const sum = Number(a) + Number(b);
  console.log(`Case #${i + 1}: ${a} + ${b} = ${sum}`);
});