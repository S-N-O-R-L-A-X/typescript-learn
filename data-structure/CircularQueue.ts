class CircularQueue {
    queue: number[];
    head: number;
    tail: number;
    capacity: number;
    constructor(k: number) {
        this.head = 0;
        this.tail = 0;
        this.capacity = k + 1;
        this.queue = new Array(this.capacity).fill(-1);
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.queue[this.tail] = value;
        this.tail = (this.tail + 1) % this.capacity;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.head = (this.head + 1) % this.capacity;
        return true;
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.head];
    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[(this.tail - 1 + this.capacity) % this.capacity];
    }

    isEmpty(): boolean {
        return this.tail === this.head;
    }

    isFull(): boolean {
        return (this.tail + 1) % this.capacity === this.head;
    }
}
