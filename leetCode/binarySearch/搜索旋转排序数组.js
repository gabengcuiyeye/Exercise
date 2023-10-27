/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */

function solution(nums, target) {
  let left = 0,
    right = nums.length - 1;
  mid = (right - left) >> 1;
  while (left <= right) {
    if (nums[mid] === target) return mid;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    console.log("left,right,mid", left, right, mid, nums[mid]);

    let midNum = nums[mid];
    if (midNum > nums[left] && nums[left] < target) {
      right = mid - 1;
      left = left + 1;
      mid = (right - left) >> 1;
    }

    if (midNum > nums[left] && nums[left] > target) {
      right = right - 1;
      left = mid + 1;
      mid = (right - left) >> 1;
    }

    if (midNum < nums[left] && nums[left] > target) {
      left = mid + 1;
      right = right - 1;
      mid = (right - left) >> 1;
    }
    if (midNum < nums[left] && nums[left] < target) {
      left = left + 1;
      right = mid - 1;
      mid = (right - left) >> 1;
    }
    if (midNum === nums[left]) {
      return -1;
    }
  }
  return -1;
}

console.log(solution([4, 5, 6, 7, 0, 1, 2], 0));
