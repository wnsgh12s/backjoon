const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const answer = input[i].split(" ").map(n => Number(n)).reduce((a, b) => a + b)
  if(answer == 0){
    continue
  }else{
    console.log(answer)
  }
}