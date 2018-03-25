var a='12'+2.5;
console.log(a);
var a=parseInt('12.55');
console.log(a);
var a=parseFloat('12.33isudfhfn');    //第一个为字符则不能转换！
console.log(a);


arr=new Array(3);
arr[0]='a';
arr[1]='b';
arr[2]='c';
/*
join() 将数组元素合为一个字符串
pop() 将删除数组中最后一个元素，并返回删除的元素值
push() 添加一个元素，并返回添加的元素值
release ()  数组反转
shift()  删除第一个元素
sort()  升序排序
*/

for(var i in arr)
{
    console.log(i+' is '+arr[i]);
}

