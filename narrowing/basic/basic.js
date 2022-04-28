/**
 * use typeof as type guards
 */
function padLeft(padding, input) {
    if (typeof padding === 'number')
        return " ".repeat(padding) + input;
    return padding + input;
}
console.log(padLeft(2, "abcde"));
console.log(padLeft("alphabet:", "abcde"));
