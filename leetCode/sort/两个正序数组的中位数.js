/*
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
算法的时间复杂度应该为 O(log (m+n)) 。
nums1 = [1,2] nums2 = [3,4] 输出2.5
*/

function getMiddleNumber(nums1, nums2) {
  for (let i = 0, len = nums1.length; i < len; i++) {
    let j = nums2.length - 1;
    while (nums1[i] < nums2[j] && j >= 0) {
      nums2[j + 1] = nums2[j];
      j = j - 1;
    }
    nums2[j + 1] = nums1[i];
  }
  if (nums2.length % 2 === 0) {
    let mid = nums2.length / 2;
    return (nums2[mid] + nums2[mid - 1]) / 2;
  } else {
    return nums2[Math.floor(nums2.length / 2)];
  }
}

// console.log(getMiddleNumber([2, 3], [1, 4, 5]));

/*
先排序，然后找出中位数
*/

function getMiddleNumberV2(nums1, nums2) {
  // 排序
  let len = nums1.length,
    jlen = nums2.length,
    i = 0,
    j = 0;
  let newList = [];
  while (i < len || j < jlen) {
    if (nums1[i] < nums2[j]) {
      newList.push(nums1[i]);
      i++;
    } else {
      newList.push(nums2[j]);
      j++;
    }
  }
  if (newList.length % 2 === 0) {
    let mid = newList.length / 2;
    return (newList[mid] + newList[mid - 1]) / 2;
  } else {
    return newList[Math.floor(newList.length / 2)];
  }
}

console.log(getMiddleNumberV2([2, 3], [1, 4, 5, 6]));
