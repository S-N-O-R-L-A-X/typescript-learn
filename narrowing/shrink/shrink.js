var variable2 = 1; //variable2 is number
// variable2="2"; //error :不能将类型“string”分配给类型“number”。
var variable3 = Math.random() < 0.5 ? 10 : "hello world!"; // variable3 is string | number exactly
console.log(typeof variable3);
variable3 = "eat";
console.log(typeof variable3);
variable3 = 4;
console.log(typeof variable3);
// variable3=false; //error: 不能将类型“boolean”分配给类型“string | number”。
