/** 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。*/

function deleteLinkNode(linkList, n) {
  const turnArr = (linkList) => {
    let result = [];
    let current = linkList;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  };
  const turnLink = (arr) => {
    const index = arr.length - n;
    let newLinkList = {};
    let pointer = newLinkList;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i !== index) {
        pointer.value = arr[i];
        pointer.next = i === arr.length - 1 ? null : {};
        pointer = pointer.next;
      }
    }
    return newLinkList;
  };
  const arr = turnArr(linkList);

  return turnLink(arr);
}

const linkList = {
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

// console.log(deleteLinkNode(linkList, 2));

/**
 * 单链表还是双链表？==》默认单链表好了
 * 链表不能直接获取length
 * 我的解法的问题是造了个新的链表空间复杂度也大，还不如遍历两次
 */

/**
 * 使用双指针，一次遍历，使得两个指针的间隔为n，然后再往后移动到链表末尾
 * 时间复杂度O(L)
 * 空间复杂度O(1)
 */
function deleteLinkNodeV2(linkList, n) {
  let pointer1 = linkList,
    pointer2 = linkList;
  let pointer = pointer2;
  let counter = 1;
  while (counter < n) {
    pointer1 = linkList.next;
    counter++;
  }
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  pointer2.value = pointer2.next.value;
  pointer2.next = pointer2.next.next;
  return pointer;
}

console.log(deleteLinkNodeV2(linkList, 2));
