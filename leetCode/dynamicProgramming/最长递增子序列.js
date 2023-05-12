/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

/**
 * 题解：如果存在j属于区间[0，i-1],并且num[i] > num[j]的话，则有，dp(i) = max(dp(j)) + 1
 */
function solution(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let dp = [];
  dp[0] = 1;
  let maxAns = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
}
