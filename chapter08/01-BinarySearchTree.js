const Utils = require('../Common.js').Utils;
const Node = require('../Common.js').Node;
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

class BinarySearchTree {
    constructor() {
        this.compareFn = Utils.defaultCompare;
        this.root = undefined;
    }
    insert(key) {
        let node = new Node(key);
        // special case: first key
        if (this.root == undefined) {
            this.root = node;
        } else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        let newNode = new Node(key);

        if (key > node.key) {
            if (node.right == undefined)
                node.right = newNode;
            else
                this.insertNode(node.right, key);
        } else {
            if (node.left == undefined)
                node.left = newNode;
            else
                this.insertNode(node.left, key);
        }
    }
    getRoot() {
        return this.root;
    }
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == undefined) {
            return false;
        }

        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node == undefined) {
            return;
        }

        this.inOrderTraverseNode(node.left, callback);
        callback(node.key);
        this.inOrderTraverseNode(node.right, callback);
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node == undefined) {
            return
        }

        callback(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node == undefined) {
            return
        }

        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        while (node.left != undefined) {
            node = node.left;
        }

        return node.key;
    }
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        while (node.right != undefined) {
            node = node.right;
        }

        return node.key;
    }
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node == undefined) {
            return undefined;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key is equal to node.item
            // handle 3 special conditions
            // 1 - a leaf node
            if (node.left == undefined && node.right == undefined) {
                node = undefined;
                return node;
            }
            // 2 - a node with only 1 child
            else if (node.left == undefined || node.right == undefined) {
                if (node.left != undefined) {
                    return node.left;
                } else {
                    return node.right;
                }
            }
            // 3 - a node with 2 children
            else {
                let minNode = this.minNode(node.right);
                node.key = minNode;
                node.right = this.removeNode(node.right, minNode);
                return node;
            }
        }
    }
};

module.exports = BinarySearchTree;