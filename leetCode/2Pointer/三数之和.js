/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
 * 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 */

function threeNumberSum(nums) {
  const insertSort = (arr) => {
    for (let j = 1, len = arr.length; j < len; j++) {
      let key = arr[j];
      let i = j - 1;
      while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i];
        i = i - 1;
      }
      arr[i + 1] = key;
    }
    return arr;
  };
  const newNums = insertSort(nums);

  let result = [];
  let target = 0;

  for (let i = 0, len = newNums.length; i < len; i++) {
    let left = i + 1,
      right = newNums.length - 1;
    while (left < right) {
      const sum = newNums[left] + newNums[right] + newNums[i];
      if (sum > target) {
        right = right - 1;
      }
      if (sum < target) {
        left = left + 1;
      }
      if (sum === target) {
        result.push([newNums[i], newNums[left], newNums[right]]);
        left = left + 1;
        right = right - 1;
      }
    }
  }

  return result;
}

/**
 * 暴力解法，三层循环
 * 双指针法？需要先排序？===>不行也
 */
// [-4,-1,-1,0,1,2]

console.log(threeNumberSum([-1, 0, 1, 2, -1, -4]));
