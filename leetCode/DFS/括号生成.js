/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合
 */
// 暴力破解，生成所有再判断是否符合要求
function solution(n) {
  function loop(current = "", pos = 0, result = []) {
    if (current.length === n * 2) {
      if (isValid(current)) {
        result.push(current);
      }
    } else {
      loop(current + "(", pos + 1, result);
      loop(current + ")", pos + 1, result);
    }
  }

  function isValid(current) {
    let balance = 0;
    for (let c of current.split("")) {
      if (c === "(") {
        ++balance;
      } else {
        --balance;
      }
      if (balance < 0) {
        return false;
      }
    }
    return balance === 0;
  }

  let result = [];
  loop("", 0, result);
  return result;
}

console.log(solution(2));
