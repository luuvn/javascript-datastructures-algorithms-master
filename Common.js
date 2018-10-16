class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

class MyObj {
    constructor(el1, el2) {
        this.el1 = el1;
        this.el2 = el2;
    }
    toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }
    toString() {
        return `${this.key}`;
    }
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

const Utils = {
    toStringFn: function (value) {
        if (value === null) {
            return 'NULL';
        } else if (value === undefined) {
            return 'UNDEFINDED';
        } else if (typeof value === 'string' || value instanceof String) {
            return `${value}`;
        }

        return value.toString();
    },
    defaultCompare: function (a, b) {
        if (a === b) {
            return Compare.EQUALS;
        }
        return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
    },
    swap: function (array, a, b) {
        /* const temp = array[a];
        array[a] = array[b];
        array[b] = temp; */
        [array[a], array[b]] = [array[b], array[a]];
    }
}

module.exports = {
    Node: Node,
    ValuePair: ValuePair,
    MyObj: MyObj,
    Utils: Utils
};