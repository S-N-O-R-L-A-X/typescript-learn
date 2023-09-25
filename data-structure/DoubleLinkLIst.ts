export default class DoubleLinkNode<T = number> {
  prev: DoubleLinkNode<T>;
  next: DoubleLinkNode<T>;
  key: number;
  val: T;

  constructor(key?: number, val?: T) {
    this.key = key;
    this.val = val;
  }
}