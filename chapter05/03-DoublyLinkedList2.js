let DoublyLinkedList2 = (function () {

    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
            this.prev = null; //NEW
        }
    }

    const length = new WeakMap();
    const head = new WeakMap();
    const tail = new WeakMap(); //NEW

    class DoublyLinkedList2 {

        constructor() {
            length.set(this, 0);
            head.set(this, null);
            tail.set(this, null);
        }

        append(element) {
            let node = new Node(element);

            if (!this.getHead()) {
                head.set(this, node);
                tail.set(this, node);
            } else {
                this.getTail().next = node;
                node.prev = this.getTail();
                tail.set(this, node);
            }

            length.set(this, this.size() + 1);
        }

        insert(position, element) {
            if (position > -1 && position <= this.size()) {
                let node = new Node(element);

                if (position == 0) {
                    if (!this.getHead()) {
                        head.set(this, node);
                        tail.set(this, node);
                    } else {
                        let current = this.getHead();
                        current.prev = node;
                        node.next = current;
                        head.set(this, node);
                    }
                } else if (position == this.size()) {
                    let current = this.getTail();
                    current.next = node;
                    node.prev = current;
                    tail.set(this, node);
                } else {
                    let index = 0;
                    let current = this.getHead();
                    let prev;

                    while (index++ < position) {
                        prev = current;
                        current = current.next;
                    }

                    prev.next = node;
                    node.prev = prev;

                    node.next = current;
                    current.prev = node;
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

                if (position == 0) {
                    head.set(this, current.next);

                    if (this.size() == 1) {
                        tail.set(this, null);
                    } else {
                        this.getHead().prev = null;
                    }
                } else if (position == (this.size() - 1)) {
                    current = this.getTail();
                    current.prev.next = null;
                    tail.set(this, current.prev);
                } else {
                    let index = 0;
                    let prev;

                    while (index++ < position) {
                        prev = current;
                        current = current.next;
                    }

                    prev.next = current.next;
                    current.next.prev = prev;
                }

                length.set(this, this.size() - 1);

                return current.element;
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
                }
                index++;
                current = current.next;
            }

            return -1;
        }

        isEmpty() {
            return length.get(this) == 0;
        }

        size() {
            return length.get(this);
        }

        toString() {
            let current = this.getHead();
            let string = '';

            while (current) {
                string += current.element + (current.next ? ', ' : '');
                current = current.next;
            }

            return string;
        }

        inverseToString() {
            let current = this.getTail();
            let string = '';

            while (current) {
                string += current.element + (current.prev ? ', ' : '');
                current = current.prev;
            }

            return string;
        }

        print() {
            return this.toString();
        }

        printInverse() {
            return this.inverseToString();
        }

        getHead() {
            return head.get(this);
        }

        getTail() {
            return tail.get(this);
        }
    }
    return DoublyLinkedList2;
})();

module.exports = DoublyLinkedList2;