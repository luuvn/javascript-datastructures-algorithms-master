let LinkedList2 = (function () {

    class Node {
        constructor(element){
            this.element = element;
            this.next = null;
        }
    }

    const length = new WeakMap();
    const head = new WeakMap();

    class LinkedList2 {

        constructor () {
            length.set(this, 0);
            head.set(this, null);
        }

        append(element) {
            
        }

        insert(position, element) {

        }

        removeAt(position) {

        }

        remove(element) {

        }

        indexOf(element) {

        }

        isEmpty() {
            
        }

        size() {
            
        }

        getHead() {
            
        }

        toString() {

        }

        print() {
            
        }
    }

    return LinkedList2;
})();

module.exports = LinkedList2;
