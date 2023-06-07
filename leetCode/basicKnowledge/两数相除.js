/**
 * 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。
 * 注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−231,  231 − 1] 。本题中，如果商 严格大于 231 − 1 ，则返回 231 − 1 ；
 * 如果商 严格小于 -231 ，则返回 -231 。
 */

function solution(dividend, divisor) {
  const dividendSymbol = dividend >= 0 ? "+" : "-";
  const divisorSymbol = divisor >= 0 ? "+" : "-";
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  function loop(dividend, divisor, times = 0, sum = divisor) {
    if (sum > dividend) {
      return times;
    }
    times += 1;
    sum += divisor;
    return loop(dividend, divisor, times, sum);
  }
  const times = loop(dividend, divisor);
  return dividendSymbol === divisorSymbol ? times : parseInt(`-${times}`);
}

// console.log(solution(7, -3));

//题解，需要考虑溢出的情况
// 快速乘？？二分查找？？
/**快速乘算法简介
 * 由于计算机底层设计的原因，做加法往往比做乘法快得多，因此将乘法转换为加法计算将会大大提高（大数，比较小的数也没必要）乘法运算的速度，
 * 除此之外，当我们计算a*b%mod的时候，往往较大的数计算a * b会超出 long long int的范围，这个时候使用快速乘法方法也能解决上述问题。
 * 快速乘法的原理就是利用乘法分配律来将a * b转化为多个式子相加的形式求解（注意这时使用乘法分配律的时候后面的一个乘数转化为二进制的形式计算）。
 * 举个例子 20 * 14 = 20 * （1110）= 20* （2^3）* 1+ 20 * (2^2)  * 1 + 20 * (2^1) * 1+20 * (2^0) * 0=160 + 80 + 40 = 280
 * */

function test(a, b) {
  let ans = 0;
  while (b !== 0) {
    if ((b & 1) !== 0) {
      console.log("ans:", ans, "a:", a);
      ans += a;
    }
    a += a;
    console.log("a:", a, "b:", b);
    b >>= 1;
  }
  return ans;
}

console.log(test(3, 11));






// 官方解法
class Solution {
  public int divide(int dividend, int divisor) {
      // 考虑被除数为最小值的情况
      if (dividend == Integer.MIN_VALUE) {
          if (divisor == 1) {
              return Integer.MIN_VALUE;
          }
          if (divisor == -1) {
              return Integer.MAX_VALUE;
          }
      }
      // 考虑除数为最小值的情况
      if (divisor == Integer.MIN_VALUE) {
          return dividend == Integer.MIN_VALUE ? 1 : 0;
      }
      // 考虑被除数为 0 的情况
      if (dividend == 0) {
          return 0;
      }
      
      // 一般情况，使用二分查找
      // 将所有的正数取相反数，这样就只需要考虑一种情况
      boolean rev = false;
      if (dividend > 0) {
          dividend = -dividend;
          rev = !rev;
      }
      if (divisor > 0) {
          divisor = -divisor;
          rev = !rev;
      }
      
      int left = 1, right = Integer.MAX_VALUE, ans = 0;
      while (left <= right) {
          // 注意溢出，并且不能使用除法
          int mid = left + ((right - left) >> 1);
          boolean check = quickAdd(divisor, mid, dividend);
          if (check) {
              ans = mid;
              // 注意溢出
              if (mid == Integer.MAX_VALUE) {
                  break;
              }
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return rev ? -ans : ans;
  }

  // 快速乘
  public boolean quickAdd(int y, int z, int x) {
      // x 和 y 是负数，z 是正数
      // 需要判断 z * y >= x 是否成立
      int result = 0, add = y;
      while (z != 0) {
          if ((z & 1) != 0) {
              // 需要保证 result + add >= x
              if (result < x - add) {
                  return false;
              }
              result += add;
          }
          if (z != 1) {
              // 需要保证 add + add >= x
              if (add < x - add) {
                  return false;
              }
              add += add;
          }
          // 不能使用除法
          z >>= 1;
      }
      return true;
  }
}
