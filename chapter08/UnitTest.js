let expect = require('chai').expect;
let BinarySearchTree = require('./01-BinarySearchTree.js');

describe('BinarySearchTree', () => {
    let tree, arrResult = [];

    tree = new BinarySearchTree();

    it('starts empty', () => {
        expect(tree.getRoot()).to.equal(undefined);
    });

    function assertNode(node, key, left, right) {
        if (key != null) {
            expect(node.key).to.equal(key);
        } else {
            expect(node).to.equal(key);
            return;
        }

        if (left != null) {
            expect(node.left.key).to.equal(left);
        } else {
            expect(node.left).to.equal(left);
        }

        if (right != null) {
            expect(node.right.key).to.equal(right);
        } else {
            expect(node.right).to.equal(right);
        }
    }

    function printNode(value) {
        // console.log(value);
        arrResult.push(value);
    };

    it('inserts elements in the BST', () => {
        expect(tree.getRoot()).to.equal(undefined);

        tree.insert(11);
        tree.insert(7);
        tree.insert(15);
        tree.insert(5);
        tree.insert(3);
        tree.insert(9);
        tree.insert(8);
        tree.insert(10);
        tree.insert(13);
        tree.insert(12);
        tree.insert(14);
        tree.insert(20);
        tree.insert(18);
        tree.insert(25);

        let node = tree.getRoot();
        assertNode(node, 11, 7, 15);

        node = node.left;
        assertNode(node, 7, 5, 9);

        node = node.left;
        assertNode(node, 5, 3, undefined);

        node = node.left;
        assertNode(node, 3, undefined, undefined);

        node = tree.getRoot().left.left.right;
        assertNode(node, undefined, undefined, undefined);

        node = tree.getRoot().left.right;
        assertNode(node, 9, 8, 10);

        node = node.left;
        assertNode(node, 8, undefined, undefined);

        node = tree.getRoot().left.right.right;
        assertNode(node, 10, undefined, undefined);

        node = tree.getRoot().right;
        assertNode(node, 15, 13, 20);

        node = node.left;
        assertNode(node, 13, 12, 14);

        node = node.left;
        assertNode(node, 12, undefined, undefined);

        node = tree.getRoot().right.left.right;
        assertNode(node, 14, undefined, undefined);

        node = tree.getRoot().right.right;
        assertNode(node, 20, 18, 25);

        node = node.left;
        assertNode(node, 18, undefined, undefined);

        node = tree.getRoot().right.right.right;
        assertNode(node, 25, undefined, undefined);
    });

    it('in-order transverse', () => {
        arrResult = [];
        tree.inOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
    });

    it('pre-order transverse', () => {
        arrResult = [];
        tree.preOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
    });

    it('post-order transverse', () => {
        arrResult = [];
        tree.postOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
    });

    it('max and min', () => {
        expect(tree.max()).to.equal(25);
        expect(tree.min()).to.equal(3);
        expect(tree.search(1)).to.equal(false);
        expect(tree.search(8)).to.equal(true);
    });

    it('remove 8', () => {
        arrResult = [];

        tree.remove(8);
        tree.inOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
    });

    it('remove 9', () => {
        arrResult = [];

        tree.remove(9);
        tree.inOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([3, 5, 7, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
    });

    it('remove 15', () => {
        arrResult = [];

        tree.remove(15);
        tree.inOrderTraverse(printNode);

        expect(arrResult).to.deep.equal([3, 5, 7, 10, 11, 12, 13, 14, 18, 20, 25]);
    });

    it('raw data structure', () => {
        expect(tree.getRoot().key).to.equal(11);
    });
});
