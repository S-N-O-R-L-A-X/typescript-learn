/**
 * let/const/var variable_name:type=value
 */

// let name:string="John"; //无法重新声明块范围变量“name”。此处也声明了 "name"。
let s:string="Hello world!";
let x:number=2;
let flag:boolean = false;

console.log(s);//Hello world!
console.log(x);//2
console.log(flag);//false


// function f():number {
//     return "0";
// }
// error:不能将类型“string”分配给类型“number”。

// let user:any={
//     name:string="a",
// }
// error:“string”仅表示类型，但在此处却作为值使用。


