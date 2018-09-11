function DoublyLinkedList() {

    let Node = function (element) {

        this.element = element;
        this.next = null;
        this.prev = null; //NEW
    };

    let length = 0;
    let head = null;
    let tail = null; //NEW

    this.append = function (element) {
        let node = new Node(element);

        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }

        ++length;
    };

    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            let node = new Node(element);
            let current = head;

            if (position == 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    head = node;
                    node.next = current;
                    current.prev = node;
                }
            } else if (position == length) {
                node.prev = tail;
                tail.next = node;
                tail = node;
            } else {
                let index = 0;
                let prev;

                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }

                prev.next = node;
                current.prev = node;
                node.prev = prev;
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
            let index = 0;
            let current = head;
            let prev;

            if (position == 0) {
                head = current.next;

                if (length == 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position == (length - 1)) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }

                prev.next = current.next;
                current.next.prev = prev;
            }

            --length;

            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        let current = head;
        let index = 0;

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

    this.toString = function () {
        let current = head;
        let string = '';

        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }

        return string;
    };

    this.inverseToString = function () {
        let current = tail;
        let string = '';

        while (current) {
            string += current.element + (current.prev ? ', ' : '');
            current = current.prev;
        }

        return string;
    };

    this.print = function () {
        return this.toString();
    };

    this.printInverse = function () {
        return this.inverseToString();
    };

    this.getHead = function () {
        return head;
    };

    this.getTail = function () {
        return tail;
    }
};

module.exports = DoublyLinkedList;