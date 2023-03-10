const line = require("fs").readFileSync("../dev/stdin", "utf8");
let [t, ...input] = line.trim().split("\n").map(e => Number(e));
const dp = {
  1: 1,
  2: 2,
  3: 4
}

input.forEach(n => {
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  console.log(dp[n])
})