/**
 * literal types can be used to confine values, like enumeration
 */

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }

console.log(compare("aaa","aaab"))  ; //-1
