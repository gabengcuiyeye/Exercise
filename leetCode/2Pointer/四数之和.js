/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 * 示例 1：
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */
// 暴力解法，四重for循环
// 双指针法，需要先排序，能省略一层循环

function sort(nums) {
  // 插入排序
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let index = i - 1;
    while (index >= 0 && current < nums[index]) {
      nums[index + 1] = nums[index];
      index -= 1;
    }
    nums[index + 1] = current;
  }
  return nums;
}
function solution(nums1, target) {
  let nums = sort(nums1);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let left = j + 1,
        right = nums.length - 1;
      if (nums[i] + nums[j] > target) return result;
      // 如何去重
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left += 1;
          right -= 1;
        }
        if (sum > target) {
          right -= 1;
        }
        if (sum < target) {
          left += 1;
        }
      }
    }
  }
  return result;
}

console.log(solution([5, 3, 1, 2, 5, 7, 9, 10, 13], 11));
console.log(solution([1, 0, -1, 0, -2, 2], 0));
