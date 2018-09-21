let ValuePair = require('../Common.js').ValuePair;
let Utils = require('../Common.js').Utils;

class HashTable {
    constructor() {
        this.table = {};
    }

    loseloseHashCode(key) {
        if (typeof key === "number") {
            return key;
        }
        let convertStr = Utils.toStringFn(key);
        let hash = 0;
        for (let i = 0; i < convertStr.length; i++) {
            hash += convertStr.charCodeAt(i);
        }
        return hash % 37;
    }

    // var djb2HashCode = function (key) {
    //     var hash = 5381;
    //     for (var i = 0; i < key.length; i++) {
    //         hash = hash * 33 + key.charCodeAt(i);
    //     }
    //     return hash % 1013;
    // };

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key === undefined || key === null) {
            return false;
        }

        if (value === undefined || value === null) {
            return false;
        }

        var position = this.hashCode(key);
        console.log(position + ' - ' + key);
        this.table[position] = new ValuePair(key, value);

        return true;
    }

    get(key) {
        if (this.table[this.hashCode(key)])
            return this.table[this.hashCode(key)].value;

        return undefined;
    }

    getTable() {
        return this.table;
    }

    remove(key) {
        if (this.table[this.hashCode(key)] !== undefined) {
            delete this.table[this.hashCode(key)];
            return true;
        }

        return false;
    }

    print() {

    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty())
            return '';

        let arrReuslt = Object.keys(this.table).map(key => `{${key} => ${this.table[key].toString()}}`);

        return arrReuslt.toString();
    }
}

module.exports = HashTable;