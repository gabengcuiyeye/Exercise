/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/
function twoNumberSum(nums, target) {
  let map = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (target > nums[i]) {
      let num = target - nums[i];
      if (map[num] && map[num] !== i) {
        return [i, map[num]];
      }
    }
  }
  return [-1, -1];
}

// 时间复杂度O(2n)
console.log(twoNumberSum([2, 7, 11, 15], 9));
console.log(twoNumberSum([3, 3], 6));
console.log(twoNumberSum([3, 2, 4], 6));

function twoNumberSumOfficial(nums, target) {
  let map = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    let num = target - nums[i];
    if (map[num]) {
      return [i, map[num]];
    } else {
      map[nums[i]] = i;
    }
  }
  return [-1, -1];
}

//时间复杂度O(n)

/*
本题总结：要注意时间复杂度高在哪里，以及怎么解决，本题使用哈希表降低了时间复杂度
*/
