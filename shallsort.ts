/* 这个算法是在插入排序的基础上做了很大的改善，与插入排序不同的是，它首先会比较位置较远的元素，
而非相邻的元素。这种方案可以使离正确位置很远的元素能够快速回到合适的位置，当算法进行遍历时，
所有元素的间距会不断的减小，直到数据的末尾，此时比较的就是相邻元素了。 
该方法的基本思想是：先将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）
分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，
再对全体元素进行一次直接插入排序。因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是很高的，
因此希尔排序在时间效率上有较大提高。*/




//希尔排序

function shallSort(array) {
    var increment = array.length;
    var i
    var temp; //暂存
    do {
        //设置增量
        increment = Math.floor(increment / 3) + 1;
        for (i = increment ; i < array.length; i++) {
            if ( array[i] < array[i - increment]) {
                temp = array[i];
                for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
        }
    }
    while (increment > 1)

    return array;
}
var dataStore = [72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72]
console.log( '原始数据:' + dataStore );
console.log( '希尔排序:' + shallSort( dataStore) );