function Quick(arr, left, right) {
    if (left < right) {
        let pivotIndex = Partition(arr, left, right)

        Quick(arr, left, pivotIndex - 1)
        Quick(arr, pivotIndex + 1, right)
    }
}

function Partition(array, left, right) {
    let pivot = array[right];

    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i = i + 1;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    i = i + 1;
    [array[right], array[i]] = [array[i], array[right]]

    return i;
}

function QuickIterative(arr, left, right) {
    let stack = [],
        poppedArr = null;

    stack.push([arr, left, right])
    
    do {
        poppedArr = stack.pop();
        [_, left, right] = poppedArr;
        
        if(left < right) {
            let pivotIndex = Partition(arr, left, right);
            stack.push([arr, left, pivotIndex - 1])
            stack.push([arr, pivotIndex + 1, right])
        }
    } while (stack.length);
}

let arr = Array(30)
    .fill(0)
    .map(e => e = Math.floor(Math.random() * 100))

console.log(arr)
QuickIterative(arr, 0, arr.length - 1)
console.log(arr)            