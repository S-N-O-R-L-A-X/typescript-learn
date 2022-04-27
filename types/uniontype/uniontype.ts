/**
 * union is used when type is unsure for two or more other types
 * 
 */

function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

/*
不允许使用只在某一个类型上才有的方法
function printId2(id: number | string) {
    console.log("Your ID is: " + id.substr(0,1));
}
类型“string | number”上不存在属性“substr”。
  类型“number”上不存在属性“substr”。
*/

function printId3(id: number | string) {
    console.log("Your ID is: " + id.toString());
}

printId(101); //Your ID is: 101
printId("202");//Your ID is: 202

// printId({ myID: 22342 }); //error 类型“{ myID: number; }”的参数不能赋给类型“string | number”的参数。

printId3(8);// Your ID is: 8