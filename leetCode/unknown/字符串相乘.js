/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 */
// 模仿乘法竖式计算
function solution(num1, num2) {
  function loop(num1, num2, index = num2.length - 1, result = 0) {
    if (index < 0) return result;
    let temp = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      temp += num1[i] * num2[index] * 10 ** (num1.length - 1 - i);
    }
    result += temp * 10 ** (num2.length - 1 - index);
    return loop(num1, num2, (index = index - 1), result);
  }
  return loop(num1, num2);
}

console.log(solution("12", "35"));
