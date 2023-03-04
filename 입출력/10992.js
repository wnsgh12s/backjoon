
const fs = require('fs');
const input = +fs.readFileSync('../dev/stdin').toString();

for (let i = 1; i <= input; i++) {
  if (i === 1) {
    console.log(' '.repeat(input - i) + '*')
    continue
  }
  if (i !== input) {
    console.log(' '.repeat(input - i) + '*' + ' '.repeat(2 * (i - 1) - 1) + '*');
    continue
  }
  console.log('*'.repeat(2 * i - 1));
}

