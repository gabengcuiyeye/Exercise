/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/

function towNumberAdd(num1, num2) {
  let result = { value: 0, next: null };
  let resultPointer = result;
  let num1Pointer = num1;
  let num2Pointer = num2;
  let flag = 0;
  while (num1Pointer || num2Pointer || flag) {
    let value1 = num1Pointer ? num1Pointer.value : 0;
    let value2 = num2Pointer ? num2Pointer.value : 0;
    let addValue = value1 + value2 + flag;
    flag = addValue >= 10 ? 1 : 0;
    resultPointer.value = flag ? addValue - 10 : addValue;
    num1Pointer = num1Pointer?.next;
    num2Pointer = num2Pointer?.next;
    resultPointer.next = num1Pointer || num2Pointer || flag ? {} : null;
    resultPointer = resultPointer.next;
  }
  return result;
}

// 321
const num1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

// 381
const num2 = {
  value: 1,
  next: {
    value: 8,
    next: {
      value: 3,
      next: null,
    },
  },
};
console.log(towNumberAdd(num1, num2));

/*
题目分析： 链表的操作
时间复杂度O(n)
*/
