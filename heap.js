class BinaryHeap {
    #items;
    constructor(array) {
        if (array) this.#items = array
        else this.#items = [];
    }

    swap(index1, index2) {
        [this.#items[index1], this.#items[index2]] = [this.#items[index2], this.#items[index1]]
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChildIndex(index) {
        return 2 * index + 1
    }

    rightChildIndex(index) {
        return 2 * index + 2
    }

    parentNode(index) {
        return this.#items[this.parentIndex(index)]
    }

    leftChildNode(index) {
        return this.#items[this.leftChildIndex(index)]
    }

    rightChildNode(index) {
        return this.#items[this.rightChildIndex(index)]
    }

    peek() {
        return this.#items[0]
    }

    size() {
        return this.#items.length
    }

    add(item) {
        this.#items.push(item)
    }

    getItem(index) {
        return this.#items[index];
    }

    set(index, value) {
        this.#items[index] = value;
    }

    get heap() {
        return this.#items;
    }

    pop() {
        return this.#items.pop();
    }
    shift() {
        return this.#items.shift();
    }
}

class MaxHeap extends BinaryHeap {
    constructor(array) {
        super(array);

    }
    bubbleDown(maxIndex = this.size() - 1, index = 0) {
        while (true) {
            let largestIndex = index;

            if (this.leftChildNode(index) > this.getItem(index) &&
                this.leftChildIndex(index) < maxIndex) {
                largestIndex = this.leftChildIndex(index);
            }

            if (this.rightChildNode(index) > this.getItem(largestIndex) &&
                this.rightChildIndex(index) < maxIndex) {
                largestIndex = this.rightChildIndex(index)
            }

            if(largestIndex != index) {
                this.swap(largestIndex, index);
                index = largestIndex;
            } else break;
        }
    }

    bubbleUp() {
        let index = this.size() - 1;

        while (this.parentNode(index) < this.getItem(index)) {
            this.swap(index, this.parentIndex(index))
            index = this.parentIndex(index);
        }
    }

    poll() {
        if (!this.size) return undefined;
        this.swap(this.size() - 1, 0);
        let item = this.pop()
        this.bubbleDown();

        return item;
    }

    add(item) {
        super.add(item);
        this.bubbleUp();
    }

    sort() {
        let size = this.size();
        for (let i = 0; i < size; i++) {
            if (i == size - 1) return this.heap;
            this.swap(0, size - 1 - i)
            this.bubbleDown(size - 1 - i);
        }

    }

}

class MinHeap extends BinaryHeap {
    constructor(array) {
        super(array);
    }

    sort() {

    }

    add(item) {
        super.add(item);
        this.bubbleUp();
    }

    poll() {
        if (!this.size()) return undefined;
        let item = this.items[0]
        this.items[0] = this.items.pop();
        this.bubbleDown();

        return item;
    }

    bubbleDown() {
        let index = 0;


        while (this.leftChildNode(index) &&
            (this.leftChildNode(index) < this.getItem(index)
                || this.rightChildNode(index) < this.getItem(index))) {
            let smallerIndex = this.leftChildIndex(index);

            if (this.rightChildNode(index) &&
                this.rightChildNode(index) < this.items[smallerIndex]) {
                smallerIndex = this.rightChildIndex(index)
            }

            this.swap(smallerIndex, index)
            index = smallerIndex;
        }
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (this.parentNode(index) && this.parentNode(index) > this.getItem(index)) {
            this.swap(this.parentNode(index), this.getItem(index))
            index = this.parentIndex(index);
        }
    }
}

let maxH = new MaxHeap();
maxH.add(1);
maxH.add(15);
maxH.add(3);
maxH.add(11);
maxH.add(12);
maxH.add(6)
maxH.add(9);
maxH.add(60)

console.log(maxH.heap);
maxH.poll();
console.log(maxH.heap);
maxH.sort();
console.log(maxH.heap)


