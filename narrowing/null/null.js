/**
 * typeof null === object
 *
 * solution:
 * param && typeof param === 'object'
 */
function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
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
printAll(["typescript", "javascript", "babel"]); //typescript javascript babel
printAll("typeof of typescript"); //typeof of typescript
printAll(null); //TypeError: Cannot read property 'length' of null 
