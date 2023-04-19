/*
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
*/

function convert(s, numRows) {
  let splitArr = [];
  let strLen = s.length;
  let step = numRows + numRows - 2;
  let x = 0;
  for (let i = 0; i < strLen; i = i + step) {
    for (let j = 0; j < step; j++) {
      let num = j % step;
      if (num >= numRows) {
        x = x + num - numRows + 1;
      }
      let y = num < numRows ? num : step - num;
      splitArr[y] = splitArr[y] || [];
      splitArr[y][x] = splitArr[y][x] || [];
      splitArr[y][x].push(s[i + j]);
    }
    x = x + numRows - 2;
  }
  let resultStr = "";
  splitArr.forEach((k) => {
    k.forEach((l) => {
      resultStr += l.join();
    });
  });
  return resultStr;
}

/*
好像只是考验二维数组的使用？
x轴规律？
y轴规律？
时间复杂度？O(n)
空间复杂度？
*/

console.log(convert("PAYPALISHIRING", 3));
