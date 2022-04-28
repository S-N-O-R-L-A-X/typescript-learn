/**
 * typeof null === object
 * 
 * solution:
 * param && typeof param === 'object'
 */
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } 
    else if (typeof strs === "string") {
      console.log(strs);
    } 
    else {
      console.log("this is null");
    }
}
printAll(["typescript","javascript","babel"]); //typescript javascript babel
printAll("typeof of typescript"); //typeof of typescript
printAll(null); //TypeError: Cannot read property 'length' of null 
