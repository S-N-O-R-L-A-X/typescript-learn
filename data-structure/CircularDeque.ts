class CircularDeque {
    q: number[];
    capacity: number;
    front: number;
    rear: number;
    constructor(k: number) {
        this.capacity = k + 1;
        this.q = new Array(this.capacity).fill(0);
        this.front = 0;
        this.rear = 0;
    }

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false;
        }

        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.q[this.front] = value;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false;
        }

        this.q[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false;
        }

        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false;
        }

        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        return true;
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.q[this.front];
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.q[(this.rear - 1 + this.capacity) % this.capacity];
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.capacity === this.front;
    }
}