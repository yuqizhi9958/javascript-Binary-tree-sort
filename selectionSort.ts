// 选择排序是一种比较简单直观的排序算法。它的算法思想是，从数组的开头开始遍历，
// 将第一个元素和其他元素分别进行比较，记录最小的元素，等循环结束之后，
// 将最小的元素放到数组的第一个位置上，然后从数组的第二个位置开始继续执行上述步骤。
// 当进行到数组倒数第二个位置的时候，所有的数据就完成了排序。
// 选择排序同样会用到嵌套循环，外循环从数组第一个位置移到倒数第二个位置；
// 内循环从第二个位置移动到数组最后一个位置，查找比当前外循环所指向的元素还要小的元素，
// 每次内循环结束后，都会将最小的值放到合适的位置上。

//选择排序
function selectionSort( data ) {
    for( var i = 0; i< data.length ; i++){
        var min = data[i];
        var temp;
        var index = i;
        for( var j = i + 1; j< data.length; j++){
            if( data[j] < min ){
                min = data[j];
                index = j;
            }
        }

        temp = data[i];
        data[i] = min;
        data[index]= temp;
    }
    return data;
}
var dataStore = [72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72]
console.log( '原始数据:' + dataStore );
console.log( '选择排序:' + selectionSort( dataStore) );