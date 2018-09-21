let ValuePair = require('./Common.js').ValuePair;
let Utils = require('./Common.js').Utils;

function HashTable() {

    var table = [];

    var loseloseHashCode = function (key) {
        if (typeof key === "number") {
            return key;
        }
        let convertStr = Utils.toStringFn(key);
        let hash = 0;
        for (let i = 0; i < convertStr.length; i++) {
            hash += convertStr.charCodeAt(i);
        }
        return hash % 37;
    };

    // var djb2HashCode = function (key) {
    //     var hash = 5381;
    //     for (var i = 0; i < key.length; i++) {
    //         hash = hash * 33 + key.charCodeAt(i);
    //     }
    //     return hash % 1013;
    // };

    this.hashCode = function (key) {
        return loseloseHashCode(key);
    };

    this.put = function (key, value) {
        if (key === undefined || key === null) {
            return false;
        }

        if (value === undefined || value === null) {
            return false;
        }

        var position = this.hashCode(key);
        console.log(position + ' - ' + key);
        table[position] = new ValuePair(key, value);

        return true;
    };

    this.get = function (key) {
        if (table[this.hashCode(key)])
            return table[this.hashCode(key)].value;

        return undefined;
    };

    this.getTable = function () {
        return table;
    };

    this.remove = function (key) {
        if (table[this.hashCode(key)] !== undefined) {
            delete table[this.hashCode(key)];
            return true;
        }

        return false;
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };

    this.size = function () {
        return Object.keys(table).length;
    };

    this.isEmpty = function () {
        return this.size() == 0;
    };

    this.clear = function () {
        table = [];
    };

    this.toString = function () {
        if (this.isEmpty())
            return '';

        let arrReuslt = Object.keys(table).map(key => `{${key} => ${table[key].toString()}}`);

        return arrReuslt.toString();
    };
}

module.exports = HashTable;