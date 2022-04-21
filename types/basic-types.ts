/**
 * basic types: string, number, boolean
 */
function str(param: string){
    return param;
}

function num(param:number){
    return param;
}

function bool(param:boolean){
    return param;
}

// console.log(str(2)); // error:类型“number”的参数不能赋给类型“string”的参数。
console.log(str("2")); //2
console.log(num(2)); //2
// console.log(bool(1)); // error:类型“number”的参数不能赋给类型“boolean”的参数。
console.log(bool(true));// true