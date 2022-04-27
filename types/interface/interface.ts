interface Person {
    name:string;
    age:number;
}

function old(person:Person) {
    console.log(person.name+" is "+person.age);
}

const man:Person ={
    name: "John",
    age: 18,
}

old(man);
