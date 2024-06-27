// heap.js

export class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] < this.heap[index][0]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return max;
    }

    bubbleDown(index) {
        let largest = index;

        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] > this.heap[largest][0]) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] > this.heap[largest][0]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.bubbleDown(largest);
        }
    }

    size() {
        return this.heap.length;
    }
}
