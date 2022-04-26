/**
 * Almost all features of an interface are available in type.
 */
 interface Animal3 {
    name: string
}

interface Bear extends Animal3 {
    food:string
}

type Animal2={
    name:string
}

type Fish= Animal2 & {
    food:string
}


/*
function eat(param:Animal){
    console.log(param.name+" eats "+param.food);
}

eat({name:"bear",food:"honey"});

类型“Animal”上不存在属性“food”。
*/

function eat(param:Bear){
    console.log(param.name+" eats "+param.food);
}

eat({name:"bear",food:"honey"}); //bear eats honey