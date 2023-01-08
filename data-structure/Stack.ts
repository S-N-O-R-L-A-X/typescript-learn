class Stack<T> {
    stack: T[];
    constructor() {
        this.stack = [];
    }

    get size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    push(elem: T): void {
        this.stack.push(elem);
    }

    pop(): T {
        return this.stack.pop();
    }

    peek(): T {
        return this.stack[this.size - 1];
    }

    get(index: number): T {
        return this.stack[index];
    }
}