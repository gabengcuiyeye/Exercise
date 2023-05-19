/**
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。
 * 更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。
 * 如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 必须 原地 修改，只允许使用额外常数空间。
 */

// 什么是字典序？字典序算法，从右向左比较
/***
 * 字典序算法的步骤如下：
 * 1、从原排列中，从右至左，找到第一个左邻小于右邻的字符，记左邻位置为 a。
 * 2、重新从右至左，找到第一个比 list[a] 大的字符，记为位置为 b。
 * 3、交换 a 和 b 两个位置的值。
 * 4、将 a 后面的数，由小到大排列。
 */
function solution(nums) {
  let len = nums.length - 1;
  function loop(i) {
    if (i < 0) return -1;
    if (nums[i] < nums[i + 1]) {
      return i;
    }
    return loop(i - 1);
  }
  let a = loop(len);
  function loop2(i) {
    if (i < 0) return -1;
    if (nums[i] > nums[a]) {
      return i;
    }
    return loop(i - 1);
  }
  let b = loop2(len);
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
  function sort(a) {
    for (let i = a + 1; i < nums.length; i++) {
      let j = i - 1;
      let current = nums[i];
      while (current < nums[j] && j >= a) {
        nums[j + 1] = nums[j];
        j = j - 1;
      }
      nums[j + 1] = current;
    }
  }
  sort(a + 1);
  return nums;
}

// console.log(solution([1, 2, 3]));
console.log(solution([1, 2, 3, 4, 5]));
