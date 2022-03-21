function Bucket(arr) {
    let bucket = Array(10)
                    .fill(0)
                    .map(e => e = []),
        length = arr.length

    for(let i = 0; i < length; i++) {
        bucket[Math.floor(arr[i] / 10)].push(arr[i])
    }

    bucket = bucket
                .map(e => Bubble(e))
                .flat();

    let index = length - 1;
    while(index >= 0) {
        arr[index] = bucket[index]
        index--;
    }
}

function Bubble(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }

        if(!swapped) {
            break;
        }
    }
    return arr
}


let arr = Array(20)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 100))
console.log(arr);
Bucket(arr)
console.log(arr);


