/**
 * digitDP constructs the number according to position one by one from scratch.
 * 
 * common uses: 
 * the count of numbers from range a to b which meet the demand that is related to the composition of number.
 */

function digitDP(n: number): number {
    const s = n.toString();

    /**
     * 
     * @param pos 
     * @param mask 
     * @param is_limit Limited or not. true means the position i can be no more than s[i] or it can be 9. The following numbers will also be limited.
     * @param is_num the former positions are filled with nums or not. false means the position i can be jumped
     * @returns 
     */

    function helper(pos: number, mask: number, is_limit: boolean, is_num: boolean): number {
        if (pos === s.length) {
            return Number(is_num);
        }

        let res = 0;
        if (!is_num) { //skip now
            res = helper(pos + 1, mask, false, false)
        }
        const up = is_limit ? Number(s[pos]) : 9;
        for (let d = is_num ? 0 : 1; d <= up; ++d) {
            if (((mask >> d) & 1) === 0) { // d is not in mask
                res += helper(pos + 1, mask | (1 << d), is_limit && d === up, true)
            }
        }

        return res;
    }

    return helper(0, 0, true, false)
}