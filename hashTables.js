function HashTable(size) {
    this.size = size;
    this.keys = new Array(size).fill(null);
    this.values = new Array(size).fill(null);
    this.limit = 0;
}


// linear probing
HashTable.prototype.put = function(key, value) {
    if(this.limit >= this.size) throw 'hash table is full size.'
    let handleIndex = this.hash(key);

    while(this.keys(handleIndex) != null) {
        handleIndex++;
        handleIndex = handleIndex % this.size;
    }

    this.keys[handleIndex] = key;
    this.values[handleIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    let handleIndex = this.hash(key);
    while(this.keys[handleIndex] != key) {
        handleIndex++;
        handleIndex = handleIndex % this.size;
    }

    return this.values[handleIndex];
}

HashTable.prototype.hash = function(key) {
    if(!Number.isInteger(key)) throw "key must be an integer."

    let handleIndex = key % this.size;
    return handleIndex;
}

// quadratic probing

HashTable.prototype.putQuadratic = function(key, value) {
    if(this.limit >= this.size) {
        throw 'hash table are full size.'
    }
    let handleIndex = this.hash(key);
    let squareIndex = 1;

    while(this.keys[handleIndex] != null) {
        handleIndex = handleIndex + Math.pow(squareIndex, 2);
        handleIndex = handleIndex % this.size;
        squareIndex++;
    }

    this.keys[handleIndex] = key;
    this.values[handleIndex] = value;
    this.limit++;

}

HashTable.prototype.getQuadratic = function(key) {
    let handleIndex = this.hash(key);
    let squareIndex = 1;

    while(this.keys[handleIndex] != key) {
        handleIndex = handleIndex + Math.pow(squareIndex, 2);
        handleIndex %= this.size;
        squareIndex++;
    }

    return this.values[handleIndex];
}

HashTable.prototype.hashQuadratic = function(key) {
    if(!Number.isInteger(key)) throw "key must be a integer."

    return key % this.size;
}

// double hashing with linear probing

HashTable.prototype.putDb = function(key, value) {
    if(this.limit >= this.size) throw 'hash table is full size.'

    let handleIndex = this.hashDb(key);
    while(this.keys[handleIndex] != null) {
        handleIndex++;
        handleIndex %= this.size;
    }

    this.keys[handleIndex] = key;
    this.values[handleIndex] = value;
    this.limit++;
}

HashTable.prototype.getDb = function(key) {
    let handleIndex = this.hashDb(key);
    while(this.keys[handleIndex] != key) {
        handleIndex++;
        handleIndex %= this.size;
    }

    return this.values[handleIndex];
}

HashTable.prototype.hashDb = function(key) {
    // x = key % this.size
    // R = this.size - 2;
    //handleIndex = R - x % R;
    if(!Number.isInteger(key)) throw 'key must be an integer.'
    let firstHandle = key % this.size;
    let R = this.size - 2;
    let secondHandle = R - firstHandle % R;
    return secondHandle;
}