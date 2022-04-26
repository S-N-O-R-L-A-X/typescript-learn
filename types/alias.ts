/**
 * 
 */
type Person2 ={
    name:string;
    age:number;
}

function old2(person:Person2) {
    console.log(person.name+" is "+person.age);
}

const man2:Person2 ={
    name: "John",
    age: 18,
}

old2(man2); //John is 18

type multitype=number|boolean;

function printMultitype(param:multitype) {
    console.log(param);
}
printMultitype(222); //222
printMultitype(false); //false
