export {};
// javascript code to implement wavelet trees
const N = 100000;
const INT_MIN = -2147483647;

// wavelet tree class
class WaveletTree {
    low: number;
    high: number;
    freq: number[];
    l: WaveletTree;
    r: WaveletTree;
    constructor(arr: number[], low: number, high: number) {
        // Store the range of values in the tree
        this.low = low;
        this.high = high;

        // If there is only one element, create a list with a single element
        if (low == high) {
            this.freq = [];
            this.freq.push(0);
            for (let i = 0; i < arr.length; i++) {
                this.freq.push(this.freq[i] + 1);
            }
            return;
        }

        // Split the input array into two based on the midpoint of the range
        let mid = Math.floor((low + high) / 2);
        this.freq = [];
        this.freq.push(0);
        let leftArr = new Array(arr.length);
        let rightArr = new Array(arr.length);
        let leftIndex = 0, rightIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= mid) {
                leftArr[leftIndex++] = arr[i];
                this.freq.push(this.freq[i] + 1);
            } else {
                rightArr[rightIndex++] = arr[i];
                this.freq.push(this.freq[i]);
            }
        }

        // Recursively create Wavelet Trees for the left and right arrays
        this.l = new WaveletTree(leftArr, low, mid);
        this.r = new WaveletTree(rightArr, mid + 1, high);
    }

    // Count of numbers in range[L..R] less than
    // or equal to k
    kOrLess(l, r, k) {
        // No elements int range is less than k
        if (l > r || k < this.low) return 0;

        // All elements in the range are less than k
        if (this.high <= k) return r - l + 1;

        // Computing LtCount and RtCount
        let LtCount = this.freq[l - 1];
        let RtCount = this.freq[r];

        // Answer is (no. of element <= k) in
        // left + (those <= k) in right
        return (
            this.l.kOrLess(LtCount + 1, RtCount, k) +
            this.r.kOrLess(l - LtCount, r - RtCount, k)
        );
    }
}
