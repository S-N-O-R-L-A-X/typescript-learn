export default class UnionfindSet {
    parent: number[];
    rank: number[];
    cnt: number; //connected component

    swap(num1: number, num2: number) {
        const x = num1;
        num1 = num2;
        num2 = x;
    }

    constructor(n: number) {
        this.parent = new Array(n).fill(0).map((_, index) => index);
        this.rank = new Array(n).fill(1);
        this.cnt = n;
    }

    find(idx: number) {
        if (this.parent[idx] != idx)
            this.parent[idx] = this.find(this.parent[idx]);
        return this.parent[idx];
    }

    connect(idx1: number, idx2: number): boolean {
        const r1 = this.find(idx1), r2 = this.find(idx2);
        if (r1 == r2) //connected
            return true;
        return false;
    }

    union(idx1: number, idx2: number): boolean {
        const r1 = this.find(idx1), r2 = this.find(idx2);
        if (r1 == r2)
            return true;
        if (this.rank[r1] > this.rank[r2])
            this.swap(r1, r2);
        this.rank[r2] += this.rank[r1];
        this.parent[r1] = r2;
        this.cnt--;
        return false;
    }

    getCount(): number {
        return this.cnt;
    }

    getMostRank(): number {
        return Math.max(...this.rank);
    }

};