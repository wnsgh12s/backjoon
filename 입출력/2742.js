let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString();
let answer = ""


while (input) {
  if(input == "1"){
    answer += input--
    break  
  }
  answer += input-- + "\n"
}

console.log(answer)
