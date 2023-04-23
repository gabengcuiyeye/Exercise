/**
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
函数 myAtoi(string s) 的算法如下：
读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。
注意：
本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */

function myAtoi(s) {
  let slen = s.length;
  let symbol = "";
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = 0;
  let flag = 0;
  for (let i = 0; i < slen; i++) {
    if (i === 0 && ["-", "+"].includes(s[i])) {
      symbol = s[i];
      continue;
    }
    if (!char.includes(s[i]) && s[i] !== "") {
      return result;
    }
    if (s[i] === "" && result === 0) {
      continue;
    }
    if (result !== 0 && !char.includes(s[i])) {
      return result;
    }
    result = result + parseInt(s[i]) * Math.pow(10, flag);
    flag++;
  }

  return symbol === "-" ? -result : result;
}

console.log(myAtoi("-321"));

//状态过多，代码臃肿，可以用一个（状态机）map来简化
function myAtoiV2(s) {
  const table = {
    start: ["start", "signed", "in_number", "end"],
    signed: ["end", "end", "in_number", "end"],
    in_number: ["end", "end", "in_number", "end"],
    end: ["end", "end", "end", "end"],
  };

  let state = "start";
  let ans = 0;
  let sign = 1;

  function getCol(c) {
    if (c == " ") {
      return 0;
    }
    if (c == "+" || c == "-") {
      return 1;
    }
    if (Character.isDigit(c)) {
      return 2;
    }
    return 3;
  }

  function get(c) {
    state = table[state][getCol(c)];
    if ("in_number" === state) {
      ans = ans * 10 + c - "0";
      ans =
        sign == 1
          ? Math.min(ans, Math.pow(2, 31) - 1)
          : Math.min(ans, -Math.pow(2, 31));
    } else if ("signed" === state) {
      sign = c == "+" ? 1 : -1;
    }
  }

  for (let i = 0; i < s.length; ++i) {
    get(s[i]);
  }

  return sign * ans;
}
