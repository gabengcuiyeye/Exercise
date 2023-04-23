/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。
说明：你不能倾斜容器。
 */

function getMaxContainer(arr) {
  let max = 0;
  const getMin = (val1, val2) => {
    return val1 > val2 ? val2 : val1;
  };
  const getMax = (val1, val2) => {
    return val1 > val2 ? val1 : val2;
  };
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let result = (j - i) * getMin(arr[i], arr[j]);
      max = getMax(result, max);
    }
  }
  return max;
}

/**
 * 暴力解法，两个for循环？
 */

// console.log(getMaxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * 双指针解法
 * 什么时候该用双指针？有两个值的大小要比较的时候？
 */

function getMaxContainerV2(arr) {
  let left = 0,
    right = arr.length - 1;
  let maxValue = 0;
  while (left < right) {
    let value = (right - left) * Math.min(arr[left], arr[right]);
    maxValue = Math.max(value, maxValue);
    if (arr[left] > arr[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return maxValue;
}

console.log(getMaxContainerV2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
