function MergeSort(arr, l, r) { 
    if(l < r) {
        let q = Math.floor((l + r) / 2);

        MergeSort(arr, l, q);
        MergeSort(arr, q + 1, r)
        Merge(arr, l, q, r)
    } 
}

function Merge(arr, l, q, r) {
    let lLeftArr = q - l + 1,
        lRightArr = r - q,
        leftArr = Array(lLeftArr).fill(0),
        rightArr = Array(lRightArr).fill(0);

    for(let i = 0; i < lLeftArr; i++) {
        leftArr[i] = arr[l + i]
    }

    for(let j = 0; j < lRightArr; j++) {
       rightArr[j] = arr[q + 1 + j]; 
    }

    let i =0,
        j = 0,
        k = l;

    while(i < lLeftArr && j < lRightArr) {
        if(leftArr[i] < rightArr[j]) {
           arr[k] = leftArr[i];
           i++; 
        } else {
           arr[k] = rightArr[j];
           j++; 
        }
        k++;
    }
   
    while(i < lLeftArr) {
        arr[k] = leftArr[i];
        k++;
        i++;
    }

    while(j < lRightArr) {
        arr[k] = rightArr[j];
        k++;
        j++;
    }
}

function MergeIterative(arr, l, r) {
    let stack = [],
        data = [];
    
    stack.push([arr, l, r])

    do {
        let poppedPartArray = stack.pop();
        let [_, left, right] = poppedPartArray;

        if(left < right) {
            let middle = Math.floor((right + left) / 2);
            stack.push([arr, middle + 1, right])
            stack.push([arr, left, middle])
            data.push([arr, left, middle, right])
        } 

    } while (stack.length);
    
    let index = data.length - 1; 
    while(index >= 0) {
        let [arr, left, middle, right] = data[index];
        Merge(arr, left, middle, right);
        index --;
    }
}

let arr = Array(20)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 100))

console.log(arr)
MergeIterative(arr, 0, 19)
console.log(arr)


