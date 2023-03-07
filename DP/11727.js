const fs = require("fs")
let input = Number(fs.readFileSync("../dev/stdin").toString())
const tile = {
    1: 1,
    2: 3
}

for (let i = 3; i <= input; i++) {
    tile[i] = (tile[i - 1] + 2 * tile[i - 2]) % 10007
}

console.log(tile[input])
