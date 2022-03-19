/**
 * A linked list is a data structure in which each node points to another node.
 * 
 * SingleLinkedListNode():
 *  .push(val)
 *  .unshift(val) 
 *  .pop()
 *  .shift()
 *  .get(index)
 *  .set(index, val)
 *  
 *  .insert(index, val)
 *  .remove(index, val)
 *  .reverse()
 *  .deleteDuplicate()
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

class SinglyLinkedListNode {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.size) {
            this.head = node;
            this.tail = this.head;
        } else if (this.size > 0) {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.size > 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        let prev = null;
        
        if(this.size == 1) {
            this.head = null;
            this.tail = null;
        }
        
        while (currentHead.next) {
            prev = currentHead;
            currentHead = currentHead.next;
        }

        prev.next = null;
        this.tail = prev;
        this.size--;


        return currentHead;
    }

    shift() {
        if (!this.head) return undefined;
        let next = this.head.next;
        let currentHead = this.head;
        currentHead.next = null;

        this.head = next;
        this.size--;
        return currentHead;

    }

    get(index) {
        if (index < 0 || index > this.size - 1) return null;
        if(index == 0) return this.head;
        if(index == this.size - 1) return this.tail;
        let currentHead = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentHead = currentHead.next;
            currentIndex++;
        }

        return currentHead;
    }

    set(index, value) {
        let currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return undefined;
        if (index == this.size) return this.push(value);
        if (index == 0) return this.unshift(value);

        let newNode = new Node(value);
        let prevNewNode = this.get(index - 1);
        let nextNewNode = prevNewNode.next;

        prevNewNode.next = newNode;
        newNode.next = nextNewNode;
        
        this.size++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.size - 1) return null;
        if(index == 0) return this.shift();
        if(index == this.size - 1) return this.pop();

        let prevRemovedNode = this.get(index - 1);
        let remvoedNode = prevRemovedNode.next;
        let nextRemovedNode = remvoedNode.next;

        prevRemovedNode.next = nextRemovedNode;

        this.size--;
        return remvoedNode;

    }

    reverse() {
        if(this.size <= 1) return this;

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = null;
        
        for(let i = 0; i < this.size; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

    deleteDuplicate() {
        let track = {},
            prev = null,
            len = this.size,
            currentHead = this.head,
            counter = 0;
        
        while(currentHead) {
            counter++;
            if(!track[currentHead.value]) {
                track[currentHead.value] = true;
                prev = currentHead;
            } else {
                prev.next = currentHead.next;
                if(currentHead == this.tail) {
                    this.tail = prev;
                }   
                this.size--;
            }
            currentHead = currentHead.next;
        }


        return this;
    }

    removedCycle() {
        let counter = 0,
            currentHead = this.head;

        while(currentHead) {
            counter++;
            currentHead = currentHead.next;
            if(counter > this.size) break;
        }
        if(counter == this.size) return this;


        // let mapLinkedList = new Map(),
        //     prev = null,
        //     current = this.head;
        // for(let i = 0; i < this.size + 1; i++) {
        //     if(!mapLinkedList.has(current)) {
        //         mapLinkedList.set(current, current.value);
        //         prev = current;
        //         current = current.next;
        //     } else {
        //         prev.next = null;
        //     }
        // }
        this.tail.next = null;
    }
}

let singly = new SinglyLinkedListNode();

function testPush(singly) {
    for (let i = 0; i < 5; i++) {
        singly.push(i);
    }
}

testPush(singly);
singly.push(2);
singly.insert(1, 8)
singly.tail.next = singly.head.next;
console.log(singly);
singly.removedCycle();
console.log(singly)