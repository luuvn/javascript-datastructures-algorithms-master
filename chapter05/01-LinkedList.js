function LinkedList() {

    let Node = function (element) {

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

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

    };

    this.removeAt = function (position) {
        if (!head)
            return

        if (position == 0) {
            head = head.next;
            --length;
            return;
        }

        var flagNode = head.next;
        var preNode = head;
        var index = 0;
        while (flagNode) {
            if (index == length) {
                flagNode.next = null;
            } else if (index == position) {
                preNode.next = flagNode.next;
                --length;
                return
            }
            ++index;
            preNode = preNode.next;
            flagNode = flagNode.next;
        }
    };

    this.remove = function (element) {

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
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }

        return string;
    };

    this.print = function () {
        console.log(this.toString());
    };
}

module.exports = LinkedList;