class PriorityQueue<T> {
    arr: T[];
    comparator: Function;
    constructor(comparator?: Function) {
        this.arr = [];
        this.comparator = comparator || ((a, b) => a - b);;
    }

    pushDown(k): void {
        while (k * 2 + 1 < this.size) {
            const left_son = k * 2 + 1, right_son = k * 2 + 2;
            let son = left_son;

            if (right_son < this.size && this.comparator(this.arr[left_son], this.arr[right_son]) > 0) { //choose left or right
                son = right_son;
            }

            if (this.comparator(this.arr[son], this.arr[k]) > 0) {
                break;
            }
            this.swapByIdx(son, k);
            k = son;
        }
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    swapByIdx(i: number, j: number): void {
        const tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }

    push(element: T): void {
        this.arr[this.size] = element;
        let son = this.size;
        while (son) {
            const child = (son - 1) >> 1;
            if (this.comparator(this.arr[son], this.arr[child]) > 0)
                this.swapByIdx(son, child);
            son = child;
        }
    }

    pop(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size === 1) {
            return this.arr.pop();
        }
        this.swapByIdx(0, this.size - 1);
        const ret = this.arr.pop();
        this.pushDown(0);
        return ret;
    }

    top(): T {
        return this.arr[0];
    }

    get size() {
        return this.arr.length;
    }
}