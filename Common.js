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
    }
}

module.exports = {
    ValuePair: ValuePair,
    MyObj: MyObj,
    Utils: Utils
};