/**
 * The function of narrowing is like type conversion
 * 
 * 
 * 
 * The methods to check the type of param are various
 * 1. use typeof as type guards
 * 2. use param1 === param2 
 * 3. use attr in param 
 * 4. use param instanceof class
 * 5.
 * 
 */
function padLeft(padding: number | string, input: string) {
    if(typeof padding === 'number')
        return " ".repeat(padding) + input;  
    return padding+input;
}

console.log(padLeft(2,"abcde"));
console.log(padLeft("alphabet:","abcde"));