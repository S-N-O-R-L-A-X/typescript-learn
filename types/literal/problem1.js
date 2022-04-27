function printText(s, alignment) {
    console.log(s + " should be " + alignment);
}
printText("Hi!", "left"); //Hi! should be left
// printText("Hi!","top"); //error :类型“"top"”的参数不能赋给类型“"left" | "right" | "center"”的参数。
var obj2 = {
    attr1: "text",
    attr2: "left"
};
// printText(obj2.attr1, obj2.attr2); //error:类型“string”的参数不能赋给类型“"left" | "right" | "center"”的参数。
//The following are solutions
//Solution 1:
var obj3 = {
    attr1: "text",
    attr2: "left"
};
printText(obj3.attr1, obj3.attr2); //text should be left
//Solution 2:
printText(obj2.attr1, obj2.attr2); //text should be left
//Solution 3:
var obj4 = {
    attr1: "text",
    attr2: "left"
};
printText(obj4.attr1, obj4.attr2); //text should be left
