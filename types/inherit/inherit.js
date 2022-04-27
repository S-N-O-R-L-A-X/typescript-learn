/*
function eat(param:Animal){
    console.log(param.name+" eats "+param.food);
}

eat({name:"bear",food:"honey"});

类型“Animal”上不存在属性“food”。
*/
function eat(param) {
    console.log(param.name + " eats " + param.food);
}
eat({ name: "bear", food: "honey" }); //bear eats honey
function eat2(param) {
    console.log(param.name + " eats " + param.food);
}
eat2({ name: "fish", food: "worms" }); //bear eats honey
