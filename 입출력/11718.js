const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(e=>{
  console.log(e)
})