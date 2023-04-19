// 冒泡排序
/*
冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。
*/
function bubbleSort(arr) {
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // 最大的一个元素在上一次排序后会被放到最后一位
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/* 插入排序 
它的基本思想是将一个记录插入到已经排好序的有序表中，
从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，
外层循环对除了第一个元素之外的所有元素，
内层循环对当前元素前面有序表进行待插入位置查找，并进行移动
INSERTION-SORT(A)
for j=2 to A.length:
    key=A[j]
    //将A[j]插入已排序序列A[1..j-1]
    i=j-1
    while i>0 and A[i]>key
        A[i+1]= A[i]
        i=i-1
    A[i+1]=key
*/
function insertionSort(arr) {
  for (let j = 1, len = arr.length; j < len; j++) {
    let key = arr[j];
    let i = j - 1;
    //==>在前面已排序好的数组中插入
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]; // ===> 移动数组位置
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  return arr;
}

// console.log(insertionSort([3, 2, 1]));

/*选择排序（Selection sort）是一种简单直观的排序算法。
它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，
存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
以此类推，直到全部待排序的数据元素的个数为零 */

function selectionSort(arr) {
  function swap(a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  return arr;
}

console.log(selectionSort([4, 3, 2, 1]));
