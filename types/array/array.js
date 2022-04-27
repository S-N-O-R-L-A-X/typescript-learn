function array(param) {
    return param;
}
function limit_element(param) {
    return param;
}
function number_array(param) {
    return param;
}
function string_array(param) {
    return param;
}
function any_array(param) {
    return param;
}
var arr = [1, 2, 3, 4, 5], arr2 = [1, 2, "hi", 4];
// console.log(array(arr)); //error:类型“number[]”的参数不能赋给类型“[]”的参数。目标仅允许 0 个元素，但源中的元素可能更多。
// console.log(limit_element(arr)); //error:类型“number[]”的参数不能赋给类型“[number]”的参数。目标仅允许 1 个元素，但源中的元素可能不够。
console.log(number_array(arr)); //[ 1, 2, 3, 4, 5 ]
// console.log(string_array(arr)); //error:类型“number[]”的参数不能赋给类型“string[]”的参数。不能将类型“number”分配给类型“string”。
console.log(any_array(arr));
console.log(any_array(arr2));
