function LinkedList() {

    var Node = function (element) {

        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element);
        var current;

        if (!head) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    };

    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            var node = new Node(element);
            var index = 0;
            var current = head;
            var preNode;

            if (position == 0) {
                node.next = head;
                head = node;
            } else {
                while (index++ < position) {
                    preNode = current;
                    current = current.next;
                }
    
                preNode.next = node;
                node.next = current;
            }

            ++length;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var preNode;
            var index = 0;

            if (position == 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    preNode = current;
                    current = current.next;
                }

                preNode.next = current.next;
            }

            --length;

            return current.element;
        }

        return null;
    };

    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        var current = head;
        var index = 0;

        while (current) {
            if (current.element == element) {
                return index;
            } else {
                ++index;
                current = current.next;
            }
        }

        return -1;
    };

    this.isEmpty = function () {
        return length == 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.toString = function () {
        var string = '';

        var current = head;
        while (current) {
            string += current.element + (current.next ? ',' : '');
            current = current.next;
        }

        return string;
    };

    this.print = function () {
        console.log(this.toString());
    };
}

module.exports = LinkedList;