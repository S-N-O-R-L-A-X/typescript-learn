/**
 * Gosper's Hack is used to generate all k subsets from set with the length n. 
 */
function GospersHack(k: number, n: number) {
    let cur = (1 << k) - 1;
    let limit = (1 << n);
    while (cur < limit) {
        // do something


        const lb = cur & -cur;
        const r = cur + lb;
        cur = (((r ^ cur) >> 2) / lb) | r;
    }
}