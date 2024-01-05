class LFUNode<T>  {
  freq: number;
  key: number;
  val: T;
  prev: LFUNode<T>;
  next: LFUNode<T>;

  constructor(key?: number, value?: T) {
    this.key = key;
    this.val = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class LFUCache<T> {
  key2node: Map<number, LFUNode<T>>;
  freq2dummy: Map<number, LFUNode<T>>;
  min_freq: number;
  capacity: number;
  size: number;
  cache: Map<number, LFUNode<T>>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.min_freq = 0;
    this.key2node = new Map();
    this.freq2dummy = new Map();
  }

  newList(): LFUNode<T> {
    const dummy = new LFUNode<T>();
    dummy.prev = dummy;
    dummy.next = dummy;
    return dummy;
  }

  getNode(key: number): LFUNode<T> {
    if (!this.key2node.has(key)) {
      return null;
    }
    const node = this.key2node.get(key);
    this.remove(node);
    const dummy = this.freq2dummy.get(node.freq);
    if (dummy.prev === dummy) { // only one node
      this.freq2dummy.delete(node.freq); // remove empty link list
      if (this.min_freq === node.freq) {
        this.min_freq++;
      }
    }
    this.pushFront(++node.freq, node);
    return node;
  }

  pushFront(freq: number, node: LFUNode<T>): void {
    if (!this.freq2dummy.has(freq)) {
      this.freq2dummy.set(freq, this.newList());
    }
    const dummy = this.freq2dummy.get(freq);
    node.prev = dummy;
    node.next = dummy.next;
    node.prev.next = node;
    node.next.prev = node;
  }

  remove(node: LFUNode<T>): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key: number): T {
    const node = this.getNode(key);
    return node ? node.val : undefined;
  }

  put(key: number, value: T): void {
    const node = this.getNode(key);
    if (node) {
      node.val = value;
      return;
    }
    if (this.key2node.size === this.capacity) {
      const dummy = this.freq2dummy.get(this.min_freq);
      const backNode = dummy.prev;
      this.key2node.delete(backNode.key);
      this.remove(backNode);
      if (dummy.prev === dummy) {
        this.freq2dummy.delete(this.min_freq);
      }
    }
    const newNode = new LFUNode(key, value);
    this.key2node.set(key, newNode);
    this.pushFront(1, newNode);
    this.min_freq = 1;
  }
}