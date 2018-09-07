var assert = require('assert');

var linkedList2 = require('./01-LinkedList.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('02-UsingLinkedLists', function () {

    let list = new linkedList2();

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
});