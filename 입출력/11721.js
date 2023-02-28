const fs = require("fs")
const input = fs.readFileSync("./dev/stdin").toString()


const n = Math.ceil(input.length / 10)

for (let i = 0; i < n; i++) {
  console.log(input.substring(i * 10, (i + 1) * 10))
}