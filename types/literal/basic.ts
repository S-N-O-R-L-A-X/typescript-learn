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




