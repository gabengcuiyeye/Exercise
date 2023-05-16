/**
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 *  输出：true
 */
// 双指针
// function solution(s1, s2, s3) {
//   let pointer1 = 0,
//     pointer2 = 0,
//     pointer3 = 0;
//   while (pointer1 < s1.length || pointer2 < s2.length) {
//     // 考虑重复的情况===>双指针法不行
//     if (s1[pointer1] === s3[pointer3] && s2[pointer2] !== s3[pointer3]) {
//       pointer1 += 1;
//     }
//     if (s2[pointer2] === s3[pointer3] && s1[pointer1] !== s3[pointer3]) {
//       pointer2 += 1;
//     }
//     pointer3 += 1;
//   }
// }

const generateArr = (m, n) => {
  var a = new Array();
  for (var i = 0; i < m; i++) {
    a[i] = new Array();
    for (var j = 0; j < n; j++) {
      a[i][j] = false;
    }
  }
  return a;
};

function solution(s1, s2, s3) {
  let n = s1.length,
    m = s2.length,
    t = s3.length;
  if (n + m != t) {
    return false;
  }
  let f = generateArr(n + 1, m + 1);
  f[0][0] = true;
  for (let i = 0; i <= n; ++i) {
    for (let j = 0; j <= m; ++j) {
      let p = i + j - 1;
      // 保证true不会被覆盖，需要或一下f[i][j]
      if (i > 0) {
        f[i][j] = f[i][j] || (f[i - 1][j] && s1[i - 1] === s3[p]);
      }
      if (j > 0) {
        f[i][j] = f[i][j] || (f[i][j - 1] && s2[j - 1] === s3[p]);
      }
    }
  }
  console.log("f", f);
  return f[n][m];
}
let s1 = "aabcc",
  s2 = "dbbca",
  //   s3 = "aabccdbbca";
  s3 = "aadbbcbcac";
console.log(solution(s1, s2, s3));
