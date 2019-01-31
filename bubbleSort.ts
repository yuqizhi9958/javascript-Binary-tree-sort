// 冒泡排序的算法思想如下（升序排序）：

// 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样最终最大数被交换到最后的位置
// 除了最后一个元素以外，针对所有的元素重复以上的步骤
// 重复步骤1~3，直到排序完成

//冒泡排序
function bubbleSort ( data ) {
    var temp = 0;
    for ( var i = data.length ; i > 0 ; i -- ){
        for( var j = 0 ; j < i - 1 ; j++){
           if( data[j] > data[j + 1] ){
               temp = data[j];
               data[j] = data [j+1];
               data[j+1] = temp;
           }
        }
    }
    return data;
}

var dataStore = [ 72 , 1 , 68 , 95 , 75 , 54 , 58 , 10 , 35 , 6 , 28 , 45 , 69 , 13 , 88 , 99 , 24 , 28 , 30 , 31 , 78 , 2 , 77 , 82 , 72 ];

console.log( '原始数据:' + dataStore );
console.log( '冒泡排序:' + bubbleSort( dataStore) );