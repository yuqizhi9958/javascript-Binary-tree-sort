/*快速排序是处理大数据最快的排序算法之一，它也是一种分而治之的算法，
通过递归方式将数据依次分解为包含较小元素和较大元素的不同子序列，会不断重复这个步骤，
直到所有的序列全部为有序的，最后将这些子序列一次拼接起来，就可得到排序好的数据。
该算法首先要从数列中选出一个元素作为基数（pivot）。接着所有的数据都将围绕这个基数进行，
将小于改基数的元素放在它的左边，大于或等于它的数全部放在它的右边，对左右两个小数列重复上述步骤，
直至各区间只有1个数。*/
function quickSort( arr ){

    if ( arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push( arr[i] );
        } else {
            right.push( arr[i] );
        }
    }

    return quickSort( left ).concat( pivot, quickSort( right ));
}
var dataStore = [72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72]
console.log( '原始数据:' + dataStore );
console.log( '快速排序:' + quickSort( dataStore) );