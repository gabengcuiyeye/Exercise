/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 */

function solution(str1, str2) {
  let pointer1 = 0,
    pointer2 = 0;
  while (pointer1 !== str1.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1 += 1;
      pointer2 += 1;
      if (pointer2 === str2.length) {
        return pointer1 - pointer2;
      }
    } else {
      pointer1 = pointer1 - pointer2 + 1;
      pointer2 = 0;
    }
  }
  return -1;
}

console.log(solution("sadbutsad", "sad"));
// console.log(solution("leetcode", "leeto"));

// 学习KMP算法
