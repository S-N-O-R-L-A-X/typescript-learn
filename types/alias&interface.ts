/**
 *  The key distinction :
 *  Type cannot be reopened to add new properties but interface is always extendable.
 */
interface Animal {
    name: string;
}
  
interface Animal {
    kind:string;
}
  
function animalKind(param:Animal) {
    console.log(param.name+" is a kind of "+param.kind);
}

animalKind({name:"tiger",kind:"cat"}); //tiger is a kind of cat

/*
type Animal2 ={
    name:string
}

type Animal2 ={
    kind:string
}
标识符“Animal2”重复。
*/