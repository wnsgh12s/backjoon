const fs = require("fs")
const input = fs.readFileSync("../dev/stdin").toString()
const answer = [];

for (let i = input; i > 0; i--) {
  answer.push(" ".repeat(input - i) + "*".repeat(i * 2 - 1))
}

for (let i = 2; i <= input; i++) {
  answer.push(" ".repeat(input - i) + "*".repeat(i * 2 - 1))
}

console.log(answer.join("\n"))
