const BinarySearchTree = require('./01-BinarySearchTree');
const Utils = require('../Common').Utils;
const Node = require('../Common').Node;

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
    constructor(compareFn = Utils.defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    getNodeHeight(node) {
        if (node == undefined) {
            return -1;
        } else {
            return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
        }
    }

    rotationLL(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;

        return tmp;
    }

    rotationRR(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;

        return tmp;
    }

    rotationLR(node) {
        node.left = this.rotationLL(node.left);
        return this.rotationRR(node);
    }

    rotationRL(node) {
        node.right = this.rotationRR(node.right);
        return this.rotationLL(node);
    }

    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node == undefined) {
            node = new Node(key);
            return node;
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);

            if (this.getBalanceFactor(node) === BalanceFactor.UNBALANCED_LEFT) {
                if (key < node.left.key) {
                    node = this.rotationRR(node);
                } else if (key > node.left.key) {
                    node = this.rotationLR(node);
                }
            }
        } else {
            node.right = this.insertNode(node.right, key);

            if (this.getBalanceFactor(node) === BalanceFactor.UNBALANCED_RIGHT) {
                if (key > node.right.key) {
                    node = this.rotationLL(node);
                } else if (key < node.right.key) {
                    node = this.rotationRL(node);
                }
            }
        }

        return node;
    }

    removeNode(node, key) {

    }

    // inOrderTraverse(callback) {
    //     this.inOrderTraverseNode(this.root, callback);
    // }

    // inOrderTraverseNode(node, callback) {
    //     if (node == undefined) {
    //         return;
    //     }

    //     this.inOrderTraverseNode(node.left, callback);
    //     callback({ key: node.key, bf: this.getBalanceFactor(node) });
    //     callback(node.key);
    //     this.inOrderTraverseNode(node.right, callback);
    // }

    bfTraverse() {
        var arr = [this.getRoot()];
        var output = [];
        var currentLevel = this.getNodeHeight(arr[0]);

        while (arr.length > 0) {
            let currentNode = arr.shift();

            if (this.getNodeHeight(currentNode) < currentLevel) {
                currentLevel = this.getNodeHeight(currentNode);
                output.push("\n");
            }

            output.push(currentNode + " ");

            if (currentNode.left) {
                arr.push(currentNode.left);
            }

            if (currentNode.right) {
                arr.push(currentNode.right);
            }
        }

        console.log(output.join(""));
    }
}

module.exports = AVLTree;