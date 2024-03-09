export default class PriorityQueue<T> {
  arr: T[];
  comparator: Function;
  constructor(comparator?: Function) {
    this.arr = [];
    this.comparator = comparator || ((a: T, b: T) => (a as number) - (b as number));;
  }

  pushDown(k: number): void {
    while (k * 2 + 1 < this.size) {
      const left_son = k * 2 + 1, right_son = k * 2 + 2;
      let son = left_son;

      if (right_son < this.size && this.comparator(this.arr[right_son], this.arr[left_son]) > 0) { //choose left or right
        son = right_son;
      }

      if (this.comparator(this.arr[k], this.arr[son]) > 0) {
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
    let son = this.size;
    this.arr[this.size] = element;
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