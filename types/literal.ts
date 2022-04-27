/**
 * literal types can be used to confine values, like enumeration
 */

// let variable1:"newType"="variable1"; //不能将类型“"variable1"”分配给类型“"newType"”。
let variable1:"newType"="newType";
console.log(variable1); //newType="newType"
console.log(typeof(variable1)); //string
variable1="newType";
console.log(variable1);//newType="newType"
console.log(typeof(variable1));
//error variable1="newValue"; // 不能将类型“"newValue"”分配给类型“"newType"”。

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s+" should be "+alignment);
}
printText("Hi!","left"); //Hi! should be left
// printText("Hi!","top"); //error :类型“"top"”的参数不能赋给类型“"left" | "right" | "center"”的参数。

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }

console.log(compare("aaa","aaab"))  ; //-1