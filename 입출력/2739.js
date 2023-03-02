const fs = require('fs');
const input = fs.readFileSync("../dev/stdin").toString();
let answer = "";
for (let i = 1; i <= 9; i++) {
  answer += `${input} * ${i} = ${input * i}\n`;
}
console.log(answer);