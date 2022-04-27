/**
 * The new operator ! is used for non-null assertion
 */

function exclamationMark(x: string | null) {
    console.log(x!.substring(0,3));
}

exclamationMark("abcdefg");//abc
exclamationMark(null); // TypeError: Cannot read property 'substring' of null
 