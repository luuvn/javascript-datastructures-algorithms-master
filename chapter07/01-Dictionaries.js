function Dictionary() {

    var items = {};

    this.set = function (key, value) {
        if (key != undefined && value != undefined) {
            items[key] = value;

            return true;
        }

        return false;
    };

    this.delete = function (key) {

    };

    this.has = function (key) {
        return Object.prototype.hasOwnProperty.call(items, key);
    };

    this.get = function (key) {
        return items[key];
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.keys = function () {
        return Object.keys(items);
    };

    this.values = function () {

    };

    this.each = function (fn) {

    };

    this.getItems = function () {

    }

    this.isEmpty = function () {
        return this.size() == 0;
    }
}

module.exports = Dictionary;