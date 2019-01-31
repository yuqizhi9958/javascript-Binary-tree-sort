// 归并排序（Merge Sort）
// 将两个的有序数列合并成一个有序数列，我们称之为"归并"，归并排序的思想就是将一系列排序好的子序列合并成一个大的完整有序的序列。
// 实现步骤如下：

// 把长度为n的输入序列分成两个长度为n/2的子序列；
// 对这两个子序列分别采用归并排序；
// 将两个排序好的子序列合并成一个最终的排序序列

function mergeSort ( array ) {
    var len = array.length;
    if( len < 2 ){
        return array;
    }
    var middle = Math.floor(len / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}

var dataStore = [72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72]

console.log( '原始数据:' + dataStore );
console.log( '希尔排序:' + mergeSort( dataStore) );