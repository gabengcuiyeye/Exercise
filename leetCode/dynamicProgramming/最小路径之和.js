/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * dp(i,j)= grid(i,j)+min(dp(i-1,j)+dp(i,j-1))
 */

const generateArr = (m, n) => {
  var a = new Array();
  for (var i = 0; i < m; i++) {
    a[i] = new Array();
    for (var j = 0; j < n; j++) {
      a[i][j] = 0;
    }
  }
  return a;
};
function solution(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = generateArr(m, n);
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}

const arr = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(solution(arr));
