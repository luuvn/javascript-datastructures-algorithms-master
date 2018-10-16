let expect = require('chai').expect;
let BinarySearchTree = require('./01-BinarySearchTree.js');
let AVLTree = require('./03-AVLTree.js');
let MinHeap = require('./07-Heap.js');

describe('Heap', () => {
    let heap;

    beforeEach(() => {
        heap = new MinHeap();
    });

    it('starts empty MinHeap', () => {
        expect(heap.size()).to.equal(0);
        expect(heap.isEmpty()).to.equal(true);
    });

    it('inserts values in the MinHeap', () => {
        const resultArray = [];
        for (let i = 1; i < 10; i++) {
            resultArray.push(i);
            heap.insert(i);
            expect(heap.getAsArray()).to.deep.equal(resultArray);
        }
    });

    it('finds the min value from the MinHeap', () => {
        const resultArray = [];
        for (let i = 10; i >= 1; i--) {
            resultArray.push(i);
            heap.insert(i);
            expect(heap.findMinimum()).to.equal(i);
        }
    });

    it('performs heapify in the MinHeap', () => {
        const resultArray = [];
        for (let i = 10; i >= 1; i--) {
            resultArray.push(i);
        }
        expect(heap.heapify(resultArray)).to.deep.equal(resultArray);
    });

    it('extracts the min value from the MinHeap', () => {
        let resultArray = [];
        for (let i = 1; i < 10; i++) {
            resultArray.push(i);
            heap.insert(i);
            expect(heap.getAsArray()).to.deep.equal(resultArray);
        }

        resultArray = [
            [],
            [2, 4, 3, 8, 5, 6, 7, 9],
            [3, 4, 6, 8, 5, 9, 7],
            [4, 5, 6, 8, 7, 9],
            [5, 7, 6, 8, 9],
            [6, 7, 9, 8],
            [7, 8, 9],
            [8, 9],
            [9],
            []
        ];

        for (let i = 1; i < 10; i++) {
            expect(heap.extract()).to.equal(i);
            expect(heap.getAsArray()).to.deep.equal(resultArray[i]);
        }
    });

    // it('Heap Sort', () => {
    //     const array = [3, 2, 5, 6, 1, 7, 8, 9];

    //     expect(heapSort(array)).to.deep.equal([1, 2, 3, 5, 6, 7, 8, 9]);
    // });
});

// describe('AVLTree', () => {
//     let avlTree = new AVLTree();
//     let arrResult = [];

//     function printNode(value) {
//         arrResult.push(value);
//     };

//     it('starts empty', () => {
//         expect(avlTree.getRoot()).to.equal(null);
//     });

//     it('inserts elements in the AVLTree', () => {
//         expect(avlTree.getRoot()).to.equal(null);

//         avlTree.insert(1);
//         avlTree.insert(2);
//         avlTree.insert(3);
//         avlTree.insert(4);
//         avlTree.insert(5);
//         avlTree.insert(6);
//         avlTree.insert(7);
//         avlTree.insert(14);
//         avlTree.insert(15);
//         avlTree.insert(13);
//         avlTree.insert(12);
//         avlTree.insert(11);

//         arrResult = [];
//         avlTree.inOrderTraverse(printNode);
//         avlTree.bfTraverse();

//         expect(arrResult).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15]);
//     });

//     it('remove', () => {

//         console.log("avlTree.remove(12);");
//         avlTree.remove(12);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(15);");
//         avlTree.remove(15);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(11);");
//         avlTree.remove(11);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(14);");
//         avlTree.remove(14);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(13);");
//         avlTree.remove(13);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(7);");
//         avlTree.remove(7);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(6);");
//         avlTree.remove(6);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(2);");
//         avlTree.remove(2);
//         avlTree.bfTraverse();
//         console.log("\n");

//         console.log("avlTree.remove(4);");
//         avlTree.remove(4);
//         avlTree.bfTraverse();
//         console.log("\n");

