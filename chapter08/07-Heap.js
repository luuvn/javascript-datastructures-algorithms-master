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

    }
    getRightIndex(index) {

    }
    getParentIndex(index) {

    }
    size() {

    }
    isEmpty() {

    }
    clear() {

    }
    findMinimum() {

    }
    insert(value) {

    }
    siftDown(index) {

    }
    siftUp(index) {

    }
    extract() {

    }
    heapify(array) {

    }
    getAsArray() {

    }
}

module.exports = MinHeap;