class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

function Dictionary() {

    var items = {};

    this.set = function (key, value) {
        if (key != undefined && value != undefined) {
            items[key] = new ValuePair(key, value);

            return true;
        }

        return false;
    };

    this.delete = function (key) {

    };

    this.hasKey = function (key) {
        return Object.prototype.hasOwnProperty.call(items, key);
    };

    this.get = function (key) {
        if (items[key])
            return items[key].value;

        return undefined;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.keys = function () {
        return Object.keys(items).map(element => items[element].key);
    };

    this.values = function () {
        return Object.keys(items).map(element => items[element].value);
    };

    this.keyValues = function () {
        return Object.keys(items).map(element => items[element]);
    };

    this.forEach = function (fn) {
        // Object.keys(items).every(element => fn(items[element].key, items[element].value));

        let valuePairs = this.keyValues();
        let result;
        for (let pos in valuePairs) {
            result = fn(valuePairs[pos].key, valuePairs[pos].value);
            if (result == false)
                break;
        }
    };

    this.getItems = function () {

    };

    this.isEmpty = function () {
        return this.size() == 0;
    };

    this.remove = function (key) {
        if (items[key]) {
            delete items[key];
            return true;
        }

        return false;
    };

    this.toString = function () {
        let keyValues = Object.keys(items).map(element => items[element].toString());

        return keyValues.toString();
    };
}

module.exports = Dictionary;