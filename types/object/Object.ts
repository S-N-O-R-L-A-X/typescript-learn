
/**
 * use ?: to specify that some or all of their properties are optional.
 */
function printCoordination(point: { x: number; y: number }) {
    console.log("The coordinate's x value is " + point.x);
    console.log("The coordinate's y value is " + point.y);
}
// printCoordination({2,4}); //error:类型“{ 2: any; 4: any; }”的参数不能赋给类型“{ x: number; y: number; }”的参数。对象文字可以只指定已知属性，并且“2”不在类型“{ x: number; y: number; }”中。
printCoordination({x:2,y:4});
// printCoordination({x:3,y:4,z:5}); //error:类型“{ x: number; y: number; z: number; }”的参数不能赋给类型“{ x: number; y: number; }”的参数。对象文字可以只指定已知属性，并且“z”不在类型“{ x: number; y: number; }”中。

const o={x:2,two:4};

// printCoordination(o);//error:类型“{ x: number; two: number; }”的参数不能赋给类型“{ x: number; y: number; }”的参数。类型 "{ x: number; two: number; }" 中缺少属性 "y"，但类型 "{ x: number; y: number; }" 中需要该属性。

function printName(obj: { first: string; last?: string }) {
    console.log(obj.first+' '+obj.last)
}

printName({ first: "Alice" }); //Alice undefined
printName({ first: "Alice", last: "Bob" });// Alice Bob