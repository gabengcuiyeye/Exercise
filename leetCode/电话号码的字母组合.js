/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 2-abc
 * 3-def
 * 4-ghi
 * 5-jkl
 * 6-mno
 * 7-pqrs
 * 8-tuv
 * 9-wxyz
 */

function combination(str) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const strArr = str.split("");
  // 利用树来存储？是滴是滴
  let tree = [
    {
      value: "start",
      child: [],
    },
  ];

  // 广度优先
  const buildTree = (strArr, index = 0, tree) => {
    if (index >= strArr.length) return;
    tree.forEach((node) => {
      strArr[index] &&
        map[strArr[index]].forEach((char) => {
          node.child.push({ value: char, child: [] });
        });
    });
    tree.forEach((node) => buildTree(strArr, (index = index + 1), node.child));
  };
  buildTree(strArr, 0, tree); // 深度优先

  let result = [];
  let strTemp = "";
  const loopTree = (tree, deep = 0) => {
    if (!tree.length) {
      result.push(strTemp);
      strTemp = "";
    }
    tree.forEach((node) => {
      if (deep !== 0) {
        strTemp += node.value;
      }
      if (node.child.length) {
        result.push(strTemp);
      }
      loopTree(node.child, (deep = deep + 1));
    });
  };

  loopTree(tree);
  return result;
}

/**
 * 暴力解法
 */

console.log(combination("234"));
