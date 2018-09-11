let LinkedList2 = (function () {

    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
        }
    }

    const length = new WeakMap();
    const head = new WeakMap();

    class LinkedList2 {

        constructor() {
            length.set(this, 0);
            head.set(this, null);
        }

        append(element) {
            let node = new Node(element);
            let current = this.getHead();

            if (!current) {
                head.set(this, node);
            } else {
                while (current.next) {
                    current = current.next;
                }

                current.next = node;
            }

            length.set(this, this.size() + 1);
        }

        insert(position, element) {
            if (position > -1 && position <= this.size()) {
                let node = new Node(element);
                let current = this.getHead();
                let preNode;
                let index = 0;

                if (position == 0) {
                    head.set(this, node);
                    node.next = current;
                } else {
                    while (index++ < position) {
                        preNode = current;
                        current = current.next;
                    }

                    preNode.next = node;
                    node.next = current;
                }

                length.set(this, this.size() + 1);

                return true;
            } else {
                return false;
            }
        }

        removeAt(position) {
            if (position > -1 && position < this.size()) {
                let current = this.getHead();
                let preNode;
                let index = 0;

                if (position == 0) {
                    head.set(this, current.next);
                } else {
                    while (index++ < position) {
                        preNode = current;
                        current = current.next;
                    }

                    preNode.next = current.next;
                }

                length.set(this, this.size() - 1);

                return true;
            } else {
                return null;
            }
        }

        remove(element) {
            let index = this.indexOf(element);
            return this.removeAt(index);
        }

        indexOf(element) {
            let current = this.getHead();
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
        }

        isEmpty() {
            return length.get(this) == 0;
        }

        size() {
            return length.get(this);
        }

        getHead() {
            return head.get(this);
        }

        toString() {
            let str = '';
            let current = this.getHead();

            while (current) {
                str += current.element + (current.next ? ', ' : '');
                current = current.next;
            }

            return str;
        }

        print() {

        }
    }

    return LinkedList2;
})();

module.exports = LinkedList2;
