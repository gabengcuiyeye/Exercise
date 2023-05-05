/**
 * 7       （0，0）
 * 3 8      （1，0）（1，1)
 * 8 1 0
 * 2 7 4 4
 * 4 5 2 6 5
 */

// 使用多维数组来存储上述数字
function solution(x = 0, y = 0, n, arr) {
  if (x === n) {
    return arr[x][y];
  }
  console.log("x,y", x, y, arr[x][y]);
  return Math.max(
    arr[x][y] + solution(x + 1, y, n, arr),
    arr[x][y] + solution(x + 1, y + 1, n, arr)
  );
}

// const arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

// console.log(solution(0, 0, 4, arr));

// function maxPath(arr, i, j) {
//   if (arr.length == 0) {
//     return 0;
//   }
//   if (i >= arr.length || j >= arr[i].length) {
//     return 0;
//   }
//   return (
//     arr[i][j] + Math.max(maxPath(arr, i + 1, j), maxPath(arr, i + 1, j + 1))
//   );
// }

// let arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
// console.log(maxPath(arr, 0, 0));

// arr[i][j] + Math.max(maxPath(arr,i+1, j), maxPath(arr,i+1, j+1))
function maxPath2(arr) {
  if (arr.length == 0) {
    return 0;
  }
  // 纵向i依赖于i+1，逆序计算
  // 不需要申请新的存储，直接在原数组上修改
  // 最后一行的最优值是其本身，跳过
  for (let i = arr.length - 2; i >= 0; i--) {
    // 横向无依赖，可正向可负向
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }
  return arr[0][0];
}
let arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(maxPath2(arr, 0, 0));
