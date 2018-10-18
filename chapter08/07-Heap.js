const BinarySearchTree = require('./01-BinarySearchTree');
const Utils = require('../Common').Utils;
const Node = require('../Common').Node;

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

class MinHeap {
    constructor(compareFn = Utils.defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index) {
        return index * 2 + 1;
    }
    getRightIndex(index) {
        return index * 2 + 2;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() == 0 ? true : false;
    }
    clear() {

    }
    findMinimum() {
        return this.heap[0];
    }
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        this.siftUp(index);
    }
    siftDown(index) {
        let tempIndex = index;
        let leftChildIndex = this.getLeftIndex(index);
        let rightChildIndex = this.getRightIndex(index);

        if (this.heap[index] > this.heap[leftChildIndex]) {
            index = leftChildIndex;
        }

        if (this.heap[index] > this.heap[rightChildIndex]) {
            index = rightChildIndex;
        }

        if (tempIndex != index) {
            Utils.swap(this.heap, tempIndex, index);
            this.siftDown(index);
        }
    }
    siftUp(index) {
        let parentIndex = this.getParentIndex(index);
        if (this.heap[index] < this.heap[parentIndex]) {
            Utils.swap(this.heap, index, parentIndex);
            this.siftUp(parentIndex);
        }
    }
    extract() {
        let extractElement = this.heap[0];

        Utils.swap(this.heap, this.size() - 1, 0);
        this.heap.pop();

        this.siftDown(0);

        return extractElement;
    }
    heapify(array) {
        this.heap = array;

        for (let i = Math.floor(array.length / 2) - 1; i--; i > 0) {
            this.siftDown(i);
        }

        return this.getAsArray();
    }
    getAsArray() {
        return this.heap;
    }
}

module.exports = MinHeap;