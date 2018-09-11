let assert = require('assert');

let linkedList = require('./01-LinkedList2.js');
let doubleLinkedList = require('./03-DoublyLinkedList2.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
/* describe('02-UsingLinkedLists', function () {

    let list = new linkedList();

    // And then we describe our testcases.
    it('list.append(15)', function (done) {
        list.append(15);

        assert.equal(list.toString(), 15);
        assert.equal(list.indexOf(15), 0);

        // Invoke done when the test is complete.
        done();
    });

    it('list.append(10)', function (done) {
        list.append(10);

        assert.equal(list.toString(), "15, 10");
        assert.equal(list.indexOf(10), 1);

        // Invoke done when the test is complete.
        done();
    });

    it('list.append(13)', function (done) {
        list.append(13);

        assert.equal(list.toString(), "15, 10, 13");
        assert.equal(list.indexOf(13), 2);
        assert.equal(list.indexOf(10), 1);

        // Invoke done when the test is complete.
        done();
    });

    it(`list.append(11);
        list.append(12);
        list.removeAt(1);
        list.removeAt(3);`, function (done) {
            list.append(11);
            list.append(12);

            assert.equal(list.toString(), "15, 10, 13, 11, 12");

            list.removeAt(1);

            assert.equal(list.toString(), "15, 13, 11, 12");

            list.removeAt(3);

            assert.equal(list.toString(), "15, 13, 11");

            // Invoke done when the test is complete.
            done();
        });

    it(`list.append(14);
        list.insert(0,16);
        list.insert(1,17);`, function (done) {
            list.append(14);

            assert.equal(list.toString(), "15, 13, 11, 14");

            list.insert(0, 16);

            assert.equal(list.toString(), "16, 15, 13, 11, 14");

            list.insert(1, 17);

            assert.equal(list.toString(), "16, 17, 15, 13, 11, 14");

            // Invoke done when the test is complete.
            done();
        });

    it(`list.insert(list.size(),18);
        list.remove(16);
        list.remove(11);
        list.remove(18);`, function (done) {
            list.insert(list.size(), 18);

            assert.equal(list.toString(), "16, 17, 15, 13, 11, 14, 18");

            list.remove(16);

            assert.equal(list.toString(), "17, 15, 13, 11, 14, 18");

            list.remove(11);

            assert.equal(list.toString(), "17, 15, 13, 14, 18");

            list.remove(18);

            assert.equal(list.toString(), "17, 15, 13, 14");

            // Invoke done when the test is complete.
            done();
        });
}); */

describe('04-UsingDoublyLinkedLists', function () {

    let list = new doubleLinkedList();

    // And then we describe our testcases.
    it(`list.append(15);
        list.print();
        list.printInverse();`, function (done) {
            list.append(15);

            assert.equal(list.print(), '15');
            assert.equal(list.printInverse(), '15');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.append(16);
        list.print();
        list.printInverse();`, function (done) {
            list.append(16);

            assert.equal(list.print(), '15, 16');
            assert.equal(list.printInverse(), '16, 15');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.append(17);
        list.print();
        list.printInverse();`, function (done) {
            list.append(17);

            assert.equal(list.print(), '15, 16, 17');
            assert.equal(list.printInverse(), '17, 16, 15');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.insert(0, 13);
        list.print();
        list.printInverse();`, function (done) {
            list.insert(0, 13);

            assert.equal(list.print(), '13, 15, 16, 17');
            assert.equal(list.printInverse(), '17, 16, 15, 13');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.insert(4, 18);
        list.print();
        list.printInverse();`, function (done) {
            list.insert(4, 18);

            assert.equal(list.print(), '13, 15, 16, 17, 18');
            assert.equal(list.printInverse(), '18, 17, 16, 15, 13');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.insert(1, 14);
        list.print();
        list.printInverse();`, function (done) {
            list.insert(1, 14);

            assert.equal(list.print(), '13, 14, 15, 16, 17, 18');
            assert.equal(list.printInverse(), '18, 17, 16, 15, 14, 13');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.removeAt(0);
        list.print();
        list.printInverse();`, function (done) {
            list.removeAt(0);

            assert.equal(list.print(), '14, 15, 16, 17, 18');
            assert.equal(list.printInverse(), '18, 17, 16, 15, 14');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.removeAt(list.size() - 1);
        list.print();
        list.printInverse();`, function (done) {
            list.removeAt(list.size() - 1);

            assert.equal(list.print(), '14, 15, 16, 17');
            assert.equal(list.printInverse(), '17, 16, 15, 14');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.removeAt(1);
        list.print();
        list.printInverse();`, function (done) {
            list.removeAt(1);

            assert.equal(list.print(), '14, 16, 17');
            assert.equal(list.printInverse(), '17, 16, 14');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.remove(16);
        list.print();
        list.printInverse();`, function (done) {
            list.remove(16);

            assert.equal(list.print(), '14, 17');
            assert.equal(list.printInverse(), '17, 14');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.remove(14);
        list.print();
        list.printInverse();`, function (done) {
            list.remove(14);

            assert.equal(list.print(), '17');
            assert.equal(list.printInverse(), '17');

            // Invoke done when the test is complete.
            done();
        });

    it(`list.remove(17);
        list.print();
        list.printInverse();`, function (done) {
            list.remove(17);

            assert.equal(list.print(), '');
            assert.equal(list.printInverse(), '');

            // Invoke done when the test is complete.
            done();
        });
});