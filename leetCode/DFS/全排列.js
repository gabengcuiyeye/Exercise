/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */
// 动态规划?
// 递归？
function solution(nums) {
  const result = [];
  const getNewArr = (arr, i) => {
    return arr.filter((val, index) => index !== i);
  };
  function loop(arr, current = []) {
    if (!arr.length) {
      result.push([...current]);
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      let newArr = getNewArr(arr, i);
      loop(newArr, [...current, arr[i]]);
    }
  }
  loop(nums);
  return result;
}

console.log(solution([1, 2, 3]));

//官方解法：回溯？
