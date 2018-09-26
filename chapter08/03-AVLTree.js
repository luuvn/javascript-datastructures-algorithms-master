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

    balanceTree(node) {
        let bf = this.getBalanceFactor(node);
        if (bf === BalanceFactor.UNBALANCED_LEFT) {
            if (this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                node = this.rotationRR(node);
            } else if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                node = this.rotationLR(node);
            }
        }

        if (bf === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                node = this.rotationLL(node);
            } else if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                node = this.rotationRL(node);
            }
        }

        return node;
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
        } else {
            node.right = this.insertNode(node.right, key);
        }

        node = this.balanceTree(node);

        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == undefined) {
            return node;
        }

        node = this.balanceTree(node);

        return node;
    }

    // getNodeHeight(node) {
    //     if (node == null) {
    //         return -1;
    //     }
    //     return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    // }
    // /**
    //  * Left left case: rotate right
    //  *
    //  *       b                           a
    //  *      / \                         / \
    //  *     a   e -> rotationLL(b) ->   c   b
    //  *    / \                             / \
    //  *   c   d                           d   e
    //  *
    //  * @param node Node<T>
    //  */
    // rotationLL(node) {
    //     const tmp = node.left;
    //     node.left = tmp.right;
    //     tmp.right = node;
    //     return tmp;
    // }
    // /**
    //  * Right right case: rotate left
    //  *
    //  *     a                              b
    //  *    / \                            / \
    //  *   c   b   -> rotationRR(a) ->    a   e
    //  *      / \                        / \
    //  *     d   e                      c   d
    //  *
    //  * @param node Node<T>
    //  */
    // rotationRR(node) {
    //     const tmp = node.right;
    //     node.right = tmp.left;
    //     tmp.left = node;
    //     return tmp;
    // }
    // /**
    //  * Left right case: rotate left then right
    //  * @param node Node<T>
    //  */
    // rotationLR(node) {
    //     node.left = this.rotationRR(node.left);
    //     return this.rotationLL(node);
    // }
    // /**
    //  * Right left case: rotate right then left
    //  * @param node Node<T>
    //  */
    // rotationRL(node) {
    //     node.right = this.rotationLL(node.right);
    //     return this.rotationRR(node);
    // }
    // getBalanceFactor(node) {
    //     const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    //     switch (heightDifference) {
    //         case -2:
    //             return BalanceFactor.UNBALANCED_RIGHT;
    //         case -1:
    //             return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
    //         case 1:
    //             return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
    //         case 2:
    //             return BalanceFactor.UNBALANCED_LEFT;
    //         default:
    //             return BalanceFactor.BALANCED;
    //     }
    // }
    // insert(key) {
    //     this.root = this.insertNode(this.root, key);
    // }
    // insertNode(node, key) {
    //     if (node == null) {
    //         return new Node(key);
    //     } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
    //         node.left = this.insertNode(node.left, key);
    //     } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
    //         node.right = this.insertNode(node.right, key);
    //     } else {
    //         return node; // duplicated key
    //     }
    //     // verify if tree is balanced
    //     const balanceFactor = this.getBalanceFactor(node);
    //     if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
    //         if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
    //             // Left left case
    //             node = this.rotationLL(node);
    //         } else {
    //             // Left right case
    //             return this.rotationLR(node);
    //         }
    //     }
    //     if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
    //         if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
    //             // Right right case
    //             node = this.rotationRR(node);
    //         } else {
    //             // Right left case
    //             return this.rotationRL(node);
    //         }
    //     }
    //     return node;
    // }
    // removeNode(node, key) {
    //     node = super.removeNode(node, key); // {1}
    //     if (node == null) {
    //         return node;
    //     }
    //     // verify if tree is balanced
    //     const balanceFactor = this.getBalanceFactor(node);
    //     if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
    //         // Left left case
    //         if (
    //             this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
    //             this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
    //         ) {
    //             return this.rotationLL(node);
    //         }
    //         // Left right case
    //         if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
    //             return this.rotationLR(node.left);
    //         }
    //     }
    //     if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
    //         // Right right case
    //         if (
    //             this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
    //             this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
    //         ) {
    //             return this.rotationRR(node);
    //         }
    //         // Right left case
    //         if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
    //             return this.rotationRL(node.right);
    //         }
    //     }
    //     return node;
    // }

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
        let arr = [this.getRoot()];
        let output = [];
        // let currentLevel = this.getNodeHeight(arr[0]);

        let arrFirstLeftNode = [];
        let currentNode = this.getRoot();
        while (currentNode) {
            currentNode = currentNode.left;
            arrFirstLeftNode.push(currentNode);
        }

        while (arr.length > 0) {
            let currentNode = arr.shift();
            // let currentHeight = this.getNodeHeight(currentNode);

            // if (currentHeight < currentLevel) {
            //     currentLevel = currentHeight;
            //     output.push("\n");
            // }

            if (arrFirstLeftNode.indexOf(currentNode) != -1) {
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