/**
 * ‘A’ -> “1” ‘B’ -> “2” … ‘Z’ -> “26”
 * “11106” can be mapped into: “AAJF” with the grouping (1 1 10 6) “KJF” with the grouping (11 10 6)
 * Note that the grouping (1 11 06) is invalid because “06” cannot be mapped into ‘F’ since “6” is different from “06”.
 */

//dabao‘s 解法
function decode(s) {
  // decode(n) = decode(n-1) + decode(n-2)
  let res = 0;
  if (s.length > 0 && isValid(s.slice(0, 1))) {
    res += s.length == 1 ? 1 : decode(s.slice(1));
  }
  if (s.length > 1 && isValid(s.slice(0, 2))) {
    res += s.length == 2 ? 1 : decode(s.slice(2));
  }
  return res;
}

function isValid(s) {
  let n = parseInt(s);
  return n && n > 0 && n <= 26;
}

// console.log(decode("12"));
console.log(decode("11106"));

// 官方解法
var numDecodings = function (s) {
  const n = s.length;
  const f = new Array(n + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= n; ++i) {
    if (s[i - 1] !== "0") {
      f[i] += f[i - 1];
    }
    if (
      i > 1 &&
      s[i - 2] != "0" &&
      (s[i - 2] - "0") * 10 + (s[i - 1] - "0") <= 26
    ) {
      f[i] += f[i - 2];
    }
  }
  return f[n];
};
