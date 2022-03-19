function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    pop(){
        if(this.size <= 0) return undefined;
        
        let popedNode = this.tail;

        if(this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.size--;

        return popedNode;
    }

    unshift(value){
        let node = new Node(value);

        if(!this.size) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
        return node;
    }

    shift() {
        if(this.size <= 0) return undefined;
        let shiftedNode = this.head;

        if(this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.size--;
        return shiftedNode;
    }

    get(index) {

        if(index < 0 || index > this.size - 1) return null;

        let currentNode, counter;
        if(index <= this.size/2) {
            counter = 0;
            currentNode = this.head;
            while(counter != index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            counter = this.size - 1;
            currentNode = this.tail;
            while(counter != index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }

    set(index, value) {
        let node = this.get(index);
        if(!node) return false;
        
        node.value = value;
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.size) return null;
        if(index == 0) return this.unshift(value);
        if(index == this.size) return this.push(value);
        
        let prev = null;
        let addedNode = new Node(value);
        let gotNode = this.get(index);        
        
        prev = gotNode.prev;
        prev.next = addedNode;
        addedNode.prev = prev;
        addedNode.next = gotNode;
        gotNode.prev = addedNode;
        
        this.size++;
        return addedNode;
    }

    remove(index) {
        if(index < 0 || index > this.size - 1) return null;
        if(index == 0) return this.shift();
        if(index == this.size - 1) return this.pop();

        let removedNode = this.get(index);

        let prevRemovedNode = removedNode.prev;
        let nextRemovedNode = removedNode.next;
        prevRemovedNode.next = nextRemovedNode;
        nextRemovedNode.prev = prevRemovedNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.size--;
        return removedNode;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next, prev;
        for(let i = 0; i < this.size; i++) {
            next = temp.next;
            prev = temp.prev;
            temp.prev = temp.next;
            temp.next = prev;
            temp = next;
        }
        return this;
    }

    deleteDuplicate() {
        let currentHead = this.head,
            prev = null,
            next = null,
            track = {};

        for(let i = 0; i < this.size; i++) {
            if(!track[currentHead.value]) {
                track[currentHead.value] = true;
                currentHead = currentHead.next;
            } else {
                prev = currentHead.prev;
                if(currentHead == this.tail) {
                    prev.next = null;
                    currentHead.prev = null;
                    this.tail = prev;
                } else {
                    next = currentHead.next;
                    prev.next = currentHead.next;
                    next.prev = prev;
                }
                this.size--;
            }
        }

        return this;
    }


}

function swapNode(node) {
    let prev = node.prev;
    node.prev = node.next;
    node.next = prev;
}

let dbLL = new DoublyLinkedList();

dbLL.push(10);
dbLL.push(20);
dbLL.push(30);
dbLL.insert(1, 15);
dbLL.push(10);

console.log(dbLL)
console.log(dbLL.deleteDuplicate());