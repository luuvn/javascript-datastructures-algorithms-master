/**
 * ECMSCRIPT 6 already have a Set class implementation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * We will try to copy  the same functionalities
 * @constructor
 */
function Set() {

    let items = {};

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;

            return true;
        }

        return false;
    };

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];

            return true;
        }

        return false;
    };

    this.has = function (value) {
        return Object.prototype.hasOwnProperty.call(items, value);
    };

    this.clear = function () {
        items = {};
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Number}
     */
    this.size = function () {
        return Object.keys(items).length;
    };

    /**
     * cross browser compatibility - legacy browsers
     * for modern browsers use size function
     * @returns {number}
     */
    this.sizeLegacy = function () {

    };

    this.isEmpty = function () {
        return this.size() == 0;
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Array}
     */
    this.values = function () {
        let arr = [];

        for (let pos in items) {
            arr.push(items[pos]);
        }

        return arr;
    };

    this.valuesLegacy = function () {

    };

    this.getItems = function () {

    };

    this.union = function (otherSet) {
        let newSet = new Set();

        this.values().forEach(element => newSet.add(element));
        otherSet.values().forEach(element => newSet.add(element));

        return newSet;
    };

    this.intersection = function (otherSet) {
        let newSet = new Set();

        this.values().forEach(element => {
            otherSet.values().forEach(oElement => {
                if (element == oElement) {
                    newSet.add(element);
                }
            })
        });

        return newSet;
    };

    this.difference = function (otherSet) {
        let newSet = new Set();

        let intersect = this.intersection(otherSet);

        this.values().forEach(element => {
            if (!intersect.has(element)) {
                newSet.add(element);
            }
        })

        return newSet;
    };

    this.isSubsetOf = function (otherSet) {
        let values = this.values();

        for (let pos in values) {
            if (!otherSet.has(values[pos])) {
                return false;
            }
        }

        return true;
    };

    this.toString = function () {
        let str = '';
        let value;

        for (let pos in items) {
            if (typeof items[pos] == 'Object') {
                value = items[pos].toString();
            } else {
                value = items[pos];
            }

            if (str != '') {
                str += ',';
            }
            str += value;
        }

        return str;
    }
}

module.exports = Set;