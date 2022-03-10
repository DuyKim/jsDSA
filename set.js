/**
 * Data structure: Set()
 * .add()
 * .has()
 * .delete()
 * .clear()
 * .entries()                   <--> returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.
 * .forEach()
 * .values()                    <-->   The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.
 * 
 * .union(setA, setB)           <-->  returns a new set with both elements without duplicates.
 * .intersectSets(setA, setB)   <-->  return a new set with common elements between two sets.
 * .isSuperSet(Set, subSet)     <-->   checks whether the other set contains all the elements of the reference set.
 * .differentSet(setA, setB)    <-->   returns a new set with all of the elements in setA that are not in setB.


let set = new Set();
set.add(1);
set.has(1);
set.delete(1);

set.add([1]);
set.add(1);
set.add("string");
// Set([1], 1, 'string')

console.log('prints values of the set object by making for loop that uses values() function.');
for(let value of set.values()) {
    console.log(value);
}

console.log('prints values of the set object by making for loop that use entries() function');
for(let entry of set.entries()) {
    console.log(entry[0]);
}

console.log('uses forEach() function to print values of the Set object');
set.forEach(element => console.log(element))

set.clear();
console.log(set.size);
 */
Set.prototype.union = function(setB) {
    let set = [...setB];

    this.forEach(element => {
        if(!setB.has(element)) set.push(element);
    })

    return set;
}

Set.prototype.intersectSets = function(setB) {
    let set = new Set();
    this.forEach(element => {
        if(setB.has(element))
            set.add(element)
    })

    return set;
}

Set.prototype.isSuperSet = function(sourceSet) {
    for(let element of sourceSet.values()) {
        if(!this.has(element)) return false;
    }
    return true;
}

Set.prototype.differenceSet = function(orignSet) {
    let set = new Set();
    this.forEach(element => {
        if(!orignSet.has(element)) {
            set.add(element)
        }
    })

    return set;
}

let setA = new Set([1,2, 3, 4, 5]);
let setB = new Set([1, 2, 3]);
let setC = new Set([1, 4, 6, 9, 10, 2, 3]);
console.log('setB is a superset of setA: ' + setB.isSuperSet(setA));
console.log('all elements of setA and setB is : ' + setA.union(setB));
console.log(setA.intersectSets(setB));
console.log(setA.differenceSet(setB));