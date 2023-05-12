// f(n) = f(n-1) + f(n-2)
// f(0)=1,f(1)=1
function solution(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return solution(n - 1) + solution(n - 2);
}

// console.log(solution(4));

// 动态规划？不是递归转迭代吗===>什么是动态规划？通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法；
// 动态规划有什么优点？减少重复计算，减少空间占用
//  怎么实现的？解决子问题，记忆化存储减少重复计算
// 一般哪些问题可以用动态规划？最长公共子序列、最优二分搜索树等。
function solutionV2(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// console.log(solutionV2(3));

// 滚动数组，节省空间
function solutionV3(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return dp[1];
}

console.log(solutionV3(3));
