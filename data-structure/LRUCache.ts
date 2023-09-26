import DoubleLinkNode from "./DoubleLinkLIst";

class LRUCache<T = number> {
  head: DoubleLinkNode<T>;
  tail: DoubleLinkNode<T>;
  capacity: number;
  size: number;
  cache: Map<number, DoubleLinkNode<T>>;

  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new DoubleLinkNode();
    this.tail = new DoubleLinkNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node: DoubleLinkNode<T>): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node: DoubleLinkNode<T>): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  moveToHead(node: DoubleLinkNode<T>): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeTail(): DoubleLinkNode<T> {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }

  get(key: number): T {
    const node = this.cache.get(key);
    if (!node) {
      return undefined;
    }

    this.moveToHead(node);
    return node.val;
  }

  put(key: number, value: T): void {
    const node = this.cache.get(key)
    if (!node) {
      const newNode = new DoubleLinkNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);
      ++this.size;
      if (this.size > this.capacity) {
        const t = this.removeTail();
        this.cache.delete(t.key);
        --this.size;
      }
    }
    else {
      node.val = value;
      this.moveToHead(node);
    }
  }
}
