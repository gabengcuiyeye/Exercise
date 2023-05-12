/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 10 级的台阶总共有多少种跳法。
 * */

/**
 * f(n) = f(n-1) + f(n-2),f(1)和f(2)只依赖于自身，从小的开始计算
 */
function jump(n) {
  if (n <= 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let a = 1,
    b = 2,
    temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
