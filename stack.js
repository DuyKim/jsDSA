/**
 * Stack data structure
 * constructor()
 * isEmpty()
 * push()
 * getBuffer()
 * pop()        <--> returns and removes the last element in the stack.
 * peek()       <--> Peeking at the last added element of the stack means returning the last-added element withou removing it from the data stucture. Peeking is often used to compare the last-added element to some other variable and to evaluate wether the last-added element should be removed from the data structure.
 * stackAccessNthTopNode(stack, position)     <--> let's take look at how to access an element of the stack based on order. To access the nth node from the top, you need to call pop n number of times.
 * search()
 * isFull()    
 * delete()
 */


function Stack(array) {
    this.array = [];

    if(array) this.array = array;
}

Stack.prototype.pop = function() {
    return this.array.pop();
}

Stack.prototype.isEmpty = function() {
    if(!this.array.length) return true;
    return false;
}

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}

Stack.prototype.delete = function(position) {
    return this.array.splice(position, 1);
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}


function search(stack, element) {

    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);

    while(!bufferStack.isEmpty()) {
        if(bufferStack.pop() === element) {
            return true;
        }
    }

    return false;
}

function stackAccessNthTopNode(stack, position) {
    if(position < 0) {
        throw new Error('error');
    }

    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);

    while(--position != 0) {
        bufferStack.pop();
    }

    return bufferStack.pop();
}






