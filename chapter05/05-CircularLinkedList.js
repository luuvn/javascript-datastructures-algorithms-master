function CircularLinkedList() {

    let Node = function (element) {

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element);

        if (!head) {
            head = node;
        } else {
            let current = head;

            while (current.next != head) {
                current = current.next;
            }

            current.next = node;
        }

        node.next = head;

        length++;
    };

    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            let node = new Node(element);
            let current = head;

            if (position == 0) {
                while (current.next != head) {
                    current = current.next;
                }
                current.next = node;
                node.next = head;

                if (position == 0)
                    head = node;
            } else {
                let i = 0;

                while (i++ < position - 1) {
                    current = current.next;
                }

                node.next = current.next;
                current.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;

            if (position == 0) {
                if (length == 1) {
                    head = null;
                } else {
                    while (current.next != head) {
                        current = current.next;
                    }

                    current.next = current.next.next;
                    head = current.next;
                }
            } else {
                let i = 0;

                while (i++ < position - 1) {
                    current = current.next;
                }

                current.next = current.next.next;
            }

            length--;

            return true;
        } else {
            return false;
        }
    };

    this.remove = function (element) {

    };

    this.indexOf = function (element) {
        let i = 0;
        let current = head;

        while (current.next) {
            if (current.element == element) {
                return i;
            } else {
                if (current.next == head)
                    break;

                i++;
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
        let current = head;
        let str = '';

        while (current.next) {
            str += current.element;
            current = current.next;

            if (current == head)
                break;
            else
                str += ', ';
        }

        return str;
    };

    this.print = function () {
        return this.toString();
    };
}

module.exports = CircularLinkedList;

var list = new CircularLinkedList();
list.append(15);
list.append(16);
list.insert(1, 14);