//         arrResult = [];
//         avlTree.inOrderTraverse(printNode);
//         avlTree.bfTraverse();

//         // expect(arrResult).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15]);
//     });
// });

// describe('BinarySearchTree', () => {
//     let tree, arrResult = [];

//     tree = new BinarySearchTree();

//     it('starts empty', () => {
//         expect(tree.getRoot()).to.equal(undefined);
//     });

//     function assertNode(node, key, left, right) {
//         if (key != null) {
//             expect(node.key).to.equal(key);
//         } else {
//             expect(node).to.equal(key);
//             return;
//         }

//         if (left != null) {
//             expect(node.left.key).to.equal(left);
//         } else {
//             expect(node.left).to.equal(left);
//         }

//         if (right != null) {
//             expect(node.right.key).to.equal(right);
//         } else {
//             expect(node.right).to.equal(right);
//         }
//     }

//     function printNode(value) {
//         // console.log(value);
//         arrResult.push(value);
//     };

//     it('inserts elements in the BST', () => {
//         expect(tree.getRoot()).to.equal(undefined);

//         tree.insert(11);
//         tree.insert(7);
//         tree.insert(15);
//         tree.insert(5);
//         tree.insert(3);
//         tree.insert(9);
//         tree.insert(8);
//         tree.insert(10);
//         tree.insert(13);
//         tree.insert(12);
//         tree.insert(14);
//         tree.insert(20);
//         tree.insert(18);
//         tree.insert(25);

//         let node = tree.getRoot();
//         assertNode(node, 11, 7, 15);

//         node = node.left;
//         assertNode(node, 7, 5, 9);

//         node = node.left;
//         assertNode(node, 5, 3, undefined);

//         node = node.left;
//         assertNode(node, 3, undefined, undefined);

//         node = tree.getRoot().left.left.right;
//         assertNode(node, undefined, undefined, undefined);

//         node = tree.getRoot().left.right;
//         assertNode(node, 9, 8, 10);

//         node = node.left;
//         assertNode(node, 8, undefined, undefined);

//         node = tree.getRoot().left.right.right;
//         assertNode(node, 10, undefined, undefined);

//         node = tree.getRoot().right;
//         assertNode(node, 15, 13, 20);

//         node = node.left;
//         assertNode(node, 13, 12, 14);

//         node = node.left;
//         assertNode(node, 12, undefined, undefined);

//         node = tree.getRoot().right.left.right;
//         assertNode(node, 14, undefined, undefined);

//         node = tree.getRoot().right.right;
//         assertNode(node, 20, 18, 25);

//         node = node.left;
//         assertNode(node, 18, undefined, undefined);

//         node = tree.getRoot().right.right.right;
//         assertNode(node, 25, undefined, undefined);
//     });

//     it('in-order transverse', () => {
//         arrResult = [];
//         tree.inOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
//     });

//     it('pre-order transverse', () => {
//         arrResult = [];
//         tree.preOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
//     });

//     it('post-order transverse', () => {
//         arrResult = [];
//         tree.postOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
//     });

//     it('max and min', () => {
//         expect(tree.max()).to.equal(25);
//         expect(tree.min()).to.equal(3);
//         expect(tree.search(1)).to.equal(false);
//         expect(tree.search(8)).to.equal(true);
//     });

//     it('remove 8', () => {
//         arrResult = [];

//         tree.remove(8);
//         tree.inOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
//     });

//     it('remove 9', () => {
//         arrResult = [];

//         tree.remove(9);
//         tree.inOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([3, 5, 7, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
//     });

//     it('remove 15', () => {
//         arrResult = [];

//         tree.remove(15);
//         tree.inOrderTraverse(printNode);

//         expect(arrResult).to.deep.equal([3, 5, 7, 10, 11, 12, 13, 14, 18, 20, 25]);
//     });

//     it('raw data structure', () => {
//         expect(tree.getRoot().key).to.equal(11);
//     });
// });
