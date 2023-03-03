const fs = require("fs")
const input = fs.readFileSync("../dev/stdin").toString()
let top = ""
let bottom = ""

for (let i = 1; i <= input; i++) {
  top += "*".repeat(i) + " ".repeat((input - i) * 2) + "*".repeat(i) + "\n"
}

for (let i = 1; i < input; i++) {
  bottom += "*".repeat(input - i) + " ".repeat(i * 2) + "*".repeat(input - i) + "\n"
}

console.log(top+bottom)
