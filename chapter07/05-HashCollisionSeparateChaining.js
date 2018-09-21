const HashTable = require('./03-HashTable.js');
const ValuePair = require('../Common.js').ValuePair;
const Utils = require('../Common.js').Utils;
const LinkedList = require('../chapter05/01-LinkedList.js');

class HashTableSeparateChaining extends HashTable {
    constructor() {
        super();
    }

    put(key, value) {
        if (key != null && value != null) {
            let position = this.hashCode(key);

            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }

            this.table[position].append(new ValuePair(key, value));

            return true;
        }

        return false;
    }

    get(key) {
        let position = this.hashCode(key);
        let linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key == key) {
                    return current.element.value;
                }

                current = current.next;
            }
        }

        return undefined;
    }

    remove(key) {
        let position = this.hashCode(key);
        let linkedList = this.table[position];

        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key == key) {
                    linkedList.remove(current.element);

                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }

                    return true;
                }
                current = current.next;
            }
        }

        return false;
    }

    size() {
        if (Object.keys(this.table).length == 0) {
            return 0;
        }

        return Object.keys(this.table)
            .map(key => this.table[key].size())
            .reduce((a, b) => a + b);
    }
}

module.exports = HashTableSeparateChaining;