let fs = require('fs');
let input = fs.readFileSync('../dev/stdin').toString().split(' ');
const days = {
  "1": "MON",
  "2": "TUE",
  "3": "WED",
  "4": "THU",
  "5": "FRI",
  "6": "SAT",
  "0": "SUN",
}
console.log(days[new Date(`2007-${input[0]}-${input[1]}`).getDay()])