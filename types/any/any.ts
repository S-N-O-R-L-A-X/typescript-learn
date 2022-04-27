/**
 * Use the compiler flag noImplicitAny to flag any implicit any as an error.
 */
let obj:any={x:0};
obj.y=50;
console.log(obj);//{ x: 0, y: 50 }
