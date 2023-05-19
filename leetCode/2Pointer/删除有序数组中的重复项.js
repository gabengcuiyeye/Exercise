/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
 * 返回 k 。
 */
// 要求原地删除
function solution(nums) {
  function moveForward(nums, pos) {
    let index = pos,
      len = nums.length;
    while (index < len) {
      nums[index] = nums[index + 1];
      index += 1;
    }
    return nums;
  }
  let index = 1,
    current = 1,
    len = nums.length;
  while (index < len) {
    // 重复
    if (nums[current] === nums[current - 1]) {
      nums = moveForward(nums, current);
      index += 1;
    } else {
      index += 1;
      current += 1;
    }
  }
  return current;
}

// console.log(solution([1, 1, 2, 2, 3, 4, 5]));

// 官方 ==> 双指针，快慢指针
function solutionV2(nums) {
  let index = 1,
    current = 1,
    len = nums.length;
  while (index < len) {
    // 重复
    if (nums[index] === nums[index - 1]) {
      index += 1;
    } else {
      nums[current] = nums[index];
      current += 1;
      index += 1;
    }
  }
  return current;
}

console.log(solutionV2([1, 1, 2, 2, 3, 4, 5]));
