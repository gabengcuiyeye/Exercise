/*
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
*/

function revert(x) {
  let num = Math.abs(x);
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    num = Math.floor(num / 10);
    result = result * 10 + temp;
  }
  return result;
}

/*
问题好像在于其他语言怎么处理整数？
用栈？用字符串？
===》取模，拿到最后一位整数，拼接成新的整数
*/

console.log(revert(54321));
