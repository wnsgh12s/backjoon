const fs = require("fs")
const input = fs.readFileSync("../dev/stdin").toString()
const answer = []

for (let i = 1; i <= input; i++) {
  answer.push(" ".repeat(input - i) + "*".repeat(i))
}

for (let i = 1; i < input; i++) {
  answer.push(" ".repeat(i) + "*".repeat(input - i))
}
console.log(answer.join("\n"))