/**
 * Queue
 * constructor(array)
 * enqueue
 * dequeue
 * isEmpty
 * getBuffer
 * peek()
 * queueAccessNthTopNode(queue, n)
 * search(queue, element)
 */

function Queue(array) {
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.enqueue = function(element) {
    this.array.push(element);
}

Queue.prototype.dequeue = function(element) {
    return this.array.shift();
}

Queue.prototype.isEmpty = function() {
    return this.array.length == 0;
}

Queue.prototype.peek = function() {
    if(this.isEmpty()) throw 'queue is empty.'

    return this.array[0];
}

Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

function queueAccessNthTopNode(queue, n) {
    if(n < 0) throw new Error('error');

    let bufferArr = queue.getBuffer();
    let bufferQueue = new Queue(bufferArr.reverse());

    while(--n != 0) {
        bufferQueue.dequeue();
    }

    return bufferQueue.dequeue();
}

function search(queue, element) {
    let bufferArr = queue.getBuffer();
    let bufferQueue = new Queue(bufferArr);

    while(!bufferQueue.isEmpty()) {
        if(bufferQueue.dequeue() == element) {
            return true;
        };
    }
    return false;
}








