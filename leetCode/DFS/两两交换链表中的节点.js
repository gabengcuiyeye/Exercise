/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */

// 官方
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

// head 返回头指针
// function solution(head) {
//   const newHead = head.next;
//   head.next = solution(newHead.next);
//   newHead.next = head;
//   return newHead;
//   //   if (!link) return head;
//   //   let nextNode = link.next;
//   //   //   console.log("nextNode", nextNode, "link", link);
//   //   link.next = link.next.next;
//   //   console.log("linknext", link.next, link);
//   //   nextNode.next = link;
//   //   console.log("link", link, nextNode);
//   //   return solution(link.next, head);
// }

const link = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(swapPairs(link));
// console.log(solution(link));
