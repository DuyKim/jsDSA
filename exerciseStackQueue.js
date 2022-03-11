/**
 * Design a stack using only queues and a queue using only stack
 * 
 * A queue using only stacks.
 *      A queue can be made with two stacks.
 *      A queue is data structure that returns the first-added element with the dequeue() method.
 *      A stack is data structure that returns the last-added element with the pop() method.
 *      In other words, a queue removes elements in the reverse direction of stack.
 * 
 *  For example: examine a stack array with [1, 2, 3, 4, 5]
 *      To reverse the order, all of the elements could be pushed onto a second stack and pop that second stack.
 *      
 * 
 */

function Stack(array) {
    this.array = [];
    if(array) this.array = array;
}

Stack.prototype.push = function(element) {
    this.array.push(element);
}

Stack.prototype.pop = function() {
    return this.array.pop();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1]
}

function Queue(array) {
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.enqueue = function(e) {
    this.array.push(e);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

Queue.prototype.isEmpty = function() {
    return this.array.length == 0;
}

function TwoStackQueue() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function(e) {
    this.inbox.push(e);
}

TwoStackQueue.prototype.dequeue = function() {

    if(this.outbox.isEmpty()) {
        while(!this.inbox.isEmpty()) {
            this.outbox.push(this.inbox.pop());
        }
    }

    return this.outbox.pop();
}

let sq = new TwoStackQueue();
sq.enqueue(1);
sq.enqueue(2);
sq.enqueue(3);

console.log(sq.dequeue());
sq.enqueue(10);
console.log(sq.dequeue());
console.log(sq.dequeue());
console.log(sq.dequeue());

function QueueStack() {
    this.inbox = new Queue();
}

QueueStack.prototype.push = function(e) {
    this.inbox.enqueue(e);
}

QueueStack.prototype.pop = function() {
    let size = this.inbox.array.length;
    let cacheQueue = new Queue();
    let counter = 0;

    while(++counter < size) {
       cacheQueue.enqueue(this.inbox.dequeue())
    }

    let poped = this.inbox.dequeue();
    this.inbox = cacheQueue;
    return poped;
}

/**
 * Design a cashier class that takes in a customer object and handes food ordering on a first-come, first-severed basis
 */

function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = new Queue();
}

Cashier.prototype.addOrder = function(customer) {
    this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = function() {
    let finishedCustomer = this.customers.dequeue();
    console.log(`${finishedCustomer.name}, your ${finishedCustomer.order} is ready.`)
}

let cashier = new Cashier();
cashier.addOrder(new Customer('Jery', 'Cream'))
cashier.addOrder(new Customer('Jim', 'Fries'))

cashier.deliverOrder();
cashier.deliverOrder();

/**
 * Design a parenthesis validation checker using a stack
 */

function isParenthesisValid(validationString) {
    let stack = new Stack();
    let charArr = validationString.split('');
    
    for(let i = 0; i < charArr.length; i++) {
        if(charArr[i] == '(') {
            stack.push(charArr[i])
        } else if(charArr[i] == ')') {
            if(stack.isEmpty()) return false;
            stack.pop();
        }
    }

    return stack.isEmpty();
}

/**
 * Design a sortable stack
 */

function SortableStack(stack) {
    this.stack = stack;
}

SortableStack.prototype.sortStackDescending = function() {
    let cachedStack = new Stack();

    while(!this.stack.isEmpty()) {
        let temp = this.stack.pop();

        while(!cachedStack.isEmpty() && cachedStack.peek() < temp) {
            this.stack.push(cachedStack.pop());
        }
        cachedStack.push(temp);
    }

    this.stack = cachedStack;
    return cachedStack.getBuffer();
}

SortableStack.prototype.sortStackIncrement = function() {
    let cachedStack = new Stack();

    while(!this.stack.isEmpty()) {
        let temp = this.stack.pop();

        while(!cachedStack.isEmpty() && cachedStack.peek() > temp) {
            this.stack.push(cachedStack.pop())
        }

        cachedStack.push(temp);
    }

    this.stack = cachedStack;
    return cachedStack.getBuffer();
}


let sortedStack = new SortableStack(new Stack([1, 10, 5, 6, 2, 8, 80, 13]))
console.log(`sort the stack in descending order: ${sortedStack.sortStackDescending()}`);
console.log(`sort the stack in incrementing order: ${sortedStack.sortStackIncrement()}`);





