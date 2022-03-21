function Quick(arr, left, right) {
    if (left < right) {
        let pi = Partition(arr, left, right)

        Quick(arr, left, pi - 1)
        Quick(arr, pi + 1, right)
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

let arr = Array(30)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 100))

console.log(arr)
Quick(arr, 0, arr.length - 1)
console.log(arr)            