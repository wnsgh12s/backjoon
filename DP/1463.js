const fs = require("fs")
let input = Number(fs.readFileSync("../dev/stdin").toString())

let d = Array(input + 1).fill(0);
for (let i = 2; i <= input; i++) {
   
  if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1); 
  if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1); 
}
console.log(d)

console.log(d[input]); 
